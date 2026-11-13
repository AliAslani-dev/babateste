import { apiRequest } from "@/lib/api";
import { DOCTOR_FAVORITE_ENDPOINTS } from "../endpoints/DoctorFavorites.endpoints";

import type {
  DoctorFavoriteActionResponseDto,
  DoctorFavoritesResponseDto,
} from "../dto";

import type {
  AddDoctorFavoritePayload,
  RemoveDoctorFavoritePayload,
} from "../index";

export const DoctorFavoriteService = {
  async getFavorites(): Promise<DoctorFavoritesResponseDto> {
    const response = await apiRequest<DoctorFavoritesResponseDto>({
      url: DOCTOR_FAVORITE_ENDPOINTS.list,
      method: "GET",
    });

    return response.data;
  },

  async addFavorite(payload: AddDoctorFavoritePayload) {
    return apiRequest<DoctorFavoriteActionResponseDto>({
      url: DOCTOR_FAVORITE_ENDPOINTS.add(payload.DoctorId),
      method: "POST",
    });
  },

  async removeFavorite(payload: RemoveDoctorFavoritePayload) {
    return apiRequest<DoctorFavoriteActionResponseDto>({
      url: DOCTOR_FAVORITE_ENDPOINTS.remove(payload.DoctorId),
      method: "DELETE",
    });
  },
};
