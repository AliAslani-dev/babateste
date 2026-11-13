
"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

import type { RegistrationFormValues } from "../types/registration.types";
import FormCheckbox from "@/components/ui/common/Form/FormCheckBox";
import { additionalServicesStyles } from "./AdditionalServices.styles";

export default function AdditionalServices() {
  const { setValue } = useFormContext<RegistrationFormValues>();

  return (
    <Box sx={additionalServicesStyles}>
      <Stack spacing={1}>
        <Typography variant="demiboldSm">
          خدمات اضافه
        </Typography>

        <Divider className="additional-services-divider" />

        <FormCheckbox<RegistrationFormValues>
          name="travelInsurance100"
          label="بیمه مسافرتی ۱۰۰ هزار تومان"
          onCheckedChange={(checked) => {
            setValue("travelInsurance100", checked);
            setValue("travelInsurance80", false);
          }}
        />

        <FormCheckbox<RegistrationFormValues>
          name="travelInsurance80"
          label="بیمه مسافرتی ۸۰ هزار تومان"
          onCheckedChange={(checked) => {
            setValue("travelInsurance80", checked);
            setValue("travelInsurance100", false);
          }}
        />
      </Stack>
    </Box>
  );
}
