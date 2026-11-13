export interface MentorInfoItem {
  id: string;
  icon: "userCount" | "experience" | "rating";
  value: string;
}

export type MentorSummaryIconKey = "consultation" | "location" | "duration";

export interface MentorSummaryItem {
  id: string;
  icon: MentorSummaryIconKey;
  label: string;
  value: string;
}
export interface MentorProfileData {
  id: number;
  heroImage: string;
  name: string;
  specialty: string;
  infoItems: MentorInfoItem[];
  about: string;
  summaryItems: MentorSummaryItem[];
}

export const mentorsData: MentorProfileData[] = [
  {
    id: 1,
    heroImage: "/images/mentors/MentorProfile/mentor-profile.jpg",
    name: "علی رضا وحید محمدی",
    specialty: "مشاور کسب و کار‌های استارت آپی",
    infoItems: [
      {
        id: "sessions",
        icon: "userCount",
        value: "۹۶ جلسه",
      },
      {
        id: "experience",
        icon: "experience",
        value: "۱۰ سال تجربه",
      },
      {
        id: "rating",
        icon: "rating",
        value: "۴.۷",
      },
    ],
    about:
      "بیش از ۱۰ سال سابقه فعالیت در حوزه کسب‌وکار، قراردادها و توسعه استارت‌آپ‌ها دارم و در این مسیر با تیم‌ها و کسب‌وکارهای مختلف برای حل مسائل حقوقی، ساختاردهی قراردادها و تصمیم‌گیری‌های کسب‌وکاری همکاری کرده‌ام.",
    summaryItems: [
      {
        id: "consultation",
        icon: "consultation",
        label: "نوع مشاوره",
        value: "حضوری و آنلاین",
      },
      {
        id: "location",
        icon: "location",
        label: "محل فعالیت",
        value: "تهران",
      },
      {
        id: "duration",
        icon: "duration",
        label: "مدت جلسه",
        value: "۶۰ دقیقه",
      },
    ],
  },
];

export const mentorTabs = [
  { label: "درباره منتور", value: "about" },
  { label: "سوابق", value: "experience" },
];
