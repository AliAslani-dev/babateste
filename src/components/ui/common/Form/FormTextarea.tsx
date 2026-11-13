// src/components/common/Form/FormTextarea.tsx
"use client";

import type { FieldValues } from "react-hook-form";

import { Textarea } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormTextareaProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormTextarea<T extends FieldValues>({
  name,
  ...rest
}: FormTextareaProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <Textarea
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

export default FormTextarea;