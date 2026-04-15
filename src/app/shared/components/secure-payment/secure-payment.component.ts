import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod, Payment } from '../../../frontoffice/models/subscription.model';
import { SubscriptionService } from '../../../frontoffice/services/subscription.service';
import { PromoCodeService, PromoValidationResult } from '../../../frontoffice/services/promo-code.service';
import { ribValidator } from '../../../frontoffice/utils/payment-validation';

interface PaymentFormData {
  subscriptionId: number;
  userId: number;
  amount: number;
  currency: string;
  method: PaymentMethod;
  cardholderName?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  paypalEmail?: string;
  mobileProvider?: string;
  mobileNumber?: string;
  bankName?: string;
  rib?: string;
}

@Component({
  selector: 'app-secure-payment',
  templateUrl: './secure-payment.component.html',
  styleUrls: ['./secure-payment.component.scss']
})
export class SecurePaymentComponent implements OnInit {
  @Input() subscriptionId: number = 0;
  @Input() userId: number = 0;
  @Input() amount: number = 0;
  @Input() currency: string = 'TND';
  @Output() paymentSubmitted = new EventEmitter<Payment>();
  @Output() paymentCancelled = new EventEmitter<void>();

  paymentForm: FormGroup;
  selectedMethod: PaymentMethod = 'CARD';
  isProcessing = false;
  errorMessage = '';
  successMessage = '';

  // ── Promo Code fields ──────────────────────────────────────────────────────
  promoCode: string = '';
  promoValidationResult: PromoValidationResult | null = null;
  isValidatingPromo = false;
  discountedAmount: number = 0;
  discountAmountTnd: number = 0;
  showPromoSuccess = false;

  paymentMethods: { label: string; value: PaymentMethod; icon: string }[] = [
    { label: 'Carte Bancaire', value: 'CARD', icon: '💳' },
    { label: 'PayPal', value: 'PAYPAL', icon: '🅿️' },
    { label: 'Paiement Mobile', value: 'MOBILE', icon: '📱' },
    { label: 'Virement Bancaire', value: 'BANK_TRANSFER', icon: '🏦' }
  ];

