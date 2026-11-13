/* ============================================================
 * Stats
 * ============================================================ */
export interface FeaturedCardStats {
  chapters: string;
  duration: string;
  students: string;
}

/* ============================================================
 * Props
 * ============================================================ */
export interface FeaturedCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  stats: FeaturedCardStats;
  description: string;
  actionLabel: string;
  onActionClick?: () => void;
}