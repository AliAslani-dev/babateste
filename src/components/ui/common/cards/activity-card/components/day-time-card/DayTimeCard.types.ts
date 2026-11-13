import { StaticImageData } from "next/image";

export interface DayTimeCardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  href?: string;
}
