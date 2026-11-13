"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography, Dialog } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import type { TouchEvent, KeyboardEvent, ReactNode } from "react";
import type { TourAboutProps } from "./TourAbout.types";

import {
  tourAboutStyles,
  tourDetailTextStyles,
  tourImagesSectionStyles,
  tourImagesTitleStyles,
  tourImagesSliderStyles,
  tourImageItemStyles,
  tourAboutDividerStyles,
  tourGalleryDialogStyles,
  tourGalleryHeaderStyles,
  tourGalleryCounterStyles,
  tourGalleryCloseButtonStyles,
  tourGalleryImageContainerStyles,
  tourGalleryImageFrameStyles,
  tourGalleryPreviousButtonStyles,
  tourGalleryNextButtonStyles,
} from "./TourAbout.styles";

import MapIcon from "@/components/ui/icons/TourDetail/MapIcon";
import { TourUserCountIcon } from "@/components/ui/icons";
import Summary from "@/components/ui/common/cards/InfoCard/summary/Summary";
import { IconButton } from "@/components/ui/Button";
import ChevronLeftIcon from "@/components/ui/icons/arrows/ChevronLefticon";
import { AlertModal } from "@/components/ui/common";
import { useMe } from "@/features/auth";

const PERSONAL_INFO_PATH = "/profile/personal-info";

export default function TourAbout({
  detail,
  images,
  summaryItems,
  onRegister,
}: TourAboutProps) {
  const router = useRouter();
  const { data: profile, isLoading: isProfileLoading } = useMe();

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [nationalCodeAlertOpen, setNationalCodeAlertOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const isGalleryOpen = activeImageIndex !== null;
  const hasImages = images.length > 0;

  const showNextImage = () => {
    if (activeImageIndex === null || images.length < 2) return;

    setActiveImageIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  };

  const showPreviousImage = () => {
    if (activeImageIndex === null || images.length < 2) return;

    setActiveImageIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  };

  const closeGallery = () => {
    setActiveImageIndex(null);
    touchStartX.current = null;
  };

  // ─── ثبت‌نام با چک کد ملی ───
  const handleRegisterClick = () => {
    if (isProfileLoading) return;

    const hasNationalCode = Boolean(profile?.nationalCode?.trim());

    if (!hasNationalCode) {
      setNationalCodeAlertOpen(true);
      return;
    }

    onRegister?.();
  };

  const goToPersonalInfo = () => {
    setNationalCodeAlertOpen(false);
    router.push(PERSONAL_INFO_PATH);
  };

  const summaryIconMap: Record<
    "location" | "duration" | "capacity",
    ReactNode
  > = {
    location: <MapIcon />,
    duration: <AccessTimeOutlinedIcon />,
    capacity: <TourUserCountIcon />,
  };

  return (
    <>
      <Box sx={tourAboutStyles}>
        <Typography variant="mediumSm" sx={tourDetailTextStyles}>
          {detail}
        </Typography>

        {hasImages && (
          <Box sx={tourImagesSectionStyles}>
            <Typography variant="demiboldSm" sx={tourImagesTitleStyles}>
              تصاویر
            </Typography>

            <Box sx={tourImagesSliderStyles} aria-label="تصاویر تور">
              {images.map((image, index) => (
                <Box
                  key={`${image}-${index}`}
                  sx={tourImageItemStyles}
                  role="button"
                  tabIndex={0}
                  aria-label={`نمایش بزرگ تصویر ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveImageIndex(index);
                    }
                  }}
                >
                  <Image
                    src={image}
                    alt={`تصویر ${index + 1} از تور`}
                    fill
                    sizes="90px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={tourAboutDividerStyles} />

        <Summary
          items={summaryItems.map((item) => ({
            id: item.id,
            label: item.label,
            value: item.value,
            icon: summaryIconMap[item.icon],
          }))}
          buttonText="ثبت‌نام "
          onButtonClick={handleRegisterClick}
        />
      </Box>

      {/* ─── هشدار نبود کد ملی ─── */}
      <AlertModal
        open={nationalCodeAlertOpen}
        onClose={() => setNationalCodeAlertOpen(false)}
        title="کد ملی ثبت نشده است"
        description="برای ثبت‌نام در این تور، ابتدا باید کد ملی خود را در بخش اطلاعات شخصی وارد کنید."
        confirmButton={{
          label: "ورود کد ملی",
          onClick: goToPersonalInfo,
        }}
        cancelButton={{
          label: "انصراف",
          onClick: () => setNationalCodeAlertOpen(false),
        }}
      />

      <Dialog
        fullScreen
        open={isGalleryOpen}
        onClose={closeGallery}
        sx={tourGalleryDialogStyles}
        slotProps={{
          paper: {
            onTouchStart: (event: TouchEvent<HTMLDivElement>) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            },

            onTouchEnd: (event: TouchEvent<HTMLDivElement>) => {
              const startX = touchStartX.current;

              if (startX === null) return;

              const endX = event.changedTouches[0]?.clientX ?? startX;
              const difference = endX - startX;

              if (Math.abs(difference) > 50) {
                if (difference < 0) {
                  showNextImage();
                } else {
                  showPreviousImage();
                }
              }

              touchStartX.current = null;
            },

            onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "ArrowLeft") {
                showNextImage();
              }

              if (event.key === "ArrowRight") {
                showPreviousImage();
              }

              if (event.key === "Escape") {
                closeGallery();
              }
            },
          },
        }}
      >
        {/* نوار بالایی */}
        <Box sx={tourGalleryHeaderStyles}>
          <Typography variant="body2" sx={tourGalleryCounterStyles}>
            {activeImageIndex !== null
              ? `${activeImageIndex + 1} / ${images.length}`
              : ""}
          </Typography>

          <IconButton
            aria-label="بستن تصاویر"
            onClick={closeGallery}
            sx={tourGalleryCloseButtonStyles}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* عکس بزرگ */}
        {isGalleryOpen && hasImages && activeImageIndex !== null && (
          <Box sx={tourGalleryImageContainerStyles}>
            <Box sx={tourGalleryImageFrameStyles}>
              <Image
                src={images[activeImageIndex]}
                alt={`تصویر ${activeImageIndex + 1} از تور`}
                fill
                priority
                sizes="360px"
                style={{
                  objectFit: "contain",
                  userSelect: "none",
                }}
              />
            </Box>
          </Box>
        )}

        {/* جابه‌جایی بین عکس‌ها */}
        {images.length > 1 && isGalleryOpen && (
          <>
            <IconButton
              aria-label="تصویر قبلی"
              onClick={showPreviousImage}
              sx={tourGalleryPreviousButtonStyles}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              aria-label="تصویر بعدی"
              onClick={showNextImage}
              sx={tourGalleryNextButtonStyles}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Dialog>
    </>
  );
}