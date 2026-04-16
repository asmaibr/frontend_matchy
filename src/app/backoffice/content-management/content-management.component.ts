import { Component, OnInit } from '@angular/core';
import { Content } from '../../frontoffice/models/content.model';
import { ContentService } from '../../frontoffice/services/content.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  private readonly levelRequirements: Record<'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE', number> = {
    DEBUTANT: 0, INTERMEDIAIRE: 3, AVANCE: 5
  };

  contents: Content[] = [];
  filteredContents: Content[] = [];
  selectedFilter = 'all';
  showModal = false;
  isEditMode = false;
  currentContent: Content = this.getEmptyContent();

  constructor(private contentService: ContentService) {}

  ngOnInit(): void { this.loadContents(); }

  loadContents(): void {
    this.contentService.getAllContents().subscribe({
      next: (contents) => {
        this.contents = contents.map(c => {
          const copy: any = { ...c };
          if (copy.contentId != null) copy.contentId = Number(copy.contentId);
          delete copy.assessment; delete copy.certifications;
          return copy as Content;
        });
        this.filteredContents = this.contents;
      },
      error: (err) => console.error('Error loading contents:', err)
    });
  }

  filterContents(type: string): void {
    this.selectedFilter = type;
    this.filteredContents = type === 'all' ? this.contents : this.contents.filter(c => c.type === type.toUpperCase());
  }

  openCreateModal(): void { this.isEditMode = false; this.currentContent = this.getEmptyContent(); this.showModal = true; }
  openEditModal(content: Content): void { this.isEditMode = true; this.currentContent = { ...content }; this.showModal = true; }
  closeModal(): void { this.showModal = false; this.currentContent = this.getEmptyContent(); }

  saveContent(): void {
    const action = this.isEditMode
      ? this.contentService.updateContent(this.currentContent)
      : this.contentService.createContent(this.currentContent);
    action.subscribe({ next: () => { this.loadContents(); this.closeModal(); }, error: () => { this.loadContents(); this.closeModal(); } });
  }

  deleteContent(content: Content): void {
    if (confirm(`Delete "${content.title}"?`)) {
      this.contentService.deleteContent(content.contentId!).subscribe({ next: () => this.loadContents() });
    }
  }

  getEmptyContent(): Content { return { title: '', description: '', type: 'COURS', level: 'DEBUTANT', authorId: 1 }; }

  getLevelLabel(content: Content): string {
    switch (content.level) { case 'INTERMEDIAIRE': return 'Niveau Intermediaire'; case 'AVANCE': return 'Niveau Avance'; default: return 'Niveau Debutant'; }
  }

  getLevelOptionLabel(level: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE'): string {
    const req = this.levelRequirements[level];
    switch (level) { case 'INTERMEDIAIRE': return `Intermediaire (${req} beginner certs)`; case 'AVANCE': return `Avance (${req} intermediate certs)`; default: return `Debutant (free)`; }
  }

  getContentIcon(type: string): string {
    switch (type) { case 'COURS': return '📚'; case 'ARTICLE': return '📝'; case 'VIDEO': return '🎥'; default: return '📄'; }
  }

  getContentBadgeClass(type: string): string {
    switch (type) { case 'COURS': return 'badge-cours'; case 'ARTICLE': return 'badge-article'; case 'VIDEO': return 'badge-video'; default: return 'badge-default'; }
  }
}
