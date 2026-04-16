import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { ContentNotificationService } from '../services/content-notification.service';
import { Content } from '../models/content.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteContents: Content[] = [];
  loading = true;
  currentUserId = '1';
  removingFavoriteId: number | null = null;

  constructor(
    private favoriteService: FavoriteService,
    private notificationService: ContentNotificationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.checkAuth();
    const userId = this.authService.getCurrentUserId();
    if (userId) this.currentUserId = String(userId);
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.loading = true;
    this.favoriteService.getUserFavoriteContents(this.currentUserId).subscribe({
      next: (contents) => { this.favoriteContents = contents; this.loading = false; },
      error: () => this.loading = false
    });
  }

  removeFavorite(content: Content, event: Event): void {
    event.stopPropagation();
    if (!confirm(`Remove "${content.title}" from favorites?`)) return;
    this.removingFavoriteId = content.contentId!;
    this.favoriteService.removeFavorite(this.currentUserId, content.contentId!).subscribe({
      next: () => {
        this.favoriteContents = this.favoriteContents.filter(c => c.contentId !== content.contentId);
        this.removingFavoriteId = null;
        this.notificationService.addNotification('info', '❌ Removed from Favorites', `"${content.title}" removed from favorites.`, '⭐');
      },
      error: () => { this.removingFavoriteId = null; }
    });
  }

  viewContent(contentId: number): void { this.router.navigate(['/content-list/content', contentId]); }
  goBack(): void { this.router.navigate(['/content-list']); }

  getContentIcon(type: string): string {
    switch (type) { case 'COURS': return '📚'; case 'ARTICLE': return '📝'; case 'VIDEO': return '🎥'; default: return '📄'; }
  }

  getContentBadgeClass(type: string): string {
    switch (type) { case 'COURS': return 'badge-cours'; case 'ARTICLE': return 'badge-article'; case 'VIDEO': return 'badge-video'; default: return 'badge-default'; }
  }
}
