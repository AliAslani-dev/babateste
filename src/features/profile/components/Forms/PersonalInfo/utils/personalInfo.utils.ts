import type { UpdatePersonalInformationPayload } from "@/features/profile/api";
import { toGregorianDate } from "@/lib/utils/toGregorianDate";
import type { PersonalInfoFormValues } from "../personalInfo.schema";

export function buildPersonalInfoPayload(
  data: PersonalInfoFormValues,
  initialValues: PersonalInfoFormValues,
  profileImage?: File | null,
): UpdatePersonalInformationPayload {
  const payload: UpdatePersonalInformationPayload = {};

  const currentName = (data.fullName ?? "").trim();
  const initialName = (initialValues.fullName ?? "").trim();
  if (currentName !== initialName) {
    payload.name = currentName;
  }

  const currentNationalCode = (data.nationalCode ?? "").trim();
  const initialNationalCode = (initialValues.nationalCode ?? "").trim();
  if (currentNationalCode !== initialNationalCode) {
    payload.national_code = currentNationalCode;
  }

  const currentPhoneNumber = (data.phoneNumber ?? "").trim();
  const initialPhoneNumber = (initialValues.phoneNumber ?? "").trim();
  if (currentPhoneNumber !== initialPhoneNumber) {
    payload.phone_number = currentPhoneNumber;
  }

  const currentBirthDate = data.birthDate ?? "";
  const initialBirthDate = initialValues.birthDate ?? "";
  if (currentBirthDate !== initialBirthDate) {
    payload.birth_date = currentBirthDate
      ? toGregorianDate(currentBirthDate)
      : "";
  }

  const currentEmail = (data.email ?? "").trim();
  const initialEmail = (initialValues.email ?? "").trim();
  if (currentEmail !== initialEmail) {
    payload.email = currentEmail;
  }

  const currentIsRetired = data.isRetired ?? false;
  const initialIsRetired = initialValues.isRetired ?? false;
  const retirementStatusChanged = currentIsRetired !== initialIsRetired;

  if (retirementStatusChanged) {
    payload.is_retired = currentIsRetired;
  }

  const ledgerNumber = (data.ledgerNumber ?? "").trim();
  const initialLedgerNumber = (initialValues.ledgerNumber ?? "").trim();
  if (
    retirementStatusChanged ||
    (currentIsRetired && ledgerNumber !== initialLedgerNumber)
  ) {
    payload.retirement_number = currentIsRetired ? ledgerNumber : "";
  }

  if (profileImage) {
    payload.profile_picture = profileImage;
  }

  return payload;
}

export function buildPersonalInfoFormData(
  payload: UpdatePersonalInformationPayload,
): FormData {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (key === "profile_picture") {
      if (value instanceof File) {
        formData.append("profile_picture", value, value.name);
      }
      return;
    }

    if (key === "is_retired") {
      formData.append("is_retired", value ? "1" : "0");
      return;
    }

    formData.append(key, String(value));
  });

  return formData;
}

export function isFirstNationalCodeRegistration(
  payload: UpdatePersonalInformationPayload,
  initialValues: PersonalInfoFormValues,
): boolean {
  const initialNationalCode = (initialValues.nationalCode ?? "").trim();
  return !initialNationalCode && Boolean(payload.national_code);
}
