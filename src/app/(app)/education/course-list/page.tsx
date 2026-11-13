// app/(app)/education/course-list/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useCourses } from "@/features/education/api";

import CoursesListPage from "@/features/education/courses-list/index";

function CoursesContent() {
  const searchParams = useSearchParams();
  const filterFromQuery = searchParams.get("filter") ?? "";
  const { data, isLoading, isError, refetch } = useCourses();

  return (
    <CoursesListPage
      courses={data ?? []}
      isLoading={isLoading}
      isError={isError}
      onRetry={() => refetch()}
      initialSearch={filterFromQuery}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <CoursesContent />
    </Suspense>
  );
}