import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Payment } from '../../../frontoffice/models/subscription.model';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {
  @Input() payment: Payment | null = null;
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();

  paymentStatus: 'pending' | 'approved' | 'rejected' = 'pending';
  formattedDate: string = '';

  ngOnInit(): void {
    if (this.payment) {
      this.updatePaymentStatus();
      this.formatDate();
    }
  }

  ngOnChanges(): void {
    if (this.payment) {
      this.updatePaymentStatus();
      this.formatDate();
    }
  }

  private updatePaymentStatus(): void {
    if (!this.payment) return;
    
    if (this.payment.status === 'PENDING') {
      this.paymentStatus = 'pending';
    } else if (this.payment.status === 'COMPLETED') {
      this.paymentStatus = 'approved';
    } else if (this.payment.status === 'FAILED') {
      this.paymentStatus = 'rejected';
    }
  }

  private formatDate(): void {
    if (!this.payment || !this.payment.transactionDate) return;
    
    const date = new Date(this.payment.transactionDate);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    this.formattedDate = date.toLocaleDateString('fr-FR', options);
  }

  getStatusIcon(): string {
    switch (this.paymentStatus) {
      case 'pending':
        return '⏳';
      case 'approved':
        return '✅';
      case 'rejected':
        return '❌';
      default:
        return '❓';
    }
  }

  getStatusText(): string {
    switch (this.paymentStatus) {
      case 'pending':
        return 'Paiement en attente de vérification';
      case 'approved':
        return 'Paiement approuvé avec succès';
      case 'rejected':
        return 'Paiement rejeté';
      default:
        return 'Statut inconnu';
    }
  }

  getStatusColor(): string {
    switch (this.paymentStatus) {
      case 'pending':
        return 'warning';
      case 'approved':
        return 'success';
      case 'rejected':
        return 'danger';
      default:
        return 'info';
    }
  }

  getPendingMessage(): string {
    return 'Votre paiement a été reçu et est actuellement examiné par notre équipe. Vérification typique : 24 heures.';
  }

  getApprovedMessage(): string {
    return 'Merci ! Votre paiement a été approuvé. Votre abonnement est maintenant actif et vous pouvez accéder à vos services.';
  }

  getRejectedMessage(): string {
    return 'Votre paiement a été rejeté. Veuillez vérifier vos informations et réessayer, ou contactez notre support.';
  }

  close(): void {
    this.closeModal.emit();
  }

  downloadReceipt(): void {
    if (!this.payment) return;
    
    const content = `
REÇU DE PAIEMENT
================
Référence: ${this.payment.transactionRef || this.payment.id}
Montant: ${this.payment.amount} ${this.payment.currency}
Date: ${this.formattedDate}
Statut: ${this.getStatusText()}
Méthode: ${this.getPaymentMethodText()}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${this.payment.transactionRef || this.payment.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private getPaymentMethodText(): string {
    const methods: Record<string, string> = {
      'CARD': 'Carte bancaire',
      'PAYPAL': 'PayPal',
      'MOBILE': 'Paiement mobile',
      'BANK_TRANSFER': 'Virement bancaire'
    };
    return methods[this.payment?.method || 'CARD'] || this.payment?.method || 'Inconnu';
  }

  goToSubscription(): void {
    window.location.href = '/subscription-management';
  }
}
