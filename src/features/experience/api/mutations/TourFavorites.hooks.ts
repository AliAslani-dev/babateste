
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TourFavoriteKeys } from "../queries/keys/TourFavorites.keys";
import { TourFavoriteService } from "../services/TourFavorites.service";

import type {
  AddTourFavoritePayload,
  RemoveTourFavoritePayload,
} from "../payloads/TourFavorites.payloads";

export const useAddTourFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddTourFavoritePayload) =>
      TourFavoriteService.addFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TourFavoriteKeys.all,
      });
    },
  });
};

export const useRemoveTourFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RemoveTourFavoritePayload) =>
      TourFavoriteService.removeFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TourFavoriteKeys.all,
      });
    },
  });
};
