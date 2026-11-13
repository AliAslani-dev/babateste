
"use client";

import { useParams, useRouter } from "next/navigation";
import { Form } from "@/components/ui/common";

import RegistrationFields from "./RegistrationFields";
import type { RegistrationFormValues } from "../types/registration.types";
import { registrationSchema } from "../schema/registration.schema";
import { REGISTRATION_STORAGE_KEY } from "../../registration-review/types/RegistrationReview.types";

interface SavedPassenger {
  fullName: string;
  phoneNumber: string;
}

export default function Registration() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const tourId = Number(params.id);

  const handleSubmit = (values: RegistrationFormValues) => {
    if (!Number.isInteger(tourId) || tourId <= 0) {
      return;
    }

    const storedData = sessionStorage.getItem(REGISTRATION_STORAGE_KEY);

    const existingData = storedData
      ? JSON.parse(storedData)
      : {};

    const savedPassengers: SavedPassenger[] =
      existingData.passengers ?? [];

    const currentPassenger = values.passengers[0];

    const hasCurrentPassenger =
      Boolean(currentPassenger?.fullName.trim()) &&
      Boolean(currentPassenger?.phoneNumber.trim());

    const alreadySaved =
      hasCurrentPassenger &&
      savedPassengers.some(
        (passenger) =>
          passenger.fullName === currentPassenger.fullName &&
          passenger.phoneNumber === currentPassenger.phoneNumber,
      );

    const allPassengers = [
      ...savedPassengers,
      ...(hasCurrentPassenger && !alreadySaved
        ? [{ ...currentPassenger }]
        : []),
    ];

    const reviewData = {
      ...existingData,
      ...values,
      tourId,
      passengers: allPassengers,
      addCompanion: false,
    };

    sessionStorage.setItem(
      REGISTRATION_STORAGE_KEY,
      JSON.stringify(reviewData),
    );

    router.push(
      `/experience/tours-list/tour-detail/${tourId}/registration-review`,
    );
  };

  return (
    <Form<RegistrationFormValues>
      schema={registrationSchema}
      onSubmit={handleSubmit}
      defaultValues={{
        passengers: [{ fullName: "", phoneNumber: "" }],
        addCompanion: false,
        travelInsurance100: false,
        travelInsurance80: false,
      }}
      spacing={0}
    >
      <RegistrationFields />
    </Form>
  );
}
