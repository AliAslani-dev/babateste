/**
 * DTO = Data Transfer Object
 * شکل خام پاسخ سرور (snake_case)
 * هیچ‌وقت مستقیم تو UI استفاده نشه!
 */

export interface LoginResponseDTO {
  login_key: string;
}

export interface RegisterResponseDTO {
  login_key: string;
}

export interface UserProfileDTO {
  name: string | null;
  national_code: string | null;
  birth_date: string | null;
  phone_number: string;
  email: string | null;
  email_verified_at: string | null;
  points: number;
  created_at: string;
  updated_at: string;
  is_retired: boolean;
  profile_picture:string;
  retirement_number: string;
}

export interface MeResponseDTO {
  me: UserProfileDTO;
}
