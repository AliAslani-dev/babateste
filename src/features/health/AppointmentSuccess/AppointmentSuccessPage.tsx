"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { semanticColors } from "@/theme";
import { HorizontalTourCard } from "@/components/ui/common/cards/TourCards/CompactHorizontalCard";

const APPOINTMENT_SUCCESS_STORAGE_KEY = "nova-appointment-success";

type AppointmentSuccessData = {
  doctorId: string;
  doctorName: string;
  doctorSpeciality: string;
  doctorImage: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
};

export default function AppointmentSuccessPage() {
  const router = useRouter();

  const [appointment, setAppointment] = useState<AppointmentSuccessData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const storedAppointment = sessionStorage.getItem(
        APPOINTMENT_SUCCESS_STORAGE_KEY,
      );

      if (!storedAppointment) {
        setAppointment(null);
        return;
      }

      const parsedAppointment = JSON.parse(
        storedAppointment,
      ) as AppointmentSuccessData;

      setAppointment(parsedAppointment);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات نوبت:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Box
      dir="rtl"
      sx={{
        width: "100%",
        maxWidth: 480,
        minHeight: "100dvh",
        mx: "auto",
        px: 2,
        pt: 2,
        pb: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          gap: 1,
        }}
      >
        <Image
          src="/images/PaymentImage/Success.svg"
          alt="ثبت نوبت موفق"
          width={200}
          height={160}
          style={{ objectFit: "contain" }}
        />

        <Typography variant="extraBold2xl" sx={{ textAlign: "center" }}>
          نوبت شما با موفقیت ثبت شد!
        </Typography>

        <Typography
          variant="mediumSm"
          color={semanticColors.text.secondary}
          sx={{ textAlign: "center" }}
        >
          اطلاعات نوبت از طریق پیامک برای شما ارسال می‌شود.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4,
            }}
          >
            <CircularProgress size={28} />
          </Box>
        ) : isError ? (
          <Alert severity="error">دریافت اطلاعات نوبت با خطا مواجه شد.</Alert>
        ) : appointment ? (
          <>
            <>
              <HorizontalTourCard
                key={1}
                image={
                  appointment.doctorImage ||
                  "/images/health/doctors/doctor-woman.png"
                }
                title={appointment.doctorName}
                subtitle={appointment.doctorSpeciality}
              />
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
                  <Typography variant="mediumSm">
                    {appointment.dateLabel}
                  </Typography>
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
                  <Typography variant="mediumSm">
                    {appointment.timeLabel}
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "#D8E5EA" }} />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 1,
                    px: 2,
                  }}
                >
                  <Typography variant="mediumSm" color="text.secondary">
                    محل ویزیت:
                  </Typography>
                  <Typography
                    variant="mediumSm"
                    sx={{ overflowWrap: "anywhere" }}
                  >
                    {appointment.location || "ثبت نشده است"}
                  </Typography>
                </Box>
              </Box>
            </>
          </>
        ) : (
          <Alert severity="info">
            اطلاعات نوبت در دسترس نیست. برای مشاهده نوبت ثبت‌شده، به صفحه
            نوبت‌های من مراجعه کنید.
          </Alert>
        )}
      </Box>

      {/* <Stack spacing={1} sx={{ mt: "auto", pt: 4 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => router.push("/health/appointments")}
          sx={{
            minHeight: 44,
            borderRadius: 3,
            backgroundColor: "#0099B8",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#0086A1",
              boxShadow: "none",
            },
          }}
        >
          مشاهده نوبت‌های من
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => router.push("/")}
          sx={{
            minHeight: 40,
            borderRadius: 3,
            color: "text.primary",
            borderColor: "#D8E5EA",
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Stack> */}
    </Box>
  );
}
