"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import {
  recentActivitiesContainerStyles,
  recentActivitiesHeaderStyles,
  recentActivitiesHeaderTitleStyles,
  recentActivitiesViewAllStyles,
  recentActivitiesListStyles,
  recentActivitiesRowStyles,
  recentActivitiesImageWrapperStyles,
  recentActivitiesImageSize,
  recentActivitiesImageStyles,
  recentActivitiesContentStyles,
  recentActivitiesTitleStyles,
  recentActivitiesDateStyles,
  recentActivitiesScoreBadgeStyles,
  recentActivitiesScoreTextStyles,
  recentActivitiesStarCoinStyles,
  recentActivitiesStarIconStyles,
  recentActivitiesDividerStyles,
} from "./RecentActivities.styles";

import { RecentActivitiesProps } from "./RecentActivities.types";

const toPersianDigits = (value: string | number) =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function RecentActivities({
  items,
  onViewAll,
  viewAllHref,
}: RecentActivitiesProps) {
  return (
    <Box sx={recentActivitiesContainerStyles} dir="rtl">
      {/* Header */}
      <Box sx={recentActivitiesHeaderStyles}>
        <Typography variant="boldLg" sx={recentActivitiesHeaderTitleStyles}>
          فعالیت های اخیر
        </Typography>

        <Box
          component={viewAllHref ? "a" : "button"}
          href={viewAllHref}
          onClick={!viewAllHref ? onViewAll : undefined}
          sx={recentActivitiesViewAllStyles}
        >
          <Typography variant="regularXs">مشاهده همه</Typography>
          <ChevronLeftRoundedIcon sx={{ width: 16, height: 16 }} />
        </Box>
      </Box>

      {/* Activity list card */}
      <Box sx={recentActivitiesListStyles}>
        {items.map((item, index) => (
          <Box key={index}>
            <Box sx={recentActivitiesRowStyles}>
              {/* Icon (first child = right side in RTL) */}
              <Box
                sx={{
                  ...recentActivitiesImageWrapperStyles,
                  backgroundColor: item.iconBgColor ?? "#F2F2F2",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={recentActivitiesImageSize}
                  height={recentActivitiesImageSize}
                  style={recentActivitiesImageStyles}
                />
              </Box>

              {/* Title + Date */}
              <Box sx={recentActivitiesContentStyles}>
                <Typography variant="mediumSm" sx={recentActivitiesTitleStyles}>
                  {item.title}
                </Typography>
                <Typography variant="regularXs" sx={recentActivitiesDateStyles}>
                  {toPersianDigits(item.date)}
                </Typography>
              </Box>

              {/* Score badge (last child = left side in RTL) */}
              <Box sx={recentActivitiesScoreBadgeStyles}>
                <Box sx={recentActivitiesStarCoinStyles}>
                  <StarRoundedIcon sx={recentActivitiesStarIconStyles} />
                </Box>
                <Typography variant="demiboldXs" sx={recentActivitiesScoreTextStyles}>
                  {toPersianDigits(item.score)} امتیاز
                </Typography>
              </Box>
            </Box>

            {index < items.length - 1 && (
              <Box component="hr" sx={recentActivitiesDividerStyles} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}