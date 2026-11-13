export interface HeroSlider {
  id: number;
  imageSrc: string;
  title: string;
  imageAlt: string;
}
export const HeroSlider: HeroSlider[] = [
  {
    id: 1,
    imageSrc: "/images/herosection/health/hero-health.png",
    imageAlt: "سلامتی",
    title: "سلامتی،\n سرمایه زندگی شماست.",
  },
  {
    id: 2,
    imageSrc: "/images/herosection/health/hero2.png",
    imageAlt: "سلامتی",
    title: "سلامتی،\n سرمایه زندگی شماست.",
  },
];

export interface NEXTEVENT {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
}
export const NEXTEVENT: NEXTEVENT[] = [
  {
    id:1,
    image: "/images/cards/event-card/horizontal-event-card/sport-event.png",
    title: "ورزش سبک ، زندگی شادتر",
    subtitle: "حرکت ، کلید سلامتی در هر سن",
    date: "شنبه، ۲۸ خرداد",
    time: "۱۶:۳۰",
    location: "دانشگاه شریف",
  },
    {
    id:2,
    image: "/images/cards/event-card/horizontal-event-card/sport-event.png",
    title: "ورزش سبک ، زندگی شادتر",
    subtitle: "حرکت ، کلید سلامتی در هر سن",
    date: "شنبه، ۲۸ خرداد",
    time: "۱۶:۳۰",
    location: "دانشگاه شریف",
  },
];
