export interface DoctorCardData {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  hospital: string;
  nextAppointment: string;
  image: string;
  isSaved: boolean;
  category:string;
}

export interface DoctorCardProps {
  doctor: DoctorCardData;
  onSaveToggle?: (doctorId: number) => void;
  onClick?: (doctorId: number) => void;
}