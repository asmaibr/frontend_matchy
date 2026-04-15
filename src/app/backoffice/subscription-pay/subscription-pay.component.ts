import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface PaymentRecord {
  id: string;
  userId?: string;
  user: string;
  email: string;
  plan: string;
  amount: number;
  currency: string;
  method: 'card' | 'paypal' | 'bank_transfer' | 'mobile';
  status: 'completed' | 'pending' | 'failed' | 'refunded' | 'approved';
  date: string;
  transactionId: string;
  rejectionReason?: string;
  submittedAt?: string;
  approvedAt?: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-bo-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrls: ['./subscription-pay.component.scss']
})
export class BoSubscriptionPayComponent implements OnInit {
  private readonly API_URL = 'http://localhost:8081';

  searchTerm = '';
  selectedStatus = 'all';
  selectedMethod = 'all';
  statuses = ['all', 'completed', 'pending', 'failed', 'refunded', 'approved'];
  methods = ['all', 'card', 'paypal', 'bank_transfer', 'mobile'];

  toastMessage = '';
  isLoadingPayments = false;

  payments: PaymentRecord[] = [];

  showDetail = false;
  selectedPayment: PaymentRecord | null = null;

  showRefundModal = false;
  paymentToRefund: PaymentRecord | null = null;

  showRejectModal = false;
  paymentToReject: PaymentRecord | null = null;
  rejectReason = '';
  rejectReasonError = false;

  showApproveModal = false;
  paymentToApprove: PaymentRecord | null = null;
  approveNotes = '';

  isProcessing = false;

