export interface AppointmentFormValues {
  topic: string;
  consultationType: "online" | "in-person";
  date: string;
  time: string;
  description: string;
}

export interface MentorAppointmentInfo {
  mentorId: number;
  name: string;
  subtitle: string;
  imageSrc?: string;
}
