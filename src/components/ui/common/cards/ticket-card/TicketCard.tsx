import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";

import {
  ticketWrapperStyles,
  ticketCardStyles,
  topSectionStyles,
  imageWrapperStyles,
  contentStyles,
  bottomSectionStyles,
  pointContainerStyles,
  detailsLinkStyles,
} from "./TicketCard.styles";
import { TicketCardProps } from "./TicketCard.types";

const StarBadge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#FDB52A" />
    <circle cx="12" cy="12" r="10.5" fill="#FFCF4D" />
    <path
      d="M12 5.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L12 15.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z"
      fill="#FFE98A"
      stroke="#F2A31B"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export const TicketCard = ({
  imageSrc,
  imageAlt,
  title,
  discount,
  point,
  detailsLabel = "مشاهده جزییات",
  onDetailsClick,
}: TicketCardProps) => {
  return (
    <Box sx={ticketWrapperStyles}>
      <Card sx={ticketCardStyles}>
        {/* ── Top: image (left) + title/discount (right) ── */}
        <Box sx={topSectionStyles}>
          <Box sx={imageWrapperStyles}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="124px"
              style={{ objectFit: "cover", objectPosition: "left center" }}
              priority
            />
          </Box>

          <Box sx={contentStyles}>
            <Typography
              variant="demiboldSm"
              component="h3"
              sx={{ lineHeight: "20px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="regularXs"
              color="text.secondary"
              sx={{ lineHeight: "20px" }}
            >
              {discount}
            </Typography>
          </Box>
        </Box>

        {/* ── Bottom: points (right) + details link (left) ── */}
        <Box sx={bottomSectionStyles}>
          <Box sx={pointContainerStyles}>
            <StarBadge />
            <Typography variant="mediumXs" sx={{ lineHeight: "20px" }}>
              {point} امتیاز
            </Typography>
          </Box>

          <Box component="button" sx={detailsLinkStyles} onClick={onDetailsClick}>
            <Typography
              variant="mediumXs"
              sx={{ lineHeight: "20px", color: "inherit" }}
            >
              {detailsLabel}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};