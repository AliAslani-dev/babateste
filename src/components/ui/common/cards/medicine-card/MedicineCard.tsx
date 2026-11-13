"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import EditIcon from "@/components/ui/icons/cards/health-card/editIcon";
import type { MedicineCardProps } from "./MedicineCard.types";
import {
  medicineCardStyles,
  medicineCardContentStyles,
  medicineCardGroupStyles,
  medicineCardNameStyles,
  medicineCardSecondaryTextStyles,
  medicineCardTertiaryTextStyles,
  medicineCardLeftStyles,
  medicineCardEditIconStyles,
} from "./MedicineCard.styles";

export default function MedicineCard({
  name,
  dose,
  time,
  startDate,
  active = true,
  onToggle,
  onEdit,
  className,
}: MedicineCardProps) {
  // state داخلی که با prop همگام می‌مونه
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleToggle = () => {
    const next = !isActive;
    setIsActive(next);      // تغییر فوری UI
    onToggle?.(next);       // اطلاع به والد
  };

  return (
    <Box sx={medicineCardStyles} className={className}>
      <Box sx={medicineCardLeftStyles}>
        {/* Toggle Switch */}
        <Box
          role="switch"
          aria-checked={isActive}
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              handleToggle();
            }
          }}
          sx={{
            boxSizing: "border-box",
            position: "relative",
            width: 44,
            height: 24,
            borderRadius: "999px",
            cursor: "pointer",
            backgroundColor: isActive ? "#0A8EA6" : "rgba(117, 117, 117, 0.4)",
            border: `1px solid ${isActive ? "#0A7A91" : "rgba(117, 117, 117, 0.5)"}`,
            transition: "background-color 0.2s ease",
            flexShrink: 0,
            outline: "none",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 1,
              left: isActive ? 21 : 1,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#fff",
              transition: "left 0.2s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            },
            "&:focus-visible": {
              boxShadow: "0 0 0 2px rgba(10, 142, 166, 0.25)",
            },
          }}
        />

        {/* Edit icon */}
        <Box
          component="button"
          sx={{
            ...medicineCardEditIconStyles,
            background: "none",
            border: "none",
            padding: 0,
          }}
          onClick={onEdit}
          aria-label="ویرایش"
        >
          <EditIcon />
        </Box>
      </Box>

      <Box sx={medicineCardContentStyles}>
        <Box sx={medicineCardGroupStyles}>
          <Typography variant="demiboldSm" sx={medicineCardNameStyles}>
            {name}
          </Typography>
          <Typography variant="regularXs" sx={medicineCardSecondaryTextStyles}>
            {dose}
          </Typography>
        </Box>

        <Box sx={medicineCardGroupStyles}>
          <Typography variant="lightXs" sx={medicineCardTertiaryTextStyles}>
            {time}
          </Typography>
          <Typography variant="lightXs" sx={medicineCardTertiaryTextStyles}>
            {`شروع: ${startDate}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}