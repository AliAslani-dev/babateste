"use client";

import { Box } from "@mui/material";
import { FeaturedCard } from "@/components/ui/common/cards/CourseCard/FeaturedCard";
import { useRouter } from "next/navigation";
import { toPersianNumber } from "@/lib/utils";

import {
  FavoriteCourseSectionStyles,
  FavoriteCourseSectionHeaderStyles,
} from "./FavoriteCourseSection.styles";
import { Slider } from "@/components/ui/slider";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { ChevronLeft } from "@mui/icons-material";

import { useCourses } from "../../api";

export default function FavoriteCourseSection() {
  const router = useRouter();
  const { data: courses = [], isLoading } = useCourses();

  const handleViewAll = () => {
    router.push("/education/course-list");
  };

  // اگه در حال لود یا داده‌ای نیست، چیزی رندر نکن
  if (isLoading || courses.length === 0) return null;

  return (
    <Box sx={FavoriteCourseSectionStyles}>
      <Box sx={FavoriteCourseSectionHeaderStyles}>
        <TitleBar
          title="دوره های محبوب"
          actionLabel="مشاهده همه "
          icon={<ChevronLeft />}
          onActionClick={handleViewAll}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          // overflow: "hidden" رو برداشتم تا پگینیشن بیرونی بریده نشه
        }}
      >
        <Slider
          items={courses}
          showPagination
          paginationVariant="small"
          paginationPosition="outside"
          swipeDirection="rtl"
          renderSlide={(course) => (
            <FeaturedCard
              imageSrc={course.imageUrl ?? ""}
              imageAlt={course.title}
              title={course.title}
              stats={{
                chapters: `${toPersianNumber(15)} فصل`,
                duration: `${toPersianNumber(course.totalHours ?? "")} ساعت`,
                students: `${toPersianNumber(course.totalLearners ?? "")} دانشجو`,
              }}
              description={course.descriptions ?? ""}
              actionLabel="مشاهده دوره"
              onActionClick={() =>
                router.push(
                  `/education/course-list/course-detail/${course.id}/watch`,
                )
              }
            />
          )}
        />
      </Box>
    </Box>
  );
}
