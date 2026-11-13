"use client";

import { useQuery } from "@tanstack/react-query";

import { tourService } from "../../services/TourList.service";
import { tourKeys } from "../keys/TourList.keys";

export function useTours() {
  return useQuery({
    queryKey: tourKeys.list(),
    queryFn: () => tourService.getTours(),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}
