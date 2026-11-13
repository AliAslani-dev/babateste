"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // 👈 اضافه شد
import { Button } from "@/components/ui/Button";

import DoctorAbout from "../DoctorAbout/DoctorAbout";

import {
  DoctorDetailBox,
  DoctorDetailHeroBox,
  DoctorDetailTextBox,
  DoctorHeadingBox,
  DoctorTitleStyles,
  DoctorSubtitleStyles,
  DoctorToggleBarBox,
  DoctorActiveToggleBarBox,
  DoctorAppointmentButtonWrapper,
  DoctorAppointmentButtonStyles,
} from "./DoctorDetail.styles";

import { DoctorTabs } from "../../data/Doctor.data";
import { ToggleBars } from "@/components/ui/common/cards/InfoCard";

import type { DoctorDetail } from "@/features/health/api";
import { CommentItem, Comments } from "@/components/ui/common/Comments";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";
import { useDoctorComments } from "@/features/health/api";
import { useCommentDoctor } from "@/features/health/api";

interface DoctorDetailsProps {
  doctor: DoctorDetail;
  doctorId: number | string; // 👈 اضافه شد تا بدونیم آیدی چیه
}

export default function DoctorDetails({
  doctor,
  doctorId,
}: DoctorDetailsProps) {
  const [activeTab, setActiveTab] = useState("information");
  const router = useRouter(); // 👈

  const snackbar = useSnackbar();

  // دریافت کامنت‌های پزشک
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useDoctorComments(doctorId);

  // ثبت کامنت پزشک
  const commentMutation = useCommentDoctor();

  // تبدیل کامنت‌های API به مدل Comments
  const mappedComments: CommentItem[] | undefined = comments?.map((c) => ({
    commentText: c.commentText,
    commenter: {
      name: c.commenter.name,
      phoneNumber: c.commenter.phoneNumber,
      profileImage: c.commenter.profileImage ?? null,
    },
  }));

  const handleSubmitComment = (text: string) =>
    new Promise<void>((resolve, reject) => {
      commentMutation.mutate(
        {
          doctorId,
          comment_text: text,
        },
        {
          onSuccess: (data) => {
            snackbar.showSuccess(data.message);
            resolve();
          },
          onError: (error) => {
            snackbar.showError(error);
            reject(error);
          },
        },
      );
    });

  const descriptionLines = doctor.descriptions
    ? doctor.descriptions
        .split(/\n|،/)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <Box sx={DoctorDetailBox}>
      <Box sx={DoctorDetailHeroBox}>
        <Image
          src={doctor.profileImage ?? "/images/health/doctors/doctor-woman.png"}
          alt={`تصویر ${doctor.name}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={DoctorDetailTextBox}>
        <Box sx={DoctorHeadingBox}>
          <Typography variant="bold2xl" sx={DoctorTitleStyles}>
            {doctor.name}
          </Typography>

          <Typography variant="mediumBase" sx={DoctorSubtitleStyles}>
            {doctor.specialityText}
          </Typography>
        </Box>

        <Box sx={DoctorToggleBarBox}>
          <ToggleBars
            items={DoctorTabs}
            value={activeTab}
            onChange={setActiveTab}
            gap={10}
          />
        </Box>

        <Box sx={DoctorActiveToggleBarBox}>
          {activeTab === "information" && (
            <DoctorAbout
              biography={doctor.descriptions ?? ""}
              highlights={[doctor.specialityTag, doctor.location].filter(
                Boolean,
              )}
              qualifications={descriptionLines}
            />
          )}

          {/* {activeTab === "appointments" && (
            <Box>
              <Typography variant="mediumBase">
                نوبت‌های قابل رزرو پزشک
              </Typography>
            </Box>
          )} */}

          {activeTab === "comments" && (
            <Comments
              comments={mappedComments}
              isLoading={isCommentsLoading}
              isError={isCommentsError}
              isSubmitting={commentMutation.isPending}
              onSubmit={handleSubmitComment}
            />
          )}
        </Box>

        <Box sx={DoctorAppointmentButtonWrapper}>
          <Button
            color="primary"
            appearance="solid"
            size="xs"
            shape="pill"
            fullWidth
            typographyVariant="mediumBase"
            onClick={() =>
              router.push(
                `/health/doctors-list/doctor-detail/${doctorId}/appointment`,
              )
            }
            sx={DoctorAppointmentButtonStyles}
          >
            دریافت نوبت
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
