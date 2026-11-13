"use client";

import { useCallback, useState } from "react";

import { useUpdatePersonalInformation } from "@/features/profile/api";
import type { UpdatePersonalInformationPayload } from "@/features/profile/api";
import type { PersonalInfoFormValues } from "../personalInfo.schema";

type PendingSave = {
  payload: UpdatePersonalInformationPayload;
  formData: PersonalInfoFormValues;
};

type PersonalInfoSaveHandlerOptions = {
  onSaved: (formData: PersonalInfoFormValues) => void;
};

export function PersonalInfoSaveHandler({
  onSaved,
}: PersonalInfoSaveHandlerOptions) {
  const [confirmNationalCodeOpen, setConfirmNationalCodeOpen] = useState(false);

  const [pendingSave, setPendingSave] = useState<PendingSave | null>(null);

  const { mutateAsync, isPending, snackbarElement } =
    useUpdatePersonalInformation();

  const saveChanges = useCallback(
    async (
      payload: UpdatePersonalInformationPayload,
      formData: PersonalInfoFormValues,
    ) => {
      try {
        const response = await mutateAsync(payload);

        if (response.success) {
          onSaved({ ...formData });
        }
      } catch {
        // خطا و نمایش Snackbar داخل useUpdatePersonalInformation مدیریت می‌شوند.
      }
    },
    [mutateAsync, onSaved],
  );

  const requestSave = useCallback(
    (
      payload: UpdatePersonalInformationPayload,
      formData: PersonalInfoFormValues,
      requiresNationalCodeConfirmation: boolean,
    ) => {
      if (requiresNationalCodeConfirmation) {
        setPendingSave({
          payload,
          formData: { ...formData },
        });

        setConfirmNationalCodeOpen(true);
        return;
      }

      void saveChanges(payload, formData);
    },
    [saveChanges],
  );

  const cancelNationalCodeConfirmation = useCallback(() => {
    setConfirmNationalCodeOpen(false);
    setPendingSave(null);
  }, []);

  const confirmNationalCode = useCallback(() => {
    if (!pendingSave || isPending) return;

    const { payload, formData } = pendingSave;

    setConfirmNationalCodeOpen(false);
    setPendingSave(null);

    void saveChanges(payload, formData);
  }, [isPending, pendingSave, saveChanges]);

  return {
    isPending,
    snackbarElement,
    confirmNationalCodeOpen,
    cancelNationalCodeConfirmation,
    confirmNationalCode,
    requestSave,
  };
}
