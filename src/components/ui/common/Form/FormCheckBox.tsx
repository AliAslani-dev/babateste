"use client";

import type { FieldValues } from "react-hook-form";
import { Box, Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

import { semanticColors } from "@/theme";
import { FormField } from "./FormField";
import type { FormCheckboxProps } from "./Form.types";

export function FormCheckbox<T extends FieldValues>({
  name,
  label,
  disabled,
  onCheckedChange,
  ...checkboxProps
}: FormCheckboxProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => (
        <Box>
          <FormControlLabel
            label={label}
            disabled={disabled}
            sx={{
              margin: 0,
              alignItems: "center",
              gap: 1,
              "& .MuiFormControlLabel-label": {
                margin: 0,
              },
            }}
            control={
              <Checkbox
                {...checkboxProps}
                name={field.name}
                checked={field.value === true}
                onChange={(_, checked) => {
                  field.onChange(checked);
                  onCheckedChange?.(checked);
                }}
                onBlur={field.onBlur}
                disabled={disabled}
                icon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      boxSizing: "border-box",
                      border: `1.14px solid ${semanticColors.border.default}`,
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                    }}
                  />
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      boxSizing: "border-box",
                      border: `1.14px solid ${semanticColors.border.default}`,
                      borderRadius: "6px",
                      backgroundColor: semanticColors.background.primary,
                    }}
                  />
                }
                sx={{
                  width: 20,
                  height: 20,
                  padding: 0,
                  mr: 0,
                  ml: 1,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent",
                  },
                  "&.Mui-checked": {
                    color: "inherit",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
            }
          />

          {touched && invalid && error && (
            <FormHelperText error>{error}</FormHelperText>
          )}
        </Box>
      )}
    />
  );
}

export default FormCheckbox;
