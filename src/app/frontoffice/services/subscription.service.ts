import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  SubscriptionPlan, Subscription, Payment, PaymentResponse,
  SubscriptionStatus, PaymentStatus, PaymentMethod, PaymentPayload, PaymentCurrency
} from '../models/subscription.model';
import { CurrencyService } from './currency.service';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {

  private readonly API_URL = 'http://localhost:8081'; // Adjust based on your backend URL

  constructor(private readonly currencyService: CurrencyService, private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private selectedPlanSubject = new BehaviorSubject<SubscriptionPlan | null>(null);
  selectedPlan$ = this.selectedPlanSubject.asObservable();

  private billingCycleSubject = new BehaviorSubject<'monthly' | 'yearly'>('monthly');
  billingCycle$ = this.billingCycleSubject.asObservable();

  private currentSubscriptionSubject = new BehaviorSubject<Subscription | null>(null);
  currentSubscription$ = this.currentSubscriptionSubject.asObservable();

  private readonly STORAGE_KEY = 'matchy_subscription_plans';

  private plans: SubscriptionPlan[] = [
    {
      id: 'free', name: 'Free', price: 0, currency: 'TND', billingCycle: 'monthly',
      description: 'Perfect to get started as a freelancer.',
      features: ['Up to 3 active bids', 'Basic profile', 'Community access', 'Standard support'],
      isPopular: false, isCurrent: false, color: '#6b7280', icon: '🌱'
    },
    {
      id: 'pro', name: 'Pro', price: 29, currency: 'TND', billingCycle: 'monthly',
      description: 'For serious freelancers who want to grow.',
      features: ['Unlimited bids', 'Featured profile', 'Priority in search results', 'Analytics dashboard', 'Badge Pro', 'Priority support'],
      isPopular: true, isCurrent: false, color: '#10b981', icon: '⚡'
    },
    {
      id: 'premium', name: 'Premium', price: 69, currency: 'TND', billingCycle: 'monthly',
      description: 'For top freelancers and agencies.',
      features: ['Everything in Pro', 'Dedicated account manager', 'Team workspace', 'White-label proposals', 'API access', '24/7 support'],
      isPopular: false, isCurrent: false, color: '#3b82f6', icon: '👑'
    }
  ];

  private saveToLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.plans));
    }
  }

  private loadFromLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        try {
          let loadedPlans: SubscriptionPlan[] = JSON.parse(stored);
          let modified = false;
          loadedPlans = loadedPlans.map(plan => {
            if (plan.id === 'elite') { plan.id = 'premium'; plan.name = 'Premium'; modified = true; }
            if (plan.isCurrent) { plan.isCurrent = false; modified = true; }
            return plan;
          });
          this.plans = loadedPlans;
          if (modified) this.saveToLocalStorage();
        } catch (e) { console.error('Error parsing stored plans', e); }
      }
    }
  }

  getPlans(billingCycle: 'monthly' | 'yearly'): SubscriptionPlan[] {
    return this.plans.map(plan => ({
      ...plan, billingCycle,
      price: billingCycle === 'yearly' ? Math.round(plan.price * 12 * 0.80) : plan.price
    }));
  }

  addPlan(plan: SubscriptionPlan): void { this.plans.push(plan); this.saveToLocalStorage(); }
  updatePlan(plan: SubscriptionPlan): void {
    const idx = this.plans.findIndex(p => p.id === plan.id);
    if (idx !== -1) { this.plans[idx] = plan; this.saveToLocalStorage(); }
  }
  deletePlan(id: string): void { this.plans = this.plans.filter(p => p.id !== id); this.saveToLocalStorage(); }
  setSelectedPlan(plan: SubscriptionPlan): void { this.selectedPlanSubject.next(plan); }
  getSelectedPlan(): SubscriptionPlan | null { return this.selectedPlanSubject.getValue(); }
  setBillingCycle(cycle: 'monthly' | 'yearly'): void { this.billingCycleSubject.next(cycle); }

  buildSubscription(plan: SubscriptionPlan, billingCycle: 'monthly' | 'yearly'): Subscription {
    const duration = billingCycle === 'monthly' ? 1 : 12;
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + duration);
    return { plan, priceAtPurchase: plan.price, duration, startDate, endDate, status: 'PENDING' as SubscriptionStatus };
  }

  buildPayment(subscription: Subscription, paymentData: Partial<Payment>): Payment {
    const cur = this.currencyService.getCurrency() as PaymentCurrency;
    const amountTnd = paymentData.amountOriginalTnd ?? subscription.priceAtPurchase;
    return {
      subscription,
      amount: this.currencyService.convertFromTnd(amountTnd),
      amountOriginalTnd: amountTnd,
      currency: cur,
      method: paymentData.method || 'CARD',
      status: 'PENDING' as PaymentStatus,
      cardNumber: paymentData.cardNumber,
      expiryDate: paymentData.expiryDate,
      cvv: paymentData.cvv,
      cardholderName: paymentData.cardholderName,
      paypalEmail: paymentData.paypalEmail,
      mobileProvider: paymentData.mobileProvider,
      mobilePhone: paymentData.mobilePhone,
      mobileTransactionCode: paymentData.mobileTransactionCode,
      bankName: paymentData.bankName,
      rib: paymentData.rib,
      accountHolder: paymentData.accountHolder,
      transferReference: paymentData.transferReference,
      promoCode: paymentData.promoCode,
      discountAmountTnd: paymentData.discountAmountTnd,
      lastFourDigits: paymentData.cardNumber ? paymentData.cardNumber.replace(/\D/g, '').slice(-4) : undefined,
      transactionDate: new Date()
    };
  }

  private toApiMethod(m: PaymentMethod): PaymentPayload['paymentMethod'] {
    const map: Record<PaymentMethod, PaymentPayload['paymentMethod']> = {
      CARD: 'card', PAYPAL: 'paypal', MOBILE: 'mobile', BANK_TRANSFER: 'bank_transfer'
    };
    return map[m] ?? 'card';
  }

  createPayment(payment: Payment): Observable<any> {
    return this.http.post(`${this.API_URL}/payment`, payment);
  }

  // localStorage key for offline payments
  private readonly LOCAL_PAYMENTS_KEY = 'matchy_local_payments';

  private savePaymentLocally(payment: Payment, ref: string, userId: number): void {
    try {
      const existing = JSON.parse(localStorage.getItem(this.LOCAL_PAYMENTS_KEY) || '[]');
      existing.unshift({
        id: 'LOCAL-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        user: 'User #' + userId,
        email: '',
        plan: payment.subscription?.plan?.name || 'Unknown',
        amount: payment.amountOriginalTnd ?? payment.amount,
        currency: 'TND',
        method: (payment.method || 'CARD').toLowerCase(),
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
        transactionId: ref,
        submittedAt: new Date().toISOString().split('T')[0]
      });
      localStorage.setItem(this.LOCAL_PAYMENTS_KEY, JSON.stringify(existing));
    } catch { /* ignore */ }
  }

  getLocalPayments(): any[] {
    try {
      return JSON.parse(localStorage.getItem(this.LOCAL_PAYMENTS_KEY) || '[]');
    } catch { return []; }
  }

  clearLocalPayments(): void {
    localStorage.removeItem(this.LOCAL_PAYMENTS_KEY);
  }

  processPayment(payment: Payment, userId: string): Observable<PaymentResponse> {
    const ref = `TXN-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const numericUserId = userId && userId !== 'guest' ? Number(userId) : 1;
    const planId = payment.subscription?.plan?.id;
    const numericPlanId = planId && !isNaN(Number(planId)) ? Number(planId) : null;

    const createSubscription$ = this.http.post<any>(`${this.API_URL}/subscriptions`, {
      priceAtPurchase: payment.amountOriginalTnd ?? payment.amount,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      // Don't force status — backend decides (TRIAL for PRO/PREMIUM, PENDING otherwise)
      userId: numericUserId,
      plan: numericPlanId ? { id: numericPlanId } : null,
      planName: payment.subscription?.plan?.name?.toUpperCase() ?? null
    });

    return createSubscription$.pipe(
      switchMap((createdSub: any) => {
        const paymentPayload = {
          amount: payment.amountOriginalTnd ?? payment.amount,
          currency: 'TND',
          method: payment.method,
          status: 'PENDING',
          transactionRef: ref,
          cardholderName: payment.cardholderName,
          paypalEmail: payment.paypalEmail,
          mobileProvider: payment.mobileProvider,
          mobilePhone: payment.mobilePhone,
          bankName: payment.bankName,
          rib: payment.rib,
          accountHolder: payment.accountHolder,
          subscription: { id: createdSub.id },
          userId: numericUserId,
          promoCode: payment.promoCode,
          discountAmountTnd: payment.discountAmountTnd
        };
        return this.http.post<any>(`${this.API_URL}/payment`, paymentPayload);
      }),
      map((res): PaymentResponse => ({
        success: true,
        message: 'Your payment has been submitted and is awaiting admin confirmation. You will receive a confirmation email once approved.',
        paymentId: String(res.id),
        transactionId: res.transactionRef || ref,
        transactionRef: res.transactionRef || ref
      })),
      catchError((err) => {
        console.warn('[processPayment] backend unavailable — saving locally:', err?.message);
        // Save to localStorage so backoffice can show it even without backend
        this.savePaymentLocally(payment, ref, numericUserId);
        return of<PaymentResponse>({
          success: true,
          message: 'Your payment has been submitted and is awaiting admin confirmation. You will receive a confirmation email once approved.',
          paymentId: 'PAY-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
          transactionId: ref,
          transactionRef: ref
        });
      })
    );
  }

  activateSubscription(subscription: Subscription): Subscription {
    const activated: Subscription = { ...subscription, id: Math.floor(Math.random() * 1000000), status: 'ACTIVE' as SubscriptionStatus };
    this.currentSubscriptionSubject.next(activated);
    return activated;
  }

  getCurrentPlan(): SubscriptionPlan {
    return this.plans.find(p => p.isCurrent) || this.plans[0];
  }
}
