
"use client";

import { useState } from "react";
import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { FormSubmitButton } from "@/components/ui/common";

import PassengerCounter from "./PassengerCounter";
import PassengerFields from "./PassengerFields";
import AdditionalServices from "./AdditionalServices";

import type {
  PassengerFormValues,
  RegistrationFormValues,
} from "../types/registration.types";

import { registrationStyles } from "./Registration.styles";

const STORAGE_KEY = "nova-tour-registration";

export default function RegistrationFields() {
  const { getValues } = useFormContext<RegistrationFormValues>();

  const [savedPassengers, setSavedPassengers] = useState<
    PassengerFormValues[]
  >([]);
  const [selectedCount, setSelectedCount] = useState(1);

  // مسافرانی که هنوز باید فرمشان تکمیل شود.
  const currentPassengerIndex = savedPassengers.length;

  const isLastPassenger =
    currentPassengerIndex === selectedCount - 1;

  // فقط وقتی مسافر فعلی معتبر باشد، ادامه فعال می‌شود.
  const isCurrentPassengerValid = () => {
    const passenger = getValues("passengers.0");

    return Boolean(
      passenger?.fullName?.trim() &&
        passenger?.phoneNumber?.trim(),
    );
  };

  const canContinue =
    isLastPassenger && isCurrentPassengerValid();

  const handleSavePassenger = (passenger: PassengerFormValues) => {
    if (savedPassengers.length >= selectedCount - 1) {
      return;
    }

    const updatedPassengers = [
      ...savedPassengers,
      { ...passenger },
    ];

    const storedData = sessionStorage.getItem(STORAGE_KEY);
    const existingData = storedData ? JSON.parse(storedData) : {};

    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...existingData,
        passengers: updatedPassengers,
      }),
    );

    setSavedPassengers(updatedPassengers);
  };

  const handleContinue = () => {
    // ثبت نهایی از طریق submit اصلی فرم انجام می‌شود.
    // این تابع نباید مستقیماً مسیریابی کند.
  };

  return (
    <Stack spacing={3} sx={registrationStyles.fieldsContainer}>
      <PassengerCounter
        count={selectedCount}
        onIncrease={() => setSelectedCount((count) => count + 1)}
        onDecrease={() => {
          if (selectedCount > 1) {
            setSelectedCount((count) => count - 1);
          }
        }}
      />

      <PassengerFields
        index={0}
        onAddCompanion={handleSavePassenger}
        isCompanionDisabled={isLastPassenger}
        shouldClearFields={
          savedPassengers.length > 0 && !isLastPassenger
        }
      />

      <AdditionalServices />

      <Stack sx={registrationStyles.submitWrapper}>
        <FormSubmitButton
          color="primary"
          size="lg"
          disabled={!canContinue}
          onClick={handleContinue}
        >
          ادامه و مشاهده خلاصه
        </FormSubmitButton>
      </Stack>
    </Stack>
  );
}