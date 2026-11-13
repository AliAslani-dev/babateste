
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CourseFavoriteKeys } from "../queries/keys/CourseFavorites.keys";
import { CourseFavoriteService } from "../services/CourseFavorites.service";

import type {
  AddCourseFavoritePayload,
  RemoveCourseFavoritePayload,
} from "../payloads/CourseFavorites.payloads";

export const useAddCourseFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddCourseFavoritePayload) =>
      CourseFavoriteService.addFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CourseFavoriteKeys.all,
      });
    },
  });
};

export const useRemoveCourseFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RemoveCourseFavoritePayload) =>
      CourseFavoriteService.removeFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CourseFavoriteKeys.all,
      });
    },
  });
};
