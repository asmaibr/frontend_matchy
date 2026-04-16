import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FlouciInitResponse {
  paymentUrl: string;
  paymentId: string;
  ref: string;
}

export interface FlouciVerifyResponse {
  success: boolean;
  status: string;
  amount: number;
  paymentId: string;
}

@Injectable({ providedIn: 'root' })
export class FlouciService {
  // Express backend handles Flouci API proxy
  private readonly API_URL = 'http://localhost:4000';

  constructor(private readonly http: HttpClient) {}

  /**
   * Call backend to init a Flouci payment.
   * Returns the redirect URL to send the user to.
   */
  initPayment(amountTnd: number, transactionRef: string): Observable<FlouciInitResponse> {
    return this.http.post<FlouciInitResponse>(`${this.API_URL}/api/flouci/init`, {
      amount: amountTnd,
      transactionRef
    });
  }

  /**
   * Verify payment status after redirect back.
   */
  verifyPayment(paymentId: string): Observable<FlouciVerifyResponse> {
    return this.http.get<FlouciVerifyResponse>(`${this.API_URL}/api/flouci/verify/${paymentId}`);
  }
}

