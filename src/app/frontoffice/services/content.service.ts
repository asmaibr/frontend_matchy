import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';
import { Content } from '../models/content.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private apiUrl = `${environment.apiUrl}/Content`;
  private contentsSubject = new BehaviorSubject<Content[]>([]);
  public contents$ = this.contentsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadContents();
  }

  private loadContents(): void {
    this.http.get<any[]>(`${this.apiUrl}/getAllContents`).subscribe({
      next: (data) => this.contentsSubject.next(this.sanitizeList(data)),
      error: () => this.contentsSubject.next([])
    });
  }

  getAllContents(): Observable<Content[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllContents`).pipe(
      map((data) => this.sanitizeList(data)),
      tap((contents) => this.contentsSubject.next(contents)),
      catchError(() => of([]))
    );
  }

  private sanitizeList(contents: any[]): Content[] {
    if (!Array.isArray(contents)) return [];
    return contents.map((c) => {
      const copy: any = { ...c };
      if (copy.contentId != null) copy.contentId = Number(copy.contentId);
      delete copy.assessment;
      delete copy.certifications;
      return copy as Content;
    });
  }

  getContentById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  createContent(content: Content): Observable<Content> {
    return this.http.post<Content>(`${this.apiUrl}/addContent`, content).pipe(tap(() => this.loadContents()));
  }

  updateContent(content: Content): Observable<Content> {
    return this.http.put<Content>(`${this.apiUrl}/modifierContent`, content).pipe(tap(() => this.loadContents()));
  }

  deleteContent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteContent/${id}`).pipe(tap(() => this.loadContents()));
  }
}
