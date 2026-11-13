export type UpdatePersonalInformationPayload = {
  name?: string;
  birth_date?: string;
  phone_number?:string,
  national_code?: string;
  email?: string;
  retirement_number?:string;
  is_retired?:boolean
  profile_picture?:File;
};