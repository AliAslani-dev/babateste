import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@/components/ui/Button";
import { actionButtonStyles } from "../styles";

interface Props {
  onClick?: () => void;
}

export const EventCardAction = ({ onClick }: Props) => (
  <Button
    appearance="solid"
    shape="pill"
    iconPosition="end"
    icon={<ArrowBackIcon />}
    onClick={onClick}
    sx={actionButtonStyles}
  >
    ثبت نام
  </Button>
);
