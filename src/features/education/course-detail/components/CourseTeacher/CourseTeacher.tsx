"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import {
  teacherCardStyles,
  teacherHeaderStyles,
  teacherAvatarWrapperStyles,
  teacherAvatarFallbackStyles,
  teacherInfoStyles,
  teacherNameStyles,
  teacherRoleChipStyles,
  teacherRoleDotStyles,
  teacherDescriptionBoxStyles,
  teacherQuoteMarkStyles,
  teacherDescriptionStyles,
} from "./CourseTeacher.styles";
import type { CourseTeacherProps } from "./CourseTeacher.types";

export default function CourseTeacher({ teacher }: CourseTeacherProps) {
  const hasAvatar = Boolean(teacher.profileImage);
  const initial = teacher.fullName?.trim().charAt(0) ?? "?";

  return (
    <Box sx={teacherCardStyles}>
      {/* هدر: عکس مربعی بزرگ + نام + چیپ نقش */}
      <Box sx={teacherHeaderStyles}>
        <Box sx={teacherAvatarWrapperStyles}>
          {hasAvatar ? (
            <Image
              src={teacher.profileImage as string}
              alt={`تصویر ${teacher.fullName}`}
              fill
              sizes="(max-width: 600px) 96px, 120px"
              unoptimized
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box sx={teacherAvatarFallbackStyles}>{initial}</Box>
          )}
        </Box>

        <Box sx={teacherInfoStyles}>
          <Typography variant="boldLg" sx={teacherNameStyles}>
            {teacher.fullName}
          </Typography>

          <Box sx={teacherRoleChipStyles}>
            <Box sx={teacherRoleDotStyles} />
            <Typography variant="mediumXs" component="span">
              مدرس دوره
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* توضیحات با نقل‌قول */}
      {teacher.descriptions && (
        <Box sx={teacherDescriptionBoxStyles}>
          <Box component="span" sx={teacherQuoteMarkStyles} aria-hidden>
            ”
          </Box>
          <Typography variant="mediumBase" sx={teacherDescriptionStyles}>
            {teacher.descriptions}
          </Typography>
        </Box>
      )}
    </Box>
  );
}