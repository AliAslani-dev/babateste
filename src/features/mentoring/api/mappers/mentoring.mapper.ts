import { createMapper, mapList } from "@/lib/api";
import type {
  MentorDTO,
  PaginationMetaMentoringDTO,
  MentorDetailResponseDTO,
  MentorExperienceDTO,
  MentorEducationDTO,
  SessionDTO,
} from "../dto/mentoring.dto";
import type {
  Mentor,
  PaginationMeta,
  MentorsPage,
  MentorDetail,
  MentorExperience,
  MentorEducation,
  Session,
} from "../model/mentoring.model";

/** تبدیل experience_since (تاریخ شروع) به تعداد سال‌های تجربه */
function calcExperienceYears(experienceSince: string): number {
  const start = new Date(experienceSince).getFullYear();
  const now = new Date().getFullYear();
  return Math.max(0, now - start);
}

function normalizeMentorImageUrl(imageUrl?: string): string | undefined {
  const source = imageUrl?.trim();

  if (!source) return undefined;
  if (source.startsWith("/") && !source.startsWith("//")) return source;

  try {
    const url = new URL(source);

    if (url.protocol !== "https:") {
      return undefined;
    }

    return source;
  } catch {
    return undefined;
  }
}

export const toMentor = createMapper<MentorDTO, Mentor>((dto) => ({
  id: dto.id,
  userId: dto.user_id,
  name: dto.user.name,
  areaOfExpertise: dto.area_of_expertise,
  descriptions: dto.descriptions,
  score: parseFloat(dto.score),
  experienceYears: calcExperienceYears(dto.experience_since),
  mentoringType: dto.mentoring_type === "online" ? "آنلاین" : "حضوری",
  city: dto.city,
  sessionsTime: dto.sessions_time,
  cvUrl: dto.cv_url,
  imageUrl:
    normalizeMentorImageUrl(dto.image_url) ??
    normalizeMentorImageUrl(dto.user.profile_picture),
}));

export const toMentors = (dtos: MentorDTO[]): Mentor[] =>
  mapList(toMentor, dtos);

export const toPaginationMeta = (dto: PaginationMetaMentoringDTO): PaginationMeta => ({
  currentPage: dto.current_page,
  perPage: dto.per_page,
  total: dto.total,
  lastPage: dto.last_page,
  hasMorePages: dto.has_more_pages,
});

export const toMentorsPage = (
  dtos: MentorDTO[],
  metaDto: PaginationMetaMentoringDTO,
): MentorsPage => ({
  mentors: toMentors(dtos),
  meta: toPaginationMeta(metaDto),
});

const toMentorExperience = createMapper<MentorExperienceDTO, MentorExperience>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    descriptions: dto.descriptions,
    startAt: dto.start_at,
    endAt: dto.end_at,
  }),
);

const toMentorEducation = createMapper<MentorEducationDTO, MentorEducation>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    location: dto.location,
    endAt: dto.end_at,
  }),
);

export const toMentorDetail = createMapper<
  MentorDetailResponseDTO,
  MentorDetail
>((dto) => {
  const m = dto.mentor;
  return {
    id: m.id,
    name: m.name,
    score: m.score,

    experienceYears: calcExperienceYears(m.experience_since),
    areaOfExpertise: m.area_of_expertise,
    descriptions: m.descriptions,
    mentoringType: m.mentoring_type === "online" ? "آنلاین" : "حضوری",
    city: m.city,
    sessionsTime: m.sessions_time,
    cvUrl: m.cv_url,
    expertiseTags: m.expertise_tags,
    experiences: mapList(toMentorExperience, m.experiences),
    educations: mapList(toMentorEducation, m.educations),
    imageUrl: normalizeMentorImageUrl(
      m.user_info?.profile_picture ?? m.user_info?.profile_picture ?? undefined,
    ),
  };
});

/* ===================== SESSION MAPPER ===================== */

export const toSession = createMapper<SessionDTO, Session>((dto) => ({
  id: dto.id,
  mentorId: dto.mentor_id,
  date: dto.date,
  topic: dto.topic,
  sessionType: dto.session_type as "online" | "hozoori",
  descriptions: dto.descriptions,
  status: dto.status,
}));
