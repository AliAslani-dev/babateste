"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { formatPersianDate } from "@/lib/utils/toJalaliDate";
import { FeaturedTourCard } from "@/components/ui/common/cards/TourCards/FeaturedCard";
import { semanticColors } from "@/theme";
import { addNotification } from "@/hooks/notification/notification.service";
import { FormProvider, useForm } from "react-hook-form";
import { FormCheckbox } from "@/components/ui/common/Form/FormCheckBox";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { AlertModal } from "@/components/ui/common";
const EVENT_STORAGE_KEY = "nova-event-registration-success-pay";
const TOUR_STORAGE_KEY = "nova-tour-registration-success";

const DEFAULT_IMAGE = "/images/cards/ToureCard/featured.png";
interface ReminderFormValues {
  day2: boolean;
  day3: boolean;
  day5: boolean;
}
interface RegistrationItem {
  id: number;
  title: string;
  thumbnail?: string;
  startTime: string;
  endTime?: string;
  location?: string;
  capacity: number;
  usedCapacity: number;
  priceText?: string;
  totalPrice?: number;
}

type ItemType = "event" | "tour";

interface RegistrationSuccessContentProps {
  paymentSuccess: boolean;
}

export default function RegistrationSuccessContent({
  paymentSuccess,
}: RegistrationSuccessContentProps) {
  const router = useRouter();
  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const [reminderDays, setReminderDays] = useState<number[]>([]);
  const [item, setItem] = useState<RegistrationItem | null>(null);
  const [itemType, setItemType] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const reminderForm = useForm<ReminderFormValues>({
    defaultValues: {
      day2: false,
      day3: false,
      day5: false,
    },
  });

  useEffect(() => {
    try {
      const storedEvent = sessionStorage.getItem(EVENT_STORAGE_KEY);
      const storedTour = sessionStorage.getItem(TOUR_STORAGE_KEY);

      if (storedEvent) {
        setItem(JSON.parse(storedEvent) as RegistrationItem);
        setItemType("event");
      } else if (storedTour) {
        setItem(JSON.parse(storedTour) as RegistrationItem);
        setItemType("tour");
      }
    } catch (error) {
      console.error("خطا در خواندن اطلاعات ثبت‌نام:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const handleConfirmReminders = () => {
    if (!item || !itemType) return;

    try {
      const storageKey = "nova-event-reminders";
      const stored = localStorage.getItem(storageKey);
      const existing = stored ? JSON.parse(stored) : [];

      const reminder = {
        id: `${itemType}-${item.id}`,
        itemType,
        itemId: item.id,
        title: item.title,
        startTime: item.startTime,
        reminderDays,
        createdAt: new Date().toISOString(),
      };

      const reminders = Array.isArray(existing)
        ? existing.filter((entry) => entry.id !== reminder.id)
        : [];

      localStorage.setItem(
        storageKey,
        JSON.stringify([...reminders, reminder]),
      );

      setReminderModalOpen(false);
    } catch (error) {
      console.error("خطا در ذخیره یادآوری:", error);
    }
  };

  useEffect(() => {
    if (!paymentSuccess || !item || !itemType) return;

    addNotification({
      id: `${itemType}-${item.id}-${Date.now()}`,
      title: "ثبت‌نام موفق",
      message:
        itemType === "event"
          ? `ایونت «${item.title}» با موفقیت ثبت شد.`
          : `تور «${item.title}» با موفقیت ثبت شد.`,
      createdAt: new Date().toISOString(),
      isRead: false,
    });
    setReminderModalOpen(true);
  }, [paymentSuccess, item, itemType]);

  const title = paymentSuccess
    ? "پرداخت با موفقیت انجام شد"
    : "پرداخت ناموفق بود";

  const description = paymentSuccess
    ? "ثبت‌نام شما با موفقیت انجام شد. اطلاعات ثبت‌نام به شما پیامک می‌شود."
    : "پرداخت شما انجام نشد. در صورت کسر وجه، مبلغ طبق قوانین بانک به حساب شما بازگردانده می‌شود.";

  const detailsPath =
    itemType === "event"
      ? `/experience/events-list/event-detail/${item?.id}`
      : `/experience/tours-list/tour-detail/${item?.id}`;

  const listPath =
    itemType === "event" ? "/experience/events-list" : "/experience/tours-list";

  const displayPrice =
    item?.totalPrice != null
      ? `${item.totalPrice.toLocaleString("fa-IR")} تومان`
      : (item?.priceText ?? "—");

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
          src={
            paymentSuccess
              ? "/images/PaymentImage/Success.svg"
              : "/images/PaymentImage/Unsuccessful.svg"
          }
          alt={paymentSuccess ? "پرداخت موفق" : "پرداخت ناموفق"}
          width={200}
          height={160}
          style={{ objectFit: "contain" }}
        />

        <Typography variant="extraBold2xl" sx={{ textAlign: "center" }}>
          {title}
        </Typography>

        <Typography
          variant="mediumSm"
          color={semanticColors.text.secondary}
          sx={{ textAlign: "center" }}
        >
          {description}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
            <Typography variant="regularSm">
              در حال دریافت اطلاعات ثبت‌نام...
            </Typography>
          </Box>
        ) : item ? (
          <FeaturedTourCard
            image={item.thumbnail || DEFAULT_IMAGE}
            title={item.title}
            date={formatPersianDate(item.startTime)}
            remaining={Math.max(
              0,
              item.capacity - item.usedCapacity,
            ).toLocaleString("fa-IR")}
            price={displayPrice}
          />
        ) : (
          <Typography variant="regularSm" color="text.secondary">
            اطلاعات ثبت‌نام در دسترس نیست.
          </Typography>
        )}
      </Box>

      <Stack spacing={1} sx={{ mt: "auto", pt: 4 }}>
        {paymentSuccess ? (
          <Button
            variant="contained"
            fullWidth
            disabled={!item || !itemType}
            onClick={() => {
              if (item) {
                router.push(detailsPath);
              }
            }}
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
            {itemType === "event" ? "مشاهده جزئیات ایونت" : "مشاهده جزئیات تور"}
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            onClick={() => router.push(listPath)}
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
            {itemType === "event"
              ? "بازگشت به لیست ایونت‌ها"
              : "بازگشت به لیست تورها"}
          </Button>
        )}

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

      <AlertModal
        open={reminderModalOpen}
        onClose={() => setReminderModalOpen(false)}
        icon={
          <CheckCircleOutlineRoundedIcon
            sx={{ fontSize: 32, color: "#FFFFFF" }}
          />
        }
        title="یادآوری قبل از سفر"
        description={`چند روز قبل از شروع ${itemType === "event" ? "ایونت" : "تور"} «${item?.title ?? ""}» بهت یادآوری کنیم؟`}
        confirmButton={{
          label: "ثبت یادآوری",
          onClick: handleConfirmReminders,
        }}
        cancelButton={{
          label: "فعلاً نه",
          onClick: () => setReminderModalOpen(false),
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
        
          <FormProvider {...reminderForm}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mb: 2,
                gap: 1.5,
              }}
            >
              <FormCheckbox<ReminderFormValues>
                name="day2"
                label="۲ روز قبل"
                onCheckedChange={(checked) => {
                  reminderForm.setValue("day2", checked);
                  reminderForm.setValue("day3", false);
                  reminderForm.setValue("day5", false);
                  setReminderDays(checked ? [2] : []);
                }}
              />

              <FormCheckbox<ReminderFormValues>
                name="day3"
                label="۳ روز قبل"
                onCheckedChange={(checked) => {
                  reminderForm.setValue("day2", false);
                  reminderForm.setValue("day3", checked);
                  reminderForm.setValue("day5", false);
                  setReminderDays(checked ? [3] : []);
                }}
              />

              <FormCheckbox<ReminderFormValues>
                name="day5"
                label="۵ روز قبل"
                onCheckedChange={(checked) => {
                  reminderForm.setValue("day2", false);
                  reminderForm.setValue("day3", false);
                  reminderForm.setValue("day5", checked);
                  setReminderDays(checked ? [5] : []);
                }}
              />
            </Box>
          </FormProvider>
        
        </Box>
      </AlertModal>
    </Box>
  );
}
