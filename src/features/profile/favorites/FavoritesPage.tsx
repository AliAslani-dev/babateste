
"use client";

import { useMemo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import FavoriteItemCard from "@/components/ui/common/cards/favorite-card/FavoriteCard";

// Queries
import { useDoctorFavorites } from "@/features/health/api";
import { useCourseFavorites } from "@/features/education/api";
import { useTourFavorites } from "@/features/experience/api";
import { useEventFavorites } from "@/features/experience/api";

// Mutations
import {
  useRemoveDoctorFavorite,
} from "@/features/health/api";

import {
  useRemoveCourseFavorite,
} from "@/features/education/api";

import {
  useRemoveTourFavorite,
} from "@/features/experience/api";

import {
  useRemoveEventFavorite,
} from "@/features/experience/api";

// Styles
import {
  FavoritesLoadingStyles,
  FavoritesErrorContainerStyles,
  FavoritesRetryStyles,
  FavoritesContainerStyles,
  FavoritesEmptyTextStyles,
} from "./FavoritesPage.styles";

type FavoriteType = "doctor" | "course" | "tour" | "event";

interface FavoriteCardItem {
  id: number;
  type: FavoriteType;
  title: string;
  subtitle: string;
  imageSrc: string;
}

type ApiItem = Record<string, unknown>;

const DEFAULT_IMAGE =
  "/images/RequestConsultation/consultaion-user.png";

const getString = (...values: unknown[]): string | undefined => {
  return values.find(
    (value): value is string =>
      typeof value === "string" && value.trim().length > 0,
  );
};

const getId = (item: ApiItem): number => {
  return Number(
    item.id ??
      item.doctorId ??
      item.DoctorId ??
      item.courseId ??
      item.CourseId ??
      item.tourId ??
      item.eventId,
  );
};

const getImage = (
  item: ApiItem,
  type: FavoriteType,
): string => {
  if (type === "course") {
    return (
      getString(item.thumbnail, item.imageUrl, item.image_url) ??
      DEFAULT_IMAGE
    );
  }

  const images = Array.isArray(item.images)
    ? item.images
    : [];

  const firstImage = images
    .map((value) => value as ApiItem)
    .find(
      (image) =>
        typeof image.imageUrl === "string" &&
        image.imageUrl.trim().length > 0,
    );

  const firstImageDto = images
    .map((value) => value as ApiItem)
    .find(
      (image) =>
        typeof image.image_url === "string" &&
        image.image_url.trim().length > 0,
    );

  return (
    getString(
      item.profile_picture_url,
      item.profilePictureUrl,
      item.thumbnail,
      item.imageUrl,
      item.avatar,
      item.imageSrc,
      item.thumbnailUrl,
      item.photo,
      firstImage?.imageUrl,
      firstImageDto?.image_url,
    ) ?? DEFAULT_IMAGE
  );
};

const normalizeFavorites = (
  items: unknown[] | undefined,
  type: FavoriteType,
  fallbackSubtitle: string,
): FavoriteCardItem[] => {
  if (!Array.isArray(items)) return [];

  return items
    .map((value) => {
      const item = value as ApiItem;

      const title =
        type === "doctor"
          ? getString(item.name, item.title)
          : getString(
              item.title,
              item.courseTitle,
              item.eventTitle,
              item.tourTitle,
              item.name,
            );

      const subtitle =
        type === "course"
          ? [
              item.total_hours != null
                ? `${item.total_hours} ساعت`
                : null,
              item.total_learners != null
                ? `${item.total_learners} دانشجو`
                : null,
            ]
              .filter(Boolean)
              .join(" | ") || "دوره آموزشی"
          : type === "doctor"
            ? getString(
                item.speciality_text,
                item.specialityText,
                item.DoctorType,
              ) ?? "تخصص نامشخص"
            : getString(
                item.specialty,
                item.subtitle,
                item.category,
                item.description,
                item.shortDescription,
              ) ?? fallbackSubtitle;

      return {
        id: getId(item),
        type,
        title: title ?? "بدون عنوان",
        subtitle,
        imageSrc: getImage(item, type),
      };
    })
    .filter(
      (item) =>
        Number.isFinite(item.id) && item.id > 0,
    );
};

export default function FavoritesPage() {
  const router = useRouter();

  const doctorsQuery = useDoctorFavorites();
  const coursesQuery = useCourseFavorites();
  const toursQuery = useTourFavorites();
  const eventsQuery = useEventFavorites();

  const removeDoctor = useRemoveDoctorFavorite();
  const removeCourse = useRemoveCourseFavorite();
  const removeTour = useRemoveTourFavorite();
  const removeEvent = useRemoveEventFavorite();

  const isLoading =
    doctorsQuery.isLoading ||
    coursesQuery.isLoading ||
    toursQuery.isLoading ||
    eventsQuery.isLoading;

  const isError =
    doctorsQuery.isError ||
    coursesQuery.isError ||
    toursQuery.isError ||
    eventsQuery.isError;

  const favorites = useMemo(
    () => [
      ...normalizeFavorites(
        doctorsQuery.data as unknown[] | undefined,
        "doctor",
        "دکتر",
      ),
      ...normalizeFavorites(
        toursQuery.data as unknown[] | undefined,
        "tour",
        "تور گردشگری",
      ),
      ...normalizeFavorites(
        eventsQuery.data as unknown[] | undefined,
        "event",
        "ایونت",
      ),
      ...normalizeFavorites(
        coursesQuery.data as unknown[] | undefined,
        "course",
        "دوره آموزشی",
      ),
    ],
    [
      doctorsQuery.data,
      toursQuery.data,
      eventsQuery.data,
      coursesQuery.data,
    ],
  );

  const handleRemoveFavorite = async (
    item: FavoriteCardItem,
  ) => {
    try {
      switch (item.type) {
        case "doctor":
          await removeDoctor.mutateAsync({
            DoctorId: String(item.id),
          });
          break;

        case "course":
          await removeCourse.mutateAsync({
            CourseId: String(item.id),
          });
          break;

        case "tour":
          await removeTour.mutateAsync({
            tourId: String(item.id),
          });
          break;

        case "event":
          await removeEvent.mutateAsync({
            eventId: String(item.id),
          });
          break;
      }
    } catch (error) {
      console.error(
        "خطا در حذف علاقه‌مندی:",
        error,
      );
    }
  };

  const handleCardClick = (
    item: FavoriteCardItem,
  ) => {
    switch (item.type) {
      case "doctor":
        router.push(
          `/health/doctors-list/doctor-detail/${item.id}`,
        );
        break;

      case "course":
        router.push(
          `/education/course-list/course-detail/${item.id}`,
        );
        break;

      case "tour":
        router.push(
          `/experience/tours-list/tour-detail/${item.id}`,
        );
        break;

      case "event":
        router.push(
          `/experience/events-list/event-detail/${item.id}`,
        );
        break;
    }
  };

  if (isLoading) {
    return (
      <Box sx={FavoritesLoadingStyles}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={FavoritesErrorContainerStyles}>
        <Typography variant="mediumSm">
          دریافت علاقه‌مندی‌ها با خطا مواجه شد.
        </Typography>

        <Typography
          variant="regularXs"
          onClick={() => {
            void doctorsQuery.refetch();
            void coursesQuery.refetch();
            void toursQuery.refetch();
            void eventsQuery.refetch();
          }}
          sx={FavoritesRetryStyles}
        >
          تلاش مجدد
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={FavoritesContainerStyles}>
  
      {favorites.length === 0 ? (
        <Typography
          variant="regularXs"
          sx={FavoritesEmptyTextStyles}
        >
          هنوز موردی به علاقه‌مندی‌ها اضافه نکرده‌ای.
        </Typography>
      ) : (
        favorites.map((item) => (
          <FavoriteItemCard
            key={`${item.type}-${item.id}`}
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
            isSaved
            onClick={() => handleCardClick(item)}
            onSaveToggle={() =>
              handleRemoveFavorite(item)
            }
          />
        ))
      )}
    </Box>
  );
}
