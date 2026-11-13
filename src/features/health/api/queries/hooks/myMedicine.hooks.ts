"use client";

import { useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { tokenStorage } from "@/lib/api";
import { myMedicineService } from "../../services";
import { myMedicineKeys } from "../index";
import type { MedicationItem } from "../../model";

export function useMyMedications(page: number = 1) {
  return useQuery({
    queryKey: myMedicineKeys.medicationsPage(page),
    queryFn: () => myMedicineService.getMedications(page),
    enabled: typeof window !== "undefined" && !!tokenStorage.get(),
    staleTime: 2 * 60 * 1000,
  });
}

/** دارویی که کاربر دکمه ویرایش آن را زده (برای پیش‌پر کردن فرم) */
export function useEditingMedicine() {
  const { data } = useQuery<MedicationItem | null>({
    queryKey: myMedicineKeys.editing(),
    queryFn: () => null,
    initialData: null,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return data;
}

export function useSetEditingMedicine() {
  const queryClient = useQueryClient();

  return useCallback(
    (medicine: MedicationItem | null) => {
      queryClient.setQueryData(myMedicineKeys.editing(), medicine);
    },
    [queryClient],
  );
}

