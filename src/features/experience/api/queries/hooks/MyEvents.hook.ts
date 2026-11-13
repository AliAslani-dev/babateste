"use client";

import { useQuery } from "@tanstack/react-query";

import { myEventsService } from "../../services/MyEvents.service";
import { myEventsKeys } from "../keys/MyEvents.keys";

export const useMyEvents = () => {
  return useQuery({
    queryKey: myEventsKeys.list(),
    queryFn: myEventsService.getMyEvents,
  });
};

