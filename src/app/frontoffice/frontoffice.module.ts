import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';

// Layout
import { FoLayoutComponent } from './layout/fo-layout.component';
import { FoNavbarComponent } from './layout/fo-navbar/fo-navbar.component';
import { FoFooterComponent } from './layout/fo-footer/fo-footer.component';

// Pages
import { HomeComponent } from './home/home.component';
import { CoursesResourcesComponent } from './courses-resources/courses-resources.component';
import { EventsComponent } from './events/events.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProjectsMilestonesComponent } from './projects-milestones/projects-milestones.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { SubscriptionAbonnementComponent } from './subscription-abonnement/subscription-abonnement.component';
import { SubscriptionPaymentComponent } from './subscription-payment/subscription-payment.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { PaymentSuccessModalComponent } from './components/payment-success-modal/payment-success-modal.component';
import { JobSelectorComponent } from './components/job-selector/job-selector.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';

@NgModule({
  declarations: [
    FoLayoutComponent,
    FoNavbarComponent,
    FoFooterComponent,
    HomeComponent,
    CoursesResourcesComponent,
    EventsComponent,
    ProfileSettingsComponent,
    ProjectsMilestonesComponent,
    SubscriptionManagementComponent,
    SubscriptionAbonnementComponent,
    SubscriptionPaymentComponent,
    CurrencySelectorComponent,
    PaymentSuccessModalComponent,
    JobSelectorComponent,
    MySubscriptionComponent,
    PaymentSuccessComponent,
    PaymentFailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FrontofficeRoutingModule
  ],
  exports: [
    SubscriptionPaymentComponent,
    CurrencySelectorComponent,
    PaymentSuccessModalComponent,
    JobSelectorComponent
  ]
})
export class FrontofficeModule {}
