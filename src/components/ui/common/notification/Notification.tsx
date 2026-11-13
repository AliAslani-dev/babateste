import Link from "next/link";
import { Box, Typography } from "@mui/material";
import {
  containerStyles,
  iconWrapperStyles,
  contentStyles,
  headerStyles,
  metaStyles,
  dotStyles,
  titleStyles,
  descriptionStyles,
} from "./Notification.styles";
import type { NotificationProps } from "./Notification.types";

export const Notification = ({
  title,
  description,
  time,
  icon,
  href,
}: NotificationProps) => {
  const content = (
    <Box sx={containerStyles}>
      {/* Icon on the right (RTL start) */}
      <Box sx={iconWrapperStyles}>{icon}</Box>

      {/* Text content */}
      <Box sx={contentStyles}>
        {/* Title on the right, time + dot on the left (RTL order) */}
        <Box sx={headerStyles}>
          <Typography variant="demiboldSm" sx={titleStyles}>
            {title}
          </Typography>
          <Box sx={metaStyles}>
            <Typography variant="light2xs" color="text.secondary">
              {time}
            </Typography>
            <Box sx={dotStyles} />
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="regularXs"
          sx={{ ...descriptionStyles, color: "text.secondary" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );

  if (!href) return content;

  return (
    <Link href={href} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
      {content}
    </Link>
  );
};