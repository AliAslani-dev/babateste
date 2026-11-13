import type { ReactNode } from "react";

export interface RequestConsultaionCardProps {
  imageSrc: string;
  imageAlt?: string;

  name: string;
  title: string;
  specialty: string;

  rating?: string | number;
  sessionCount?: string | number;
  experience?: string | number;

  buttonText?: string;
  onButtonClick?: () => void;

  onCardClick?: () => void;

  className?: string;
}
