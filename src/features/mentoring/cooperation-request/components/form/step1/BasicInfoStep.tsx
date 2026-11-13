"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";

import {
  Form,
  FormInput,
  FormField,
  FormSubmitButton,
} from "@/components/ui/common/Form";
import { basicInfoSchema, type BasicInfoFormValues } from "./basicInfo.schema";
import CooperationStepDraft from "../CooperationStepDraft";
import { POPULAR_CITIES, ALL_CITIES } from "./cities.constants";
import PickerBottomSheet from "../../picker-bottom-sheet/PickerBottomSheet";
import {
  formSx,
  headerWrapperSx,
  headerTitleSx,
  headerSubtitleSx,
  fieldsWrapperSx,
  fieldLabelSx,
  phoneInputSx,
  cityTriggerSx,
  cityTriggerIconSx,
  cityErrorSx,
  submitWrapperSx,
} from "./BasicInfoStep.styles";

// ─── Types ───────────────────────────────────────────────────────────────────
interface BasicInfoStepProps {
  onNext: (data: BasicInfoFormValues) => void;
  defaultValues?: Partial<BasicInfoFormValues>;
}

// ─── Chevron icon ─────────────────────────────────────────────────────────────
const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4.5 6.75L9 11.25L13.5 6.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5C12.5 3.515 10.485 1.5 8 1.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// ─── Map city value → display label ──────────────────────────────────────────
const ALL_CITIES_MAP: Record<string, string> = Object.fromEntries(
  ALL_CITIES.map((c) => [c.value, c.label])
);

// ─── Inner fields ────────────────────────────────────────────────────────────
function BasicInfoFields() {
  const [citySheetOpen, setCitySheetOpen] = useState(false);
  const { setValue } = useFormContext<BasicInfoFormValues>();

  const handleCitySelect = (value: string) => {
    setValue("city", value, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <>
      <Box sx={fieldsWrapperSx}>

        {/* نام و نام خانوادگی */}
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            نام و نام خانوادگی
          </Typography>
          <FormInput<BasicInfoFormValues>
            name="fullName"
            placeholder="مثال: مهدی محمدی"
            fullWidth
          />
        </Box>

        {/* شماره موبایل */}
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            شماره موبایل
          </Typography>
          <FormInput<BasicInfoFormValues>
            name="phoneNumber"
            persianDigits
            placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
            type="tel"
            inputMode="numeric"
            fullWidth
            sx={phoneInputSx}
          />
        </Box>

        {/* عنوان حرفه‌ای فعلی */}
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            عنوان حرفه‌ای فعلی
          </Typography>
          <FormInput<BasicInfoFormValues>
            name="jobTitle"
            placeholder="مثال: کارشناس منابع انسانی"
            fullWidth
          />
        </Box>

        {/* شهر محل سکونت */}
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            شهر محل سکونت
          </Typography>

          <FormField<BasicInfoFormValues>
            name="city"
            render={({ field, error, invalid, touched }) => {
              const hasError = Boolean(invalid && touched);
              const cityLabel = field.value
                ? ALL_CITIES_MAP[field.value as string] ?? (field.value as string)
                : null;

              return (
                <Box>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setCitySheetOpen(true)}
                    sx={cityTriggerSx(hasError, Boolean(cityLabel))}
                  >
                    <span>{cityLabel ?? "انتخاب شهر"}</span>
                    <Box component="span" sx={cityTriggerIconSx}>
                      <ChevronIcon />
                    </Box>
                  </Box>

                  {hasError && error && (
                    <Typography component="span" sx={cityErrorSx}>
                      {error}
                    </Typography>
                  )}
                </Box>
              );
            }}
          />
        </Box>

      </Box>

      <PickerBottomSheet
        open={citySheetOpen}
        onClose={() => setCitySheetOpen(false)}
        onSelect={handleCitySelect}
        options={ALL_CITIES}
        popularOptions={POPULAR_CITIES}
        searchPlaceholder="جستجوی شهر…"
        popularSectionTitle="شهرهای پرکاربرد"
        allSectionTitle="همه شهرها"
        emptyText="شهری یافت نشد"
        rowIcon={<LocationIcon />}
        title="انتخاب شهر"
      />
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BasicInfoStep({ onNext, defaultValues }: BasicInfoStepProps) {
  return (
    <Form<BasicInfoFormValues>
      schema={basicInfoSchema}
      onSubmit={onNext}
      defaultValues={{
        fullName: "",
        phoneNumber: "",
        jobTitle: "",
        city: "",
        ...defaultValues,
      }}
      spacing={0}
      sx={formSx}
    >
      <CooperationStepDraft step="step1" />
      {/* ── Header ─────────────────────────────────────────── */}
      <Box sx={headerWrapperSx}>
        <Typography variant="boldLg" component="h2" sx={headerTitleSx}>
          اطلاعات پایه
        </Typography>
        <Typography variant="regularSm" component="p" sx={headerSubtitleSx}>
          لطفا اطلاعات اولیه خود را وارد کنید.
        </Typography>
      </Box>

      {/* ── Fields ─────────────────────────────────────────── */}
      <BasicInfoFields />

      {/* ── Submit ─────────────────────────────────────────── */}
      <Box sx={submitWrapperSx}>
        <FormSubmitButton
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
        >
          مرحله بعدی
        </FormSubmitButton>
      </Box>
    </Form>
  );
}
