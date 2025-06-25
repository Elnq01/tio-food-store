'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { handleSuccessfulPayment } from '../../actions/paystackActionServer';
import { useStore } from '@/app/store/cart';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get('reference');

  // getting the slicre of the store
  const clearCart = useStore((state) => state.clearCart);
  const clearDelivery = useStore((state) => state.clearDeliveryPrice);

  useEffect(() => {
    const confirm = async () => {
      try{
        if (!reference) return;
        await handleSuccessfulPayment(reference); // does verify + send emails
        clearCart();
        clearDelivery()

      }catch(err){
        console.log("Verification Error: ", err)
      }
      router.push('/'); // redirect to homepage
    };

    confirm();
  }, [reference]);

  return <p>Processing your payment, please wait...</p>;
}
