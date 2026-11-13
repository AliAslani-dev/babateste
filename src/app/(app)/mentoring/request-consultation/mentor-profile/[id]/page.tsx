import { MentorProfile } from "@/features/mentoring/MentorProfile";

interface MentorProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MentorProfilePage({
  params,
}: MentorProfilePageProps) {
  const { id } = await params;
  return <MentorProfile mentorId={Number(id)} />;
}