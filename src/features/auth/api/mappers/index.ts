import { createMapper } from "@/lib/api";
import type {
  LoginResponseDTO,
  RegisterResponseDTO,
  MeResponseDTO,
} from "../dto";
import type { AuthSession, UserProfile } from "../model";
import { toJalaliDate } from "@/lib/utils/toJalaliDate";

export const toAuthSession = createMapper<
  LoginResponseDTO | RegisterResponseDTO,
  AuthSession
>((dto) => ({
  token: dto.login_key,
}));

export const toUserProfile = createMapper<MeResponseDTO, UserProfile>((dto) => {
  const me = dto.me;

  return {
    name: me.name,
    nationalCode: me.national_code,
    birthDate: me.birth_date ? toJalaliDate(me.birth_date) : null,
    phoneNumber: me.phone_number,
    email: me.email,
    emailVerifiedAt: me.email_verified_at,
    isRetired: me.is_retired,
    ledgerNumber: me.retirement_number,
    profileImage:me.profile_picture,
    points: me.points,
    createdAt: me.created_at,
    updatedAt: me.updated_at,
  };
});
