export interface DoctorDetailsData {
  id: number;
  image: string;
  name: string;
  specialty: string;
  biography: string;
  highlights: string[];
  qualifications: string[];
  rating?: number;
  reviewCount?: number;
}

export const DoctorTabs = [
  { label: "اطلاعات", value: "information" },
  // { label: "نوبت‌دهی", value: "appointments" },
  { label: "نظرات", value: "comments" },
];

export const DoctorsData: DoctorDetailsData[] = [
  {
    id: 1,
    image: "/images/health/doctors/doctor-woman.png",
    name: "دکتر نجمه باوفا",
    specialty: "متخصص زنان و زایمان  ",
    biography: `جراح و متخصص زنان و زایمان حایز رتبه پنج درصد بورد تخصصی سال ۱۳۹۹ از دانشگاه تهران/فلوشیپ پریناتولوژی (طب مادرو جنین) از دانشگاه تهران
انجام سونوگرافی NT/ناهنجاری های جنینی/اختلالت رشد جنین و داپلر/سه بعدی/طول سرویکس`,
    highlights: [
      "۱۵ سال سابقه فعالیت",
      "بیمارستان بهمن، تهران",
      "پذیرش بیمه تکمیلی و پایه",
      "رتبه ۵ درصد بورد تخصصی سال ۱۳۹۹",
    ],
    qualifications: [
      "کسب تخصص زنان و زایمان از دانشگاه تهران در سال ۱۳۹۴",
      "دارای بورد تخصصی",
      "عضویت در انجمن جراحی‌های کم‌تهاجمی زنان و اندومتریوز",
      "دارای مدرک فلوشیپ زیبایی زنان از کشور ارمنستان",
      "گذراندن دوره‌های مختلف زیبایی نزد اساتید حاذق",
    ],
    rating: 4.8,
    reviewCount: 123,
  },
];
