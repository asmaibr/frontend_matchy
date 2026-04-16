import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';

// Layout
import { FoLayoutComponent } from './layout/fo-layout.component';
import { FoNavbarComponent } from './layout/fo-navbar/fo-navbar.component';
import { FoFooterComponent } from './layout/fo-footer/fo-footer.component';

// Pages
import { HomeComponent } from './home/home.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { CoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { EventsComponent } from './events/events.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { SubscriptionAbonnementComponent } from './subscription-abonnement/subscription-abonnement.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { AvailableProjectsComponent } from './available-projects/available-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { AiRecommendationsComponent } from './ai-recommendations/ai-recommendations.component';
import { RegisterComponent } from './register/register.component';
import { ChatAssistantComponent } from './chat-assistant/chat-assistant.component';
import { RegistrationModalComponent } from './events/registration-modal/registration-modal.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { AssessmentTestComponent } from './assessment-test/assessment-test.component';
import { NotificationPanelComponent } from './shared/notification-panel/notification-panel.component';

@NgModule({
  declarations: [
    FoLayoutComponent,
    FoNavbarComponent,
    FoFooterComponent,
    HomeComponent,
    ProjectsHomeComponent,
    CoursesResourcesComponent,
    EventsComponent,
    ProfileSettingsComponent,
    ProjectsMilestonesComponent,
    SubscriptionManagementComponent,
    SubscriptionAbonnementComponent,
    MySubscriptionComponent,
    AvailableProjectsComponent,
    ProjectDetailsComponent,
    MyApplicationsComponent,
    AiRecommendationsComponent,
    RegisterComponent,
    ChatAssistantComponent,
    RegistrationModalComponent,
    ContentListComponent,
    ContentDetailComponent,
    FavoritesComponent,
    AssessmentTestComponent,
    NotificationPanelComponent
  ],  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FrontofficeRoutingModule,
    SharedModule
  ],
  exports: []
})
export class FrontofficeModule {}
