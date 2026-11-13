import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";

interface CardActionProps {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export const CardAction = ({ text, onClick }: CardActionProps) => (
  <Button
    appearance="solid"
    color="primary"
    shape="pill"
    size="md"
    onClick={onClick}
  >
    {text}
  </Button>
);