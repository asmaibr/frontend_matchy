import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite.model';
import { Content } from '../models/content.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private apiUrl = `${environment.apiUrl}/Favorite`;

  constructor(private http: HttpClient) {}

  addFavorite(userId: string, contentId: number): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiUrl}/add/${userId}/${contentId}`, {});
  }

  removeFavorite(userId: string, contentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${userId}/${contentId}`);
  }

  isFavorite(userId: string, contentId: number): Observable<{ isFavorite: boolean }> {
    return this.http.get<{ isFavorite: boolean }>(`${this.apiUrl}/check/${userId}/${contentId}`);
  }

  getUserFavorites(userId: string): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiUrl}/user/${userId}`);
  }

  getUserFavoriteContents(userId: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/user/${userId}/contents`);
  }

  countUserFavorites(userId: string): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/user/${userId}/count`);
  }
}
