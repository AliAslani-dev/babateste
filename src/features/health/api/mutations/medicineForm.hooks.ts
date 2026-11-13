"use client";

import { useMutation } from "@tanstack/react-query";
import { medicineService } from "../services";
import type { AddMedicinePayload } from "../payloads";

export function useAddMedicine() {
  return useMutation({
    mutationFn: (payload: AddMedicinePayload) =>
      medicineService.addMedicine(payload),
  });
}
