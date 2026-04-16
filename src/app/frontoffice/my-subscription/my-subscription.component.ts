import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionPlan, Subscription, PaymentResponse } from '../models/subscription.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-subscription',
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss']
})
export class MySubscriptionComponent implements OnInit {
  private readonly API_URL = 'http://localhost:8081';

  // subscription state
  hasSubscription = false;
  isLoading = true;

  plan!: SubscriptionPlan;
  renewDate = new Date();
  progress = 0;
  autoRenew = false;
  showPayment = false;
  currentSubscription: Subscription | null = null;

  // payment method from last payment
  paymentMethod: string | null = null;
  subscriptionStatus = 'ACTIVE';

  // ── Trial state ──────────────────────────────────────────────────────────────
  isTrial = false;
  trialDaysRemaining = 0;
  trialEndDate: Date | null = null;
  isTrialExpired = false;

  get isTrialExpiringSoon(): boolean {
    return this.isTrial && !this.isTrialExpired && this.trialDaysRemaining <= 2;
  }

  get trialProgressPercent(): number {
    return Math.max(0, Math.min(100, ((7 - this.trialDaysRemaining) / 7) * 100));
  }

  get trialBarColor(): string {
    if (this.trialDaysRemaining <= 1) return '#ef4444';
    if (this.trialDaysRemaining <= 2) return '#f97316';
    return '#10b981';
  }

  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserSubscription();
  }

  loadUserSubscription(): void {
    this.isLoading = true;
    const userId = this.authService.currentUser?.id ?? 1;

    this.http.get<any[]>(`${this.API_URL}/subscriptions`).subscribe({
      next: (subs) => {
        // Find best subscription for this user — prioritize TRIAL > ACTIVE > PENDING
        const priority = ['TRIAL', 'ACTIVE', 'PENDING', 'EXPIRED'];
        const userSubs = subs.filter(s =>
          (s.userId === userId || s.userId == null) &&
          (s.status === 'ACTIVE' || s.status === 'PENDING' ||
           s.status === 'TRIAL' || s.status === 'EXPIRED' ||
           s.isTrial === true || s.status == null)
        );
        const userSub = userSubs.sort((a, b) => {
          // isTrial=true goes first even if status is missing
          if (a.isTrial && !b.isTrial) return -1;
          if (!a.isTrial && b.isTrial) return 1;
          const ai = priority.indexOf(a.status ?? '');
          const bi = priority.indexOf(b.status ?? '');
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        })[0];

        if (userSub) {
          this.hasSubscription = true;
          this.subscriptionStatus = userSub.status;

          // ── Trial fields ──
          this.isTrial = !!userSub.isTrial;
          this.isTrialExpired = userSub.status === 'EXPIRED';
          if (userSub.trialEndDate) {
            this.trialEndDate = new Date(userSub.trialEndDate);
            const msRemaining = this.trialEndDate.getTime() - Date.now();
            this.trialDaysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));
          }

          this.plan = {
            id: userSub.plan?.id,
            name: userSub.plan?.name || 'Unknown',
            price: userSub.priceAtPurchase || 0,
            currency: userSub.plan?.currency || 'TND',
            billingCycle: 'monthly',
            description: '',
            color: this.getPlanColor(userSub.plan?.name),
            icon: this.getPlanIcon(userSub.plan?.name)
          };

          const end = userSub.endDate ? new Date(userSub.endDate) : new Date();
          const start = userSub.startDate ? new Date(userSub.startDate) : new Date();
          this.renewDate = end;
          const total = end.getTime() - start.getTime();
          const used = Date.now() - start.getTime();
          this.progress = total > 0 ? Math.min(1, Math.max(0, used / total)) : 0;

          this.loadLastPaymentMethod(userSub.id);
        } else {
          this.hasSubscription = false;
          this.plan = this.subscriptionService.getCurrentPlan();
        }
        this.isLoading = false;
      },
      error: () => {
        const localPayments = this.subscriptionService.getLocalPayments();
        if (localPayments.length > 0) {
          const last = localPayments[0];
          this.hasSubscription = true;
          this.subscriptionStatus = 'PENDING';
          this.plan = {
            id: last.plan?.toLowerCase(),
            name: last.plan || 'Unknown',
            price: last.amount || 0,
            currency: 'TND',
            billingCycle: 'monthly',
            description: '',
            color: this.getPlanColor(last.plan),
            icon: this.getPlanIcon(last.plan)
          };
          this.paymentMethod = last.method || null;
          this.renewDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
          this.progress = 0;
        } else {
          this.hasSubscription = false;
          this.plan = this.subscriptionService.getCurrentPlan();
        }
        this.isLoading = false;
      }
    });
  }

  private loadLastPaymentMethod(subscriptionId: number): void {
    this.http.get<any[]>(`${this.API_URL}/payment`).subscribe({
      next: (payments) => {
        const match = payments.find(p => p.subscription?.id === subscriptionId);
        if (match) this.paymentMethod = match.method?.toLowerCase() || null;
      },
      error: () => {}
    });
  }

  getPaymentMethodLabel(): string {
    const icons: Record<string, string> = {
      card: '💳 Card',
      paypal: '🅿️ PayPal',
      mobile: '📱 Mobile',
      bank_transfer: '🏦 Bank Transfer'
    };
    return this.paymentMethod ? (icons[this.paymentMethod] || this.paymentMethod) : '—';
  }

  private getPlanColor(name: string): string {
    const map: Record<string, string> = { FREE: '#6b7280', PRO: '#10b981', PREMIUM: '#3b82f6' };
    return map[name?.toUpperCase()] || '#4f6ef7';
  }

  private getPlanIcon(name: string): string {
    const map: Record<string, string> = { FREE: '🌱', PRO: '⚡', PREMIUM: '👑' };
    return map[name?.toUpperCase()] || '📦';
  }

  toggleAutoRenew(): void { this.autoRenew = !this.autoRenew; }

  goToPlans(): void { this.router.navigate(['/subscription-management']); }

  changePlan(): void { this.router.navigate(['/subscription-management']); }

  upgradeNow(): void { this.router.navigate(['/subscription-payment']); }

  renew(): void {
    this.currentSubscription = this.subscriptionService.buildSubscription(this.plan, 'monthly');
    this.showPayment = true;
  }

  closePayment(): void {
    this.showPayment = false;
    this.currentSubscription = null;
  }

  onRenewSuccess(_response: PaymentResponse): void {
    this.showPayment = false;
    this.renewDate = new Date();
    this.renewDate.setMonth(this.renewDate.getMonth() + 1);
    this.progress = 0;
  }
}
