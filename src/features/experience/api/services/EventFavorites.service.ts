import { apiRequest } from "@/lib/api";
import { EVENT_FAVORITE_ENDPOINTS } from "../endpoints/EventFavorites.endpoints";

import type {
  EventFavoriteActionResponseDto,
  EventFavoritesResponseDto,
} from "../dto/EventFavorites.dto";

import type {
  AddEventFavoritePayload,
  RemoveEventFavoritePayload,
} from "../payloads/EventFavorites.payloads";

export const EventFavoriteService = {
  async getFavorites(): Promise<EventFavoritesResponseDto> {
    const response = await apiRequest<EventFavoritesResponseDto>({
      url: EVENT_FAVORITE_ENDPOINTS.list,
      method: "GET",
    });

    return response.data;
  },

  async addFavorite(
    payload: AddEventFavoritePayload,
  ) {
    return apiRequest<EventFavoriteActionResponseDto>({
      url: EVENT_FAVORITE_ENDPOINTS.add(payload.eventId),
      method: "POST",
    });
  },

  async removeFavorite(
    payload: RemoveEventFavoritePayload,
  ) {
    return apiRequest<EventFavoriteActionResponseDto>({
      url: EVENT_FAVORITE_ENDPOINTS.remove(payload.eventId),
      method: "DELETE",
    });
  },
};