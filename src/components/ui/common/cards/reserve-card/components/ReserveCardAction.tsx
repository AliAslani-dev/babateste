import { Button } from "@/components/ui/Button";
import { actionButtonStyles } from "../ReserveCard.styles";

interface Props {
  onClick?: () => void;
}

export const ReserveCardAction = ({ onClick }: Props) => (
  <Button
    appearance="solid"
    shape="pill"
    size="md"
    onClick={onClick}
    sx={actionButtonStyles}
  >
    رزرو نوبت
  </Button>
);
