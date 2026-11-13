"use client";

import { useQuery } from "@tanstack/react-query";

import { eventsKeys } from "../keys/AllEvents.keys";
import { eventsService } from "../../services/AllEvents.service";

export const useAllEvents = () => {
  return useQuery({
    queryKey: eventsKeys.lists(),
    queryFn: eventsService.getEvents,
  });
};