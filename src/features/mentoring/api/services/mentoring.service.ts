import { apiRequest } from "@/lib/api";
import { MENTORS_ENDPOINTS } from "../endpoints/mentoring.endpoints";
import {
  toMentors,
  toMentorDetail,
  toSession,
} from "../mappers/mentoring.mapper";
import type {
  MentorDTO,
  MentorDetailResponseDTO,
  CreateSessionRequestDTO,
  SessionDTO,
} from "../dto/mentoring.dto";
import type { Mentor, MentorDetail, Session } from "../model/mentoring.model";

export const mentorsService = {
  /**
   * دریافت همه منتورها بدون صفحه‌بندی
   * GET /mentors
   */
  async getMentors(): Promise<Mentor[]> {
    const response = await apiRequest<{ items: MentorDTO[] }>({
      url: MENTORS_ENDPOINTS.list,
      method: "GET",
    });

    return toMentors(response.data.items);
  },

  /**
   * دریافت اطلاعات کامل یک منتور
   * GET /mentors/{mentorId}/detail
   */
  async getMentorDetail(mentorId: number): Promise<MentorDetail> {
    const dto = await apiRequest<MentorDetailResponseDTO>({
      url: MENTORS_ENDPOINTS.detail(mentorId),
      method: "GET",
    });
    return toMentorDetail(dto.data);
  },

  async createSession(
    mentorId: number,
    payload: CreateSessionRequestDTO,
  ): Promise<Session> {
    const response = await apiRequest<SessionDTO>({
      url: MENTORS_ENDPOINTS.sessionNew(mentorId),
      method: "POST",
      data: payload,
    });

    return toSession(response.data);
  },
};
