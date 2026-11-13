"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Button } from "@/components/ui/Button";
import { ALL_EXPERTISES } from "../form/step2/expertises.constants";
import type { BasicInfoFormValues } from "../form/step1/basicInfo.schema";
import type { ExpertiseStepFormValues } from "../form/step2/expertiseStep.schema";
import {
  rootSx,
  titleSx,
  subtitleSx,
  trackerWrapperSx,
  trackerItemSx,
  trackerStepSx,
  trackerDotActiveSx,
  trackerDotInactiveSx,
  trackerLineSx,
  trackerLabelSx,
  cardSx,
  cardRowSx,
  cardLabelSx,
  cardValueDirectedSx,
  statusBadgeSx,
  actionsWrapperSx,
  heroImageStyle,
} from "./SubmitSuccess.styles";

const EXPERTISES_MAP: Record<string, string> = Object.fromEntries(
  ALL_EXPERTISES.map((e) => [e.value, e.label])
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function toJalaliDateTime(): string {
  const now = new Date();
  try {
    const datePart = new Intl.DateTimeFormat("fa-IR", {
      calendar: "persian",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now);

    const timePart = new Intl.DateTimeFormat("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    return `${datePart} - ساعت ${timePart}`;
  } catch {
    return now.toLocaleDateString("fa-IR");
  }
}

const TRACKER_STEPS = [
  { label: "ثبت درخواست" },
  { label: "بررسی توسط کارشناسان" },
  { label: "اعلام نتیجه" },
];

interface SubmitSuccessPageProps {
  step1Data: BasicInfoFormValues | null;
  step2Data: ExpertiseStepFormValues | null;
  onEdit: () => void;
}

export default function SubmitSuccessPage({ step1Data, step2Data, onEdit }: SubmitSuccessPageProps) {
  const router = useRouter();
  const submittedAt = toJalaliDateTime();

  const expertiseLabel = step2Data
    ? EXPERTISES_MAP[step2Data.expertise] ?? step2Data.expertise
    : "—";

  const summaryRows = [
    { label: "نام و نام خانوادگی", value: step1Data?.fullName ?? "—" },
    { label: "حوزه تخصص", value: expertiseLabel },
    { label: "تاریخ ثبت", value: submittedAt, ltr: true },
    { label: "وضعیت", value: null },
  ];

  return (
    <Box sx={rootSx}>
      <Image
        src="/images/mentor-section/mentoring-cooperation.png"
        alt="درخواست ثبت شد"
        width={180}
        height={180}
        style={heroImageStyle}
      />

      {/* Title & subtitle */}
      <Typography variant="boldXl" component="h2" sx={titleSx}>
        درخواست شما ثبت شد
      </Typography>
      <Typography variant="regularSm" component="p" sx={subtitleSx}>
        درخواست شما با موفقیت ثبت شد. پس از بررسی کارشناسان نتیجه به شما اعلام می‌گردد.
      </Typography>

      {/* Progress tracker */}
      <Box sx={trackerWrapperSx}>
        {TRACKER_STEPS.map((step, idx) => (
          <Box key={step.label} sx={trackerItemSx}>
            <Box sx={trackerStepSx}>
              {idx === 0 ? (
                <Box sx={trackerDotActiveSx}>
                  <CheckIcon />
                </Box>
              ) : (
                <Box sx={trackerDotInactiveSx} />
              )}
              <Typography component="span" sx={trackerLabelSx}>
                {step.label}
              </Typography>
            </Box>
            {idx < TRACKER_STEPS.length - 1 && (
              <Box sx={trackerLineSx(false)} />
            )}
          </Box>
        ))}
      </Box>

      {/* Summary card */}
      <Box sx={cardSx}>
        {summaryRows.map((row, idx) => (
          <Box key={row.label} sx={cardRowSx(idx === summaryRows.length - 1)}>
            <Typography variant="demiboldSm" component="span" sx={cardLabelSx}>
              {row.label}
            </Typography>

            {row.value === null ? (
              <Box sx={statusBadgeSx}>
                <AccessTimeOutlinedIcon sx={{ fontSize: 14 }} />
                <span>در انتظار بررسی</span>
              </Box>
            ) : (
              <Typography
                variant="regularSm"
                component="span"
                sx={cardValueDirectedSx(Boolean(row.ltr))}
              >
                {row.value}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Action buttons */}
      <Box sx={actionsWrapperSx}>
        <Button
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
          onClick={() => router.push("/home")}
        >
          بازگشت به صفحه اصلی
        </Button>

        <Button
          appearance="outlined"
          color="neutral"
          shape="pill"
          size="lg"
          fullWidth
          icon={<EditOutlinedIcon sx={{ fontSize: 18 }} />}
          iconPosition="end"
          onClick={onEdit}
        >
          ویرایش اطلاعات
        </Button>
      </Box>
    </Box>
  );
}
