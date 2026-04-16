import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface PromoCode {
  id?: number;
  code: string;
  discountPercent: number;
  active: boolean;
  createdAt: string;
  usageCount: number;
  deactivatedAt?: string;
  notes?: string;
}

@Component({
  selector: 'app-promo-codes',
  templateUrl: './promo-codes.component.html',
  styleUrls: ['./promo-codes.component.scss']
})
export class PromoCodesComponent implements OnInit {
  private readonly API_URL = 'http://localhost:8081';

  promoCodes: PromoCode[] = [];
  isLoading = false;
  showForm = false;
  editingId: number | null = null;
  errorMessage = '';
  successMessage = '';

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      notes: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.loadPromoCodes();
  }

  loadPromoCodes(): void {
    this.isLoading = true;
    this.http.get<PromoCode[]>(`${this.API_URL}/promo-codes`).subscribe({
      next: (codes) => {
        this.promoCodes = codes;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load promo codes';
        this.isLoading = false;
      }
    });
  }

  generateCode(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const notes = this.form.get('notes')?.value;

    this.http.post<PromoCode>(`${this.API_URL}/promo-codes/generate?notes=${encodeURIComponent(notes)}`, {}).subscribe({
      next: (newCode) => {
        this.promoCodes.unshift(newCode);
        this.successMessage = `✅ Code generated: ${newCode.code}`;
        this.form.reset();
        this.showForm = false;
        this.isLoading = false;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.errorMessage = 'Failed to generate code';
        this.isLoading = false;
      }
    });
  }

  toggleCode(code: PromoCode): void {
    if (!code.id) return;

    const endpoint = code.active ? 'deactivate' : 'reactivate';
    this.http.post<PromoCode>(`${this.API_URL}/promo-codes/${code.id}/${endpoint}`, {}).subscribe({
      next: (updated) => {
        const index = this.promoCodes.findIndex(c => c.id === code.id);
        if (index !== -1) {
          this.promoCodes[index] = updated;
        }
        this.successMessage = `✅ Code ${updated.active ? 'activated' : 'deactivated'}`;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.errorMessage = 'Failed to update code';
      }
    });
  }

  deleteCode(code: PromoCode): void {
    if (!code.id || !confirm(`Delete code ${code.code}?`)) return;

    this.http.delete(`${this.API_URL}/promo-codes/${code.id}`).subscribe({
      next: () => {
        this.promoCodes = this.promoCodes.filter(c => c.id !== code.id);
        this.successMessage = `✅ Code deleted`;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.errorMessage = 'Failed to delete code';
      }
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.form.reset();
    }
  }

  getStatusBadge(code: PromoCode): string {
    return code.active ? '✅ Active' : '❌ Inactive';
  }

  getStatusColor(code: PromoCode): string {
    return code.active ? '#22c55e' : '#ef4444';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
