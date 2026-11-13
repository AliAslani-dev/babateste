import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@/components/ui/Button";
import { actionWrapperStyles } from "../FeaturedCard.styles";

interface Props {
  label: string;
  onClick?: () => void;
}

export const FeaturedCardAction = ({ label, onClick }: Props) => (
  <Box sx={actionWrapperStyles}>
    <Button
      appearance="solid"
      shape="pill"
      iconPosition="end"
      icon={<ArrowBackIcon />}
      onClick={onClick}
    >
      {label}
    </Button>
  </Box>
);