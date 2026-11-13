"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ToggleBars from "@/components/ui/common/cards/InfoCard/ToggleBars/ToggleBars";
import InfoBars from "@/components/ui/common/cards/InfoCard/InfoBars/InfoBar";
import CourseTeacher from "../CourseTeacher/CourseTeacher";
import CourseAbout from "../CourseAbout/CourseAbout";
import Headlines from "../Headlines/Headlines";
import { Comments } from "@/components/ui/common/Comments";
import type { CommentItem } from "@/components/ui/common/Comments";
import { useCourseComments, useCommentCourse } from "@/features/education/api";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";

import {
  CourseActiveToggleBarBox,
  CourseDetailBox,
  CourseDetailHeroBox,
  CourseDetailTextBox,
  CourseHeadingBox,
  CourseTitleStyles,
  CourseSubtitleStyles,
  CourseToggleBarBox,
} from "./CourseDetails.styles";
import { CourseTabs } from "../../data/Course.data";
import UserOutlineIcon from "@/components/ui/icons/course-detail/UserOutlinedIcon";
import CourseNoteIcon from "@/components/ui/icons/course-detail/CourseNoteIcon";
import { CourseDetail } from "@/features/education/api";

interface CourseDetailsProps {
  course: CourseDetail;
}

const toPersianDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const formatNumber = (n: number): string =>
  toPersianDigits(n.toLocaleString("en-US"));

/**
 * اگر URL عکس نسبی بود، base URL را اضافه می‌کند.
 * اگر URL کامل (http/https) یا data: بود، دست نمی‌زند.
 */
const resolveImageUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;
  if (/^(https?:|data:|blob:)/i.test(url)) return url;
  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  if (!base) return url;
  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};

export default function CourseDetails({ course }: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState<string>("about");
  const pathname = usePathname();
  const snackbar = useSnackbar();
  const contentRef = useRef<HTMLDivElement | null>(null);

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useCourseComments(course.id);
  const commentMutation = useCommentCourse();

  useEffect(() => {
    try {
      localStorage.setItem(`course_data_${pathname}`, JSON.stringify(course));
    } catch {
      // ignore
    }
  }, [course, pathname]);

  const chaptersCount = course.tableOfContents
    ? course.tableOfContents.split("،").length
    : 0;

  const learningOutcomes = course.tableOfContents
    ? course.tableOfContents
        .split("،")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const goToTabAndScroll = (tab: string) => {
    setActiveTab(tab);
    // با کمی تأخیر تا تب جدید رندر بشه و ارتفاع صفحه محاسبه بشه
    requestAnimationFrame(() => {
      setTimeout(() => {
        const btn = document.getElementById("course-cta-button");
        if (btn) {
          btn.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else {
          const target =
            document.scrollingElement ?? document.documentElement;
          target.scrollTo({
            top: target.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 120);
    });
  };

  const mappedComments: CommentItem[] | undefined = comments?.map((c) => {
    const rawCommenter = c.commenter as unknown as {
      name: string | null;
      phoneNumber: string;
      profileImage?: string | null;
      profile_image?: string | null;
      avatar?: string | null;
      imageUrl?: string | null;
    };

    const rawImage =
      rawCommenter.profileImage ??
      rawCommenter.profile_image ??
      rawCommenter.avatar ??
      rawCommenter.imageUrl ??
      null;

    return {
      commentText: c.commentText,
      commenter: {
        name: c.commenter.name,
        profileImage: resolveImageUrl(rawImage),
        phoneNumber: c.commenter.phoneNumber,
      },
    };
  });

  const handleSubmitComment = (text: string) =>
    new Promise<void>((resolve, reject) => {
      commentMutation.mutate(
        { courseId: course.id, comment_text: text },
        {
          onSuccess: (data) => {
            snackbar.showSuccess(data.message);
            resolve();
          },
          onError: (error) => {
            snackbar.showError(error);
            reject(error);
          },
        },
      );
    });

  return (
    <Box sx={CourseDetailBox}>
      <Box sx={CourseDetailHeroBox}>
        <Image
          src={
            course.imageUrl ?? "/images/course/course-detail/course-detail.png"
          }
          alt={`تصویر دوره ${course.title}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={CourseDetailTextBox}>
        <Box sx={CourseHeadingBox}>
          <Typography variant="bold2xl" sx={CourseTitleStyles}>
            {course.title}
          </Typography>
          <Typography variant="mediumBase" sx={CourseSubtitleStyles}>
            {course.shortDescription}
          </Typography>
        </Box>

        <InfoBars
          dateIcon={<CourseNoteIcon />}
          dateText={`${toPersianDigits(chaptersCount)} فصل`}
          locationIcon={<AccessTimeOutlinedIcon />}
          locationText={`${toPersianDigits(course.totalHours)} ساعت`}
          userIcon={<UserOutlineIcon />}
          userText={`${formatNumber(course.totalLearners)} دانشجو`}
        />

        <Box sx={CourseToggleBarBox}>
          <ToggleBars
            items={CourseTabs}
            value={activeTab}
            onChange={setActiveTab}
          />

          <Box
            sx={{
              ...CourseActiveToggleBarBox,
              scrollMarginTop: "80px",
            }}
            ref={contentRef}
          >
            {activeTab === "about" && (
              <CourseAbout
                courseId={course.id}
                detail={course.descriptions}
                learningOutcomes={learningOutcomes}
              />
            )}

            {activeTab === "schedule" && (
              <Headlines
                episodes={course.episodes as any}
                onNavigateToAbout={() => goToTabAndScroll("about")}
              />
            )}

            {activeTab === "teacher" && (
              <CourseTeacher teacher={course.teacher} />
            )}

            {activeTab === "comments" && (
              <Comments
                comments={mappedComments}
                isLoading={isCommentsLoading}
                isError={isCommentsError}
                isSubmitting={commentMutation.isPending}
                onSubmit={handleSubmitComment}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}