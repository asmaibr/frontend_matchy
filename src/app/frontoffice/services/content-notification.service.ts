import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ContentNotification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error' | 'certificate';
  icon: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class ContentNotificationService {
  private notificationsSubject = new BehaviorSubject<ContentNotification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  constructor() { this.loadNotifications(); }

  private getStorageKey(): string {
    const rawUser = localStorage.getItem('matchy_user');
    if (!rawUser) return 'content_notifications_anonymous';
    try {
      const user = JSON.parse(rawUser);
      return `content_notifications_${user?.email || user?.id || 'anonymous'}`;
    } catch { return 'content_notifications_anonymous'; }
  }

  private loadNotifications(): void {
    const stored = localStorage.getItem(this.getStorageKey());
    if (stored) {
      const notifications = JSON.parse(stored).map((n: any) => ({ ...n, timestamp: new Date(n.timestamp) }));
      this.notificationsSubject.next(notifications);
      this.updateUnreadCount();
    }
  }

  addNotification(type: 'success' | 'info' | 'warning' | 'error' | 'certificate', title: string, message: string, icon: string = '📢', data?: any): void {
    const notification: ContentNotification = { id: Date.now().toString(), type, icon, title, message, timestamp: new Date(), read: false, data };
    const updated = [notification, ...this.notificationsSubject.value];
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }

  markAsRead(id: string): void {
    const updated = this.notificationsSubject.value.map(n => n.id === id ? { ...n, read: true } : n);
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }

  markAllAsRead(): void {
    const updated = this.notificationsSubject.value.map(n => ({ ...n, read: true }));
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }

  deleteNotification(id: string): void {
    const updated = this.notificationsSubject.value.filter(n => n.id !== id);
    this.notificationsSubject.next(updated);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(updated));
    this.updateUnreadCount();
  }

  clearAll(): void {
    this.notificationsSubject.next([]);
    localStorage.removeItem(this.getStorageKey());
    this.updateUnreadCount();
  }

  private updateUnreadCount(): void {
    this.unreadCountSubject.next(this.notificationsSubject.value.filter(n => !n.read).length);
  }
}
