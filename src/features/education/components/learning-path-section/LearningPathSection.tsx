"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import {
  learningPathsStyles,
  learningPathsGridStyles,
} from "./LearningPathSection.styles";
import CardCategory from "@/components/ui/common/cards/card-category";
import { TitleBar } from "@/components/ui/common/TitleBar";
import { AlertModal } from "@/components/ui/common";

type CategoryItem = {
  id: string;
  title: string;
  image: string;
  /** عنوان دقیق دوره‌ای که در صفحه دوره‌ها باید فیلتر شود */
  filterTitle?: string;
  /** آیا این مسیر به‌زودی اضافه می‌شود؟ */
  comingSoon?: boolean;
};

const CATEGORIES: CategoryItem[] = [
  {
    id: "personal-finance",
    title: "مالی شخصی",
    image: "/images/cards/card-category/personal-finance.svg",
    comingSoon: true,
  },
  {
    id: "family",
    title: "خانواده",
    image: "/images/cards/card-category/family.svg",
    comingSoon: true,
  },
  {
    id: "personal-development",
    title: "توسعه فردی",
    image: "/images/cards/card-category/personal-development.svg",
    filterTitle: "رفتار استارت آپی",
  },
  {
    id: "healthy-living",
    title: "زندگی سالم",
    image: "/images/cards/card-category/healthy-living.svg",
    comingSoon: true,
  },
  {
    id: "art-creativity",
    title: "هنر و خلاقیت",
    image: "/images/cards/card-category/art-creativity.svg",
    comingSoon: true,
  },
  {
    id: "ai",
    title: "هوش مصنوعی",
    image: "/images/cards/card-category/AI.svg",
    comingSoon: true,
  },
  {
    id: "digital-skills",
    title: "مهارت دیجیتال",
    image: "/images/cards/card-category/digital-skills.svg",
    comingSoon: true,
  },
  {
    id: "entrepreneurship",
    title: "کارآفرینی",
    image: "/images/cards/card-category/entrepreneurship.svg",
    filterTitle: "جعبه ابزار کارآفرینی",
  },
];

export default function LearningPaths() {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardClick = (category: CategoryItem) => {
    if (category.comingSoon) {
      setSelectedTitle(category.title);
      setAlertOpen(true);
      return;
    }
    if (category.filterTitle) {
      router.push(
        `/education/course-list?filter=${encodeURIComponent(category.filterTitle)}`,
      );
    }
  };

  const handleConfirm = () => {
    // TODO: درخواست عضویت در لیست انتظار را به بک‌اند بفرست
    console.log("Notify me about:", selectedTitle);
    setAlertOpen(false);
  };

  return (
    <Box sx={learningPathsStyles}>
      <TitleBar title="مسیرهای یادگیری" />

      <Box sx={learningPathsGridStyles}>
        {CATEGORIES.map((category) => (
          <CardCategory
            key={category.id}
            title={category.title}
            image={category.image}
            onClick={() => handleCardClick(category)}
          />
        ))}
      </Box>

      <AlertModal
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        title="نوایی عزیز 👋"
        description={`دوره‌های «${selectedTitle}» رو به‌زودی اضافه می‌کنیم. می‌خوای هر وقت اضافه شد خبرت کنیم؟`}
        confirmButton={{
          label: "بله، خبرم کن",
          onClick: handleConfirm,
        }}
        cancelButton={{
          label: "نه، ممنون",
          onClick: () => setAlertOpen(false),
        }}
      />
    </Box>
  );
}
