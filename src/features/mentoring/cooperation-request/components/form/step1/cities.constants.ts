// src/features/mentoring/components/cooperation-request/steps/step1/cities.constants.ts

export interface CityOption {
  value: string;
  label: string;
}

/** Cities shown as popular chips at the top of the city picker */
export const POPULAR_CITIES: CityOption[] = [
  { value: "tehran", label: "تهران" },
  { value: "shiraz", label: "شیراز" },
  { value: "isfahan", label: "اصفهان" },
  { value: "karaj", label: "کرج" },
  { value: "yazd", label: "یزد" },
  { value: "mashhad", label: "مشهد" },
];

/** Full list of cities shown in the scrollable list */
export const ALL_CITIES: CityOption[] = [
  { value: "tehran", label: "تهران" },
  { value: "ahvaz", label: "اهواز" },
  { value: "qom", label: "قم" },
  { value: "kashan", label: "کاشان" },
  { value: "shiraz", label: "شیراز" },
  { value: "bushehr", label: "بوشهر" },
  { value: "karaj", label: "کرج" },
  { value: "shiraz2", label: "شیراز" },
  { value: "isfahan", label: "اصفهان" },
  { value: "mashhad", label: "مشهد" },
  { value: "yazd", label: "یزد" },
  { value: "kerman", label: "کرمان" },
  { value: "bandar-abbas", label: "بندرعباس" },
  { value: "semnan", label: "سمنان" },
  { value: "tabriz", label: "تبریز" },
  { value: "rasht", label: "رشت" },
  { value: "urmia", label: "ارومیه" },
  { value: "ardabil", label: "اردبیل" },
  { value: "kermanshah", label: "کرمانشاه" },
  { value: "zahedan", label: "زاهدان" },
  { value: "hamadan", label: "همدان" },
  { value: "arak", label: "اراک" },
  { value: "qazvin", label: "قزوین" },
  { value: "zanjan", label: "زنجان" },
  { value: "sanandaj", label: "سنندج" },
  { value: "khorramabad", label: "خرم‌آباد" },
  { value: "sari", label: "ساری" },
  { value: "gorgan", label: "گرگان" },
  { value: "birjand", label: "بیرجند" },
  { value: "shahrood", label: "شاهرود" },
  { value: "ilam", label: "ایلام" },
  { value: "bojnord", label: "بجنورد" },
  { value: "shahrekord", label: "شهرکرد" },
  { value: "yasooj", label: "یاسوج" },
];
