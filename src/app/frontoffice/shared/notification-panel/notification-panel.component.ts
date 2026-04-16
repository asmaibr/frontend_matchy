import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ContentNotificationService, ContentNotification } from '../../services/content-notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class NotificationPanelComponent implements OnInit, OnDestroy {
  notifications: ContentNotification[] = [];
  unreadCount = 0;
  showDropdown = false;
  private destroy$ = new Subject<void>();

  constructor(private notificationService: ContentNotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.pipe(takeUntil(this.destroy$)).subscribe(n => this.notifications = n);
    this.notificationService.unreadCount$.pipe(takeUntil(this.destroy$)).subscribe(c => this.unreadCount = c);
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

  toggleDropdown(): void { this.showDropdown = !this.showDropdown; }
  markAsRead(id: string): void { this.notificationService.markAsRead(id); }
  markAllAsRead(): void { this.notificationService.markAllAsRead(); }
  deleteNotification(id: string): void { this.notificationService.deleteNotification(id); }
  clearAll(): void { if (confirm('Clear all notifications?')) this.notificationService.clearAll(); }

  getTimeAgo(timestamp: Date): string {
    const diff = new Date().getTime() - new Date(timestamp).getTime();
    const m = Math.floor(diff / 60000), h = Math.floor(diff / 3600000), d = Math.floor(diff / 86400000);
    if (m < 1) return 'just now';
    if (m < 60) return `${m}m ago`;
    if (h < 24) return `${h}h ago`;
    if (d < 7) return `${d}d ago`;
    return new Date(timestamp).toLocaleDateString();
  }
}
