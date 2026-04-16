import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CertificationService } from '../../frontoffice/services/certification.service';
import { UserService } from '../../core/services/user.service';
import { ContentService } from '../../frontoffice/services/content.service';

@Component({
  selector: 'app-certification-management',
  templateUrl: './certification-management.component.html',
  styleUrls: ['./certification-management.component.scss']
})
export class CertificationManagementComponent implements OnInit {
  activeTab: 'admin' | 'system' = 'admin';
  filteredCertifications: any[] = [];
  adminCertifications: any[] = [];
  systemCertifications: any[] = [];
  showModal = false;
  isEditMode = false;
  currentCertification: any = this.getEmpty();
  users: any[] = [];
  contents: any[] = [];

  constructor(
    private certificationService: CertificationService,
    private userService: UserService,
    private contentService: ContentService,
    private http: HttpClient
  ) {}

  ngOnInit(): void { this.loadUsers(); this.loadContents(); this.loadCertifications(); }

  loadCertifications(): void {
    this.certificationService.getAllCertifications().subscribe({
      next: (data) => {
        this.filteredCertifications = data;
        this.adminCertifications = data.filter(c => c.verifiedBy && c.verifiedBy.toLowerCase() !== 'system' && c.verifiedBy.toLowerCase() !== 'automated');
        this.systemCertifications = data.filter(c => c.verifiedBy && (c.verifiedBy.toLowerCase() === 'system' || c.verifiedBy.toLowerCase() === 'automated'));
      },
      error: (err) => console.error('Error loading certifications:', err)
    });
  }

  loadUsers(): void {
    // Call user-service directly (matchy_users DB) — public endpoint
    this.http.get<any[]>('http://localhost:8083/api/users').subscribe({
      next: (data) => {
        this.users = data.map(u => ({
          ...u,
          name: `${u.firstName || ''} ${u.lastName || ''}`.trim() || u.email
        }));
      },
      error: (err) => console.error('Error loading users:', err)
    });
  }

  loadContents(): void {
    this.contentService.getAllContents().subscribe({
      next: (data) => this.contents = data,
      error: (err) => console.error('Error loading contents:', err)
    });
  }

  getUserDisplay(cert: any): string {
    const email = cert?.user?.email ?? cert?.userEmail ?? '';
    if (email.trim()) return email.trim();
    const userId = Number(cert?.userId ?? cert?.user?.id ?? cert?.user?.userId);
    const user = this.users.find(u => Number(u?.id ?? u?.userId) === userId);
    const userEmail = user?.email?.trim();
    if (userEmail) return userEmail;
    const names = [cert?.userName, cert?.user?.name, user?.name, `${user?.firstName || ''} ${user?.lastName || ''}`.trim()];
    return names.find(n => n && n !== 'undefined undefined') || 'Unknown User';
  }

  getContentTitle(contentId: number): string {
    return this.contents.find(c => c.contentId === contentId)?.title ?? 'Unknown Content';
  }

  getScoreBadgeClass(score: number): string { return score >= 90 ? 'badge-excellent' : score >= 80 ? 'badge-good' : score >= 70 ? 'badge-average' : 'badge-poor'; }

  getUserBadges(cert: any): string[] {
    const userId = Number(cert?.userId ?? cert?.user?.id ?? cert?.user?.userId);
    return Number.isFinite(userId) ? this.certificationService.getBadgesForUser(userId) : [];
  }

  getBadgeClass(badge: string): string {
    switch (badge) { case 'Bronze Badge': return 'badge-bronze'; case 'Silver Badge': return 'badge-silver'; case 'Gold Badge': return 'badge-gold'; case 'Perfect Score Badge': return 'badge-perfect'; default: return 'badge-muted'; }
  }

  openCreateModal(): void { this.isEditMode = false; this.currentCertification = this.getEmpty(); this.showModal = true; }
  openEditModal(cert: any): void { this.isEditMode = true; this.currentCertification = { ...cert }; this.showModal = true; }
  closeModal(): void { this.showModal = false; this.currentCertification = this.getEmpty(); }

  saveCertification(): void {
    if (!this.currentCertification.issuedAt) this.currentCertification.issuedAt = new Date();
    const action = this.isEditMode
      ? this.certificationService.updateCertification(this.currentCertification)
      : this.certificationService.createCertification(this.currentCertification);
    action.subscribe({ next: () => { this.loadCertifications(); this.closeModal(); }, error: (err) => console.error('Error saving certification:', err) });
  }

  deleteCertification(cert: any): void {
    if (confirm(`Delete certification for "${this.getUserDisplay(cert)}"?`)) {
      this.certificationService.deleteCertification(cert.certificationId).subscribe({ next: () => this.loadCertifications() });
    }
  }

  viewCertification(cert: any): void {
    alert(`ID: ${cert.certificationId}\nUser: ${this.getUserDisplay(cert)}\nContent: ${this.getContentTitle(cert.contentId)}\nScore: ${cert.score}%\nValidity: ${cert.validity}\nVerified By: ${cert.verifiedBy}`);
  }

  getEmpty(): any { return { certificationId: null, userId: undefined, contentId: undefined, assessmentId: null, score: 0, issuedAt: new Date(), validity: '', verifiedBy: '' }; }
}
