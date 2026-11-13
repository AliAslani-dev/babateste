import { Suspense } from "react";
import { CityPickerPage } from "@/features/mentoring/cooperation-request";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CityPickerPage />
    </Suspense>
  );
}
