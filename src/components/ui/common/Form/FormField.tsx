// src/components/common/Form/FormField.tsx
"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import type { FormFieldProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormField<T extends FieldValues>({
  name,
  render,
}: FormFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          {render({
            field,
            error: fieldState.error?.message,
            invalid: fieldState.invalid,
            touched: fieldState.isTouched,
          })}
        </>
      )}
    />
  );
}

export default FormField;