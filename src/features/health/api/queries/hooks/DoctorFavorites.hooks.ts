import { useQuery } from "@tanstack/react-query";

import { DoctorFavoriteKeys } from "../index";
import { DoctorFavoriteService } from "../../index"
import { mapDoctorFavorites } from "../../mappers";

export const useDoctorFavorites = () =>
  useQuery({
    queryKey: DoctorFavoriteKeys.lists(),
    queryFn: async () => {
      const response = await DoctorFavoriteService.getFavorites();
      return mapDoctorFavorites(response.items);
    },
  });
