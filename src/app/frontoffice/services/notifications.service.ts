import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, interval, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Notification } from '../models/notification.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl = environment.paymentsAdminBaseUrl;
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  constructor(private http: HttpClient) {
    console.log('NotificationsService initialized with apiUrl:', this.apiUrl);
  }

  // Start polling for notifications
  startPolling(userId: number, userType: 'company' | 'freelancer'): void {
    // Poll every 10 seconds
    interval(10000).pipe(
      switchMap(() => this.getUnreadCount(userId, userType))
    ).subscribe(count => {
      this.unreadCountSubject.next(count);
    });

    // Initial load
    this.getUnreadCount(userId, userType).subscribe(count => {
      this.unreadCountSubject.next(count);
    });
  }

  getNotifications(userId: number, userType: 'company' | 'freelancer'): Observable<Notification[]> {
    const url = `${this.apiUrl}/notifications/${userType}/${userId}`;
    console.log('🔍 Fetching notifications from URL:', url, 'for userId:', userId, 'userType:', userType);
    return this.http.get<any[]>(url).pipe(
      map(notifications => {
        console.log('✅ Raw notifications from API:', notifications);
        const mapped = notifications.map(n => ({
          ...n,
          created_at: new Date(n.created_at)
        }));
        console.log('✅ Mapped notifications:', mapped);
        return mapped;
      }),
      catchError(error => {
        console.error('❌ Error fetching notifications:', error);
        return throwError(() => error);
      })
    );
  }

  getAllNotifications(): Observable<Notification[]> {
    const url = `${this.apiUrl}/notifications`;
    console.log('🔍 Fetching ALL notifications from URL:', url);
    return this.http.get<any[]>(url).pipe(
      map(notifications => {
        console.log('✅ Raw ALL notifications from API:', notifications);
        const mapped = notifications.map(n => ({
          ...n,
          created_at: new Date(n.created_at)
        }));
        console.log('✅ Mapped ALL notifications count:', mapped.length);
        return mapped;
      }),
      catchError(error => {
        console.error('❌ Error fetching all notifications:', error);
        return throwError(() => error);
      })
    );
  }

  getUnreadCount(userId: number, userType: 'company' | 'freelancer'): Observable<number> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/notifications/${userType}/${userId}/unread-count`).pipe(
      map(response => response.count)
    );
  }

  markAsRead(notificationId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/notifications/${notificationId}/read`, {});
  }

  markAllAsRead(userId: number, userType: 'company' | 'freelancer'): Observable<any> {
    return this.http.put(`${this.apiUrl}/notifications/${userType}/${userId}/read-all`, {});
  }

  deleteNotification(notificationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notifications/${notificationId}`);
  }
}
