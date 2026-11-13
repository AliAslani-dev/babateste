import { apiRequest } from "@/lib/api";

import type { EventsList } from "../model/AllEvents.model";
import type { GetEventsResponseDto } from "../dto/AllEvents.dto";
import { EVENTS_ENDPOINTS } from "../endpoints/AllEvents.endpoint";
import { mapEventsResponse } from "../mappers/AllEvents.mappers";

export const eventsService = {
  getEvents: async (): Promise<EventsList> => {
    const response = await apiRequest<GetEventsResponseDto["data"]>({
      url: EVENTS_ENDPOINTS.GET_ALL,
      method: "GET",
    });

    return mapEventsResponse({
      success: true,
      status: 200,
      message: "موفق",
      data: response.data,
    });
  },
};