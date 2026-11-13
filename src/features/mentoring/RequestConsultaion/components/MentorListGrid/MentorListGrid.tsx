
"use client";

import { Box, Typography } from "@mui/material";

import RequestConsultaionCard from "@/components/ui/common/cards/mentor/Request-counsulution";



import { RequestConsultaionCardDataType } from "../../data/data";
import { mentorsListEmptyStyles, mentorsListWrapperStyles } from "./MentorList.styles";

interface MentorsListGridProps {
  mentors: RequestConsultaionCardDataType[];
  onActionClick?: (mentorId: number) => void;
}

export default function MentorsListGrid({
  mentors,
  onActionClick,
}: MentorsListGridProps) {
  if (mentors.length === 0) {
    return (
      <Box sx={mentorsListEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          منتوری با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={mentorsListWrapperStyles}>
      {mentors.map((mentor) => (
        <RequestConsultaionCard
          key={mentor.id}
          {...mentor}
          onCardClick={() => onActionClick?.(mentor.id)}
        />
      ))}
    </Box>
  );
}
