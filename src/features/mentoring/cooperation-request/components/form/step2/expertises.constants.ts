// src/features/mentoring/components/cooperation-request/steps/step2/expertises.constants.ts

export interface ExpertiseOption {
  value: string;
  label: string;
}

/** Expertises shown as popular chips at the top of the expertise picker */
export const POPULAR_EXPERTISES: ExpertiseOption[] = [
  { value: "legal", label: "حقوقی" },
  { value: "finance", label: "مالی" },
  { value: "business", label: "کسب و کار" },
  { value: "health", label: "سلامت" },
  { value: "family", label: "خانواده" },
  { value: "hr", label: "منابع انسانی" },
];

/** Full list of expertises shown in the scrollable list */
export const ALL_EXPERTISES: ExpertiseOption[] = [
  { value: "legal", label: "حقوقی" },
  { value: "finance-investment", label: "مالی و سرمایه‌گذاری" },
  { value: "business", label: "کسب و کار و استارت آپ" },
  { value: "hr", label: "منابع انسانی" },
  { value: "personal-development", label: "توسعه فردی" },
  { value: "family", label: "خانواده و روابط" },
  { value: "health", label: "سلامت و سبک زندگی" },
  { value: "immigration", label: "مهاجرت" },
  { value: "entrepreneurship", label: "کارآفرینی" },
  { value: "digital-skills", label: "مهارت‌های دیجیتال" },
  { value: "ai", label: "هوش مصنوعی" },
  { value: "art-creativity", label: "هنر و خلاقیت" },
];
