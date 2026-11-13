export { default as LoginForm } from "./components/LoginForm";

// ===== Schemas =====
export { loginSchema } from "./schemas/login.schema";
export { phoneSchema } from "./schemas/phone.schema";
export { otpSchema } from "./schemas/otp.schema";
export type { LoginFormValues } from "./schemas/login.schema";

// ===== Constants =====
export { LOGIN_SLIDES } from "./constants/login-slides.constants";

// ===== API =====
export {
  authService,
  authKeys,
  useLogin,
  useRegister,
  useRequestOtp,
  useMe, 
} from "./api";

export type {
  AuthSession,
  UserProfile,
  LoginPayload,
  RegisterPayload,
  RequestOtpPayload,
  VerifyOtpPayload,
} from "./api";

// ===== Types =====
export type {
  LoginSlideData,
  LoginSliderProps,
  LoginSlideProps,
  SliderProgressProps,
} from "./types";