import { Box } from "@mui/material";
import { ReserveCardContent } from "./components/ReserveCardContent";
import { ReserveCardAction } from "./components/ReserveCardAction";
import { cardStyles, contentWrapperStyles } from "./ReserveCard.styles";
import type { ReserveCardProps } from "./ReserveCard.types";

export const ReserveCard = ({
  imageSrc,
  imageAlt,
  doctorName,
  specialty,
  time,
  date,
  onReserveClick,
}: ReserveCardProps) => {
  return (
    <Box sx={cardStyles(imageSrc)} aria-label={imageAlt}>
      {/* Content sits on the right over the cream bg area of the image */}
      <Box sx={contentWrapperStyles}>
        <ReserveCardContent
          doctorName={doctorName}
          specialty={specialty}
          time={time}
          date={date}
        />
        <ReserveCardAction onClick={onReserveClick} />
      </Box>
    </Box>
  );
};
