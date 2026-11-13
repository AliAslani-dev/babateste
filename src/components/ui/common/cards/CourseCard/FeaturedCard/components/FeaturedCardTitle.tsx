import { Box, Typography } from "@mui/material";
import { titleStyles, titleWrapperStyles } from "../FeaturedCard.styles";

interface Props {
  title: string;
}

export const FeaturedCardTitle = ({ title }: Props) => (
  <Box sx={titleWrapperStyles}>
    <Typography variant="boldSm" sx={titleStyles}>
      {title}
    </Typography>
  </Box>
);