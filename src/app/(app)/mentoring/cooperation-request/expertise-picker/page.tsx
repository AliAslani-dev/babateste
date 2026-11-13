import { Suspense } from "react";
import { ExpertisePickerPage } from "@/features/mentoring/cooperation-request";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ExpertisePickerPage />
    </Suspense>
  );
}
