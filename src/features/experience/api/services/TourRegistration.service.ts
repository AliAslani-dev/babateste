
import { apiRequest } from "@/lib/api";

import { REGISTRATION_ENDPOINTS } from "../endpoints/TourRegistration.endpoint";
import type { SignupResponseDTO } from "../dto/TourRegistration.dto";
import type { SignupPayload } from "../payloads/TourRegistration.payloads";
import type { SignupResult } from "../model/TourRegistration.model";

import { toSignupResult } from "../mappers/TourRegistration.mapper";

export const registrationService = {
  async signup(
    eventId: number,
    payload: SignupPayload,
  ): Promise<SignupResult> {
    const response = await apiRequest<SignupResponseDTO>({
      url: REGISTRATION_ENDPOINTS.signup(eventId),
      method: "POST",
      data: payload,
    });

    return toSignupResult(response.data);
  },
};
