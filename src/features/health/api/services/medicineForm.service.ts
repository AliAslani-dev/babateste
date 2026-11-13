import { apiRequest } from "@/lib/api";
import { MEDICINE_ENDPOINTS } from "../endpoints/medicineForm.endpoints";
import type { AddMedicinePayload } from "../payloads";
import type { AddMedicineResponseDTO } from "../dto";

export const medicineService = {
  /**
   * افزودن داروی جدید
   * POST /health/medications/new
   * توکن تو header خودکار attach می‌شه (توسط interceptor)
   */
  async addMedicine(
    payload: AddMedicinePayload,
  ): Promise<AddMedicineResponseDTO> {
    const response = await apiRequest<AddMedicineResponseDTO>({
      url: MEDICINE_ENDPOINTS.addMedicine,
      method: "POST",
      data: payload,
    });

    return response.data;
  },
};
