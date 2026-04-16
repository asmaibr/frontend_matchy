import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../frontoffice/services/notifications.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bo-header',
  template: `
    <header class="bo-header">
      <div class="header-right">
        <button class="notification-btn" (click)="goToNotifications()" [class.has-unread]="unreadCount > 0">
          <span class="notification-icon">🔔</span>
          <span class="notification-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
        </button>
        <button class="theme-toggle" (click)="toggleTheme()">
          <span class="theme-icon">{{ isDark ? '☀️' : '🌙' }}</span>
          <span class="theme-label">{{ isDark ? 'Light' : 'Dark' }}</span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .bo-header {
      display: flex; align-items: center; justify-content: flex-end;
      padding: 12px 28px;
      background: var(--bo-bg-secondary);
      border-bottom: 1px solid var(--bo-border);
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .notification-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--bo-border);
      background: var(--bo-bg-primary);
      color: var(--bo-text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        background: var(--bo-bg-secondary);
        border-color: var(--primary);
        color: var(--primary);
      }
      
      &.has-unread {
        animation: pulse 2s infinite;
      }
      
      .notification-icon {
        font-size: 18px;
      }
      
      .notification-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        min-width: 20px;
        height: 20px;
        padding: 0 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--danger);
        color: white;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 700;
        border: 2px solid var(--bo-bg-secondary);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
    
    .theme-toggle {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 7px 14px; border-radius: 100px; font-size: 12.5px; font-weight: 600;
      font-family: var(--font-body); cursor: pointer;
      border: 1px solid rgba(124,106,247,0.3);
      background: rgba(124,106,247,0.08); color: #9d8ff9;
      transition: all 0.2s ease;
      &:hover { background: rgba(124,106,247,0.16); border-color: rgba(124,106,247,0.5); }
      .theme-icon { font-size: 14px; }
    }
  `]
})
export class BoHeaderComponent implements OnInit, OnDestroy {
  isDark = true;
  unreadCount = 0;
  private unreadSubscription?: Subscription;

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private router: Router
  ) {
    const saved = localStorage.getItem('bo-theme');
    this.isDark = saved !== 'light';
    this.applyTheme();
  }

  ngOnInit(): void {
    // Start polling for notifications
    if (this.authService.currentUser) {
      const userId = Number(this.authService.currentUser.id);
      this.notificationsService.startPolling(userId, 'company');
      
      // Subscribe to unread count updates
      this.unreadSubscription = this.notificationsService.unreadCount$.subscribe(
        count => this.unreadCount = count
      );
    }
  }

  ngOnDestroy(): void {
    if (this.unreadSubscription) {
      this.unreadSubscription.unsubscribe();
    }
  }

  goToNotifications(): void {
    this.router.navigate(['/backoffice/notifications']);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('bo-theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.isDark) {
      html.classList.remove('bo-light');
      html.classList.add('bo-dark');
      body.classList.remove('bo-light');
      body.classList.add('bo-dark');
      // Sync avec le système de tokens du dashboard
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('bo-dark');
      html.classList.add('bo-light');
      body.classList.remove('bo-dark');
      body.classList.add('bo-light');
      html.setAttribute('data-theme', 'light');
    }
  }
}
