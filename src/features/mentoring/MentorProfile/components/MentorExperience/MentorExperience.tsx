"use client";

import { Box, Typography } from "@mui/material";

import { toPersianNumber } from "@/lib/utils";
import { toJalaliDate } from "@/lib/utils/toJalaliDate";
import type { MentorExperienceProps } from "./MentorExperience.types";
import {
  mentorExperienceStyles,
  mentorExperienceItemStyles,
  mentorExperienceTitleStyles,
  mentorExperienceDescriptionStyles,
  mentorExperienceDateStyles,
  mentorExperienceEmptyStyles,
} from "./MentorExperience.styles";

function formatDateRange(startAt: string, endAt: string | null): string {
  const start = toPersianNumber(toJalaliDate(startAt));
  const end = endAt === null ? "تاکنون" : toPersianNumber(toJalaliDate(endAt));

  if (!start) return endAt !== null && end ? `تا ${end}` : "";
  if (!end) return `از ${start}`;

  return `${start} تا ${end}`;
}

export default function MentorExperience({ experiences }: MentorExperienceProps) {
  if (experiences.length === 0) {
    return (
      <Typography variant="regularSm" sx={mentorExperienceEmptyStyles}>
        سابقه‌ای برای این منتور ثبت نشده است.
      </Typography>
    );
  }

  return (
    <Box component="ul" sx={mentorExperienceStyles}>
      {experiences.map((experience) => {
        const dateRange = formatDateRange(experience.startAt, experience.endAt);

        return (
          <Box component="li" key={experience.id} sx={mentorExperienceItemStyles}>
            <Typography component="h3" variant="mediumSm" sx={mentorExperienceTitleStyles}>
              {experience.title}
            </Typography>

            {experience.descriptions && (
              <Typography variant="regularSm" sx={mentorExperienceDescriptionStyles}>
                {experience.descriptions}
              </Typography>
            )}

            {dateRange && (
              <Typography variant="regularXs" sx={mentorExperienceDateStyles}>
                {dateRange}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
