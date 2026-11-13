import { apiRequest } from "@/lib/api";
import { Tour_FAVORITE_ENDPOINTS } from "../endpoints/TourFavorites.endpoints";

import type {
  TourFavoriteActionResponseDto,
  TourFavoritesResponseDto,
} from "../dto/TourFavorites.dto";

import type {
  AddTourFavoritePayload,
  RemoveTourFavoritePayload,
} from "../payloads/TourFavorites.payloads";

export const TourFavoriteService = {
  async getFavorites(): Promise<TourFavoritesResponseDto> {
    const response = await apiRequest<TourFavoritesResponseDto>({
      url: Tour_FAVORITE_ENDPOINTS.list,
      method: "GET",
    });

    return response.data;
  },

  async addFavorite(
    payload: AddTourFavoritePayload,
  ) {
    return apiRequest<TourFavoriteActionResponseDto>({
      url: Tour_FAVORITE_ENDPOINTS.add(payload.tourId),
      method: "POST",
    });
  },

  async removeFavorite(
    payload: RemoveTourFavoritePayload,
  ) {
    return apiRequest<TourFavoriteActionResponseDto>({
      url: Tour_FAVORITE_ENDPOINTS.remove(payload.tourId),
      method: "DELETE",
    });
  },
};