"use client";

import { useCallback, useMemo, useState } from "react";

import { AlertModal, Form } from "@/components/ui/common";
import { useMe } from "@/features/auth";

import {
  PersonalInfoFormValues,
  personalInfoSchema,
} from "./personalInfo.schema";
import PersonalInfoFields from "./components/PersonalInfoFields";
import { PersonalInfoSaveHandler } from "./utils/personalInfoSaveHandler";
import {
  buildPersonalInfoPayload,
  isFirstNationalCodeRegistration,
} from "./utils/personalInfo.utils";

const DEFAULT_VALUES: PersonalInfoFormValues = {
  fullName: "",
  nationalCode: "",
  phoneNumber: "",
  birthDate: "",
  email: "",
  isRetired: false,
  ledgerNumber: "",
};

function buildProfileValues(
  profile: ReturnType<typeof useMe>["data"],
): PersonalInfoFormValues | null {
  if (!profile) return null;
  return {
    fullName: profile.name ?? "",
    nationalCode: profile.nationalCode ?? "",
    phoneNumber: profile.phoneNumber ?? "",
    birthDate: profile.birthDate ?? "",
    email: profile.email ?? "",
    isRetired: Boolean(profile.isRetired),
    ledgerNumber: profile.ledgerNumber ?? "",
  };
}

export default function PersonalInfoPage() {
  const { data: profile } = useMe();

  const [savedValues, setSavedValues] = useState<PersonalInfoFormValues | null>(
    null,
  );

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const initialValues = useMemo<PersonalInfoFormValues | null>(() => {
    return savedValues ?? buildProfileValues(profile);
  }, [savedValues, profile]);

  const handleSaved = useCallback((formData: PersonalInfoFormValues) => {
    setSavedValues({ ...formData });
    setSelectedImage(null);
  }, []);

  const {
    isPending,
    snackbarElement,
    confirmNationalCodeOpen,
    cancelNationalCodeConfirmation,
    confirmNationalCode,
    requestSave,
  } = PersonalInfoSaveHandler({ onSaved: handleSaved });

  const handleSubmit = (data: PersonalInfoFormValues) => {
    if (!initialValues) return;

    const payload = buildPersonalInfoPayload(
      data,
      initialValues,
      selectedImage,
    );

    if (Object.keys(payload).length === 0) return;

    requestSave(
      payload,
      data,
      isFirstNationalCodeRegistration(payload, initialValues),
    );
  };

  return (
    <>
      <Form<PersonalInfoFormValues>
        schema={personalInfoSchema}
        onSubmit={handleSubmit}
        defaultValues={DEFAULT_VALUES}
      >
        <PersonalInfoFields
          isSaving={isPending}
          initialValues={initialValues}
          selectedImage={selectedImage}
          onImageChange={setSelectedImage}
        />
      </Form>

      <AlertModal
        open={confirmNationalCodeOpen}
        onClose={cancelNationalCodeConfirmation}
        title="ثبت کد ملی"
        description="کد ملی واردشده برای پروفایل ثبت شود؟ لطفاً از صحت آن مطمئن شوید."
        confirmButton={{
          label: isPending ? "در حال ذخیره..." : "تأیید و ذخیره",
          onClick: confirmNationalCode,
        }}
        cancelButton={{
          label: "انصراف",
          onClick: cancelNationalCodeConfirmation,
        }}
      />

      {snackbarElement}
    </>
  );
}
