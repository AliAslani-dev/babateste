import { apiRequest } from "@/lib/api";
import { Course_FAVORITE_ENDPOINTS } from "../endpoints/CourseFavorites.endpoints";

import type {
  CourseFavoriteActionResponseDto,
  CourseFavoritesResponseDto,
} from "../dto/CourseFavorites.dto";

import type {
  AddCourseFavoritePayload,
  RemoveCourseFavoritePayload,
} from "../payloads/CourseFavorites.payloads";

export const CourseFavoriteService = {
  async getFavorites(): Promise<CourseFavoritesResponseDto> {
    const response = await apiRequest<CourseFavoritesResponseDto>({
      url: Course_FAVORITE_ENDPOINTS.list,
      method: "GET",
    });

    return response.data;
  },

  async addFavorite(payload: AddCourseFavoritePayload) {
    return apiRequest<CourseFavoriteActionResponseDto>({
      url: Course_FAVORITE_ENDPOINTS.add(payload.CourseId),
      method: "POST",
    });
  },

  async removeFavorite(payload: RemoveCourseFavoritePayload) {
    return apiRequest<CourseFavoriteActionResponseDto>({
      url: Course_FAVORITE_ENDPOINTS.remove(payload.CourseId),
      method: "DELETE",
    });
  },
};
