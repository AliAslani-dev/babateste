"use client";

import { useState } from "react";

import { Box } from "@mui/material";

import {
  recommendationSectionStyles,
  recommendationGridStyles,
} from "./RecommendationHealthSection.styles";
import { RecommendationHealth } from "@/components/ui/common/cards/health/recommendations";
import { RecommendationHealthModal } from "@/components/ui/common/cards/health/recommendations";
import { TitleBar } from "@/components/ui/common/TitleBar";

export default function RecommendationHealthSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const handleCardClick = (image: string, title: string, description: string) => {
    setSelectedCard({ image, title, description });
    setModalOpen(true);
  };

  return (
    <Box sx={recommendationSectionStyles}>
      <TitleBar
        title="پیشنهادات"
        // actionLabel="مشاهده همه "
        // onActionClick={handleViewAll}
      />
      <Box sx={recommendationGridStyles}>
        <RecommendationHealth
          image="/images/cards/recommendation/water.png"
          title="آبرسانی"
          text="روزی ۸ لیوان آب بنوشید."
          onClick={() =>
            handleCardClick(
              "/images/cards/recommendation/water.png",
              "آبرسانی",
              "با بالا رفتن سن، حس تشنگی کمتر می‌شود. منتظر تشنگی نمانید و در طول روز، کم‌کم آب بنوشید."
            )
          }
        />

        <RecommendationHealth
          image="/images/cards/recommendation/fruit.png"
          title="غذای سالم"
          text="سبزیجات به سلامت شما کمک میکند."
          onClick={() =>
            handleCardClick(
              "/images/cards/recommendation/fruit.png",
              "غذای سالم",
              "سبزی و میوه خطر بیماری‌های قلبی را کمتر می‌کنند. سعی کنید هر روز دست‌کم ۵ وعده (حدود ۴۰۰ گرم) سبزی و میوه بخورید."
            )
          }
        />
      </Box>

      {selectedCard && (
        <RecommendationHealthModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedCard(null);
          }}
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
        />
      )}
    </Box>
  );
}