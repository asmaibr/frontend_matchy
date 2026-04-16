import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../frontoffice/services/notifications.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bo-header',
  template: `
    <header class="bo-page-header-enhanced">
      <div class="header-left">
        <div class="header-tabs" [class.users-active]="showUsers" [class.projects-active]="!showUsers">
          <button class="header-tab" [class.active]="showUsers" (click)="setTab(true)">
            <span class="tab-icon">👥</span>
            Users
          </button>
          <button class="header-tab" [class.active]="!showUsers" (click)="setTab(false)">
            <span class="tab-icon">📁</span>
            Projects
          </button>
        </div>
      </div>
      <div class="header-right">
        <app-location-icon></app-location-icon>
        <app-notification-bell></app-notification-bell>
        <app-theme-toggle></app-theme-toggle>
      </div>
    </header>
  `,
  styleUrls: ['./bo-header.component.scss']
})
export class BoHeaderComponent {
  showUsers = true;

  constructor(private router: Router) {}

  setTab(isUsers: boolean): void {
    this.showUsers = isUsers;
    this.router.navigate([isUsers ? '/backoffice/users' : '/backoffice/projects']);
  }
}
