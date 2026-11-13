"use client";

import Image from "next/image";
import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import type { AppointmentConfirmProps } from "./AppointmentConfirm.types";

import {
  AppointmentConfirmBox,
  TextareaLabelStyles,
  TextareaStyles,
  HintTextStyles,
  NotesBoxStyles,
  NotesListStyles,
  NoteItemStyles,
  SubmitButtonStyles,
} from "./AppointmentConfirm.styles";
import { HorizontalTourCard } from "@/components/ui/common/cards/TourCards/CompactHorizontalCard";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";
import { semanticColors } from "@/theme";

export default function AppointmentConfirm({
  data,
  descriptions,
  onDescriptionsChange,
  onContinue,
  onBack,
  isSubmitting = false,
}: AppointmentConfirmProps) {
  return (
    <Box sx={AppointmentConfirmBox}>
      {/* کارت پزشک */}
      <HorizontalTourCard
        key={1}
        image={data.doctorImage}
        title={data.doctorName}
        subtitle={data.doctorSpeciality}
      />
      {/* جدول اطلاعات */}

      <Box
        sx={{
          mt: 2,
          py: 2,
          border: "1px solid #D8E5EA",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="mediumSm" color="text.secondary">
            تاریخ نوبت:
          </Typography>
          <Typography variant="mediumSm">{data.dateLabel}</Typography>
        </Box>

        <Divider sx={{ borderColor: "#D8E5EA" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="mediumSm" color="text.secondary">
            ساعت نوبت:
          </Typography>
          <Typography variant="mediumSm">{data.timeLabel}</Typography>
        </Box>

        <Divider sx={{ borderColor: "#D8E5EA" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1,
            px: 2,
            border: `1px ${semanticColors.border.default}`,
          }}
        >
          <Typography variant="mediumSm" color="text.secondary">
            محل ویزیت:
          </Typography>
          <Typography variant="mediumSm" sx={{ overflowWrap: "anywhere" }}>
            {data.location || "ثبت نشده است"}
          </Typography>
        </Box>
      </Box>

      {/* توضیحات */}
      <Typography variant="boldBase" sx={TextareaLabelStyles}>
        توضیحات (اختیاری)
      </Typography>

      <Box
        sx={{
          ...TextareaStyles,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          component="textarea"
          value={descriptions}
          onChange={(e) => onDescriptionsChange(e.target.value.slice(0, 500))}
          maxLength={500}
          placeholder="مثال: دلیل مراجعه، سابقه بیماری و ..."
          sx={{
            flex: 1,
            width: "100%",
            minHeight: 90,
            border: 0,
            outline: 0,
            p: 0,
            resize: "none",
            background: "transparent",
            font: "inherit",
            color: "inherit",
            textAlign: "right",
            direction: "rtl",
            boxSizing: "border-box",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            direction: "ltr",
          }}
        >
          <EditOutlinedIcon
            sx={{
              fontSize: 18,
              color: "text.secondary",
            }}
          />
          <Typography variant="mediumSm" sx={HintTextStyles}>
            {toPersianDigits(descriptions.length)}/۵۰۰
          </Typography>
        </Box>
      </Box>

      {/* نکات مهم */}
      <Box sx={NotesBoxStyles}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "6px",
            textAlign: "right",
            direction: "rtl",
            width: "100%",
            border: `1px ${semanticColors.border.default}`,
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 18 }} />
          <Typography variant="boldBase">نکات مهم</Typography>
        </Box>
        <Box component="ul" sx={NotesListStyles}>
          <Typography component="li" variant="mediumSm" sx={NoteItemStyles}>
            لطفا ۱۵ دقیقه زودتر در مطب حضور داشته باشید.
          </Typography>
          <Typography component="li" variant="mediumSm" sx={NoteItemStyles}>
            در صورت نیاز مدارک پزشکی خود را همراه خود بیاورید.
          </Typography>
          <Typography component="li" variant="mediumSm" sx={NoteItemStyles}>
            لغو نوبت امکان‌پذیر نمی‌باشد.
          </Typography>
        </Box>
      </Box>

      {/* دکمه ادامه */}
      <Button
        fullWidth
        onClick={onContinue}
        disabled={isSubmitting}
        sx={SubmitButtonStyles}
      >
        {isSubmitting ? "در حال ثبت..." : "ادامه"}
      </Button>
    </Box>
  );
}
