import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';
import { Certification } from '../models/certification.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CertificationService {
  private apiUrl = `${environment.apiUrl}/Certification`;
  private certificationsSubject = new BehaviorSubject<Certification[]>([]);
  public certifications$ = this.certificationsSubject.asObservable();

  constructor(private http: HttpClient) { this.loadCertifications(); }

  private loadCertifications(): void {
    this.http.get<any[]>(`${this.apiUrl}/getAllCertifications`).subscribe({
      next: (data) => this.certificationsSubject.next(this.sanitizeList(data)),
      error: () => this.certificationsSubject.next([])
    });
  }

  getAllCertifications(): Observable<Certification[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllCertifications`).pipe(
      map((data) => this.sanitizeList(data)),
      tap((c) => this.certificationsSubject.next(c)),
      catchError(() => of([]))
    );
  }

  private sanitizeList(list: any[]): Certification[] {
    if (!Array.isArray(list)) return [];
    return list.map((c) => {
      const copy: any = { ...c };
      if (copy.contentId != null) copy.contentId = Number(copy.contentId);
      if (copy.userId != null) copy.userId = Number(copy.userId);
      if (copy.user?.id != null) copy.user.id = Number(copy.user.id);
      delete copy.content;
      return copy as Certification;
    });
  }

  getCertificationsSnapshot(): Certification[] { return this.certificationsSubject.value; }

  getCertificationsForUser(userId: number, userEmail?: string, userName?: string): Certification[] {
    const normEmail = (userEmail || '').trim().toLowerCase();
    const normName = (userName || '').trim().toLowerCase();
    return this.getCertificationsSnapshot().filter((c) => {
      const cId = c.userId ?? c.user?.id ?? (c as any).user?.userId;
      if (cId != null && Number(cId) === userId) return true;
      if (normEmail && (c.user?.email || '').trim().toLowerCase() === normEmail) return true;
      if (normName && !normEmail && (c.user?.name || (c as any).userName || '').trim().toLowerCase() === normName) return true;
      return false;
    });
  }

  getBadgesForUser(userId: number, userEmail?: string, userName?: string): string[] {
    const certs = this.getCertificationsForUser(userId, userEmail, userName);
    if (!certs.length) return [];
    const badges: string[] = [];
    if (certs.length >= 1 && certs.length <= 3) badges.push('Bronze Badge');
    else if (certs.length >= 4 && certs.length <= 7) badges.push('Silver Badge');
    else if (certs.length >= 8) badges.push('Gold Badge');
    if (certs.some(c => Number(c.score) === 100)) badges.push('Perfect Score Badge');
    return badges;
  }

  getPrimaryBadgeForUser(userId: number, userEmail?: string, userName?: string): string | null {
    const badges = this.getBadgesForUser(userId, userEmail, userName);
    for (const b of ['Perfect Score Badge', 'Gold Badge', 'Silver Badge', 'Bronze Badge']) {
      if (badges.includes(b)) return b;
    }
    return null;
  }

  getCertificationById(id: number): Observable<Certification> {
    return this.http.get<Certification>(`${this.apiUrl}/${id}`);
  }

  createCertification(c: Certification): Observable<Certification> {
    return this.http.post<Certification>(`${this.apiUrl}/addCertification`, c).pipe(tap(() => this.loadCertifications()));
  }

  updateCertification(c: Certification): Observable<Certification> {
    return this.http.put<Certification>(`${this.apiUrl}/modifierCertification`, c).pipe(tap(() => this.loadCertifications()));
  }

  deleteCertification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCertification/${id}`).pipe(tap(() => this.loadCertifications()));
  }
}
