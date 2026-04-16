import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../models/content.model';
import { ContentService } from '../services/content.service';
import { AuthService } from '../../core/services/auth.service';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  private static readonly INTERMEDIATE_UNLOCK_BEGINNER_CERTS = 3;
  private static readonly ADVANCED_UNLOCK_INTERMEDIATE_CERTS = 5;

  contents: Content[] = [];
  filteredContents: Content[] = [];
  selectedFilter = 'all';
  currentUserName = 'Guest';
  private currentUserId: number | null = null;
  private currentUserEmail = '';
  currentUserBadges: string[] = [];
  currentUserCertificationCount = 0;
  beginnerCertificationCount = 0;
  intermediateCertificationCount = 0;
  primaryBadge = '';
  badgeSummary = 'No badge yet';

  constructor(
    private contentService: ContentService,
    private router: Router,
    private authService: AuthService,
    private certificationService: CertificationService
  ) {}

  ngOnInit(): void {
    this.authService.checkAuth();
    const user = this.authService.currentUser;
    this.currentUserName = user?.name || `${(user as any)?.firstName || ''} ${(user as any)?.lastName || ''}`.trim() || 'Guest';
    this.currentUserEmail = user?.email || '';
    const userId = user?.id;
    this.currentUserId = userId != null ? Number(userId) : null;

    // Always fetch fresh certifications from API on page load
    this.certificationService.getAllCertifications().subscribe({
      next: () => {
        this.refreshCertificationProgress();
        if (this.currentUserId != null) {
          const uid = this.currentUserId;
          this.currentUserBadges = this.certificationService.getBadgesForUser(uid, this.currentUserEmail, this.currentUserName);
          this.primaryBadge = this.certificationService.getPrimaryBadgeForUser(uid, this.currentUserEmail, this.currentUserName) || '';
          this.badgeSummary = this.primaryBadge || 'No badge yet';
        }
      },
      error: () => {
        this.currentUserCertificationCount = 0;
        this.beginnerCertificationCount = 0;
        this.intermediateCertificationCount = 0;
        this.currentUserBadges = [];
        this.primaryBadge = '';
        this.badgeSummary = 'No badge yet';
      }
    });

    this.loadContents();
  }

  loadContents(): void {
    this.contentService.getAllContents().subscribe({
      next: (contents) => {
        this.contents = contents;
        this.filteredContents = contents;
        // Re-run after contents load so level-based cert counts are accurate
        this.refreshCertificationProgress();
        if (this.currentUserId != null) {
          const uid = this.currentUserId;
          this.currentUserBadges = this.certificationService.getBadgesForUser(uid, this.currentUserEmail, this.currentUserName);
          this.primaryBadge = this.certificationService.getPrimaryBadgeForUser(uid, this.currentUserEmail, this.currentUserName) || '';
          this.badgeSummary = this.primaryBadge || 'No badge yet';
        }
      },
      error: () => { this.contents = []; this.filteredContents = []; }
    });
  }

  filterContents(type: string): void {
    this.selectedFilter = type;
    this.filteredContents = type === 'all' ? this.contents : this.contents.filter(c => c.type === type.toUpperCase());
  }

  viewContent(content: Content): void {
    if (!content.contentId || !this.isContentUnlocked(content)) return;
    this.router.navigate(['/content-list/content', content.contentId]);
  }

  isContentUnlocked(content: Content): boolean {
    if (content.level === 'DEBUTANT') return true;
    if (content.level === 'INTERMEDIAIRE') return this.beginnerCertificationCount >= ContentListComponent.INTERMEDIATE_UNLOCK_BEGINNER_CERTS;
    return this.intermediateCertificationCount >= ContentListComponent.ADVANCED_UNLOCK_INTERMEDIATE_CERTS;
  }

  getUnlockRemainingCertifications(content: Content): number {
    if (content.level === 'DEBUTANT') return 0;
    if (content.level === 'INTERMEDIAIRE') return Math.max(0, ContentListComponent.INTERMEDIATE_UNLOCK_BEGINNER_CERTS - this.beginnerCertificationCount);
    return Math.max(0, ContentListComponent.ADVANCED_UNLOCK_INTERMEDIATE_CERTS - this.intermediateCertificationCount);
  }

  getUnlockMessage(content: Content): string {
    const remaining = this.getUnlockRemainingCertifications(content);
    if (remaining <= 0 || this.isContentUnlocked(content)) return '';
    return `Unlock in ${remaining} certification${remaining > 1 ? 's' : ''}`;
  }

  getLevelLabel(content: Content): string {
    switch (content.level) {
      case 'DEBUTANT': return 'Beginner Level';
      case 'INTERMEDIAIRE': return 'Intermediate Level';
      default: return 'Advanced Level';
    }
  }

  private findContentById(contentId?: number): Content | undefined {
    if (contentId == null) return undefined;
    return this.contents.find(c => Number(c.contentId) === Number(contentId));
  }

  private refreshCertificationProgress(): void {
    if (this.currentUserId == null) { this.currentUserCertificationCount = 0; this.beginnerCertificationCount = 0; this.intermediateCertificationCount = 0; return; }
    const certs = this.certificationService.getCertificationsForUser(this.currentUserId, this.currentUserEmail, this.currentUserName);
    this.currentUserCertificationCount = certs.length;
    this.beginnerCertificationCount = certs.filter(c => this.findContentById(c.contentId)?.level === 'DEBUTANT').length;
    this.intermediateCertificationCount = certs.filter(c => this.findContentById(c.contentId)?.level === 'INTERMEDIAIRE').length;
  }

  getContentIcon(type: string): string {
    switch (type) { case 'COURS': return '📚'; case 'ARTICLE': return '📝'; case 'VIDEO': return '🎥'; default: return '📄'; }
  }

  getContentBadgeClass(type: string): string {
    switch (type) { case 'COURS': return 'badge-cours'; case 'ARTICLE': return 'badge-article'; case 'VIDEO': return 'badge-video'; default: return 'badge-default'; }
  }

  getBadgeClass(badge: string): string {
    switch (badge) { case 'Bronze Badge': return 'badge-bronze'; case 'Silver Badge': return 'badge-silver'; case 'Gold Badge': return 'badge-gold'; case 'Perfect Score Badge': return 'badge-perfect'; default: return 'badge-muted'; }
  }
}
