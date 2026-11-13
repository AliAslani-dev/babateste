

export interface EventCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  location: string;
  onActionClick?: () => void;
  sx?: Record<string, unknown>;
}
