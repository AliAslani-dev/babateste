
export interface MentorCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}