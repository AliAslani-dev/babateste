export interface ReserveCardProps {
  imageSrc: string;
  imageAlt: string;
  doctorName: string;
  specialty: string;
  time: string;
  date: string;
  onReserveClick?: () => void;
}
