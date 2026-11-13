import { SuccessPage } from "@/features/mentoring/MentorAppointment";

interface AppointmentSuccessRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentSuccessRoute({ params }: AppointmentSuccessRouteProps) {
  const { id } = await params;
  return <SuccessPage mentorId={Number(id)} />;
}