  showAddModal = false;
  newPayment: Partial<PaymentRecord> = this.initNewPayment();

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadPaymentsFromBackend();
  }

  loadPaymentsFromBackend(): void {
    this.isLoadingPayments = true;
    this.http.get<any[]>(`${this.API_URL}/payment`)
      .subscribe(
        (data) => {
          // Map backend payment data to PaymentRecord
          this.payments = data.map(p => {
            // Extract plan name properly - handle enum format with multiple fallbacks
            let planName = 'Unknown';
            
            // Priority 1: Get from subscription.plan.name
            if (p.subscription?.plan?.name) {
              planName = p.subscription.plan.name;
              // Convert enum format (e.g., "PRO", "PREMIUM") to display format
              planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
            }
            // Priority 2: Guess from amount
            else if (p.amount !== undefined && p.amount !== null) {
              if (p.amount === 0) {
                planName = 'Free';
              } else if (p.amount >= 20 && p.amount <= 40) {
                planName = 'Pro';
              } else if (p.amount >= 50 && p.amount <= 100) {
                planName = 'Premium';
              } else if (p.amount > 100) {
                planName = 'Elite';
              } else {
                planName = 'Pro'; // Default
              }
            }
            // Priority 3: Get from subscription.planName (if exists)
            else if (p.subscription?.planName) {
              planName = p.subscription.planName;
              planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
            }
            
            return {
              id: p.id || `PAY-${p.id}`,
              userId: p.user?.id,
              user: p.user ? `${p.user.firstName || ''} ${p.user.lastName || ''}`.trim() || p.user.email || p.cardholderName || 'Unknown' : p.cardholderName || 'Unknown',
              email: p.user?.email || '',
              plan: planName,
              amount: p.amount || 0,
              currency: p.currency || 'TND',
              method: (p.method || 'card').toLowerCase() as any,
              status: (p.status || 'pending').toLowerCase() as any,
              date: p.transactionDate ? new Date(p.transactionDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
              transactionId: p.transactionRef || `TXN-${p.id}`,
              rejectionReason: p.adminNotes,
              submittedAt: p.submittedAt ? new Date(p.submittedAt).toISOString().split('T')[0] : undefined,
              approvedAt: p.approvedAt ? new Date(p.approvedAt).toISOString().split('T')[0] : undefined
            };
          });
          this.isLoadingPayments = false;
          
          // Log pour debug
          console.log(`✅ Loaded ${this.payments.length} payments from backend`);
          const unknownPlans = this.payments.filter(p => p.plan === 'Unknown').length;
          if (unknownPlans > 0) {
            console.warn(`⚠️ ${unknownPlans} payment(s) have Unknown plan - check database`);
          }
        },
        (error) => {
          console.error('Error loading payments:', error);
          this.isLoadingPayments = false;
          // If backend is not available, use mock data
          this.loadMockPayments();
        }
      );
  }

  private loadMockPayments(): void {
    this.payments = [
      {
        id: 'PAY-001',
        user: 'Karim Mansouri',
        email: 'karim@gmail.com',
        plan: 'Pro',
        amount: 29,
        currency: 'TND',
        method: 'card',
        status: 'completed',
        date: '2025-03-01',
        transactionId: 'TXN-A7B3C9D2E',
        approvedAt: '2025-03-01'
      },
      {
        id: 'PAY-002',
        user: 'Sara Belhaj',
        email: 'sara@gmail.com',
        plan: 'Premium',
        amount: 69,
        currency: 'TND',
        method: 'card',
        status: 'completed',
        date: '2025-02-28',
        transactionId: 'TXN-F1G4H8J5K',
        approvedAt: '2025-02-28'
      },
      {
        id: 'PAY-003',
        user: 'Ahmed Riahi',
        email: 'ahmed@gmail.com',
        plan: 'Pro',
        amount: 29,
        currency: 'TND',
        method: 'bank_transfer',
        status: 'pending',
        date: '2025-02-27',
        transactionId: 'TXN-L2M6N9P3Q',
        submittedAt: '2025-02-27'
      },
      {
        id: 'PAY-004',
        user: 'Yasmine Karoui',
        email: 'yasmine@gmail.com',
        plan: 'Pro',
        amount: 29,
        currency: 'TND',
        method: 'card',
        status: 'failed',
        date: '2025-02-25',
        transactionId: 'TXN-R4S7T1U5V',
        rejectionReason: 'Insufficient funds'
      },
      {
        id: 'PAY-005',
        user: 'Mehdi Trabelsi',
        email: 'mehdi@gmail.com',
        plan: 'Premium',
        amount: 69,
        currency: 'TND',
        method: 'mobile',
        status: 'completed',
        date: '2025-02-20',
        transactionId: 'TXN-W8X2Y6Z0A',
        approvedAt: '2025-02-20'
      },
      {
        id: 'PAY-006',
        user: 'Nour Hamdi',
        email: 'nour@gmail.com',
        plan: 'Pro',
        amount: 29,
        currency: 'TND',
        method: 'card',
        status: 'refunded',
        date: '2025-02-18',
        transactionId: 'TXN-B3C7D1E5F'
      },
      {
        id: 'PAY-007',
        user: 'Omar Jaziri',
        email: 'omar@gmail.com',
        plan: 'Premium',
        amount: 69,
        currency: 'TND',
        method: 'card',
        status: 'completed',
        date: '2025-02-15',
        transactionId: 'TXN-G9H2J4K8L',
        approvedAt: '2025-02-15'
      },
      {
        id: 'PAY-008',
        user: 'Leila Ben Ali',
        email: 'leila@gmail.com',
        plan: 'Pro',
        amount: 29,
        currency: 'TND',
        method: 'paypal',
        status: 'pending',
        date: '2025-03-05',
        transactionId: 'TXN-M3N7O1P4Q',
        submittedAt: '2025-03-05'
      }
    ];
  }

  initNewPayment(): Partial<PaymentRecord> {
    return {
      user: '',
      email: '',
      plan: 'Pro',
      amount: 29,
      currency: 'TND',
      method: 'card',
      status: 'completed'
    };
  }

  get filteredPayments(): PaymentRecord[] {
    return this.payments.filter(p => {
      const matchStatus = this.selectedStatus === 'all' || p.status === this.selectedStatus;
      const matchMethod = this.selectedMethod === 'all' || p.method === this.selectedMethod;
      const matchSearch =
        !this.searchTerm ||
        p.user.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.transactionId.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchStatus && matchMethod && matchSearch;
    });
  }

  get totalRevenue(): number {
    return this.payments.filter(p => p.status === 'completed' || p.status === 'approved').reduce((s, p) => s + p.amount, 0);
  }

  get completedCount(): number {
    return this.payments.filter(p => p.status === 'completed' || p.status === 'approved').length;
  }

  get pendingCount(): number {
    return this.payments.filter(p => p.status === 'pending').length;
  }

  get failedCount(): number {
    return this.payments.filter(p => p.status === 'failed').length;
  }

  getStatusClass(status: string): string {
    return (
      {
        completed: 'badge-success',
        approved: 'badge-success',
        pending: 'badge-warning',
        failed: 'badge-danger',
        refunded: 'badge-muted'
      }[status] || 'badge-muted'
    );
  }

  getMethodIcon(method: string): string {
    const m: Record<string, string> = {
      card: '💳',
      paypal: '🅿️',
      bank_transfer: '🏦',
      mobile: '📱'
    };
    return m[method] || '💰';
  }

  viewDetail(payment: PaymentRecord): void {
    this.selectedPayment = payment;
    this.showDetail = true;
  }

  openRefund(payment: PaymentRecord): void {
    this.paymentToRefund = payment;
    this.showRefundModal = true;
  }

  confirmRefund(): void {
    if (this.paymentToRefund) {
      const idx = this.payments.findIndex(p => p.id === this.paymentToRefund!.id);
      if (idx >= 0) {
        this.payments[idx] = { ...this.payments[idx], status: 'refunded' };
      }
      this.showRefundModal = false;
      this.paymentToRefund = null;
      this.showToast('Paiement remboursé avec succès');
    }
  }

  openApprove(payment: PaymentRecord): void {
    this.paymentToApprove = payment;
    this.approveNotes = '';
    this.showApproveModal = true;
  }

  confirmApprove(): void {
    if (this.paymentToApprove) {
      this.isProcessing = true;
      const cleanId = this.paymentToApprove.id.toString().replace('PAY-', '');
      // adminId is optional - pass null if no admin session
      const url = `${this.API_URL}/payment/${cleanId}/approve?adminNotes=${encodeURIComponent(this.approveNotes)}`;
      this.http.post(url, {})
        .subscribe(
          (response: any) => {
            this.isProcessing = false;
            this.showApproveModal = false;
            this.paymentToApprove = null;
            this.approveNotes = '';
            this.showToast('✅ Paiement approuvé avec succès - Subscription activée');
            // Reload from backend to get persisted data
            this.loadPaymentsFromBackend();
            // Trigger subscription-management to refresh (via window event)
            window.dispatchEvent(new CustomEvent('paymentApproved', { detail: { message: 'Payment approved, subscription activated' } }));
          },
          (error) => {
            console.error('Error approving payment:', error);
            this.isProcessing = false;
            this.showApproveModal = false;
            this.paymentToApprove = null;
            this.approveNotes = '';
            this.showToast('❌ Erreur: ' + (error?.error || error?.message || 'Vérifiez le backend'));
          }
        );
    }
  }

  openReject(payment: PaymentRecord): void {
    this.paymentToReject = payment;
    this.rejectReason = '';
    this.showRejectModal = true;
  }

  confirmReject(): void {
    if (this.paymentToReject && this.rejectReason.trim()) {
      this.isProcessing = true;
      const cleanId = this.paymentToReject.id.toString().replace('PAY-', '');
      // adminId is optional
      const url = `${this.API_URL}/payment/${cleanId}/reject?reason=${encodeURIComponent(this.rejectReason)}`;
      this.http.post(url, {})
        .subscribe(
          (response: any) => {
            this.isProcessing = false;
            this.showRejectModal = false;
            this.paymentToReject = null;
            this.rejectReason = '';
            this.rejectReasonError = false;
            this.showToast('❌ Paiement rejeté - Email envoyé à l\'utilisateur');
            // Reload from backend to get persisted data
            this.loadPaymentsFromBackend();
          },
          (error) => {
            console.error('Error rejecting payment:', error);
            this.isProcessing = false;
            this.showRejectModal = false;
            this.paymentToReject = null;
            this.rejectReason = '';
            this.rejectReasonError = false;
            this.showToast('❌ Erreur: ' + (error?.error || error?.message || 'Vérifiez le backend'));
          }
        );
    } else {
      this.rejectReasonError = true;
    }
  }

  closeModal(): void {
    this.showDetail = false;
    this.showRefundModal = false;
    this.showAddModal = false;
    this.showRejectModal = false;
    this.showApproveModal = false;
    this.selectedPayment = null;
    this.paymentToRefund = null;
    this.paymentToReject = null;
    this.paymentToApprove = null;
  }

  isEditMode = false;
  editingId: string | null = null;

  openAddModal(): void {
    this.isEditMode = false;
    this.editingId = null;
    this.newPayment = this.initNewPayment();
    this.showAddModal = true;
  }

  openEdit(payment: PaymentRecord): void {
    this.isEditMode = true;
    this.editingId = payment.id;
    this.newPayment = { ...payment };
    this.showAddModal = true;
  }

  deletePayment(payment: PaymentRecord): void {
    if (confirm('Are you sure you want to delete this payment?')) {
      // Backend numeric ID parsing (strip 'PAY-' prefix if any)
      const cleanId = payment.id.toString().replace('PAY-', '');
      this.http.delete(`${this.API_URL}/payment/${cleanId}`)
        .subscribe(
          () => {
            this.payments = this.payments.filter(p => p.id !== payment.id);
            this.showToast('Payment deleted successfully');
          },
          (error) => {
            console.error('Error deleting payment:', error);
            // Fallback for mock data
            this.payments = this.payments.filter(p => p.id !== payment.id);
            this.showToast('Payment deleted (local mock)');
          }
        );
    }
  }

  savePayment(): void {
    // If edit mode
    if (this.isEditMode && this.editingId) {
      const cleanId = this.editingId.toString().replace('PAY-', '');
      
      // Prepare update payload
      const updatePayload: any = {
        amount: this.newPayment.amount,
        currency: this.newPayment.currency,
        method: this.newPayment.method?.toUpperCase(),
        status: this.newPayment.status?.toUpperCase(),
        cardholderName: this.newPayment.user
      };
      
      this.http.put(`${this.API_URL}/payment/${cleanId}`, updatePayload)
        .subscribe(
          (response: any) => {
            // Extract updated plan name from response
            let planName = 'Unknown';
            if (response.subscription?.plan?.name) {
              planName = response.subscription.plan.name;
              planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
            }
            
            const idx = this.payments.findIndex(p => p.id === this.editingId);
            if (idx >= 0) {
              this.payments[idx] = {
                ...this.payments[idx],
                user: response.user ? `${response.user.firstName || ''} ${response.user.lastName || ''}`.trim() : this.payments[idx].user,
                email: response.user?.email || this.payments[idx].email,
                plan: planName,
                amount: response.amount || this.payments[idx].amount,
                currency: response.currency || this.payments[idx].currency,
                method: (response.method || this.payments[idx].method).toLowerCase() as any,
                status: (response.status || this.payments[idx].status).toLowerCase() as any
              };
            }
            this.closeModal();
            this.showToast('✅ Payment updated - Subscription synchronized');
            // Reload to get fresh data
            setTimeout(() => this.loadPaymentsFromBackend(), 500);
          },
          (error) => {
            console.error('Error updating payment:', error);
            // Fallback for mock
            const idx = this.payments.findIndex(p => p.id === this.editingId);
            if (idx >= 0) {
              this.payments[idx] = { ...this.payments[idx], ...this.newPayment } as PaymentRecord;
            }
            this.closeModal();
            this.showToast('Payment updated (local mock)');
          }
        );
    } else {
      // Create mode
      this.http.post(`${this.API_URL}/payment`, this.newPayment)
        .subscribe(
          (response: any) => {
            // Extract plan name from response
            let planName = 'Pro';
            if (response.subscription?.plan?.name) {
              planName = response.subscription.plan.name;
              planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
            }
            
            const newRecord: PaymentRecord = {
              id: response.id ? `PAY-${response.id}` : `PAY-${Math.random().toString().substring(2,8)}`,
              user: response.user?.firstName ? `${response.user.firstName} ${response.user.lastName}` : (this.newPayment.user || 'Unknown'),
              email: response.user?.email || this.newPayment.email || '',
              plan: planName,
              amount: response.amount || this.newPayment.amount || 0,
              currency: response.currency || this.newPayment.currency || 'TND',
              method: (response.method || this.newPayment.method || 'card').toLowerCase() as any,
              status: (response.status || this.newPayment.status || 'completed').toLowerCase() as any,
              date: new Date().toISOString().split('T')[0],
              transactionId: response.transactionRef || `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
            };
            this.payments.unshift(newRecord);
            this.closeModal();
            this.showToast('Payment added successfully');
          },
          (error) => {
            console.error('Error creating payment:', error);
            // Fallback for mock
            const p: PaymentRecord = {
              id: `PAY-${String(this.payments.length + 1).padStart(3, '0')}`,
              user: this.newPayment.user || 'Unknown User',
              email: this.newPayment.email || 'unknown@example.com',
              plan: this.newPayment.plan || 'Pro',
              amount: this.newPayment.amount || 0,
              currency: this.newPayment.currency || 'TND',
              method: (this.newPayment.method as PaymentRecord['method']) || 'card',
              status: (this.newPayment.status as PaymentRecord['status']) || 'completed',
              date: new Date().toISOString().split('T')[0],
              transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
            };
            this.payments.unshift(p);
            this.closeModal();
            this.showToast('Payment added (local mock)');
          }
        );
    }
  }

  exportCSV(): void {
    const headers = ['ID', 'User', 'Email', 'Plan', 'Amount', 'Currency', 'Method', 'Status', 'Date', 'Transaction ID'];
    const rows = this.filteredPayments.map(p => [
      p.id, p.user, p.email, p.plan, p.amount, p.currency, p.method, p.status, p.date, p.transactionId
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'payments.csv';
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('CSV exported successfully');
  }

  exportExcel(): void {
    // Basic export as CSV with .xls extension for Excel compatibility
    const headers = ['ID', 'User', 'Email', 'Plan', 'Amount', 'Currency', 'Method', 'Status', 'Date', 'Transaction ID'];
    const rows = this.filteredPayments.map(p => [
      p.id, p.user, p.email, p.plan, p.amount, p.currency, p.method, p.status, p.date, p.transactionId
    ]);
    const csv = [headers.join('\t'), ...rows.map(r => r.join('\t'))].join('\n');
    const blob = new Blob([csv], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'payments.xls';
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('Excel exported successfully');
  }

  exportPDF(): void {
    // Use jsPDF for PDF export
    import('jspdf').then(({ jsPDF }) => {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text('Payment Report', 14, 20);
      doc.setFontSize(10);
      let y = 35;
      this.filteredPayments.forEach((p, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(`${p.id} | ${p.user} | ${p.plan} | ${p.amount} ${p.currency} | ${p.status} | ${p.date}`, 14, y);
        y += 7;
      });
      doc.save('payments.pdf');
      this.showToast('PDF exported successfully');
    });
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = '';
    }, 3000);
  }
}
