import { api } from "@/lib/api";
import { UPDATE_PROFILE_ENDPOINTS } from "../endpoints/profile.endpoints";
import type { UpdatePersonalInformationPayload } from "../payloads/profile.payloads";
import type { UpdatePersonalInformationResponseDto } from "../dto";
import type { UpdatePersonalInformationModel } from "../model/profile.model";
import { buildPersonalInfoFormData } from "../../components/Forms/PersonalInfo/utils/personalInfo.utils";
import type { ApiResponse } from "@/lib/api";

export const ProfileService = {
  async updatePersonalInformation(
    payload: UpdatePersonalInformationPayload,
  ): Promise<UpdatePersonalInformationModel> {
    const formData = buildPersonalInfoFormData(payload);

    const response = await api.request<
      ApiResponse<UpdatePersonalInformationResponseDto>
    >({
      url: UPDATE_PROFILE_ENDPOINTS.personalInformation,
      method: "PUT",
      data: formData,
    });

    const { success, status, message, data } = response.data;
    return { success, status, message, data };
  },
};
