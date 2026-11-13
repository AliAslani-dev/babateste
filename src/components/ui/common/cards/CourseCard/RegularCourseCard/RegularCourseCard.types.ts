import type { FeaturedCardStats } from "../FeaturedCard/FeaturedCard.types";

export interface RegularCourseCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  stats: FeaturedCardStats;
  description: string;
  isSaved?: boolean;
  onBookmarkClick?: () => void;
  onCardClick?: () => void;
}
