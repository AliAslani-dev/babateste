import Image from "next/image";
import { Box, Typography } from "@mui/material";

import type { MentorAppointmentInfo } from "../types/appointment.types";
import { mentorCardSx, mentorCardImageSx, mentorCardInfoSx } from "./Appointment.styles";

interface MentorMiniCardProps {
  mentor: MentorAppointmentInfo;
}

export default function MentorMiniCard({ mentor }: MentorMiniCardProps) {
  return (
    <Box sx={mentorCardSx}>
      {/* RTL: image sits on the right */}
      <Box sx={mentorCardImageSx}>
        <Image
          src={mentor.imageSrc ?? "/images/mentors/MentorProfile/mentor-profile.jpg"}
          alt={mentor.name}
          fill
          sizes="120px"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={mentorCardInfoSx}>
        <Typography variant="mediumXs">{mentor.name}</Typography>
        <Typography variant="light2xs" color="text.secondary">
          {mentor.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
