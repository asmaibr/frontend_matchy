import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoLayoutComponent } from './layout/bo-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoLoginComponent } from './layout/bo-login/bo-login.component';
import { BoCoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { BoEventsComponent } from './events/events.component';
import { BoProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { BoProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { BoSubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BoSubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { SubscriptionPlanComparisonComponent } from './subscription-plan/subscription-plan-comparison/subscription-plan-comparison.component';
import { BoSubscriptionPayComponent } from './subscription-pay/subscription-pay.component';
import { BoSubscriptionDashboardComponent } from './subscription-dashboard/subscription-dashboard.component';
import { AdminGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: BoLoginComponent
  },
  {
    path: '',
    component: BoLayoutComponent,
    // canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'courses-resources', component: BoCoursesResourcesComponent },
      { path: 'events', component: BoEventsComponent },
      { path: 'profile-settings', component: BoProfileSettingsComponent },
      { path: 'projects-milestones', component: BoProjectsMilestonesComponent },
      { path: 'subscription-management', component: BoSubscriptionManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'subscription-plan', component: BoSubscriptionPlanComponent },
      { path: 'subscription-plan-comparison', component: SubscriptionPlanComparisonComponent },
      { path: 'subscription-pay', component: BoSubscriptionPayComponent },
      { path: 'subscriptions/dashboard', component: BoSubscriptionDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
