import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NotificationBellComponent } from './components/notification-bell/notification-bell.component';
import { EventStatisticsPanelComponent } from './components/event-statistics-panel/event-statistics-panel.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { SafePipe } from './pipes/safe.pipe';
import { LocationIconComponent } from './components/location-icon/location-icon.component';
import { SubscriptionPaymentComponent } from '../frontoffice/subscription-payment/subscription-payment.component';
import { CurrencySelectorComponent } from '../frontoffice/components/currency-selector/currency-selector.component';
import { PaymentSuccessModalComponent } from '../frontoffice/components/payment-success-modal/payment-success-modal.component';
import { JobSelectorComponent } from '../frontoffice/components/job-selector/job-selector.component';

@NgModule({
  declarations: [
    ThemeToggleComponent,
    CustomDatepickerComponent,
    ConfirmModalComponent,
    ConfirmationDialogComponent,
    NotificationBellComponent,
    EventStatisticsPanelComponent,
    LocationMapComponent,
    SafePipe,
    LocationIconComponent,
    SubscriptionPaymentComponent,
    CurrencySelectorComponent,
    PaymentSuccessModalComponent,
    JobSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ThemeToggleComponent,
    CustomDatepickerComponent,
    ConfirmModalComponent,
    ConfirmationDialogComponent,
    NotificationBellComponent,
    EventStatisticsPanelComponent,
    LocationMapComponent,
    LocationIconComponent,
    SafePipe,
    SubscriptionPaymentComponent,
    CurrencySelectorComponent,
    PaymentSuccessModalComponent,
    JobSelectorComponent
  ]
})
export class SharedModule {}
