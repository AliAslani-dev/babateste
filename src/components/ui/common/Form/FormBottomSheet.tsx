"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { FieldValues, Path } from "react-hook-form";
import {
  INPUT_COLORS,
  INPUT_HEIGHTS,
  INPUT_PADDING_X,
  INPUT_RADIUS,
  INPUT_TRANSITION,
} from "@/components/ui/Input";
import { FormField } from "./FormField";

export interface BottomSheetOption {
  value: string;
  label: string;
}

export interface FormBottomSheetProps<T extends FieldValues> {
  name: Path<T>;
  options: BottomSheetOption[];
  placeholder?: string;
  multiple?: boolean;
  fullWidth?: boolean;
}

const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function FormBottomSheet<T extends FieldValues>({
  name,
  options,
  placeholder = "انتخاب کنید",
  multiple = false,
  fullWidth = true,
}: FormBottomSheetProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => {
        const hasError = Boolean(invalid && touched);

        const selectedValues: string[] = multiple
          ? Array.isArray(field.value) ? field.value : []
          : field.value ? [field.value as string] : [];

        const displayLabel = selectedValues.length > 0
          ? selectedValues
              .map((v) => options.find((o) => o.value === v)?.label ?? v)
              .join("، ")
          : null;

        const handleToggle = (value: string) => {
          if (multiple) {
            const current = Array.isArray(field.value) ? field.value as string[] : [];
            const next = current.includes(value)
              ? current.filter((v) => v !== value)
              : [...current, value];
            field.onChange(next);
          } else {
            field.onChange(value);
            setOpen(false);
          }
        };

        return (
          <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
            {/* Trigger */}
            <Box
              component="button"
              type="button"
              onClick={() => setOpen(true)}
              sx={{
                width: "100%",
                height: INPUT_HEIGHTS.md,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: `${INPUT_PADDING_X.md}px`,
                backgroundColor: INPUT_COLORS.background.default,
                border: `1px solid ${hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.default}`,
                borderRadius: `${INPUT_RADIUS}px`,
                transition: INPUT_TRANSITION,
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "14px",
                color: displayLabel ? INPUT_COLORS.text.primary : INPUT_COLORS.text.placeholder,
                direction: "rtl",
                "&:hover": {
                  borderColor: hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.hover,
                },
              }}
            >
              <span>{displayLabel ?? placeholder}</span>
              <Box component="span" sx={{ color: INPUT_COLORS.icon.default, display: "flex", alignItems: "center", flexShrink: 0 }}>
                <ChevronIcon />
              </Box>
            </Box>

            {hasError && error && (
              <Typography component="span" sx={{ display: "block", mt: "4px", fontSize: "12px", color: INPUT_COLORS.helper.error, textAlign: "right" }}>
                {error}
              </Typography>
            )}

            {/* Backdrop */}
            {open && (
              <Box
                onClick={() => setOpen(false)}
                sx={{ position: "fixed", inset: 0, zIndex: 1200, bgcolor: "rgba(0,0,0,0.4)" }}
              />
            )}

            {/* Sheet */}
            <Box
              role="dialog"
              aria-modal="true"
              sx={{
                position: "fixed",
                bottom: 0,
                left: "50%",
                transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(100%)",
                width: "100%",
                maxWidth: "var(--app-max-width, 480px)",
                zIndex: 1300,
                bgcolor: "background.paper",
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                pb: "calc(16px + var(--safe-bottom, 0px))",
              }}
            >
              {/* Handle */}
              <Box sx={{ display: "flex", justifyContent: "center", pt: "12px", pb: "8px" }}>
                <Box sx={{ width: 36, height: 4, borderRadius: 2, bgcolor: "divider" }} />
              </Box>

              {/* Options */}
              <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
                {options.map((opt, idx) => {
                  const isSelected = selectedValues.includes(opt.value);
                  const isLast = idx === options.length - 1;
                  return (
                    <Box
                      key={opt.value}
                      component="li"
                      onClick={() => handleToggle(opt.value)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: "20px",
                        height: 52,
                        cursor: "pointer",
                        direction: "rtl",
                        borderBottom: isLast ? "none" : "1px solid",
                        borderColor: "divider",
                        "&:active": { bgcolor: "action.hover" },
                      }}
                    >
                      <Typography variant="regularBase" component="span">
                        {opt.label}
                      </Typography>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "6px",
                          border: `1.5px solid`,
                          borderColor: isSelected ? INPUT_COLORS.border.focus : INPUT_COLORS.border.default,
                          bgcolor: isSelected ? INPUT_COLORS.border.focus : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "white",
                          transition: INPUT_TRANSITION,
                        }}
                      >
                        {isSelected && <CheckIcon />}
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* Confirm button for multi-select */}
              {multiple && (
                <Box sx={{ px: "20px", pt: "16px" }}>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setOpen(false)}
                    sx={{
                      width: "100%",
                      height: 48,
                      borderRadius: "100px",
                      border: "none",
                      bgcolor: INPUT_COLORS.border.focus,
                      color: "white",
                      fontFamily: "inherit",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    تأیید
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        );
      }}
    />
  );
}

export default FormBottomSheet;
