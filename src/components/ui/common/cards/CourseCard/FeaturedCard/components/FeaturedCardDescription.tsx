import { Typography } from "@mui/material";
import { descriptionStyles } from "../FeaturedCard.styles";

interface Props {
  description: string;
}

export const FeaturedCardDescription = ({ description }: Props) => (
  <Typography variant="medium2xs" dir="rtl" sx={descriptionStyles}>
    {description}
  </Typography>
);
