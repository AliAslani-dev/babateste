import { Typography } from "@mui/material";
import { titleStyles, descriptionStyles } from "../MentorCard.styles";

interface CardContentProps {
  title: string;
  description: string;
}

export const CardContent = ({ title, description }: CardContentProps) => (
  <>
    <Typography variant="boldSm" component="div" sx={titleStyles}>
      {title}
    </Typography>
    <Typography
      variant="regular2xs"
      color="textSecondary"
      component="div"
      sx={descriptionStyles}
    >
      {description}
    </Typography>
  </>
);
