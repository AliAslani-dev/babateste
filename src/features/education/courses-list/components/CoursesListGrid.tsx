
"use client";

import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";

import { RegularCourseCard } from "@/components/ui/common/cards/CourseCard/RegularCourseCard";
import {
  coursesListWrapperStyles,
  coursesListEmptyStyles,
} from "../styles/CoursesList.styles";
import type { CourseCardItem } from "../types/courses.types";

interface CoursesListGridProps {
  courses: CourseCardItem[];
  onActionClick?: (courseId: string) => void;
  onSaveToggle?: (courseId: number) => void;
}

const toPersianDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const formatNumber = (n: number): string =>
  toPersianDigits(n.toLocaleString("en-US"));

export default function CoursesListGrid({
  courses,
  onActionClick,
  onSaveToggle,
}: CoursesListGridProps) {
  const router = useRouter();

  if (courses.length === 0) {
    return (
      <Box sx={coursesListEmptyStyles}>
        <Typography variant="boldSm" color="text.secondary">
          دوره‌ای با این فیلترها پیدا نشد 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={coursesListWrapperStyles}>
      {courses.map((course) => {
        const chaptersCount = course.tableOfContents
          ? course.tableOfContents.split("،").length
          : 0;

        return (
          <RegularCourseCard
            key={course.id}
            imageSrc={
              course.imageUrl ??
              "/images/cards/course-card/regular.png"
            }
            imageAlt={course.title}
            title={course.title}
            stats={{
              chapters: `${toPersianDigits(chaptersCount)} فصل`,
              duration: `${toPersianDigits(course.totalHours)} ساعت`,
              students: `${formatNumber(course.totalLearners)} دانشجو`,
            }}
            description={course.shortDescription}
            isSaved={Boolean(course.isSaved)}
            onBookmarkClick={() => {
              onSaveToggle?.(Number(course.id));
              onActionClick?.(String(course.id));
            }}
            onCardClick={() =>
              router.push(
                `/education/course-list/course-detail/${course.id}`,
              )
            }
          />
        );
      })}
    </Box>
  );
}
