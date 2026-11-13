
import { useQuery } from "@tanstack/react-query";

import { TourFavoriteKeys } from "../keys/TourFavorites.keys";
import { TourFavoriteService } from "../../services/TourFavorites.service";
import { mapTourFavorites } from "../../mappers/TourFavorites.mapper";

export const useTourFavorites = () =>
  useQuery({
    queryKey: TourFavoriteKeys.lists(),
    queryFn: async () => {
      const response = await TourFavoriteService.getFavorites();

      return mapTourFavorites(response.items);
    },
  });
