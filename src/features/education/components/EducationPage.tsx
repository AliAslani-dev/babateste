"use client";

import { HeroSection } from "@/components/ui/common";

import {
  EducationheroHamdamComponentSyles,
  EducationheroHeroSectionStyles,
} from "../styles/education.styles";
import { useRouter } from "next/navigation";
import ActivitySection from "./activity-section/ActivitySection";
import LearningPaths from "./learning-path-section/LearningPathSection";
import FavoriteCourseSection from "./favorite-course-section/FavoriteCourseSection";

import HamdamCard from "@/components/ui/common/cards/hamdam";
import { MicrophoneIcon } from "@/components/ui/icons";

import { Box } from "@mui/material";
import { HeroSlider } from "../data/slider.data";
import ViewAll from "@/components/ui/common/ViewAlls/components/ViewAllCard";
import LayersIcon from "@/components/ui/icons/education/LayersIcon";
import { semanticColors } from "@/theme";

export default function EducationPage() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen px-4">
      <div className="w-full max-w-[480px] mx-auto">
        <HeroSection slides={HeroSlider} sx={EducationheroHeroSectionStyles} />
        <ViewAll
          title="همه دوره‌ها"
          subtitle="مشاهده تمام دوره‌های آموزشی"
          onClick={() => {
            router.push("/education/course-list");
          }}
          icon={<LayersIcon color={semanticColors.background.primary}/>}
        />
        {/* <ActivitySection /> */}

        <LearningPaths />

        <FavoriteCourseSection />

        <Box sx={EducationheroHamdamComponentSyles}>
          <HamdamCard
            image="/images/cards/hamdam/hamdam.svg"
            title="همدم"
            subtitle="دستیار هوشمند شما در شریف نوا"
            buttonText="صحبت با همدم"
            buttonIcon={<MicrophoneIcon />}
            buttonHref="/hamdam"
          />
        </Box>
      </div>
    </div>
  );
}
