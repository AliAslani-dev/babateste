"use client";

import { Box, Typography } from "@mui/material";

import type { AppointmentFormValues } from "../../appointment/schema/appointment.schema";
import { CONSULTATION_TYPE_LABEL, SESSION_DURATION_MINUTES } from "../constants/review.constants";
import {
  sectionSx,
  sectionTitleSx,
  cardSx,
  detailRowSx,
} from "./Review.styles";

interface SessionDetailsProps {
  appointment: AppointmentFormValues;
}

interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <Box sx={detailRowSx}>
      <Typography variant="mediumSm">
        {label}
      </Typography>
      <Typography variant="mediumSm" color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
}

export default function SessionDetails({ appointment }: SessionDetailsProps) {
  // Build "HH:MM الی HH:MM" from the selected time slot
  const [startHour, startMinute] = appointment.time.replace(/[۰-۹]/g, (d) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
  ).split(":").map(Number);
  const endTotalMinutes = startHour * 60 + startMinute + SESSION_DURATION_MINUTES;
  const endHour = Math.floor(endTotalMinutes / 60);
  const endMinute = endTotalMinutes % 60;
  const toPersian = (n: number) =>
    String(n).padStart(2, "0").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
  const timeRange = `${appointment.time} الی ${toPersian(endHour)}:${toPersian(endMinute)}`;

  const rows = [
    { label: "نوع جلسه",   value: CONSULTATION_TYPE_LABEL[appointment.consultationType] ?? appointment.consultationType },
    { label: "تاریخ جلسه", value: appointment.date },
    { label: "ساعت جلسه",  value: timeRange },
    { label: "مدت جلسه",   value: `${SESSION_DURATION_MINUTES} دقیقه` },
  ];

  return (
    <Box sx={sectionSx}>
      <Typography variant="demiboldSm" sx={sectionTitleSx}>
        جزییات جلسه
      </Typography>

      <Box sx={cardSx}>
        {rows.map((row) => (
          <DetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </Box>
    </Box>
  );
}
