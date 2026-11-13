export interface RequestConsultaionCardDataType {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  sessionCount: number;
  experience: number;
  category: "business" | "finance" | "legal" | "family";
}

export const RequestConsultaionCardData: RequestConsultaionCardDataType[] = [
  {
    id: 1,
    href: "/consultation/1",
    imageSrc: "/images/RequestConsultation/consultaion-user.png",
    name: "علی رضا وحید محمدی",
    title: "مشاور کسب و کارهای استارتاپ آبی",
    specialty: "متخصص حقوق کسب و کار، قراردادها و مسائل حقوقی",
    rating: 4.7,
    sessionCount: 96,
    experience: 7,
    category: "business",
  },
  {
    id: 2,
    href: "/consultation/2",
    imageSrc: "/images/RequestConsultation/consultaion-user.png",
    name: "محمدرضا محمدی",
    title: "مشاور امور مالی",
    specialty: "متخصص مدیریت مالی و سرمایه‌گذاری",
    rating: 3,
    sessionCount: 96,
    experience: 8,
    category: "finance",
  },
  {
    id: 3,
    href: "/consultation/3",
    imageSrc: "/images/RequestConsultation/consultaion-user.png",
    name: "مشاور حقوقی",
    title: "مشاور حقوقی کسب‌وکار",
    specialty: "متخصص قراردادها و مسائل حقوقی",
    rating: 5,
    sessionCount: 96,
    experience: 10,
    category: "legal",
  },
  {
    id: 4,
    href: "/consultation/4",
    imageSrc: "/images/RequestConsultation/consultaion-user.png",
    name: "مشاور خانواده",
    title: "مشاور روابط خانوادگی",
    specialty: "متخصص مشاوره خانواده",
    rating: 4.7,
    sessionCount: 96,
    experience: 10,
    category: "family",
  },
  {
    id: 5,
    href: "/consultation/5",
    imageSrc: "/images/RequestConsultation/consultaion-user.png",
    name: "مشاور کسب‌وکار دوم",
    title: "مشاور توسعه کسب‌وکار",
    specialty: "متخصص راه‌اندازی و توسعه کسب‌وکار",
    rating: 4.7,
    sessionCount: 96,
    experience: 10,
    category: "business",
  },
];
