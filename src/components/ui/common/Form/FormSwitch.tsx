"use client";

import type { FieldValues } from "react-hook-form";
import { Box, Typography } from "@mui/material";

import { FormField } from "./FormField";
import type { FormSwitchProps } from "./Form.types";

export function FormSwitch<T extends FieldValues>({
  name,
  label,
  disabled,
}: FormSwitchProps<T>) {
  return (
    <FormField<T>
      name={name}
      render={({ field }) => {
const checked = Boolean(field.value);

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* متن سمت راست */}
            {label && (
              <Typography
                variant="regularBase"
                sx={{
                  color: disabled ? "#A1A1AA" : "#1E1E1E",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {label}
              </Typography>
            )}

            {/* سوییچ کاستوم */}
            <Box
              role="switch"
              aria-checked={checked}
              tabIndex={disabled ? -1 : 0}
              onClick={() => {
                if (!disabled) field.onChange(!checked);
              }}
              onKeyDown={(e) => {
                if (disabled) return;
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  field.onChange(!checked);
                }
              }}
              onBlur={field.onBlur}
              sx={{
                position: "relative",
                width: 44,
                height: 24,
                borderRadius: "999px",
                cursor: disabled ? "not-allowed" : "pointer",
                backgroundColor: checked
                  ? "#0A8EA6" // 👈 رنگ روشن (همون سبز/آبی برند)
                  : "rgba(117, 117, 117, 0.4)", // 👈 رنگ خاموش
                transition: "background-color 0.2s ease",
                flexShrink: 0,
                outline: "none",
                opacity: disabled ? 0.5 : 1,

                // دایره سفید
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 2,
                  left: checked ? 22 : 2,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  transition: "left 0.2s ease",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                },

                "&:focus-visible": {
                  boxShadow: "0 0 0 2px #0A8EA640",
                },
              }}
            />
          </Box>
        );
      }}
    />
  );
}

export default FormSwitch;