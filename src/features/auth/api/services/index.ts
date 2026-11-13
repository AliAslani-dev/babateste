import { apiRequest } from "@/lib/api";
import { AUTH_ENDPOINTS } from "../endpoints";
import { toAuthSession, toUserProfile } from "../mappers";
import type {
  LoginPayload,
  RegisterPayload,
  RequestOtpPayload,
} from "../payloads";
import type { AuthSession, UserProfile } from "../model";
import type {
  LoginResponseDTO,
  RegisterResponseDTO,
  MeResponseDTO,
} from "../dto";

export const authService = {
  /**
   * ورود با OTP
   * POST /login
   */
  async login(payload: LoginPayload): Promise<AuthSession> {
    const dto = await apiRequest<LoginResponseDTO>({
      url: AUTH_ENDPOINTS.login,
      method: "POST",
      data: payload,
    });
    return toAuthSession(dto.data);
  },

  /**
   * ثبت‌نام
   * POST /register
   */
  async register(payload: RegisterPayload): Promise<AuthSession> {
    const dto = await apiRequest<RegisterResponseDTO>({
      url: AUTH_ENDPOINTS.register,
      method: "POST",
      data: payload,
    });
    return toAuthSession(dto.data);
  },

  /**
   * درخواست OTP
   * POST /request_otp
   */
  async requestOtp(payload: RequestOtpPayload): Promise<void> {
    await apiRequest<null>({
      url: AUTH_ENDPOINTS.requestOtp,
      method: "POST",
      data: payload,
    });
  },

  /**
   * چک کردن لاگین + اطلاعات کاربر
   * GET /me
   */
  async me(): Promise<UserProfile> {
    const dto = await apiRequest<MeResponseDTO>({
      url: AUTH_ENDPOINTS.me,
      method: "POST",
    });
    return toUserProfile(dto.data);
  },

  /**
   * خروج از حساب
   * POST /logout
   * توکن تو header خودکار attach می‌شه (توسط interceptor)
   */
  async logout(): Promise<void> {
    await apiRequest<null>({
      url: AUTH_ENDPOINTS.logout,
      method: "POST",
    });
  },
};
