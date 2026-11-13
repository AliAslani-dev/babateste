export interface ReviewPassenger {
  fullName: string;
  phoneNumber: string;
}

export interface RegistrationReviewData {
  passengers: ReviewPassenger[];
  travelInsurance100: boolean;
  travelInsurance80: boolean;
}

export const REGISTRATION_STORAGE_KEY = "nova-tour-registration";