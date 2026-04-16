import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Assessment } from '../models/content.model';
import { Certification } from '../models/certification.model';
import { AssessmentService } from '../services/assessment.service';
import { CertificationService } from '../services/certification.service';
import { ContentNotificationService } from '../services/content-notification.service';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

export interface Question {
  question: string;
  correctAnswer: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface AssessmentResult {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  passed: boolean;
  passingScore: number;
}

@Component({
  selector: 'app-assessment-test',
  templateUrl: './assessment-test.component.html',
  styleUrls: ['./assessment-test.component.scss']
})
export class AssessmentTestComponent implements OnInit {
  assessment: Assessment | null = null;
  contentId = 0;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  showResult = false;
  result: AssessmentResult | null = null;
  loading = true;
  showEmailNotification = false;
  passed = false;
  userScore = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assessmentService: AssessmentService,
    private certificationService: CertificationService,
    private notificationService: ContentNotificationService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.checkAuth();
    const contentIdStr = this.route.snapshot.paramMap.get('contentId');
    if (contentIdStr) {
      this.contentId = +contentIdStr;
      this.loadAssessmentForContent(this.contentId);
    } else {
      this.loading = false;
    }
  }

  loadAssessmentForContent(contentId: number): void {
    this.assessmentService.getAssessmentByContentId(contentId).subscribe({
      next: (assessment) => {
        this.assessment = assessment;
        this.parseQuestions();
        this.loading = false;
      },
      error: () => { this.assessment = null; this.loading = false; }
    });
  }

  parseQuestions(): void {
    if (!this.assessment?.questions) { this.questions = []; return; }
    try {
      const parsed = JSON.parse(this.assessment.questions);
      if (Array.isArray(parsed)) {
        this.questions = parsed.map((q: any) => ({
          question: q.question || '',
          correctAnswer: q.correctAnswer || '',
          userAnswer: '',
          isCorrect: false
        }));
      } else { this.questions = []; }
    } catch { this.questions = []; }
  }

  nextQuestion(): void { if (this.currentQuestionIndex < this.questions.length - 1) this.currentQuestionIndex++; }
  previousQuestion(): void { if (this.currentQuestionIndex > 0) this.currentQuestionIndex--; }

  submitAssessment(): void {
    if (!this.assessment || !this.questions.length) return;
    let correct = 0;
    this.questions.forEach(q => {
      q.isCorrect = (q.userAnswer || '').trim().toLowerCase() === (q.correctAnswer || '').trim().toLowerCase();
      if (q.isCorrect) correct++;
    });
    const score = Math.round((correct / this.questions.length) * 100);
    const passed = score >= this.assessment.passingScore;
    this.result = { totalQuestions: this.questions.length, correctAnswers: correct, incorrectAnswers: this.questions.length - correct, score, passed, passingScore: this.assessment.passingScore };
    this.passed = passed;
    this.userScore = score;
    this.showResult = true;
    if (passed) {
      this.createCertification(score);
      this.showEmailNotification = true;
      setTimeout(() => this.showEmailNotification = false, 8000);
    }
  }

  createCertification(score: number): void {
    if (!this.assessment) return;
    const rawId = this.authService.getCurrentUserId();
    const userId = rawId ? Number(rawId) : null;
    if (!userId) {
      console.error('No logged-in user ID found');
      return;
    }

    // Sync current user into content_db.users first, then create certification
    const user = this.authService.currentUser;
    const userPayload = {
      id: userId,
      name: user?.name || `${(user as any)?.firstName || ''} ${(user as any)?.lastName || ''}`.trim() || 'User',
      email: user?.email || '',
      role: (user?.role as any) || 'FREELANCER',
      status: 'ACTIVE'
    };

    this.http.post<any>(`${environment.apiUrl}/User/addUser`, userPayload).subscribe({
      next: () => this.saveCertification(score, userId),
      error: () => {
        // User may already exist — try updating, or just proceed with the ID
        this.saveCertification(score, userId);
      }
    });
  }

  private saveCertification(score: number, userId: number): void {
    const cert: Certification = {
      score,
      validity: '1 year',
      verifiedBy: 'System',
      userId,
      contentId: this.contentId,
      assessmentId: this.assessment!.assessmentId
    };
    this.certificationService.createCertification(cert).subscribe({
      next: () => {
        const userName = this.authService.currentUser?.name || 'User';
        const courseName = (this.assessment as any)?.contentTitle || 'Course';
        this.notificationService.addNotification('certificate', '🏆 Certification Generated', `Congratulations ${userName}! Your certificate for "${courseName}" has been generated.`, '🎓');
        if (score === 100) this.notificationService.addNotification('success', '🏅 Perfect Score Badge', `${userName} earned the Perfect Score Badge!`, '🏆');
      },
      error: (err) => console.error('Failed to create certification:', err)
    });
  }

  retryAssessment(): void {
    this.currentQuestionIndex = 0;
    this.showResult = false;
    this.result = null;
    this.passed = false;
    this.userScore = 0;
    this.showEmailNotification = false;
    this.questions.forEach(q => { q.userAnswer = ''; q.isCorrect = false; });
  }

  goBack(): void { this.router.navigate(['/content-list/content', this.contentId]); }

  get currentQuestion(): Question | null { return this.questions[this.currentQuestionIndex] || null; }
  get progress(): number { return this.questions.length === 0 ? 0 : Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100); }
  isAllQuestionsAnswered(): boolean { return this.questions.every(q => q.userAnswer && q.userAnswer.trim() !== ''); }
}
