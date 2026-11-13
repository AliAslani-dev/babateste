"use client";

import { Box, Typography } from "@mui/material";

import DoctorCard from "@/components/ui/common/cards/DoctorCard/components/DoctorCard";
import type { DoctorCardData } from "@/components/ui/common/cards/DoctorCard/components/DoctorCard.types";

import type { DoctorListItem } from "@/features/health/api";
import {
  doctorsListGridEmptyStyles,
  doctorsListGridWrapperStyles,
} from "./DoctorListGrid.styles";

interface DoctorsListGridProps {
  doctors: DoctorListItem[];
  savedIds?: number[];
  onSaveToggle?: (doctorId: number) => void;
  onCardClick?: (doctorId: number) => void;
}

export default function DoctorsListGrid({
  doctors,
  savedIds = [],
  onSaveToggle,
  onCardClick,
}: DoctorsListGridProps) {
  if (doctors.length === 0) {
    return (
      <Box sx={doctorsListGridEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          پزشکی با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={doctorsListGridWrapperStyles}>
      {doctors.map((doctor) => {
        const cardData: DoctorCardData = {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialityText,
          rating: doctor.score,
          reviewCount: 0,
          hospital: doctor.location,
          nextAppointment: "",
          image:
            doctor.profileImage ??
            "/images/health/doctors/doctor-woman.png",
          isSaved: savedIds.includes(doctor.id),
          category: "general",
        };

        return (
          <DoctorCard
            key={doctor.id}
            doctor={cardData}
            onSaveToggle={onSaveToggle}
            onClick={onCardClick}
          />
        );
      })}
    </Box>
  );
}