import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../frontoffice/models/content.model';
import { AssessmentService } from '../../frontoffice/services/assessment.service';
import { ContentService } from '../../frontoffice/services/content.service';
import { Content } from '../../frontoffice/models/content.model';

@Component({
  selector: 'app-assessment-management',
  templateUrl: './assessment-management.component.html',
  styleUrls: ['./assessment-management.component.scss']
})
export class AssessmentManagementComponent implements OnInit {
  assessments: Assessment[] = [];
  filteredAssessments: Assessment[] = [];
  contents: Content[] = [];
  showModal = false;
  isEditMode = false;
  currentAssessment: Assessment = this.getEmptyAssessment();

  constructor(private assessmentService: AssessmentService, private contentService: ContentService) {}

  ngOnInit(): void { this.loadAssessments(); this.loadContents(); }

  loadAssessments(): void {
    this.assessmentService.getAllAssessments().subscribe({
      next: (assessments) => {
        this.assessments = assessments.map(a => {
          let cid: number | undefined;
          if (a.contentId != null) cid = Number(a.contentId);
          else if (a.content?.contentId != null) cid = Number(a.content.contentId);
          const ass = { ...a, contentId: cid } as any;
          if (!ass.contentTitle && ass.contentId != null) ass.contentTitle = this.getContentTitle(ass.contentId);
          return ass;
        });
        this.filteredAssessments = [...this.assessments];
      },
      error: (err) => console.error('Error loading assessments:', err)
    });
  }

  loadContents(): void {
    this.contentService.getAllContents().subscribe({
      next: (contents) => {
        this.contents = contents.map(c => ({ ...c, contentId: c.contentId != null ? Number(c.contentId) : undefined }));
        this.updateAssessmentTitles();
      }
    });
  }

  openCreateModal(): void { this.isEditMode = false; this.currentAssessment = this.getEmptyAssessment(); this.showModal = true; }
  openEditModal(a: Assessment): void { this.isEditMode = true; this.currentAssessment = { ...a, contentId: a.contentId != null ? Number(a.contentId) : undefined }; this.showModal = true; }
  closeModal(): void { this.showModal = false; this.currentAssessment = this.getEmptyAssessment(); }

  saveAssessment(): void {
    const payload = { ...this.currentAssessment, contentId: this.currentAssessment.contentId != null ? Number(this.currentAssessment.contentId) : undefined };
    const action = this.isEditMode ? this.assessmentService.updateAssessment(payload) : this.assessmentService.createAssessment(payload);
    action.subscribe({ next: () => { this.loadAssessments(); this.closeModal(); }, error: () => { this.loadAssessments(); this.closeModal(); } });
  }

  deleteAssessment(a: Assessment): void {
    if (confirm('Delete this assessment?')) {
      this.assessmentService.deleteAssessment(a.assessmentId!).subscribe({ next: () => this.loadAssessments() });
    }
  }

  getEmptyAssessment(): Assessment { return { questions: '', passingScore: 60, duration: 30, contentId: undefined }; }

  getContentTitle(contentId?: number | string): string {
    if (contentId == null) return 'No content linked';
    const id = Number(contentId);
    return this.contents.find(c => Number(c.contentId) === id)?.title ?? 'No content linked';
  }

  private updateAssessmentTitles(): void {
    this.assessments = this.assessments.map(a => {
      const upd = { ...a } as any;
      if (!upd.contentTitle && upd.contentId != null) upd.contentTitle = this.getContentTitle(upd.contentId);
      return upd;
    });
    this.filteredAssessments = [...this.assessments];
  }

  getDifficultyBadgeClass(score: number): string { return score >= 80 ? 'badge-hard' : score >= 60 ? 'badge-medium' : 'badge-easy'; }
  getDifficultyLabel(score: number): string { return score >= 80 ? 'Hard' : score >= 60 ? 'Medium' : 'Easy'; }
}
