'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { handleSuccessfulPayment } from '../../actions/paystackActionServer';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get('reference');

  useEffect(() => {
    const confirm = async () => {
      if (!reference) return;
      await handleSuccessfulPayment(reference); // does verify + send emails
      router.push('/'); // redirect to homepage
    };

    confirm();
  }, [reference]);

  return <p>Processing your payment, please wait...</p>;
}
