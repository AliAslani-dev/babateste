/**
 * Model = شکل نهایی که کامپوننت‌ها استفاده می‌کنن (camelCase)
 */

export interface AuthSession {
  token: string;
}

export interface UserProfile {
  name: string | null;
  nationalCode: string | null;
  birthDate: string | null;
  phoneNumber: string;
  email: string | null;
  emailVerifiedAt: string | null;
  isRetired:boolean|false;
  ledgerNumber:string|null;
  profileImage:string|null;
  points: number;
  createdAt: string;
  updatedAt: string;
}