"use client";

import { useQuery } from "@tanstack/react-query";
import { healthService } from "../../index";
import { healthKeys } from "../index";

export function useDoctors() {
  return useQuery({
    queryKey: healthKeys.doctorsList(),
    queryFn: () => healthService.doctorsList(),
    staleTime: 5 * 60 * 1000,
  });
}

export function useDoctorDetail(doctorId: number | string | undefined) {
  return useQuery({
    queryKey: healthKeys.doctorDetail(doctorId ?? ""),
    queryFn: () => healthService.doctorDetail(doctorId as number | string),
    enabled: !!doctorId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useDoctorFreeTimes(doctorId: number | string | undefined) {
  return useQuery({
    queryKey: healthKeys.doctorFreeTimes(doctorId ?? ""),
    queryFn: () => healthService.doctorFreeTimes(doctorId as number | string),
    enabled: !!doctorId,
    staleTime: 5 * 60 * 1000,
  });
}
