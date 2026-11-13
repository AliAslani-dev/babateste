"use client";

import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Box, CircularProgress, Alert } from "@mui/material";

import { useDoctorDetail, useCreateAppointment } from "@/features/health/api";
import AppointmentConfirm from "@/features/health/AppointmentConfirm/AppointmentConfirm";
import { toJalaliDate } from "@/lib/utils/toJalaliDate";

const toPersianDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function AppointmentConfirmPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const { data: doctor, isLoading } = useDoctorDetail(params?.id);
  const { mutate: createAppointment, isPending } = useCreateAppointment();

  const [descriptions, setDescriptions] = useState("");

  if (isLoading || !doctor) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!date || !time) {
    return (
      <Alert severity="error" sx={{ m: 3 }}>
        تاریخ یا ساعت انتخاب نشده است
      </Alert>
    );
  }

  // const d = new Date(date);
  // const dayName = DAYS[d.getDay()];
  // const dateLabel = `${dayName} ${toPersianDigits(d.getDate())} ${MONTHS[d.getMonth()]} - ${toPersianDigits(d.getFullYear())}`;

  const dateLabel = toJalaliDate(date);
  const timeLabel = toPersianDigits(time.slice(0, 5));

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "error" as "error" | "success" | "info" | "warning",
  });

  function getBackendErrorMessage(error: unknown): string {
    if (typeof error === "string" && error.trim()) {
      return error;
    }

    if (error && typeof error === "object") {
      const err = error as {
        message?: unknown;
        response?: {
          data?: unknown;
        };
      };

      const data = err.response?.data;

      if (typeof data === "string" && data.trim()) {
        return data;
      }

      if (data && typeof data === "object") {
        const body = data as Record<string, unknown>;

        for (const key of ["message", "detail", "error", "errors"]) {
          const value = body[key];

          if (typeof value === "string" && value.trim()) {
            return value;
          }

          if (Array.isArray(value) && value.length > 0) {
            return value
              .map((item) =>
                typeof item === "string"
                  ? item
                  : item && typeof item === "object" && "message" in item
                    ? String(item.message)
                    : "",
              )
              .filter(Boolean)
              .join("، ");
          }
        }
      }

      if (typeof err.message === "string" && err.message.trim()) {
        return err.message;
      }
    }

    return "ثبت نوبت انجام نشد. لطفاً دوباره تلاش کنید.";
  }

  const handleContinue = () => {
    // تاریخ و ساعت شروع؛ به همان فرمت دریافتی از URL
    const start = `${date} ${time}`;
    const APPOINTMENT_SUCCESS_STORAGE_KEY = "nova-appointment-success";
    // تاریخ و ساعت را به‌صورت محلی می‌سازیم تا UTC باعث تغییر ساعت نشود
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes, seconds = 0] = time.split(":").map(Number);

    const endDate = new Date(year, month - 1, day, hours, minutes, seconds);

    // اضافه کردن ۳۰ دقیقه
    endDate.setMinutes(endDate.getMinutes() + 30);

    // ساخت تاریخ پایان بدون تبدیل به UTC
    const end =
      [
        endDate.getFullYear(),
        String(endDate.getMonth() + 1).padStart(2, "0"),
        String(endDate.getDate()).padStart(2, "0"),
      ].join("-") +
      " " +
      [
        String(endDate.getHours()).padStart(2, "0"),
        String(endDate.getMinutes()).padStart(2, "0"),
        String(endDate.getSeconds()).padStart(2, "0"),
      ].join(":");

    createAppointment(
      {
        doctorId: params?.id ?? "",
        payload: {
          start_time: start,
          end_time: end,
          descriptions: descriptions || null,
          session_type: "online",
        },
      },
      {
        onSuccess: (response) => {
          console.log("ثبت نوبت موفق:", response);

          sessionStorage.setItem(
            APPOINTMENT_SUCCESS_STORAGE_KEY,
            JSON.stringify({
              doctorId: params.id,
              doctorName: doctor.name,
              doctorSpeciality: doctor.specialityText,
              doctorImage:
                doctor.profileImage ??
                "/images/health/doctors/doctor-woman.png",
              dateLabel,
              timeLabel,
              location: doctor.location,
            }),
          );

          router.push(
            `/health/doctors-list/doctor-detail/${params.id}/appointment/appointment-success`,
          );
        },

        onError: (error: unknown) => {
          console.error("خطا در ثبت نوبت:", error);

          setSnackbar({
            open: true,
            message: getBackendErrorMessage(error),
            type: "error",
          });
        },
      },
    );

    console.log("بعد از فراخوانی mutation");
  };

  return (
    <AppointmentConfirm
      data={{
        doctorName: doctor.name,
        doctorSpeciality: doctor.specialityText,
        doctorImage:
          doctor.profileImage ?? "/images/health/doctors/doctor-woman.png",
        dateLabel,
        timeLabel,
        location: doctor.location,
      }}
      descriptions={descriptions}
      onDescriptionsChange={setDescriptions}
      onContinue={handleContinue}
      onBack={() => router.back()}
      isSubmitting={isPending}
    />
  );
}
