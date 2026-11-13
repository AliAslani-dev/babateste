import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DoctorFavoriteKeys } from "../index";
import { DoctorFavoriteService } from "../index";

import type {
  AddDoctorFavoritePayload,
  RemoveDoctorFavoritePayload,
} from "../index";

export const useAddDoctorFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddDoctorFavoritePayload) =>
      DoctorFavoriteService.addFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: DoctorFavoriteKeys.all,
      });
    },
  });
};

export const useRemoveDoctorFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RemoveDoctorFavoritePayload) =>
      DoctorFavoriteService.removeFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: DoctorFavoriteKeys.all,
      });
    },
  });
};
