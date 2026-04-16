import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PayPalOrderRequest {
  amount: number;
  currency: string;
  transactionRef: string;
}

export interface PayPalOrderResponse {
  orderId: string;
  approvalUrl: string;
  ref: string;
  status: string;
}

export interface PayPalCaptureResponse {
  orderId: string;
  status: string;
  captureId: string;
  payerEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class PayPalService {
  private readonly API_URL = environment.apiUrl || 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  /**
   * Create PayPal order
   */
  createOrder(amount: number, currency: string = 'USD', transactionRef: string): Observable<PayPalOrderResponse> {
    const payload: PayPalOrderRequest = {
      amount,
      currency,
      transactionRef
    };
    return this.http.post<PayPalOrderResponse>(`${this.API_URL}/paypal/create-order`, payload);
  }

  /**
   * Capture PayPal order after user approval
   */
  captureOrder(orderId: string): Observable<PayPalCaptureResponse> {
    return this.http.post<PayPalCaptureResponse>(`${this.API_URL}/paypal/capture-order/${orderId}`, {});
  }

  /**
   * Get order details
   */
  getOrderDetails(orderId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/paypal/order/${orderId}`);
  }

  /**
   * Convert TND to USD (approximate rate)
   * Note: In production, use a real currency conversion API
   */
  convertTndToUsd(amountTnd: number): number {
    const rate = 0.32; // 1 TND ≈ 0.32 USD (update with real rate)
    return Math.round(amountTnd * rate * 100) / 100;
  }

  /**
   * Convert USD to TND
   */
  convertUsdToTnd(amountUsd: number): number {
    const rate = 3.12; // 1 USD ≈ 3.12 TND (update with real rate)
    return Math.round(amountUsd * rate * 100) / 100;
  }
}
