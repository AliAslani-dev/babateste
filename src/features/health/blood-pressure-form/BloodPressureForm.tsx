"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";

import {
  Form,
  FormDatePicker,
  FormNumberInput,
  FormTextarea,
  FormSubmitButton,
} from "@/components/ui/common/Form";
import { DatePickerIcon } from "@/components/ui/icons";

import { bloodReportSchema, type BloodReportFormValues } from "./bloodreport.schema";
import {
  pageRootSx,
  formSx,
  heroWrapperSx,
  heroImageSx,
  fieldsWrapperSx,
  fieldLabelSx,
  submitWrapperSx,
} from "./BloodPressureForm.styles";
import { useCreateBloodPressureRecord, type BloodPressureRecord } from "@/features/health/api";
import { toApiDateTime } from "@/lib/utils/toApiDateTime";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BloodPressureFormProps {
  onSubmit?: (data: BloodPressureRecord) => void;
  defaultValues?: Partial<BloodReportFormValues>;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BloodPressureForm({
  onSubmit,
  defaultValues,
}: BloodPressureFormProps) {
  const createRecord = useCreateBloodPressureRecord();
  const router = useRouter();

  const handleSubmit = async (data: BloodReportFormValues) => {
    const payload = {
      time_of_measurement: toApiDateTime(data.measuredAt || undefined),
      systolic_pressure: data.systolic ?? 0,
      diastolic_pressure: data.diastolic ?? 0,
      heart_rate: data.heartRate ?? 0,
      descriptions: data.note || null,
    };

    const result = await createRecord.mutateAsync(payload);
    onSubmit?.(result);
    router.push("/health");
  };

  return (
    <Box sx={pageRootSx}>
      <Form<BloodReportFormValues>
        schema={bloodReportSchema}
        onSubmit={handleSubmit}
        defaultValues={{
          measuredAt: "",
          systolic: null,
          diastolic: null,
          heartRate: null,
          note: "",
          ...defaultValues,
        }}
        spacing={0}
        sx={formSx}
      >
        {/* ── Hero image ──────────────────────────────────────── */}
        <Box sx={heroWrapperSx}>
          <Box
            component={Image}
            src="/images/health/blood-pressure.png"
            alt="فشارخون"
            width={100}
            height={100}
            sx={heroImageSx}
          />
        </Box>

        {/* ── Fields ──────────────────────────────────────────── */}
        <Box sx={fieldsWrapperSx}>

          {/* تاریخ و ساعت */}
          <Box>
            <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
              تاریخ و ساعت
            </Typography>
            <FormDatePicker<BloodReportFormValues>
              name="measuredAt"
              
              placeholder="۱۴۰۴/۰۸/۱۲ - ۱۰:۳۰"
              endIcon={<DatePickerIcon />}
              fullWidth
            />
          </Box>

          {/* فشارخون سیستول (عدد بالا) */}
          <Box>
            <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
              فشارخون سیستول‌(عدد بالا)
            </Typography>
            <FormNumberInput<BloodReportFormValues>
              name="systolic"
              persianDigits
              placeholder="۱۲۰ mmHg"
              fullWidth
            />
          </Box>

          {/* فشارخون دیاستول (عدد پایین) */}
          <Box>
            <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
              فشارخون دیاستول‌(عدد پایین)
            </Typography>
            <FormNumberInput<BloodReportFormValues>
              name="diastolic"
              persianDigits
              placeholder="۸۰ mmHg"
              fullWidth
            />
          </Box>

          {/* ضربان قلب */}
          <Box>
            <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
              ضربان قلب
            </Typography>
            <FormNumberInput<BloodReportFormValues>
              name="heartRate"
              persianDigits
              placeholder="۷۲ bpm"
              fullWidth
            />
          </Box>

          {/* یادداشت (اختیاری) */}
          <Box>
            <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
              یادداشت (اختیاری)
            </Typography>
            <FormTextarea<BloodReportFormValues>
              name="note"
              placeholder="مثلا : فشارخون قبل از وعده‌ی صبحانه گرفته شد."
              fullWidth
              rows={4}
            />
          </Box>

        </Box>

        {/* ── Submit ──────────────────────────────────────────── */}
        <Box sx={submitWrapperSx}>
          <FormSubmitButton
            appearance="solid"
            color="primary"
            shape="pill"
            size="lg"
            fullWidth
          >
            ثبت
          </FormSubmitButton>
        </Box>
      </Form>
    </Box>
  );
}
