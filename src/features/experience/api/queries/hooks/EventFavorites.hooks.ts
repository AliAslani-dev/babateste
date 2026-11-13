
import { useQuery } from "@tanstack/react-query";

import { eventFavoriteKeys } from "../keys/EventFavorites.keys";
import { EventFavoriteService } from "../../services/EventFavorites.service";
import { mapEventFavorites } from "../../mappers/EventFavorites.mapper";

export const useEventFavorites = () =>
  useQuery({
    queryKey: eventFavoriteKeys.lists(),
    queryFn: async () => {
      const response = await EventFavoriteService.getFavorites();

      return mapEventFavorites(response.items);
    },
  });
