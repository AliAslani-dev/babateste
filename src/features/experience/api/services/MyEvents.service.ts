import { apiRequest } from "@/lib/api";

import { EVENTS_ENDPOINTS } from "../endpoints/MyEvents.endpoint";
import { toMyEvents } from "../mappers/MyEvents.mappers";
import type { MyEventsResponseDTO } from "../dto/MyEvents.dto";
import type { MyEvents } from "../model/MyEvents.model";

export const myEventsService = {
  getMyEvents: async (): Promise<MyEvents> => {
    const response = await apiRequest<MyEventsResponseDTO["data"]>({
      url: EVENTS_ENDPOINTS.my,
      method: "GET",
    });

    return toMyEvents(response.data);
  },
};