export const environment = {
  production: false,
  // Direct backend access (bypassing gateway temporarily due to 503 issue)
  apiUrl: 'http://localhost:9090/api',
  wsUrl: 'http://localhost:9090/ws',
  paymentsAdminBaseUrl: 'http://localhost:9090/api',
  recaptchaSiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  appName: 'Matchy',
  version: '1.0.0'
};