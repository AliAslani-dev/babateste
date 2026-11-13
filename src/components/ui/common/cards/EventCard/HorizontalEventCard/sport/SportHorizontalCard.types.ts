import { StaticImageData } from "next/image";

export interface SportHorizontalCardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
    onClick?: () => void;
}