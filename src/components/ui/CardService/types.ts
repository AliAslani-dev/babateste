// src/components/ui/CardService/CardService.types.ts

export interface CardServiceProps {
  /** Bold title text shown at top-right */
  title: string;
  /** Muted subtitle text shown below title */
  subtitle: string;
  /** Path to image inside /public, e.g. "/images/home/education.png" */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Click handler for the arrow button */
  onClick?: () => void;
}
