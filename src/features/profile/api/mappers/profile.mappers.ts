import type { ApiResponse } from "@/lib/api";
import { createMapper } from "@/lib/api";
import type { UpdatePersonalInformationResponseDto } from "../dto";
import type { UpdatePersonalInformationModel } from "../model/profile.model";

export const toUpdatePersonalInformation = createMapper<
  ApiResponse<UpdatePersonalInformationResponseDto>,
  UpdatePersonalInformationModel
>((dto) => ({
  success: dto.success,
  status: dto.status,
  message: dto.message,
  data: dto.data,
}));
