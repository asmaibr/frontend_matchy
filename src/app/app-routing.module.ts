import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleCallbackComponent } from './core/google-callback/google-callback.component';
import { SubscriptionManagementComponent } from './frontoffice/subscription-management/subscription-management.component';
import { SubscriptionAbonnementComponent } from './frontoffice/subscription-abonnement/subscription-abonnement.component';
import { SubscriptionPaymentComponent } from './frontoffice/subscription-payment/subscription-payment.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'freelancer',
    loadChildren: () =>
      import('./freelancer/freelancer.module').then(m => m.FreelancerModule)
  },
  {
    path: 'auth/google/callback',
    component: GoogleCallbackComponent
  },
  { path: 'subscription/plan', component: SubscriptionManagementComponent },
  { path: 'subscription/abonnement/:planId/:planName', component: SubscriptionAbonnementComponent },
  { path: 'subscription/payment/:subscriptionId', component: SubscriptionPaymentComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}