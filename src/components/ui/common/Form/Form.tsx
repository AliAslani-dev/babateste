// src/components/common/Form/Form.tsx
"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";

import type { FieldValues } from "react-hook-form";
import { getFormStyles, getRootErrorStyles } from "./Form.styles";
import type { FormProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function Form<T extends FieldValues>({
  schema,
  onSubmit,
  children,
  spacing = 2,
  id,
  noValidate = true,
  sx,
  formRef,
  showRootError = true,
  ...formOptions
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    // 🔑 real-time validation
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
    ...formOptions,
  });

  // اتصال methods به ref بیرونی — داخل useEffect (بدون side effect در رندر)
  useEffect(() => {
    if (formRef) {
      formRef.current = methods;
    }
  }, [formRef, methods]);

  const rootError = methods.formState.errors.root?.message;
  const handleInvalid = (errors: typeof methods.formState.errors) => {
    console.error("Form validation failed:", errors);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        id={id}
        noValidate={noValidate}
        // onSubmit={methods.handleSubmit(onSubmit)}
        onSubmit={methods.handleSubmit(onSubmit, handleInvalid)}
        sx={getFormStyles(spacing, sx)}
      >
        {/* Root error */}
        {showRootError && rootError && (
          <Typography component="div" role="alert" sx={getRootErrorStyles()}>
            {rootError}
          </Typography>
        )}

        {children}
      </Box>
    </FormProvider>
  );
}

export default Form;
