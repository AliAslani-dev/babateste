"use client";

import { HeroSection } from "@/components/ui/common";
import {
  MentoringHamdamComponentSyles,
  MentoringHeroSectionStyles,
} from "../styles/Mentoring.styles";
import MentorSection from "./mentor-section/MentorSection";
import { Box } from "@mui/material";
import HamdamCard from "@/components/ui/common/cards/hamdam";
import { MicrophoneIcon } from "@/components/ui/icons";
import FavaoriteAreaSection from "./favorite-area-section/FavaoriteAreaSection";
import { HeroSlider } from "../data/slider.data";

export default function MentoringPage() {
  return (
    <div className="w-full min-h-screen px-4">
      <div className="w-full max-w-[480px] mx-auto">
        <HeroSection slides={HeroSlider} sx={MentoringHeroSectionStyles} />

        <MentorSection />
      </div>
      <Box sx={MentoringHamdamComponentSyles}>
        <HamdamCard
          image="/images/cards/hamdam/hamdam.svg"
          title="همدم"
          subtitle="دستیار هوشمند شما در شریف نوا"
          buttonText="صحبت با همدم"
          buttonIcon={<MicrophoneIcon />}
          buttonHref="/hamdam"
        />
      </Box>
      <FavaoriteAreaSection />
    </div>
  );
}
