"use client";

import type { FieldValues } from "react-hook-form";
import { Box, Typography } from "@mui/material";

import { FormField } from "./FormField";
import type { FormToggleGroupProps } from "./Form.types";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export function FormToggleGroup<T extends FieldValues>({
  name,
  label,
  options,
}: FormToggleGroupProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field }) => {
        const selected: string = field.value ?? "";

        return (
          <Box sx={{ width: "100%" }}>
            {label && (
              <Typography variant="demiboldSm" sx={{ display: "block", mb: 1 }}>
                {label}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: 1,
              }}
            >
              {options.map((option) => {
                const isActive = selected === option.value;
                return (
                  <Box
                    key={option.value}
                    component="button"
                    type="button"
                    onClick={() => field.onChange(option.value)}
                    onBlur={field.onBlur}
                    sx={{
                      flex: 1,
                      height: 44,
                      border: "1px solid",
                      borderColor: isActive ? "transparent" : "grey.300",
                      borderRadius: "999px",
                      backgroundColor: isActive ? "#EAF4F7" : "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                      p: 0,
                    }}
                  >
                    <Typography
                      variant="demiboldSm"
                      sx={{
                        color: isActive ? "#0A8EA6" : "text.primary",
                      }}
                    >
                      {option.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      }}
    />
  );
}

export default FormToggleGroup;
