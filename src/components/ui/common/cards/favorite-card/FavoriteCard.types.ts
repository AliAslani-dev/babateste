export interface FavoriteItemCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  isSaved?: boolean;
  onSaveToggle?: () => void;
  onClick?: () => void;
}