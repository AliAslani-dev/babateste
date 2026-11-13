import { useQuery } from "@tanstack/react-query";

import { CourseFavoriteKeys } from "../keys/CourseFavorites.keys";
import { CourseFavoriteService } from "../../services/CourseFavorites.service";
import { mapCourseFavorites } from "../../mappers/CourseFavorites.mapper";

export const useCourseFavorites = () =>
  useQuery({
    queryKey: CourseFavoriteKeys.lists(),
    queryFn: async () => {
      const response = await CourseFavoriteService.getFavorites();
      console.log("Doctor favorites API response:", response);

      return mapCourseFavorites(response.items);
    },
  });
