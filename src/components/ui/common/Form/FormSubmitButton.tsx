// src/components/common/Form/FormSubmitButton.tsx
"use client";

import { useFormContext, type FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import type { FormSubmitButtonProps } from "./Form.types";

export function FormSubmitButton({
  children,
  loading,
  disabled,
  disableWhenInvalid = true,
  ...rest
}: FormSubmitButtonProps) {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext<FieldValues>();

  const isLoading = loading ?? isSubmitting;

  //  منطق disable:
  // - disableWhenInvalid=true → تا isValid نشه دکمه غیرفعال
  // - isLoading همیشه دکمه رو غیرفعال می‌کنه
  const isDisabledByValidation = disableWhenInvalid && !isValid;
  const finalDisabled = disabled || isLoading || isDisabledByValidation;

  return (
    <Button
      {...rest}
      type="submit"
      loading={isLoading}
      disabled={finalDisabled}
    >
      {children}
    </Button>
  );
}

export default FormSubmitButton;
