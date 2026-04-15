import express from 'express';
import cors from 'cors';
import { sendPaymentApprovalEmail, sendPaymentRejectedEmail } from './email.service.js';
import { initFlouciPayment, verifyFlouciPayment } from './flouci.service.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: true }));
app.use(express.json());

// ── Flouci Payment Routes ─────────────────────────────────

/**
 * POST /api/flouci/init
 * Body: { amount: number (TND), transactionRef: string }
 * Returns: { paymentUrl, paymentId, ref }
 */
app.post('/api/flouci/init', async (req, res) => {
  try {
    const { amount, transactionRef } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    const trackingId = transactionRef || `TXN-${Date.now()}`;
    const result = await initFlouciPayment(amount, trackingId);
    res.json(result);
  } catch (err) {
    console.error('[Flouci Init] Error:', err.message);
    res.status(502).json({ error: 'Flouci service unavailable', details: err.message });
  }
});

/**
 * GET /api/flouci/verify/:paymentId
 * Returns: { success, status, amount, paymentId }
 */
app.get('/api/flouci/verify/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    if (!paymentId) {
      return res.status(400).json({ error: 'Missing paymentId' });
    }
    const result = await verifyFlouciPayment(paymentId);
    res.json(result);
  } catch (err) {
    console.error('[Flouci Verify] Error:', err.message);
    res.status(502).json({ error: 'Flouci verification failed', details: err.message });
  }
});

// ── Payment Management ────────────────────────────────────

const paymentLogs = [];

let payments = [
  {
    id: 'PAY-001',
    userId: 'u1',
    user: 'Karim Mansouri',
    email: 'karim@gmail.com',
    plan: 'Pro',
    amount: 29,
    currency: 'TND',
    method: 'card',
    status: 'completed',
    date: '2025-03-01',
    transactionId: 'TXN-A7B3C9D2E',
    subscriptionEnd: null
  },
  {
    id: 'PAY-003',
    userId: 'u3',
    user: 'Ahmed Riahi',
    email: 'ahmed@gmail.com',
    plan: 'Pro',
    amount: 29,
    currency: 'TND',
    method: 'bank_transfer',
    status: 'pending',
    date: '2025-02-27',
    transactionId: 'TXN-L2M6N9P3Q',
    subscriptionEnd: null
  }
];

function logPayment(action, paymentId, meta = {}) {
  paymentLogs.push({
    at: new Date().toISOString(),
    action,
    paymentId,
    ...meta
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.patch('/api/admin/payments/:paymentId/approve', async (req, res) => {
  const paymentId = req.params.paymentId;
  const p = payments.find(x => x.id === paymentId);
  if (!p) {
    return res.status(404).json({ error: 'Paiement introuvable' });
  }
  if (p.status !== 'pending') {
    return res.status(400).json({ error: 'Statut non valide pour approbation' });
  }

  const start = new Date();
  const end = new Date();
  end.setMonth(end.getMonth() + 1);

  p.status = 'completed';
  p.approvedAt = start.toISOString();
  p.subscriptionStart = start.toISOString();
  p.subscriptionEnd = end.toISOString();

  logPayment('approve', paymentId, { user: p.email });

  let emailStatus = 'skipped';
  try {
    const r = await sendPaymentApprovalEmail({
      userEmail: p.email,
      planName: p.plan,
      amount: String(p.amount),
      currency: p.currency,
      start: start.toLocaleDateString('fr-FR'),
      end: end.toLocaleDateString('fr-FR'),
      txnRef: p.transactionId
    });
    emailStatus = r.status || 'sent';
  } catch (e) {
    emailStatus = 'failed';
    console.error(e);
  }

  res.json({
    ok: true,
    payment: p,
    email_logs: { status: emailStatus }
  });
});

app.patch('/api/admin/payments/:paymentId/reject', async (req, res) => {
  const paymentId = req.params.paymentId;
  const reason = (req.body && req.body.reason) || 'Non spécifié';
  const p = payments.find(x => x.id === paymentId);
  if (!p) {
    return res.status(404).json({ error: 'Paiement introuvable' });
  }
  if (p.status !== 'pending') {
    return res.status(400).json({ error: 'Statut non valide pour rejet' });
  }

  p.status = 'failed';
  p.rejectionReason = reason;
  logPayment('reject', paymentId, { reason });

  let emailStatus = 'skipped';
  try {
    const r = await sendPaymentRejectedEmail({
      userEmail: p.email,
      planName: p.plan,
      reason,
      txnRef: p.transactionId
    });
    emailStatus = r.status || 'sent';
  } catch (e) {
    emailStatus = 'failed';
    console.error(e);
  }

  res.json({ ok: true, payment: p, email_logs: { status: emailStatus } });
});

app.get('/api/admin/payment-logs', (_req, res) => {
  res.json(paymentLogs);
});

app.listen(PORT, () => {
  console.log(`API paiements : http://localhost:${PORT}`);
});
