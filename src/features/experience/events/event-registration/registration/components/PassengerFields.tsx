"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { FormInput } from "@/components/ui/common";
import FormCheckbox from "@/components/ui/common/Form/FormCheckBox";

import type {
  PassengerFormValues,
  RegistrationFormValues,
} from "../types/registration.types";

interface PassengerFieldsProps {
  index: number;
  onAddCompanion: (passenger: PassengerFormValues) => void;
  isCompanionDisabled?: boolean;
  shouldClearFields?: boolean;
}

export default function PassengerFields({
  index,
  onAddCompanion,
  isCompanionDisabled,
  shouldClearFields = true,
}: PassengerFieldsProps) {
  const { getValues, setValue, clearErrors, setError } =
    useFormContext<RegistrationFormValues>();

  const handleAddCompanion = (checked: boolean) => {
    if (!checked) return;

    const passenger = getValues(`passengers.${index}`);

    if (!passenger?.fullName.trim()) {
      setError(`passengers.${index}.fullName`, {
        type: "manual",
        message: "نام و نام خانوادگی را وارد کنید",
      });
      setValue("addCompanion", false);
      return;
    }

    if (!passenger?.phoneNumber.trim()) {
      setError(`passengers.${index}.phoneNumber`, {
        type: "manual",
        message: "شماره تماس را وارد کنید",
      });
      setValue("addCompanion", false);
      return;
    }

    // ابتدا اطلاعات کامل مسافر ذخیره می‌شود.
    onAddCompanion({ ...passenger });

    if (shouldClearFields) {
      setValue(`passengers.${index}.fullName`, "", {
        shouldDirty: true,
        shouldValidate: false,
      });

      setValue(`passengers.${index}.phoneNumber`, "", {
        shouldDirty: true,
        shouldValidate: false,
      });
    }

    setValue("addCompanion", false);

    clearErrors([
      `passengers.${index}.fullName`,
      `passengers.${index}.phoneNumber`,
    ]);
  };

  return (
    <Box>
      <Typography variant="demiboldSm" sx={{ mb: 2 }}>
        اطلاعات مسافر
      </Typography>

      <Stack spacing={2}>
        <FormInput<RegistrationFormValues>
          name={`passengers.${index}.fullName` as const}
          placeholder="نام و نام خانوادگی"
        />

        <FormInput<RegistrationFormValues>
          name={`passengers.${index}.phoneNumber` as const}
          placeholder="شماره تماس"
        />

        {index === 0 && (
          <FormCheckbox<RegistrationFormValues>
            name="addCompanion"
            label="اضافه کردن همراه"
            onCheckedChange={handleAddCompanion}
            disabled={isCompanionDisabled}
          />
        )}
      </Stack>
    </Box>
  );
}
