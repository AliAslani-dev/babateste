import { StaticImageData } from "next/image";

export interface VerticalTourCardProps {
  image: string | StaticImageData;
  title: string;
  date: string;
  remaining: number;
  price: string;
  onButtonClick?: () => void;
  href?: string;
}
