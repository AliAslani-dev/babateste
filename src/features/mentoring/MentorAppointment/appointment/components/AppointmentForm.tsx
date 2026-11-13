"use client";

import { Box, Typography } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";

import {
  Form,
  FormSelect,
  FormDatePicker,
  FormTextarea,
  FormSubmitButton,
} from "@/components/ui/common/Form";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";

import { appointmentSchema } from "../schema/appointment.schema";
import type { AppointmentFormValues } from "../schema/appointment.schema";
import {
  CONSULTATION_TOPICS,
  AVAILABLE_TIMES,
  MAX_DESCRIPTION_LENGTH,
} from "../constants/appointment.constants";
import type { MentorAppointmentInfo } from "../types/appointment.types";
import MentorMiniCard from "./MentorMiniCard";
import {
  formSx,
  sectionLabelSx,
  radioGroupSx,
  radioRowSx,
  radioCircleSx,
  radioInnerDotSx,
  timeGridSx,
  timeChipSx,
  textareaWrapperSx,
  textareaIconSx,
  descriptionCounterSx,
  submitWrapperSx,
} from "./Appointment.styles";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const toPersianDigits = (value: string | number) =>
  String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);

// ─── Consultation Type Radio ──────────────────────────────────────────────────
function ConsultationTypeField() {
  const { setValue } = useFormContext<AppointmentFormValues>();
  const value = useWatch<AppointmentFormValues, "consultationType">({ name: "consultationType" });

  const options: Array<{ value: AppointmentFormValues["consultationType"]; label: string }> = [
    { value: "online", label: "آنلاین" },
    { value: "in-person", label: "حضوری" },
  ];

  return (
    <Box sx={radioGroupSx}>
      {options.map((opt) => (
        <Box
          key={opt.value}
          sx={radioRowSx}
          onClick={() => setValue("consultationType", opt.value, { shouldValidate: true })}
        >
          {/* radio first → right side in RTL, label to its left */}
          <Box sx={radioCircleSx(value === opt.value)}>
            {value === opt.value && <Box sx={radioInnerDotSx} />}
          </Box>
          <Typography variant="mediumSm" sx={{ flex: 1, textAlign: "right" }}>
            {opt.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ─── Time Picker ──────────────────────────────────────────────────────────────
function TimePickerField() {
  const { setValue } = useFormContext<AppointmentFormValues>();
  const selected = useWatch<AppointmentFormValues, "time">({ name: "time" });

  return (
    <Box sx={timeGridSx}>
      {AVAILABLE_TIMES.map((time) => (
        <Box
          key={time}
          component="button"
          type="button"
          sx={timeChipSx(selected === time)}
          onClick={() => setValue("time", time, { shouldValidate: true })}
        >
          {toPersianDigits(time)}
        </Box>
      ))}
    </Box>
  );
}

// ─── Description field with counter ──────────────────────────────────────────
function DescriptionField() {
  const description =
    useWatch<AppointmentFormValues, "description">({ name: "description" }) ?? "";

  return (
    <>
      <Box sx={textareaWrapperSx}>
        <FormTextarea<AppointmentFormValues>
          name="description"
          placeholder="اگر توضیح خاصی درباره موضوع مشاوره دارید در این قسمت بنویسید..."
          fullWidth
          minRows={5}
          maxLength={MAX_DESCRIPTION_LENGTH}
        />
        <EditIcon sx={textareaIconSx} />
      </Box>
      <Typography variant="regularSm" sx={descriptionCounterSx}>
        {`${toPersianDigits(description.length)}/${toPersianDigits(MAX_DESCRIPTION_LENGTH)}`}
      </Typography>
    </>
  );
}

// ─── Inner fields (inside FormProvider) ──────────────────────────────────────
function AppointmentFields() {
  return (
    <>
      {/* موضوع مشاوره */}
      <Box>
        <Typography variant="demiboldSm" sx={sectionLabelSx}>
          موضوع مشاوره
        </Typography>
        <FormSelect<AppointmentFormValues>
          name="topic"
          options={CONSULTATION_TOPICS}
          placeholder="مسائل حقوقی و قراردادها"
          fullWidth
        />
      </Box>

      {/* نوع مشاوره */}
      <Box>
        <Typography variant="demiboldSm" sx={sectionLabelSx}>
          نوع مشاوره
        </Typography>
        <ConsultationTypeField />
      </Box>

      {/* تاریخ جلسه */}
      <Box>
        <Typography variant="demiboldSm" sx={sectionLabelSx}>
          تاریخ جلسه
        </Typography>
        <FormDatePicker<AppointmentFormValues>
          name="date"
          fullWidth
          endIcon={<CalendarIcon sx={{ fontSize: 24, color: "text.primary" }} />}
        />
      </Box>

      {/* زمان جلسه */}
      <Box>
        <Typography variant="demiboldSm" sx={sectionLabelSx}>
          زمان جلسه
        </Typography>
        <TimePickerField />
      </Box>

      {/* توضیحات */}
      <Box>
        <Typography variant="demiboldSm" sx={sectionLabelSx}>
          توضیحات (اختیاری)
        </Typography>
        <DescriptionField />
      </Box>

      {/* Submit */}
      <Box sx={submitWrapperSx}>
        <FormSubmitButton
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
        >
          تایید و ارسال درخواست
        </FormSubmitButton>
      </Box>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
interface AppointmentFormProps {
  mentor: MentorAppointmentInfo;
  onSubmit: (values: AppointmentFormValues) => void;
}

export default function AppointmentForm({ mentor, onSubmit }: AppointmentFormProps) {
  return (
    <Form<AppointmentFormValues>
      schema={appointmentSchema}
      onSubmit={onSubmit}
      defaultValues={{
        topic: "",
        consultationType: "online",
        date: "",
        time: "",
        description: "",
      }}
      spacing={0}
      sx={formSx}
    >
      <MentorMiniCard mentor={mentor} />
      <AppointmentFields />
    </Form>
  );
}