// src/components/common/Form/FormInput.tsx
"use client";

import type { FieldValues } from "react-hook-form";

import { Input } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormInputProps } from "./Form.types";
import { toEnglishNumber, toPersianNumber } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormInput<T extends FieldValues>({
  name,
  persianDigits = false,
  ...inputProps
}: FormInputProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <Input
          {...inputProps}
          {...field}
          value={
            persianDigits
              ? toPersianNumber(String(field.value ?? ""))
              : field.value ?? ""
          }
          onChange={(event) =>
            field.onChange(
              persianDigits
                ? toEnglishNumber(event.target.value)
                : event.target.value,
            )
          }
          status={invalid && touched ? "error" : inputProps.status}
          errorMessage={
            (touched ? error : undefined) ?? inputProps.errorMessage
          }
        />
      )}
    />
  );
}

export default FormInput;
