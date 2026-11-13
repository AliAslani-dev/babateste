export type DoctorCategory =
  | "cardiology"
  | "neurology"
  | "dermatology"
  | "general"
  | "woman";

export interface DoctorChip {
  id: "all" | DoctorCategory;
  label: string;
}

export const ALL_DOCTOR_CHIP_ID = "all";

export const DOCTOR_CHIPS: DoctorChip[] = [
  { id: "all", label: "همه" },
  { id: "general", label: "عمومی" },
  { id: "cardiology", label: "قلب و عروق" },
  { id: "woman", label: "زنان" },
  { id: "neurology", label: "مغز و اعصاب" },
  // { id: "dermatology", label: "پوست و مو" },
];

export function inferDoctorCategory(specialityText: string): DoctorCategory {
  const t = specialityText.toLowerCase();

  if (t.includes("قلب") || t.includes("عروق")) return "cardiology";
  if (t.includes("مغز") || t.includes("اعصاب") || t.includes("روان"))
    return "neurology";
  if (t.includes("پوست") || t.includes("مو")) return "dermatology";
  if (t.includes("زنان") || t.includes("زایمان")) return "woman";

  return "general";
}