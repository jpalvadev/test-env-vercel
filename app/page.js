'use client';

import { useState } from 'react';
import { npApi } from './utils/nowpayments';

export default function Home() {
  const [paymentStatus, setpaymentStatus] = useState('');
  console.log(process.env.NEXT_PUBLIC_NOWPAYMENTS_API_KEY);
  const handleClick = async () => {
    try {
      const payment_id = 4602465209;

      const { payment_status } = await npApi.getPaymentStatus({ payment_id });

      setpaymentStatus(payment_status);
      console.log(payment_status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button
          className="bg-slate-200 rounded-md p-4 text-slate-900"
          onClick={handleClick}
        >
          Click!!!
        </button>

        {paymentStatus && (
          <>
            <h1 className="text-4xl">{paymentStatus}</h1>
          </>
        )}
      </div>
    </main>
  );
}
