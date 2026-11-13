
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { eventFavoriteKeys } from "../queries/keys/EventFavorites.keys";
import { EventFavoriteService } from "../services/EventFavorites.service";

import type {
  AddEventFavoritePayload,
  RemoveEventFavoritePayload,
} from "../payloads/EventFavorites.payloads";

export const useAddEventFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddEventFavoritePayload) =>
      EventFavoriteService.addFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: eventFavoriteKeys.all,
      });
    },
  });
};

export const useRemoveEventFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RemoveEventFavoritePayload) =>
      EventFavoriteService.removeFavorite(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: eventFavoriteKeys.all,
      });
    },
  });
};
