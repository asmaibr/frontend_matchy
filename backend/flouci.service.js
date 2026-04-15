/**
 * Flouci Payment Service
 * Handles integration with Flouci's REST API v2
 * 
 * API Docs: https://developers.flouci.com
 * 
 * IMPORTANT: Amount must be in millimes (1 TND = 1000 millimes)
 */

// ── Flouci Credentials ────────────────────────────────────
// Replace these with your real credentials from https://app.flouci.com
const FLOUCI_APP_TOKEN  = process.env.FLOUCI_APP_TOKEN  || '4903fcc0-13cf-4a00-b993-0ad2e89524e4';
const FLOUCI_APP_SECRET = process.env.FLOUCI_APP_SECRET || '20c7e045-4b59-4584--bd95a8ce2e02';

const FLOUCI_API_BASE   = 'https://developers.flouci.com/api/v2';

// ── Frontend callback URLs ────────────────────────────────
const FRONTEND_URL      = process.env.FRONTEND_URL || 'http://localhost:4200';
const SUCCESS_URL       = `${FRONTEND_URL}/payment-success`;
const FAIL_URL          = `${FRONTEND_URL}/payment-fail`;

/**
 * Generate a Flouci payment session.
 * @param {number} amountTnd - Amount in TND (e.g. 29)
 * @param {string} trackingId - Your internal transaction reference
 * @returns {Promise<{paymentUrl: string, paymentId: string, ref: string}>}
 */
export async function initFlouciPayment(amountTnd, trackingId) {
  // Flouci requires amount in millimes
  const amountMillimes = Math.round(amountTnd * 1000);

  const body = {
    app_token: FLOUCI_APP_TOKEN,
    app_secret: FLOUCI_APP_SECRET,
    amount: amountMillimes,
    accept_card: true,
    session_timeout_secs: 900, // 15 min
    success_link: SUCCESS_URL,
    fail_link: FAIL_URL,
    developer_tracking_id: trackingId
  };

  console.log('[Flouci] Initiating payment:', { amountTnd, amountMillimes, trackingId });

  const response = await fetch(`${FLOUCI_API_BASE}/generate_payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Flouci] Init error:', response.status, errorText);
    throw new Error(`Flouci API error: ${response.status} — ${errorText}`);
  }

  const data = await response.json();
  console.log('[Flouci] Payment created:', data);

  return {
    paymentUrl: data.result?.link || data.link || '',
    paymentId: data.result?.payment_id || data.payment_id || '',
    ref: trackingId
  };
}

/**
 * Verify a Flouci payment status.
 * @param {string} paymentId - The Flouci payment ID
 * @returns {Promise<{success: boolean, status: string, amount: number}>}
 */
export async function verifyFlouciPayment(paymentId) {
  console.log('[Flouci] Verifying payment:', paymentId);

  const response = await fetch(`${FLOUCI_API_BASE}/verify_payment/${paymentId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'apppublic': FLOUCI_APP_TOKEN,
      'appsecret': FLOUCI_APP_SECRET
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Flouci] Verify error:', response.status, errorText);
    throw new Error(`Flouci verify error: ${response.status} — ${errorText}`);
  }

  const data = await response.json();
  console.log('[Flouci] Verification result:', data);

  const status = data.result?.status || data.status || 'UNKNOWN';

  return {
    success: status === 'SUCCESS',
    status,
    amount: data.result?.amount || data.amount || 0,
    paymentId,
    raw: data
  };
}
