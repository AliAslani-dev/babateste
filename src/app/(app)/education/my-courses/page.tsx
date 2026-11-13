"use client";

import { useMyCourses } from "@/features/education/api";
import CoursesListPage from "@/features/education/courses-list";

export default function Page() {
  const { data, isLoading, isError, refetch } = useMyCourses();

  return (
    <CoursesListPage
      courses={data ?? []}
      isLoading={isLoading}
      isError={isError}
      onRetry={() => refetch()}
    />
  );
}