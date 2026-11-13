// src/components/common/Form/FormPasswordInput.tsx
"use client";

import type { FieldValues } from "react-hook-form";

import { PasswordInput } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormPasswordInputProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormPasswordInput<T extends FieldValues>({
  name,
  ...rest
}: FormPasswordInputProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <PasswordInput
          {...rest}
          {...field}
          value={field.value ?? ""}
          status={invalid && touched ? "error" : rest.status}
          errorMessage={(touched ? error : undefined) ?? rest.errorMessage}
        />
      )}
    />
  );
}

export default FormPasswordInput;