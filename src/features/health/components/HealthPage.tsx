"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/ui/common";
import {
  HealthHeroHamdamComponentSyles,
  HealthHeroSectionStyles,
} from "../styles/Health.styles";
import UserHealthSection from "./use-health-section/UserHealthSection";
import UpcomingEventsSection from "./upcoming-events-section/UpcomingEventsSection";
import HamdamCard from "@/components/ui/common/cards/hamdam";
import { Box } from "@mui/material";
import { MicrophoneIcon } from "@/components/ui/icons";
import RecommendationHealthSection from "./rcommendation-health-section/RecommendationHealthSection";
import { HeroSlider } from "../data/slider.data";
import { ReserveCard } from "@/components/ui/common/cards/reserve-card";
import { useRouter } from "next/navigation";
import { ViewAllCard } from "@/components/ui/common/ViewAlls/components";
import DoctorListIcon from "@/components/ui/icons/health/DoctorListIcon";
import { semanticColors } from "@/theme";
import { triggerNotification } from "@/features/notifications";

export default function HealthPage() {
  const router = useRouter();

  useEffect(() => {
    triggerNotification("nova_health_notification");
  }, []);

  return (
    <div className="w-full min-h-screen px-4">
      <div className="w-full max-w-[480px] mx-auto">
        <HeroSection slides={HeroSlider} sx={HealthHeroSectionStyles} />
        <UserHealthSection />
        <Box sx={HealthHeroHamdamComponentSyles}>
          {/* <ReserveCard
            imageSrc="/images/cards/reserve-card/doctor-reserve.png"
            imageAlt="دکتر علی رضا کاظمی نژاد"
            doctorName="دکتر علی رضا کاظمی نژاد"
            specialty="متخصص قلب و عروق"
            time="۱۶:۳۰"
            date="چهارشنبه ۳۰ خرداد"
            onReserveClick={() => {
              console.log("reserve doctor");
            }}
          /> */}
          <ViewAllCard
            title="همه پزشکان"
            subtitle="جستجو در میان پزشکان و متخصص ها"
            onClick={() => {
              router.push("/health/doctors-list");
            }}
            icon={<DoctorListIcon color={semanticColors.background.primary} />}
          />
        </Box>

        <UpcomingEventsSection />

        <Box sx={HealthHeroHamdamComponentSyles}>
          <HamdamCard
            image="/images/cards/hamdam/hamdam.svg"
            title="همدم"
            subtitle="دستیار هوشمند شما در شریف نوا"
            buttonText="صحبت با همدم"
            buttonIcon={<MicrophoneIcon />}
            buttonHref="/hamdam"
          />
        </Box>
        <RecommendationHealthSection />
      </div>
    </div>
  );
}
