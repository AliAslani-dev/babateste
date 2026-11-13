import { StaticImageData } from "next/image";

export interface SimpleCardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  onButtonClick?: () => void;
  href?: string;
  disabled?: boolean;
}
