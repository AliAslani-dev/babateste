"use client";

import { Box } from "@mui/material";

import {
  FavaoriteAreaSectionStyles,
  FavaoriteAreaSectionGridStyles,
} from "./FavaoriteAreaSection.styles";
import CardCategory from "@/components/ui/common/cards/card-category";
import { TitleBar } from "@/components/ui/common/TitleBar";

export default function FavaoriteAreaSection() {
  return (
    <Box sx={FavaoriteAreaSectionStyles}>
      <TitleBar
        title="حوزه های محبوب"
        // onActionClick={handleViewAll}
      />
      <Box sx={FavaoriteAreaSectionGridStyles}>
        <CardCategory
          title="مالی شخصی"
          image="/images/cards/card-category/personal-finance.svg"
        />

        <CardCategory
          title="خانواده"
          image="/images/cards/card-category/family.svg"
        />

        <CardCategory
          title="توسعه فردی"
          image="/images/cards/card-category/personal-development.svg"
        />

        <CardCategory
          title="زندگی سالم"
          image="/images/cards/card-category/healthy-living.svg"
        />
        <CardCategory
          title="کارآفرینی"
          image="/images/cards/card-category/entrepreneurship.svg"
        />

        <CardCategory
          title="هوش مصنوعی"
          image="/images/cards/card-category/AI.svg"
        />

        <CardCategory
          title="هنر و خلاقیت"
          image="/images/cards/card-category/art-creativity.svg"
        />

        <CardCategory
          title="مهارت دیجیتال"
          image="/images/cards/card-category/digital-skills.svg"
        />
      </Box>
    </Box>
  );
}
