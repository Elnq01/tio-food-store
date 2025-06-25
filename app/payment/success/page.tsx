import { Suspense } from 'react';
import SuccessPage from './HelperSucess'; // assuming this is in the same folder

export default function SuccessWrapper() {
  return (
    <Suspense fallback={<p>Loading payment confirmation...</p>}>
      <SuccessPage />
    </Suspense>
  );
}
