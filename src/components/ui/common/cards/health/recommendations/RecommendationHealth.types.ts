import { StaticImageData } from "next/image";

export interface RecommendationHealthProps {
  image: string | StaticImageData;
  title: string;
  text: string;
  onClick?: () => void;
}