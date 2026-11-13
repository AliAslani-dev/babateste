/* ============================================================
 * Hero Slider
 * ============================================================ */
export interface HeroSlideItem {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
}

export const EXPERIENCE_HERO_SLIDES: HeroSlideItem[] = [
  {
    imageSrc: "/images/herosection/Experience/slide1.png",
    imageAlt: "بازنشستگی",
    title: "برای تجربه های تازه هنوز وقت هست",
  },
  {
    imageSrc: "/images/herosection/Experience/eventhero2.png",
    imageAlt: "همایش ها، فرصت های یادگیری",
    title: "همایش ها،\nفرصت های یادگیری",
  },
];

/* ============================================================
 * Category Cards
 * ============================================================ */
export interface CategoryItem {
  title: string;
  image: string;
  href?: string;
}

export const EXPERIENCE_CATEGORIES: CategoryItem[] = [
  {
    title: "کافه نوا",
    image: "/images/cards/card-category/cofee.svg",
  },
  {
    title: "همایش ها",
    image: "/images/cards/card-category/conferences.svg",
    href: "/experience/events-list",
  },
  {
    title: "سفر",
    image: "/images/cards/card-category/travel.svg",
    href: "/experience/tours-list",
  },
];

/* ============================================================
 * Events Section
 * ============================================================ */
export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
}

export const EXPERIENCE_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "کارگاه عکاسی",
    date: "۱۴۰۴/۰۳/۲۳",
    location: "تهران",
    imageSrc: "/images/cards/event-card/conference.png",
    imageAlt: "کارگاه عکاسی",
  },
  {
    id: "2",
    title: "همایش فناوری",
    date: "۱۴۰۴/۰۴/۰۵",
    location: "اصفهان",
    imageSrc: "/images/cards/event-card/conference.png",
    imageAlt: "همایش فناوری",
  },
  {
    id: "3",
    title: "تور کاشان",
    date: "۱۴۰۴/۰۴/۱۲",
    location: "کاشان",
    imageSrc: "/images/cards/event-card/conference.png",
    imageAlt: "تور کاشان",
  },
];



/* ============================================================
 * Config
 * ============================================================ */
export const EXPERIENCE_HERO_TIMER = 4000;
export interface EventTour {
  id: number;
  image: string;
  title: string;
  date: string;
  remaining: string;
  price: string;
}
export const EXPERIENCE_TOUR: EventTour[] = [
  {
    id: 1,
    image: "/images/cards/ToureCard/featured.png",
    title: "تور یک روزه کاشان",
    date: "۲۳ خرداد",
    remaining: "۱۲ نفر باقی مانده",
    price: "۲,۹۰۰,۰۰۰",
  },
    {
    id: 2,
    image: "/images/cards/ToureCard/featured.png",
    title: "تور یک هفته کاشان",
    date: "۲۳ خرداد",
    remaining: "۱۲ نفر باقی مانده",
    price: "۲,۹۰۰,۰۰۰",
  },
    {
    id: 3,
    image: "/images/cards/ToureCard/featured.png",
    title: "تور یک روزه کاشان",
    date: "۲۳ خرداد",
    remaining: "۱۲ نفر باقی مانده",
    price: "۲,۹۰۰,۰۰۰",
  },
];
