import { createMapper } from "@/lib/api";
import type { BloodPressureRecordResponseDTO } from "../dto";
import type { BloodPressureRecord } from "../model";

export const toBloodPressureRecord = createMapper<
  BloodPressureRecordResponseDTO,
  BloodPressureRecord
>((dto) => ({
  timeOfMeasurement: dto.time_of_measurement,
  systolicPressure: dto.systolic_pressure,
  diastolicPressure: dto.diastolic_pressure,
  heartRate: dto.heart_rate,
  descriptions: dto.descriptions,
}));
