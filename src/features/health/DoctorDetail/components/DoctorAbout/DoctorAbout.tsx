"use client";


import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";

import type { DoctorAboutProps } from "./DoctorAbout.types";

import {
  DoctorAboutStyles,
  DoctorDetailTextStyles,
  DoctorHighlightsListStyles,
  DoctorHighlightItemStyles,
  DoctorHighlightCheckStyles,
  DoctorHighlightTextStyles,
  DoctorQualificationsSectionStyles,
  DoctorQualificationsListStyles,
  DoctorQualificationItemStyles,
  DoctorQualificationBulletStyles,
  DoctorQualificationTextStyles,
  DoctorDescriptionStyles,
} from "./DoctorAbout.styles";

export default function DoctorAbout({
  biography,
  highlights,
  qualifications,
}: DoctorAboutProps) {
  return (
    <Box sx={DoctorAboutStyles}>
      {/* توضیحات پزشک */}
      <Box>
        <Typography variant="mediumSm" sx={DoctorDetailTextStyles}>
          {biography}
        </Typography>

        <Box sx={DoctorDescriptionStyles}>
          <Typography variant="mediumSm" sx={DoctorDetailTextStyles}>
            {biography}
          </Typography>

          {/* <Typography
            component="button"
            type="button"
            variant="mediumSm"
            onClick={() => {}}
            sx={MoreButtonStyles}
          >
            بیشتر
          </Typography> */}
        </Box>
      </Box>

      {/* موارد تیک‌دار */}
      <Box sx={DoctorHighlightsListStyles}>
        {highlights.map((highlight) => (
          <Box key={highlight} sx={DoctorHighlightItemStyles}>
            <Box sx={DoctorHighlightCheckStyles}>
              <CheckIcon sx={{ fontSize: 12 }} />
            </Box>

            <Typography variant="mediumBase" sx={DoctorHighlightTextStyles}>
              {highlight}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* موارد بولت‌دار */}
      <Box sx={DoctorQualificationsSectionStyles}>
        <Box sx={DoctorQualificationsListStyles}>
          {qualifications.map((qualification) => (
            <Box key={qualification} sx={DoctorQualificationItemStyles}>
              <CircleIcon sx={DoctorQualificationBulletStyles} />

              <Typography
                variant="mediumBase"
                sx={DoctorQualificationTextStyles}
              >
                {qualification}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
