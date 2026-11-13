import { apiRequest } from "@/lib/api";
import { COOPERATION_ENDPOINTS } from "../endpoints/cooperationRequest.endpoints";
import {
  toCooperationRequest,
  toExpertiseTags,
} from "../mappers/cooperationRequest.mapper";
import type { CooperationRequestPayload } from "../payloads/cooperationRequest.payloads";
import type {
  CooperationRequest,
  ExpertiseTag,
} from "../model/cooperationRequest.model";
import type {
  CooperationRequestResponseDTO,
  ExpertiseTagsDataDTO,
  PaginationMetaDTO,
} from "../dto/cooperationRequest.dto";
import { apiRequestWithMeta } from "@/lib/api/helpers";

export const cooperationRequestService = {
  /**
   * ثبت درخواست همکاری منتور
   * POST /mentors/cooperation_request/new
   */
  async submit(
    payload: CooperationRequestPayload,
  ): Promise<CooperationRequest> {
    const dto = await apiRequest<CooperationRequestResponseDTO>({
      url: COOPERATION_ENDPOINTS.newRequest,
      method: "POST",
      data: payload,
    });
    return toCooperationRequest(dto.data);
  },

  /**
   * دریافت همه تگ‌های تخصص با صفحه‌بندی خودکار
   * GET /mentors/expertise_tags/paginate?page=N
   */
  async getExpertiseTags(): Promise<ExpertiseTag[]> {
    const allTags: ExpertiseTag[] = [];
    let page = 1;

    do {
      const { data, meta } = await apiRequestWithMeta<
        ExpertiseTagsDataDTO,
        { pagination: PaginationMetaDTO }
      >({
        url: COOPERATION_ENDPOINTS.expertiseTags,
        method: "GET",
        params: { page },
      });
      allTags.push(...toExpertiseTags(data.items));
      if (!meta.pagination.has_more_pages) break;
      page++;
    } while (true);

    return allTags;
  },
};
