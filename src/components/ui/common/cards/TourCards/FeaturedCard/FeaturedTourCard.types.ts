import { StaticImageData } from "next/image";

export interface FeaturedTourCardProps {
  image: string | StaticImageData;
  title: string;
  badge?: string;
  date: string;
  remaining: string;
  price: string;
  isBookmarked?: boolean;
  onBookmarkClick?: () => void;
  onCardClick?: () => void;
  href?: string;
}