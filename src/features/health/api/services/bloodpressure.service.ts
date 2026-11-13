import { apiRequest } from "@/lib/api";
import { BLOOD_PRESSURE_ENDPOINTS } from "../endpoints/bloodPresure.endpoint";
import { toBloodPressureRecord } from "../mappers";
import type { BloodPressureRecordResponseDTO } from "../dto";
import type { CreateBloodPressureRecordPayload } from "../index";
import type { BloodPressureRecord } from "../index";

export const bloodPressureService = {
  /**
   * ثبت رکورد فشار خون برای کاربر جاری
   * POST /health/blood_pressure/new
   * توکن تو header خودکار attach می‌شه (توسط interceptor)
   * اگر time_of_measurement ارسال نشه، زمان جاری در نظر گرفته می‌شه
   */
  async createRecord(
    payload: CreateBloodPressureRecordPayload,
  ): Promise<BloodPressureRecord> {
    const dto = await apiRequest<BloodPressureRecordResponseDTO>({
      url: BLOOD_PRESSURE_ENDPOINTS.createRecord,
      method: "POST",
      data: payload,
    });
    return toBloodPressureRecord(dto.data);
  },
};
