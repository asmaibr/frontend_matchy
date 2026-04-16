import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Assessment } from '../models/content.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssessmentService {
  private apiUrl = `${environment.apiUrl}/Assessment`;

  constructor(private http: HttpClient) {}

  getAllAssessments(): Observable<Assessment[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllAssessments`).pipe(
      map((data) => {
        if (!Array.isArray(data)) return [];
        return data.map((a) => {
          const copy: any = { ...a };
          if (copy.contentId != null) copy.contentId = Number(copy.contentId);
          else if (copy.content?.contentId != null) copy.contentId = Number(copy.content.contentId);
          delete copy.content;
          return copy as Assessment;
        });
      }),
      catchError(() => of([]))
    );
  }

  getAssessmentById(id: number): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/${id}`);
  }

  getAssessmentByContentId(contentId: number): Observable<Assessment | null> {
    return this.http.get<Assessment>(`${this.apiUrl}/byContent/${contentId}`).pipe(
      catchError(() => this.getAllAssessments().pipe(
        map((list) => list.find((a) => {
          const cid = a.contentId != null ? Number(a.contentId) : a.content?.contentId != null ? Number(a.content.contentId) : undefined;
          return cid === contentId;
        }) || null)
      ))
    );
  }

  createAssessment(assessment: Assessment): Observable<Assessment> {
    return this.http.post<Assessment>(`${this.apiUrl}/addAssessment`, assessment);
  }

  updateAssessment(assessment: Assessment): Observable<Assessment> {
    return this.http.put<Assessment>(`${this.apiUrl}/modifierAssessment`, assessment);
  }

  deleteAssessment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAssessment/${id}`);
  }
}
