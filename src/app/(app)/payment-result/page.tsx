
"use client";

import { useSearchParams } from "next/navigation";

import RegistrationSuccessContent from "@/features/paymentResult/RegistrationSuccessPage";

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  return (
    <RegistrationSuccessContent
      paymentSuccess={result === "1"}
    />
  );
}
