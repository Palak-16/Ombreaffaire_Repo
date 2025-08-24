"use client";
import { Suspense } from "react";
import PaymentFailedContent from "./payment-failed-content";

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentFailedContent />
    </Suspense>
  );
}
