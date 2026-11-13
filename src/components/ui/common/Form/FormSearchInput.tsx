// src/components/common/Form/FormSearchInput.tsx
"use client";

import type { FieldValues } from "react-hook-form";

import { SearchInput } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormSearchInputProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormSearchInput<T extends FieldValues>({
  name,
  ...rest
}: FormSearchInputProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <SearchInput
          {...rest}
          {...field}
          value={field.value ?? ""}
          onClear={() => field.onChange("")}
          status={invalid && touched ? "error" : rest.status}
          errorMessage={(touched ? error : undefined) ?? rest.errorMessage}
        />
      )}
    />
  );
}

export default FormSearchInput;