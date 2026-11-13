"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { FeaturedTourCard } from "@/components/ui/common/cards/TourCards/FeaturedCard";
import Image from "next/image";
import { semanticColors } from "@/theme";

const DEFAULT_TOUR_IMAGE = "/images/cards/ToureCard/featured.png";
type RegistrationSuccessTour = {
  id: number;
  title: string;
  thumbnail: string;
  startTime: string;
  capacity: number;
  usedCapacity: number;
  priceText: string;
};

const REGISTRATION_SUCCESS_STORAGE_KEY = "nova-tour-registration-success";
export default function RegistrationSuccessPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const eventId = Number(params.id);

  const [tour, setTour] = useState<RegistrationSuccessTour | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const storedTour = sessionStorage.getItem(
        REGISTRATION_SUCCESS_STORAGE_KEY,
      );

      if (!storedTour) {
        setTour(null);
        return;
      }

      const parsedTour = JSON.parse(storedTour) as RegistrationSuccessTour;

      if (Number(parsedTour.id) === eventId) {
        setTour(parsedTour);
      } else {
        setTour(null);
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات تور:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [eventId]);

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
      {/* Success illustration */}
      {/* Success illustration */}
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
          src="/images/successImage/Success.svg"
          alt="ثبت نام موفق"
          width={200}
          height={160}
          style={{
            objectFit: "contain",
          }}
        />

        <Typography variant="extraBold2xl" sx={{ textAlign: "center" }}>
          ثبت نام شما با موفقیت انجام شد
        </Typography>

        <Typography
          variant="mediumSm"
          color={semanticColors.text.secondary}
          sx={{ textAlign: "center" }}
        >
          اطلاعات تور به شما پیامک می‌شود.
        </Typography>
      </Box>

      {/* Tour card */}
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
          <Typography color="error" variant="regularSm">
            دریافت اطلاعات تور با خطا مواجه شد.
          </Typography>
        ) : tour ? (
          <FeaturedTourCard
            image={tour.thumbnail || DEFAULT_TOUR_IMAGE}
            title={tour.title}
            date={formatPersianDate(tour.startTime)}
            remaining={Math.max(
              0,
              tour.capacity - tour.usedCapacity,
            ).toLocaleString("fa-IR")}
            price={tour.priceText}
          />
        ) : (
          <Typography variant="regularSm" color="text.secondary">
            اطلاعات تور در دسترس نیست.
          </Typography>
        )}
      </Box>

      {/* Bottom actions */}
      <Stack spacing={1} sx={{ mt: "auto", pt: 4 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            router.push(`/experience/tours-list/tour-detail/${eventId}`)
          }
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
          مشاهده جزئیات تور
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
      </Stack>
    </Box>
  );
}
