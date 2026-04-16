import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MilestoneApplication, ProjectMilestone } from '../models/milestone.model';
import { CompanyProject } from '../models/project.model';
import { MilestonesService } from '../services/milestones.service';
import { CompanyProjectsService } from '../services/company-projects.service';
import { AuthService } from '../../core/services/auth.service';
import { WorkspaceService, ChatMessage, TeamMember, WorkSubmission } from '../services/workspace.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit, OnDestroy {
  applications: MilestoneApplication[] = [];
  filteredApplications: MilestoneApplication[] = [];
  selectedStatus = 'all';
  milestones: Map<number, ProjectMilestone> = new Map();
  projects: Map<number, CompanyProject> = new Map();

  // Workspace features
  selectedApplication?: MilestoneApplication;
  showWorkspace = false;
  activeTab: 'overview' | 'chat' | 'submit' | 'submissions' = 'overview';
  
  // Chat
  chatMessages: ChatMessage[] = [];
  newMessage = '';
  teamMembers: TeamMember[] = [];
  private chatSubscription?: Subscription;

  // Work submission
  submissionForm = {
    title: '',
    description: '',
    file_url: '',
    file_name: '',
    file_type: ''
  };
  mySubmissions: WorkSubmission[] = [];

  constructor(
    private milestonesService: MilestonesService,
    private projectsService: CompanyProjectsService,
    public authService: AuthService,
    private workspaceService: WorkspaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check auth first
    this.authService.checkAuth();
    
    if (!this.authService.isAuthenticated || !this.authService.currentUser) {
      // Store current URL before redirecting to login
      this.authService.setRedirectUrl(this.router.url);
      this.router.navigate(['/backoffice/login']);
      return;
    }

    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

  loadData(): void {
    console.log('Loading data...');
    console.log('Current user:', this.authService.currentUser);
    
    if (this.authService.currentUser) {
      // Add error handling to prevent lag from failed API calls
      this.projectsService.getProjects().subscribe({
        next: (projects) => {
          console.log('Projects loaded:', projects.length);
          projects.forEach(p => this.projects.set(p.id, p));
        },
        error: (err) => {
          console.error('Failed to load projects:', err);
        }
      });

      this.milestonesService.getAllMilestones().subscribe({
        next: (milestones) => {
          console.log('Milestones loaded:', milestones.length);
          milestones.forEach(m => this.milestones.set(m.id, m));
        },
        error: (err) => {
          console.error('Failed to load milestones:', err);
        }
      });

      // Check if currentUser.id exists and is valid
      const userId = this.authService.currentUser.id;
      console.log('User ID:', userId, 'Type:', typeof userId);
      
      if (userId) {
        const numericUserId = Number(userId);
        console.log('Fetching applications for user:', numericUserId);
        
        this.milestonesService.getApplicationsByFreelancer(numericUserId).subscribe({
          next: (applications) => {
            console.log('Applications loaded:', applications);
            this.applications = applications;
            this.applyFilters();
          },
          error: (err) => {
            console.error('Failed to load applications:', err);
            // Set empty array to prevent undefined errors
            this.applications = [];
            this.applyFilters();
          }
        });
      } else {
        console.warn('User ID not available');
        this.applications = [];
        this.applyFilters();
      }
    }
  }

  applyFilters(): void {
    this.filteredApplications = this.applications.filter(app => {
      const matchStatus = this.selectedStatus === 'all' || app.status === this.selectedStatus;
      return matchStatus;
    });
  }

  getMilestone(milestoneId: number): ProjectMilestone | undefined {
    return this.milestones.get(milestoneId);
  }

  getProject(projectId: number): CompanyProject | undefined {
    return this.projects.get(projectId);
  }

  confirmInterview(applicationId: number): void {
    if (confirm('Are you sure you want to confirm your attendance for this interview?')) {
      this.milestonesService.confirmInterview(applicationId).subscribe(() => {
        this.loadData();
        alert('Interview confirmed! The company has been notified.');
      });
    }
  }

  openWorkspace(application: MilestoneApplication): void {
    if (application.status !== 'accepted') {
      alert('Workspace is only available for accepted applications');
      return;
    }

    this.selectedApplication = application;
    this.showWorkspace = true;
    this.activeTab = 'overview';
    this.loadWorkspaceData();
  }

  closeWorkspace(): void {
    this.showWorkspace = false;
    this.selectedApplication = undefined;
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

  loadWorkspaceData(): void {
    if (!this.selectedApplication) return;

    // Load team members with error handling
    this.workspaceService.getTeamMembers(this.selectedApplication.milestoneId).subscribe({
      next: (team) => {
        this.teamMembers = team;
      },
      error: (err) => {
        console.error('Failed to load team members:', err);
        this.teamMembers = [];
      }
    });

    // Load my submissions with error handling
    if (this.authService.currentUser) {
      const userId = Number(this.authService.currentUser.id);
      this.workspaceService.getMySubmissions(userId).subscribe({
        next: (submissions) => {
          this.mySubmissions = submissions.filter(s => s.milestone_id === this.selectedApplication?.milestoneId);
        },
        error: (err) => {
          console.error('Failed to load submissions:', err);
          this.mySubmissions = [];
        }
      });
    }
  }

  switchTab(tab: 'overview' | 'chat' | 'submit' | 'submissions'): void {
    this.activeTab = tab;

    if (tab === 'chat' && this.selectedApplication) {
      this.loadChat();
    }
  }

  loadChat(): void {
    if (!this.selectedApplication) return;

    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }

    // Add error handling to prevent continuous failed polling
    this.chatSubscription = this.workspaceService.pollChatMessages(this.selectedApplication.milestoneId)
      .subscribe({
        next: (messages) => {
          this.chatMessages = messages;
          setTimeout(() => this.scrollChatToBottom(), 100);
        },
        error: (err) => {
          console.error('Failed to load chat messages:', err);
          this.chatMessages = [];
          // Unsubscribe on error to prevent continuous failed requests
          if (this.chatSubscription) {
            this.chatSubscription.unsubscribe();
          }
        }
      });
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.selectedApplication || !this.authService.currentUser) return;

    const userId = Number(this.authService.currentUser.id);
    this.workspaceService.sendMessage(
      this.selectedApplication.milestoneId,
      userId,
      this.authService.currentUser.name,
      'freelancer',
      this.newMessage
    ).subscribe({
      next: () => {
        this.newMessage = '';
      },
      error: (err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message. Please try again.');
      }
    });
  }

  scrollChatToBottom(): void {
    const chatContainer = document.querySelector('.chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  submitWork(): void {
    if (!this.submissionForm.title || !this.selectedApplication || !this.authService.currentUser) {
      alert('Please fill in all required fields');
      return;
    }

    const userId = Number(this.authService.currentUser.id);
    const submission = {
      application_id: this.selectedApplication.id,
      milestone_id: this.selectedApplication.milestoneId,
      freelancer_id: userId,
      ...this.submissionForm
    };

    this.workspaceService.submitWork(submission).subscribe({
      next: () => {
        alert('Work submitted successfully!');
        this.submissionForm = {
          title: '',
          description: '',
          file_url: '',
          file_name: '',
          file_type: ''
        };
        this.loadWorkspaceData();
        this.activeTab = 'submissions';
      },
      error: (err) => {
        console.error('Failed to submit work:', err);
        alert('Failed to submit work. Please try again.');
      }
    });
  }

  getStatusClass(status: string): string {
    return status;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'pending': 'Under Review',
      'interview_scheduled': 'Interview Scheduled',
      'interview_confirmed': 'Interview Confirmed',
      'accepted': 'Accepted',
      'rejected': 'Rejected'
    };
    return labels[status] || status;
  }

  getSubmissionStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'pending': 'Pending Review',
      'approved': 'Approved',
      'revision_requested': 'Revision Requested',
      'rejected': 'Rejected'
    };
    return labels[status] || status;
  }

  getPendingCount(): number {
    return this.applications.filter(a => a.status === 'pending').length;
  }

  getInterviewCount(): number {
    return this.applications.filter(a => a.status === 'interview_scheduled' || a.status === 'interview_confirmed').length;
  }

  getAcceptedCount(): number {
    return this.applications.filter(a => a.status === 'accepted').length;
  }

  getRejectedCount(): number {
    return this.applications.filter(a => a.status === 'rejected').length;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
}
