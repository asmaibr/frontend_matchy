import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionPlan } from '../../frontoffice/models/subscription.model';
import { SubscriptionService } from '../../frontoffice/services/subscription.service';

interface SubRecord {
  id: number;
  user: string;
  email: string;
  plan: string;
  amount: number;
  currency: string;
  startDate: string;
  endDate: string;
  status: string;
  nextBilling?: string;
  isNew?: boolean; // highlight newly arrived records
}

@Component({
  selector: 'app-bo-subscription-management',
  templateUrl: './subscription-management.component.html',
  styleUrls: ['./subscription-management.component.scss']
})
export class BoSubscriptionManagementComponent implements OnInit, OnDestroy {
  private readonly API_URL = 'http://localhost:8081';
  private pollInterval: any;
  private knownIds = new Set<number>();

  searchTerm = '';
  selectedPlanFilter = 'all';
  selectedStatusFilter = 'all';
  plans = ['all', 'free', 'pro', 'premium'];
  statuses = ['all', 'active', 'pending', 'cancelled', 'expired'];
  planPrices: Record<string, number> = { free: 0, pro: 29, premium: 69 };

  subscriptions: SubRecord[] = [];
  isLoading = false;
  toastMessage = '';

  // Modal states
  showViewModal = false;
  showDeleteModal = false;
  showAddEditModal = false;
  showPaymentModal = false;

  selectedSub: SubRecord | null = null;
  subToDelete: SubRecord | null = null;
  subForUpgrade: SubRecord | null = null;

  isEditing = false;
  subForm: SubRecord = this.emptyForm();

  upgradeToNewPlan: string | number | null | undefined = null;
  plans_data: SubscriptionPlan[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.plans_data = this.subscriptionService.getPlans('monthly');
    this.loadFromBackend();
    // Poll every 20s to catch new payments from frontoffice
    this.pollInterval = setInterval(() => this.loadFromBackend(false), 20000);
    
    // Listen for payment approval events from subscription-pay component
    window.addEventListener('paymentApproved', (event: any) => {
      console.log('🔔 Payment approved event received - refreshing subscriptions');
      this.loadFromBackend(false);
    });
  }

  ngOnDestroy(): void {
    if (this.pollInterval) clearInterval(this.pollInterval);
  }

