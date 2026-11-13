"use client";

import { Box, Typography } from "@mui/material";
import {
  Form,
  FormBottomSheet,
  FormFileUpload,
  FormSubmitButton,
} from "@/components/ui/common/Form";
import { cooperationStepSchema, type CooperationStepFormValues } from "./cooperationStep.schema";
import CooperationStepDraft from "../CooperationStepDraft";
import { COOPERATION_TYPES, AVAILABLE_DAYS } from "./cooperationStep.constants";
import {
  formSx,
  headerWrapperSx,
  headerTitleSx,
  headerSubtitleSx,
  fieldsWrapperSx,
  fieldLabelSx,
  submitWrapperSx,
} from "./CooperationStep.styles";

interface CooperationStepProps {
  onNext: (data: CooperationStepFormValues) => void;
  defaultValues?: Partial<CooperationStepFormValues>;
  isSubmitting?: boolean;
}

export default function CooperationStep({ onNext, defaultValues, isSubmitting = false }: CooperationStepProps) {
  const savedCooperationType: unknown = defaultValues?.cooperationType;
  const initialCooperationTypes = Array.isArray(savedCooperationType)
    ? savedCooperationType
    : typeof savedCooperationType === "string" && savedCooperationType
      ? [savedCooperationType]
      : [];

  return (
    <Form<CooperationStepFormValues>
      schema={cooperationStepSchema}
      onSubmit={onNext}
      defaultValues={{
        availableDays: [],
        resume: null,
        ...defaultValues,
        cooperationType: initialCooperationTypes,
      }}
      spacing={0}
      sx={formSx}
    >
      <CooperationStepDraft step="step3" />
      <Box sx={headerWrapperSx}>
        <Typography variant="boldLg" component="h2" sx={headerTitleSx}>
          نحوه همکاری
        </Typography>
        <Typography variant="regularSm" component="p" sx={headerSubtitleSx}>
          لطفا اطلاعات مربوط سابقه کاری و حوزه‌ی تخصصی خود را وارد کنید.
        </Typography>
      </Box>

      <Box sx={fieldsWrapperSx}>
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            نوع همکاری
          </Typography>
          <FormBottomSheet<CooperationStepFormValues>
            name="cooperationType"
            options={COOPERATION_TYPES.map((t) => ({ value: t.value, label: t.label }))}
            placeholder="انتخاب کنید"
            multiple={true}
            fullWidth
          />
        </Box>

        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            روزهای در دسترس
          </Typography>
          <FormBottomSheet<CooperationStepFormValues>
            name="availableDays"
            options={AVAILABLE_DAYS.map((d) => ({ value: d.value, label: d.label }))}
            placeholder="انتخاب کنید"
            multiple={true}
            fullWidth
          />
        </Box>

        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            آپلود رزومه (اختیاری)
          </Typography>
          <FormFileUpload<CooperationStepFormValues>
            name="resume"
            accept=".pdf,.doc,.docx"
            maxSizeMB={5}
            fullWidth
          />
        </Box>
      </Box>

      <Box sx={submitWrapperSx}>
        <FormSubmitButton
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
          loading={isSubmitting}
        >
          ثبت درخواست
        </FormSubmitButton>
      </Box>
    </Form>
  );
}
