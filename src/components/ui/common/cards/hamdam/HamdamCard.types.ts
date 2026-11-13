import type { ReactNode } from "react";

export interface HamdamCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon?: ReactNode;
  onButtonClick?: () => void;
  buttonHref?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}