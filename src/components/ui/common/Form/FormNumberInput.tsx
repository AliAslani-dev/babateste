// src/components/common/Form/FormNumberInput.tsx
"use client";

import type { FieldValues } from "react-hook-form";

import { NumberInput } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormNumberInputProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormNumberInput<T extends FieldValues>({
  name,
  ...rest
}: FormNumberInputProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <NumberInput
          {...rest}
          value={field.value ?? null}
          onChange={(value) => field.onChange(value)}
          onBlur={field.onBlur}
          name={field.name}
          ref={field.ref}
          status={invalid && touched ? "error" : rest.status}
          errorMessage={(touched ? error : undefined) ?? rest.errorMessage}
        />
      )}
    />
  );
}

export default FormNumberInput;