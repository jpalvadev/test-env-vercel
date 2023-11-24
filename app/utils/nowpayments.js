import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js';

export const npApi = new NowPaymentsApi({
  apiKey: process.env.NEXT_PUBLIC_NOWPAYMENTS_API_KEY,
});
