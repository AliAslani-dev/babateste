import { AppointmentPage } from "@/features/mentoring/MentorAppointment";

interface AppointmentRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentRoute({ params }: AppointmentRouteProps) {
  const { id } = await params;
  return <AppointmentPage mentorId={Number(id)} />;
}
