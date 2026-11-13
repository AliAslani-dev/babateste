import CourseWatchPage from "@/features/education/CourseWatch/CourseWatchPage";
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CourseWatchPage courseId={id} />;
}