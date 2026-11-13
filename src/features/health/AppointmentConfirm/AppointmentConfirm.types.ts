export interface AppointmentConfirmData {
  doctorName: string;
  doctorSpeciality: string;
  doctorImage: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
}

export interface AppointmentConfirmProps {
  data: AppointmentConfirmData;
  descriptions: string;
  onDescriptionsChange: (value: string) => void;
  onContinue: () => void;
  onBack?: () => void;
  isSubmitting?: boolean;
}