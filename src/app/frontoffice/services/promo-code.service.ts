import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface PromoCode {
  id?: number;
  code: string;
  discountPercent: number; // always 10%
  active: boolean;
  createdAt?: string;
  usageCount?: number;
}

export interface PromoValidationResult {
  valid: boolean;
  discountType?: 'percent' | 'fixed';
  discountValue?: number;
  message: string;
}

const STORAGE_KEY = 'matchy_promo_codes';
const API_URL = 'http://localhost:8081/promo-codes';

@Injectable({ providedIn: 'root' })
export class PromoCodeService {

  // ── Local cache for backward compatibility ──────────────────
  private localCodes: PromoCode[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalCodes();
  }

  // ── Backward compatibility: Synchronous methods for backoffice ──

  /**
   * Get codes from local cache (synchronous)
   * Used by backoffice for quick access
   */
  getCodes(): PromoCode[] {
    return [...this.localCodes];
  }

  /**
   * Save codes to local storage (synchronous)
   */
  private saveCodes(codes: PromoCode[]): void {
    this.localCodes = [...codes];
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
    }
  }

  /**
   * Load codes from local storage (synchronous)
   */
  private loadLocalCodes(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEY);
        this.localCodes = raw ? JSON.parse(raw) : [];
      }
    } catch {
      this.localCodes = [];
    }
  }

  /**
   * Generate a new promo code (synchronous for backoffice)
   */
  generateCode(): PromoCode {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const rand = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return {
      code: `MATCHY-${rand}`,
      discountPercent: 10,
      active: true,
      createdAt: new Date().toISOString().split('T')[0],
      usageCount: 0
    };
  }

  /**
   * Add code to local cache (synchronous for backoffice)
   */
  addCode(code: PromoCode): void {
    const codes = this.getCodes();
    codes.unshift(code);
    this.saveCodes(codes);
  }

  /**
   * Toggle code active status (synchronous for backoffice)
   */
  toggleCode(code: string): void {
    const codes = this.getCodes().map(c =>
      c.code === code ? { ...c, active: !c.active } : c
    );
    this.saveCodes(codes);
  }

  /**
   * Delete code from local cache (synchronous for backoffice)
   */
  deleteCode(code: string): void {
    const codes = this.getCodes().filter(c => c.code !== code);
    this.saveCodes(codes);
  }

  // ── Observable methods for frontend payment ──────────────────

  /**
   * Get codes from backend API (Observable)
   * Used by frontend for real-time data
   */
  getCodesObservable(): Observable<PromoCode[]> {
    return this.http.get<PromoCode[]>(API_URL).pipe(
      catchError(() => {
        // Fallback to local cache if API fails
        return of(this.getCodes());
      })
    );
  }

  /**
   * Get active codes from backend API (Observable)
   */
  getActiveCodesObservable(): Observable<PromoCode[]> {
    return this.http.get<PromoCode[]>(`${API_URL}/active`).pipe(
      catchError(() => {
        // Fallback to local cache
        return of(this.getCodes().filter(c => c.active));
      })
    );
  }

  /**
   * Generate code via backend API (Observable)
   */
  generateCodeObservable(notes?: string): Observable<PromoCode> {
    const url = notes ? `${API_URL}/generate?notes=${encodeURIComponent(notes)}` : `${API_URL}/generate`;
    return this.http.post<PromoCode>(url, {});
  }

  /**
   * Create code with custom code via backend API (Observable)
   */
  createCodeObservable(code: string, discountPercent: number = 10, notes?: string): Observable<PromoCode> {
    const payload = {
      code: code.trim().toUpperCase(),
      discountPercent: discountPercent,
      notes: notes || undefined
    };
    return this.http.post<PromoCode>(`${API_URL}/create`, payload);
  }

  /**
   * Deactivate code via backend API (Observable)
   */
  deactivateCode(id: number): Observable<PromoCode> {
    return this.http.post<PromoCode>(`${API_URL}/${id}/deactivate`, {});
  }

  /**
   * Reactivate code via backend API (Observable)
   */
  reactivateCode(id: number): Observable<PromoCode> {
    return this.http.post<PromoCode>(`${API_URL}/${id}/reactivate`, {});
  }

  /**
   * Delete code via backend API (Observable)
   */
  deleteCodeObservable(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  // ── Frontend: validate a code entered by user ────────────────

  /**
   * Validate promo code via backend API (Observable)
   * Used during payment to check code and calculate discount
   */
  validate(code: string, _planId: string, amountTnd: number): Observable<PromoValidationResult> {
    const c = code.trim().toUpperCase();
    if (!c) {
      return of({ valid: false, message: 'Enter a promo code' }).pipe(delay(200));
    }

    return this.http.post<any>(`${API_URL}/validate`, null, {
      params: { code: c, amountTnd: amountTnd.toString() }
    }).pipe(
      map((response: any) => {
        if (response.valid) {
          return {
            valid: true,
            discountType: 'percent' as const,
            discountValue: response.discountPercent,
            message: response.message
          };
        } else {
          return {
            valid: false,
            message: response.message
          };
        }
      }),
      catchError((error) => {
        console.error('Promo code validation error:', error);
        return of({
          valid: false,
          message: error.error?.message || 'Invalid or expired promo code'
        });
      })
    );
  }

  /**
   * Apply discount calculation
   */
  applyDiscount(amountTnd: number, r: PromoValidationResult): number {
    if (!r.valid || r.discountValue == null) return amountTnd;
    if (r.discountType === 'percent') {
      return Math.max(0, Math.round(amountTnd * (1 - r.discountValue / 100) * 100) / 100);
    }
    return Math.max(0, Math.round((amountTnd - r.discountValue) * 100) / 100);
  }
}
