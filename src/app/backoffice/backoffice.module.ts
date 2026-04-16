import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';

  param($m)
  $head = $m.Groups[1].Value
  $theirs = $m.Groups[2].Value
  $headLines = $head -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $theirLines = $theirs -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $unique = $theirLines | Where-Object { $headLines -notcontains import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 }
  if ($unique) { $head + "`n" + ($unique -join "`n") } else { $head }


// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,

  param($m)
  $head = $m.Groups[1].Value
  $theirs = $m.Groups[2].Value
  $headLines = $head -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $theirLines = $theirs -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $unique = $theirLines | Where-Object { $headLines -notcontains import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 }
  if ($unique) { $head + "`n" + ($unique -join "`n") } else { $head }

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,

  param($m)
  $head = $m.Groups[1].Value
  $theirs = $m.Groups[2].Value
  $headLines = $head -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $theirLines = $theirs -split "`n" | ForEach-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
.Trim() } | Where-Object { import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 -ne "" }
  $unique = $theirLines | Where-Object { $headLines -notcontains import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackofficeRoutingModule } from './backoffice-routing.module';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { FrontofficeModule } from '../frontoffice/frontoffice.module';
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6

// Layout
import { BoLayoutComponent } from './layout/bo-layout.component';
import { BoSidebarComponent } from './layout/bo-sidebar/bo-sidebar.component';
import { BoHeaderComponent } from './layout/bo-header/bo-header.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';

// Shared
import { StatCardComponent } from './shared/stat-card/stat-card.component';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { SecurePaymentComponent } from '../shared/components/secure-payment/secure-payment.component';
import { PaymentConfirmationComponent } from '../shared/components/payment-confirmation/payment-confirmation.component';

// Content management
import { ContentManagementComponent } from './content-management/content-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { CertificationManagementComponent } from './certification-management/certification-management.component';

@NgModule({
  declarations: [
    BoLayoutComponent,
    BoSidebarComponent,
    BoHeaderComponent,
    BoLoginComponent,
    StatCardComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    BoCoursesResourcesComponent,
    BoEventsComponent,
    BoProfileSettingsComponent,
    BoProjectsMilestonesComponent,
    BoSubscriptionManagementComponent,
    UserManagementComponent,
    BoSubscriptionPlanComponent,
    BoSubscriptionPayComponent,
    SubscriptionPlanComparisonComponent,
    BoSubscriptionDashboardComponent,
<<<<<<< HEAD
    CompanyProjectsComponent,
    FilterPipe,
    ProjectMilestonesManagerComponent,
    ReviewApplicationsComponent,
    BoNotificationsComponent,
    BoHistoryComponent,
    WorkspaceManagerComponent,
    RegistrationsComponent,
    CreateEventModalComponent,
    ViewEventModalComponent,
    EditEventModalComponent,
    ContentManagementComponent,
    AssessmentManagementComponent,
    CertificationManagementComponent
=======
    SecurePaymentComponent,
    PaymentConfirmationComponent
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackofficeRoutingModule,
<<<<<<< HEAD
    SharedModule
=======
    FrontofficeModule
>>>>>>> 348dc0c37fada973d27b88f9357acf99d435fbe6
  ]
})
export class BackofficeModule { }
 }
  if ($unique) { $head + "`n" + ($unique -join "`n") } else { $head }

  ]
})
export class BackofficeModule { }
