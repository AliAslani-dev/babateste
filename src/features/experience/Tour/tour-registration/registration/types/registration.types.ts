export interface PassengerFormValues {
  fullName: string;
  phoneNumber: string;
}

export interface RegistrationFormValues {
  passengers: PassengerFormValues[];
  addCompanion: boolean;
  travelInsurance100: boolean;
  travelInsurance80: boolean;
}