  mobileProviders = ['Ooredoo', 'Tunisie Télécom', 'Orange'];

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private promoCodeService: PromoCodeService
  ) {
    this.paymentForm = this.createForm();
  }

  ngOnInit(): void {
    this.updateFormValidators();
  }

  createForm(): FormGroup {
    return this.fb.group({
      // Common fields
      subscriptionId: [this.subscriptionId],
      userId: [this.userId],
      amount: [this.amount, [Validators.required, Validators.min(0.01)]],
      currency: [this.currency],
      method: [this.selectedMethod, Validators.required],

      // Card fields
      cardholderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{13,19}$/)]],
      cardExpiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cardCvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],

      // PayPal
      paypalEmail: ['', [Validators.email]],

      // Mobile
      mobileProvider: [''],
      mobileNumber: ['', Validators.pattern(/^5\d{7}$/)],

      // Bank Transfer
      bankName: [''],
      rib: ['']
    });
  }

  selectPaymentMethod(method: PaymentMethod): void {
    this.selectedMethod = method;
    this.paymentForm.patchValue({ method });
    this.updateFormValidators();
  }

  private updateFormValidators(): void {
    const form = this.paymentForm;

    // Reset all optional fields
    form.get('cardholderName')?.clearAsyncValidators();
    form.get('cardNumber')?.clearAsyncValidators();
    form.get('cardExpiry')?.clearAsyncValidators();
    form.get('cardCvv')?.clearAsyncValidators();
    form.get('paypalEmail')?.clearAsyncValidators();
    form.get('mobileProvider')?.clearAsyncValidators();
    form.get('mobileNumber')?.clearAsyncValidators();
    form.get('bankName')?.clearAsyncValidators();
    form.get('rib')?.clearAsyncValidators();

    // Apply validators based on selected method
    if (this.selectedMethod === 'CARD') {
      form.get('cardholderName')?.setValidators([Validators.required]);
      form.get('cardNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{13,19}$/)]);
      form.get('cardExpiry')?.setValidators([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]);
      form.get('cardCvv')?.setValidators([Validators.required, Validators.pattern(/^\d{3,4}$/)]);
    } else if (this.selectedMethod === 'PAYPAL') {
      form.get('paypalEmail')?.setValidators([Validators.required, Validators.email]);
    } else if (this.selectedMethod === 'MOBILE') {
      form.get('mobileProvider')?.setValidators([Validators.required]);
      form.get('mobileNumber')?.setValidators([Validators.required, Validators.pattern(/^5\d{7}$/)]);
    } else if (this.selectedMethod === 'BANK_TRANSFER') {
      form.get('bankName')?.setValidators([Validators.required]);
      form.get('rib')?.setValidators([Validators.required, ribValidator(), Validators.maxLength(20)]);
    }

    // Update validity
    form.get('cardholderName')?.updateValueAndValidity();
    form.get('cardNumber')?.updateValueAndValidity();
    form.get('cardExpiry')?.updateValueAndValidity();
    form.get('cardCvv')?.updateValueAndValidity();
    form.get('paypalEmail')?.updateValueAndValidity();
    form.get('mobileProvider')?.updateValueAndValidity();
    form.get('mobileNumber')?.updateValueAndValidity();
    form.get('bankName')?.updateValueAndValidity();
    form.get('rib')?.updateValueAndValidity();
  }

  submitPayment(): void {
    if (this.paymentForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs requis correctement';
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    const formData = this.paymentForm.value as PaymentFormData;

    // Create payment object based on selected method
    const payment: Payment = {
      id: 0,
      subscription: { id: formData.subscriptionId } as any,
      user: { id: formData.userId } as any,
      amount: this.discountedAmount > 0 ? this.discountedAmount : formData.amount,
      currency: formData.currency,
      method: formData.method,
      status: 'PENDING',
      transactionDate: new Date(),
      transactionRef: this.generateTransactionRef(),
      lastFourDigits: this.getLastFourDigits(),
      cardholderName: formData.cardholderName || '',
      submittedAt: new Date(),
      approvedAt: null,
      approvedBy: null,
      adminNotes: '',
      promoCode: this.promoValidationResult?.valid ? this.promoCode : undefined,
      discountAmountTnd: this.discountAmountTnd > 0 ? this.discountAmountTnd : undefined
    };

    // Add method-specific details
    if (formData.method === 'CARD') {
      payment.lastFourDigits = formData.cardNumber?.slice(-4);
      payment.cardholderName = formData.cardholderName;
    } else if (formData.method === 'PAYPAL') {
      payment.cardholderName = formData.paypalEmail;
    } else if (formData.method === 'MOBILE') {
      payment.lastFourDigits = formData.mobileNumber?.slice(-4);
      payment.cardholderName = formData.mobileProvider;
    } else if (formData.method === 'BANK_TRANSFER') {
      payment.cardholderName = formData.bankName;
    }

    // Call API to create payment
    this.subscriptionService.createPayment(payment).subscribe(
      (response: Payment) => {
        this.isProcessing = false;
        this.successMessage = 'Paiement soumis avec succès ! Vérification en cours...';
        setTimeout(() => {
          this.paymentSubmitted.emit(response);
        }, 2000);
      },
      (error: any) => {
        this.isProcessing = false;
        this.errorMessage = error.error?.message || 'Erreur lors de la soumission du paiement';
      }
    );
  }

  // ── Promo Code Methods ─────────────────────────────────────────────────────
  validatePromoCode(): void {
    if (!this.promoCode.trim()) {
      this.promoValidationResult = null;
      this.discountedAmount = 0;
      this.discountAmountTnd = 0;
      this.showPromoSuccess = false;
      return;
    }

    this.isValidatingPromo = true;
    this.promoCodeService.validate(this.promoCode, '', this.amount).subscribe(
      (result: PromoValidationResult) => {
        this.isValidatingPromo = false;
        this.promoValidationResult = result;

        if (result.valid) {
          // Calculate discount
          this.discountAmountTnd = this.amount - this.promoCodeService.applyDiscount(this.amount, result);
          this.discountedAmount = this.promoCodeService.applyDiscount(this.amount, result);
          this.showPromoSuccess = true;
          this.errorMessage = '';
          
          // Show success popup
          this.showPromoSuccessPopup();
        } else {
          this.discountedAmount = 0;
          this.discountAmountTnd = 0;
          this.showPromoSuccess = false;
          this.errorMessage = result.message;
        }
      },
      (error: any) => {
        this.isValidatingPromo = false;
        this.errorMessage = 'Erreur lors de la validation du code promo';
        this.promoValidationResult = null;
        this.discountedAmount = 0;
        this.discountAmountTnd = 0;
        this.showPromoSuccess = false;
      }
    );
  }

  showPromoSuccessPopup(): void {
    // Show popup with discount details
    const discountPercent = this.promoValidationResult?.discountValue || 10;
    const message = `✅ Code promo appliqué!\n\n` +
      `Montant original: ${this.amount.toFixed(2)} TND\n` +
      `Réduction (${discountPercent}%): -${this.discountAmountTnd.toFixed(2)} TND\n` +
      `Montant final: ${this.discountedAmount.toFixed(2)} TND`;
    
    alert(message);
  }

  clearPromoCode(): void {
    this.promoCode = '';
    this.promoValidationResult = null;
    this.discountedAmount = 0;
    this.discountAmountTnd = 0;
    this.showPromoSuccess = false;
    this.errorMessage = '';
  }

  cancel(): void {
    this.paymentCancelled.emit();
  }

  private generateTransactionRef(): string {
    return 'TXN-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  }

  private getLastFourDigits(): string {
    if (this.selectedMethod === 'CARD') {
      return this.paymentForm.get('cardNumber')?.value?.slice(-4) || '';
    } else if (this.selectedMethod === 'MOBILE') {
      return this.paymentForm.get('mobileNumber')?.value?.slice(-4) || '';
    }
    return '';
  }

  getFieldError(fieldName: string): string {
    const field = this.paymentForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Ce champ est requis';
    }
    if (fieldName === 'cardNumber' && field?.hasError('pattern')) {
      return 'Numéro de carte invalide (13-19 chiffres)';
    }
    if (fieldName === 'cardExpiry' && field?.hasError('pattern')) {
      return 'Format invalide (MM/YY)';
    }
    if (fieldName === 'cardCvv' && field?.hasError('pattern')) {
      return 'CVV invalide (3-4 chiffres)';
    }
    if (fieldName === 'paypalEmail' && field?.hasError('email')) {
      return 'Email invalide';
    }
    if (fieldName === 'mobileNumber' && field?.hasError('pattern')) {
      return 'Numéro invalide (format: 5XXXXXXXX)';
    }
    return '';
  }

  getVisibleFields(): string[] {
    const commonFields = ['amount', 'currency', 'method'];
    const methodFields: Record<PaymentMethod, string[]> = {
      CARD: ['cardholderName', 'cardNumber', 'cardExpiry', 'cardCvv'],
      PAYPAL: ['paypalEmail'],
      MOBILE: ['mobileProvider', 'mobileNumber'],
      BANK_TRANSFER: ['bankName', 'rib']
    };
    return [...commonFields, ...(methodFields[this.selectedMethod] || [])];
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

  formatCVV(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }
}
