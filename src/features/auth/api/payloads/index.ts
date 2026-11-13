export interface LoginPayload {
  phone_number: string;
  otp_code: string;
}

export interface RegisterPayload {
  phone_number: string;
  otp_code: string;
  full_name: string;
}

export interface RequestOtpPayload {
  phone_number: string;
}

export interface VerifyOtpPayload {
  phone_number: string;
  otp_code: string;
}