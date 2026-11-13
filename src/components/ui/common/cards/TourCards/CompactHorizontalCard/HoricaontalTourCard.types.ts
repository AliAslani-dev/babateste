import { StaticImageData } from "next/image";

export interface HorizontalTourCardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  onClick?: () => void;
}