import { MY_MEDICINE_ENDPOINTS } from "../endpoints/myMedicine.endpoints";
import { toMedicationsPage } from "../mappers/mymedicine.mappers";
import type {
  GetMedicationsResponseDTO,
  GetMedicationsMetaDTO,
} from "../dto/myMeditcine.dto";
import type { MedicationsPage } from "../model/myMedicine.model";
import { apiRequestWithMeta } from "@/lib/api/helpers";

export const myMedicineService = {
  /**
   * دریافت لیست داروهای کاربر (صفحه‌بندی‌شده)
   * GET /health/medications/paginate
   * توکن تو header خودکار attach می‌شه (توسط interceptor)
   */
  async getMedications(page: number = 1): Promise<MedicationsPage> {
    const { data, meta } = await apiRequestWithMeta<
      GetMedicationsResponseDTO,
      GetMedicationsMetaDTO
    >({
      url: MY_MEDICINE_ENDPOINTS.getMedications,
      method: "GET",
      params: { page },
    });
    return toMedicationsPage(data, meta);
  },
};