  loadFromBackend(showLoader = true): void {
    if (showLoader) this.isLoading = true;
    this.http.get<any[]>(`${this.API_URL}/subscriptions`).subscribe({
      next: (data) => {
        const mapped: SubRecord[] = data.map(s => {
          // Calculate next billing (1 month after start date, or use end date)
          let nextBilling = '-';
          if (s.startDate) {
            const startDate = new Date(s.startDate);
            startDate.setMonth(startDate.getMonth() + 1);
            nextBilling = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          }

          // Extract plan name properly - handle enum format
          let planName = 'Pro'; // default
          if (s.plan?.name) {
            planName = s.plan.name;
            // Convert enum format (e.g., "PRO", "PREMIUM", "FREE") to display format
            planName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
          } else if (s.planName) {
            planName = s.planName;
          } else if (s.priceAtPurchase === 69) {
            planName = 'Premium';
          } else if (s.priceAtPurchase === 0) {
            planName = 'Free';
          }

          // Get user info - either from User entity (if exists) or from userId
          let userName = 'Unknown';
          let userEmail = '';
          
          if (s.user) {
            // User entity exists (backward compatibility)
            userName = `${s.user.firstName || ''} ${s.user.lastName || ''}`.trim() || s.user.email || 'Unknown';
            userEmail = s.user.email || '';
          } else if (s.userId) {
            // Only userId exists - will fetch from User microservice
            // For now, display userId as placeholder
            userName = `User #${s.userId}`;
            userEmail = `user-${s.userId}@matchy.tn`;
          }

          return {
            id: s.id,
            user: userName,
            email: userEmail,
            plan: planName.toLowerCase(), // Display in html uses titlecase
            amount: s.priceAtPurchase || 0,
            currency: s.plan?.currency || 'TND',
            startDate: s.startDate ? new Date(s.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '',
            endDate: s.endDate ? new Date(s.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '',
            nextBilling: nextBilling,
            status: (s.status || 'pending').toLowerCase(),
            isNew: !this.knownIds.has(s.id)
          };
        });
        // detect new entries and show toast
        const newOnes = mapped.filter(s => s.isNew);
        if (newOnes.length > 0 && this.knownIds.size > 0) {
          this.showToast(`🔔 ${newOnes.length} new subscription(s) received`);
        }
        mapped.forEach(s => this.knownIds.add(s.id));
        this.subscriptions = mapped;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  get filteredSubscriptions(): SubRecord[] {
    return this.subscriptions.filter(s => {
      const matchPlan = this.selectedPlanFilter === 'all' || s.plan === this.selectedPlanFilter;
      const matchStatus = this.selectedStatusFilter === 'all' || s.status === this.selectedStatusFilter;
      const matchSearch = !this.searchTerm ||
        s.user.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchPlan && matchStatus && matchSearch;
    });
  }

  get totalMRR(): number {
    return this.subscriptions
      .filter(s => s.status === 'active')
      .reduce((sum, s) => sum + s.amount, 0);
  }

  get activeCount(): number { return this.subscriptions.filter(s => s.status === 'active').length; }
  get pendingCount(): number { return this.subscriptions.filter(s => s.status === 'pending').length; }
  get cancelledCount(): number { return this.subscriptions.filter(s => s.status === 'cancelled').length; }

  getPlanClass(plan: string): string {
    return ({ free: 'muted', pro: 'primary', premium: 'warning', elite: 'warning' } as Record<string, string>)[plan] || 'primary';
  }

  getStatusClass(status: string): string {
    return ({ active: 'badge-success', pending: 'badge-warning', cancelled: 'badge-danger', expired: 'badge-muted' } as Record<string, string>)[status] || 'badge-muted';
  }

  private emptyForm(): SubRecord {
    return { id: 0, user: '', email: '', plan: 'pro', amount: 29, currency: 'TND', startDate: new Date().toISOString().split('T')[0], endDate: '', status: 'active', nextBilling: '-' };
  }

  viewSub(sub: SubRecord): void { this.selectedSub = sub; this.showViewModal = true; }

  openAddSubscription(): void {
    this.isEditing = false;
    this.subForm = this.emptyForm();
    this.showAddEditModal = true;
  }

  openEditSubscription(sub: SubRecord): void {
    this.isEditing = true;
    this.subForm = { ...sub };
    this.showAddEditModal = true;
  }

  openUpgradeModal(sub: SubRecord): void {
    this.subForUpgrade = sub;
    this.upgradeToNewPlan = null;
    this.showPaymentModal = true;
  }

  openUpgradePayment(sub: SubRecord): void {
    this.openUpgradeModal(sub);
  }

  onPlanChange(): void {
    this.subForm.amount = this.planPrices[this.subForm.plan] || 0;
  }

  saveSubscription(): void {
    if (this.isEditing) {
      const idx = this.subscriptions.findIndex(s => s.id === this.subForm.id);
      if (idx !== -1) this.subscriptions[idx] = { ...this.subForm };
    } else {
      this.subForm.id = Date.now();
      this.subscriptions.unshift({ ...this.subForm });
    }
    this.closeModal();
  }

  confirmUpgrade(): void {
    if (!this.subForUpgrade || !this.upgradeToNewPlan) return;
    const newPlan = this.plans_data.find(p => p.id === this.upgradeToNewPlan);
    if (!newPlan) return;
    const idx = this.subscriptions.findIndex(s => s.id === this.subForUpgrade!.id);
    if (idx !== -1) {
      this.subscriptions[idx] = {
        ...this.subscriptions[idx],
        plan: newPlan.name.toLowerCase(),
        amount: newPlan.price,
        status: 'pending'
      };
    }
    this.showToast('Plan upgraded — status set to Pending');
    this.closeModal();
  }

  confirmDelete(sub: SubRecord): void { this.subToDelete = sub; this.showDeleteModal = true; }

  deleteSub(): void {
    if (this.subToDelete) {
      this.subscriptions = this.subscriptions.filter(s => s.id !== this.subToDelete!.id);
      this.showDeleteModal = false;
      this.subToDelete = null;
    }
  }

  closeModal(): void {
    this.showViewModal = false;
    this.showDeleteModal = false;
    this.showAddEditModal = false;
    this.showPaymentModal = false;
    this.selectedSub = null;
    this.subToDelete = null;
    this.subForUpgrade = null;
    this.upgradeToNewPlan = null;
  }

  // ── Exports ──────────────────────────────────────────────

  exportCSV(): void {
    const headers = ['ID', 'User', 'Email', 'Plan', 'Amount', 'Currency', 'Start Date', 'End Date', 'Status'];
    const rows = this.filteredSubscriptions.map(s =>
      [s.id, s.user, s.email, s.plan, s.amount, s.currency, s.startDate, s.endDate, s.status].join(',')
    );
    this.downloadFile([headers.join(','), ...rows].join('\n'), 'subscriptions.csv', 'text/csv');
  }

  exportExcel(): void {
    const headers = ['ID', 'User', 'Email', 'Plan', 'Amount', 'Currency', 'Start Date', 'End Date', 'Status'];
    let xml = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?>';
    xml += '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    xml += '<Worksheet ss:Name="Subscriptions"><Table>';
    xml += '<Row>' + headers.map(h => `<Cell><Data ss:Type="String">${h}</Data></Cell>`).join('') + '</Row>';
    this.filteredSubscriptions.forEach(s => {
      xml += `<Row>
        <Cell><Data ss:Type="Number">${s.id}</Data></Cell>
        <Cell><Data ss:Type="String">${s.user}</Data></Cell>
        <Cell><Data ss:Type="String">${s.email}</Data></Cell>
        <Cell><Data ss:Type="String">${s.plan}</Data></Cell>
        <Cell><Data ss:Type="Number">${s.amount}</Data></Cell>
        <Cell><Data ss:Type="String">${s.currency}</Data></Cell>
        <Cell><Data ss:Type="String">${s.startDate}</Data></Cell>
        <Cell><Data ss:Type="String">${s.endDate}</Data></Cell>
        <Cell><Data ss:Type="String">${s.status}</Data></Cell>
      </Row>`;
    });
    xml += '</Table></Worksheet></Workbook>';
    this.downloadFile(xml, 'subscriptions.xls', 'application/vnd.ms-excel');
  }

  exportPDF(): void {
    const rows = this.filteredSubscriptions.map(s =>
      `<tr>
        <td>${s.id}</td><td>${s.user}</td><td>${s.email}</td>
        <td>${s.plan}</td><td>${s.amount} ${s.currency}</td>
        <td>${s.startDate}</td><td>${s.endDate}</td>
        <td>${s.status}</td>
      </tr>`
    ).join('');
    const html = `<!DOCTYPE html><html><head><title>Subscriptions</title>
      <style>body{font-family:sans-serif;padding:20px}h2{color:#4f6ef7}
      table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;font-size:12px}
      th{background:#4f6ef7;color:#fff}tr:nth-child(even){background:#f9f9f9}</style></head>
      <body><h2>Subscriptions Report</h2>
      <p>Generated: ${new Date().toLocaleDateString()}</p>
      <table><thead><tr><th>ID</th><th>User</th><th>Email</th><th>Plan</th><th>Amount</th><th>Start</th><th>End</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody></table></body></html>`;
    const win = window.open('', '_blank');
    if (win) { win.document.write(html); win.document.close(); win.print(); }
  }

  private downloadFile(content: string, filename: string, type: string): void {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  onPaymentSubmitted(payment: any): void {
    this.showToast('Payment submitted successfully');
    this.closeModal();
    this.loadFromBackend();
  }

  onPaymentCancelled(): void {
    this.closeModal();
  }

  private showToast(msg: string): void {
    this.toastMessage = msg;
    setTimeout(() => this.toastMessage = '', 3000);
  }
}
