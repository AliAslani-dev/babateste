import { StaticImageData } from "next/image";

export interface ProgressCardProps {
  image: string | StaticImageData;
  title: string;
  percentage: number;
  buttonLabel: string;
  onButtonClick?: () => void;
  href?: string;
}
