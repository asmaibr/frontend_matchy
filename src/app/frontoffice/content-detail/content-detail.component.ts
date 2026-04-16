import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content.model';
import { ContentTranslation, Language } from '../models/translation.model';
import { ContentService } from '../services/content.service';
import { TranslationService } from '../services/translation.service';
import { PdfGeneratorService } from '../services/pdf-generator.service';
import { FavoriteService } from '../services/favorite.service';
import { ContentNotificationService } from '../services/content-notification.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content: Content | null = null;
  author: { name: string } | null = null;
  loading = true;
  downloadingPdf = false;

  showTranslation = false;
  selectedLanguage = '';
  availableLanguages: Language[] = [];
  currentTranslation: ContentTranslation | null = null;
  translating = false;
  showLanguageDropdown = false;

  isFavorite = false;
  processingFavorite = false;
  currentUserId = '1';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private translationService: TranslationService,
    private pdfGenerator: PdfGeneratorService,
    private favoriteService: FavoriteService,
    private notificationService: ContentNotificationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.checkAuth();
    const userId = this.authService.getCurrentUserId();
    if (userId) this.currentUserId = String(userId);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContent(+id);
      this.availableLanguages = this.translationService.getSupportedLanguages();
    }
  }

  loadContent(id: number): void {
    this.contentService.getContentById(id).subscribe({
      next: (content) => {
        this.content = content;
        if (content.authorId) this.author = { name: `Author #${content.authorId}` };
        this.checkIfFavorite(id);
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  toggleLanguageDropdown(): void { this.showLanguageDropdown = !this.showLanguageDropdown; }

  translateToLanguage(languageCode: string): void {
    if (!this.content) return;
    this.selectedLanguage = languageCode;
    this.showLanguageDropdown = false;
    this.translating = true;
    this.translationService.getTranslation(this.content.contentId!, languageCode).subscribe({
      next: (t) => { this.currentTranslation = t; this.showTranslation = true; this.translating = false; },
      error: () => this.createTranslation(languageCode)
    });
  }

  createTranslation(languageCode: string): void {
    if (!this.content) return;
    this.translationService.translateContent(this.content.contentId!, languageCode).subscribe({
      next: (t) => {
        this.currentTranslation = t; this.showTranslation = true; this.translating = false;
        this.notificationService.addNotification('success', '🌍 Translation Complete', `Content translated to ${this.translationService.getLanguageName(languageCode)}`);
      },
      error: () => { this.translating = false; alert('Error translating content. Please try again.'); }
    });
  }

  hideTranslation(): void { this.showTranslation = false; this.currentTranslation = null; this.selectedLanguage = ''; }
  getSelectedLanguageFlag(): string { return this.translationService.getLanguageFlag(this.selectedLanguage); }
  getSelectedLanguageName(): string { return this.translationService.getLanguageName(this.selectedLanguage); }

  checkIfFavorite(contentId: number): void {
    this.favoriteService.isFavorite(this.currentUserId, contentId).subscribe({
      next: (r) => this.isFavorite = r.isFavorite,
      error: () => {}
    });
  }

  toggleFavorite(): void {
    if (!this.content || this.processingFavorite) return;
    this.processingFavorite = true;
    const action = this.isFavorite
      ? this.favoriteService.removeFavorite(this.currentUserId, this.content.contentId!)
      : this.favoriteService.addFavorite(this.currentUserId, this.content.contentId!);
    action.subscribe({
      next: () => {
        this.isFavorite = !this.isFavorite;
        this.processingFavorite = false;
        this.notificationService.addNotification(this.isFavorite ? 'success' : 'info', this.isFavorite ? '⭐ Added to Favorites' : '❌ Removed from Favorites', `"${this.content?.title}" ${this.isFavorite ? 'added to' : 'removed from'} your favorites.`);
      },
      error: () => { this.processingFavorite = false; }
    });
  }

  downloadResources(): void {
    if (!this.content) return;
    this.downloadingPdf = true;
    try {
      this.pdfGenerator.downloadContentAsPdf(this.content, this.author?.name);
      this.notificationService.addNotification('success', '📥 PDF Downloaded', `"${this.content.title}" downloaded as PDF!`);
    } catch { this.notificationService.addNotification('error', '❌ PDF Failed', 'Error generating PDF.'); }
    finally { this.downloadingPdf = false; }
  }

  goBack(): void { this.router.navigate(['/content-list']); }

  takeAssessment(): void {
    if (this.content?.contentId != null) this.router.navigate(['/content-list/assessment', this.content.contentId]);
  }

  getContentIcon(type: string): string {
    switch (type) { case 'COURS': return '📚'; case 'ARTICLE': return '📝'; case 'VIDEO': return '🎥'; default: return '📄'; }
  }

  getContentBadgeClass(type: string): string {
    switch (type) { case 'COURS': return 'badge-cours'; case 'ARTICLE': return 'badge-article'; case 'VIDEO': return 'badge-video'; default: return 'badge-default'; }
  }
}
