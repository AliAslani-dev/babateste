// src/components/ui/common/Form/FormSelect.tsx
"use client";

import { useId } from "react";
import { Box, Typography } from "@mui/material";
import { useController, useFormContext, type FieldValues, type Path } from "react-hook-form";
import {
  INPUT_COLORS,
  INPUT_HEIGHTS,
  INPUT_PADDING_X,
  INPUT_FONT_SIZE,
  INPUT_RADIUS,
  INPUT_TRANSITION,
} from "@/components/ui/Input";
import type { InputSize } from "@/components/ui/Input";
import { getInputHelperStyles, getInputLabelStyles } from "@/components/ui/Input";

// ─── Types ───────────────────────────────────────────────────────────────────
export interface SelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  size?: InputSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

// ─── Chevron icon ─────────────────────────────────────────────────────────────
const ChevronIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4.5 6.75L9 11.25L13.5 6.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
export function FormSelect<T extends FieldValues>({
  name,
  options,
  placeholder,
  label,
  size = "md",
  fullWidth = false,
  disabled = false,
}: FormSelectProps<T>) {
  const generatedId = useId();
  const { control, formState } = useFormContext<T>();

  const {
    field,
    fieldState: { error, isTouched },
  } = useController({ name, control });

  const hasError = Boolean(error && isTouched);
  const height = INPUT_HEIGHTS[size];
  const paddingX = INPUT_PADDING_X[size];
  const fontSize = INPUT_FONT_SIZE[size];

  const borderColor = hasError
    ? INPUT_COLORS.border.error
    : INPUT_COLORS.border.default;

  const isEmpty = !field.value;

  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
      {label && (
        <Typography component="label" htmlFor={generatedId} sx={getInputLabelStyles()}>
          {label}
        </Typography>
      )}

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: fullWidth ? "100%" : "auto",
          height,
          backgroundColor: INPUT_COLORS.background.default,
          border: `1px solid ${borderColor}`,
          borderRadius: `${INPUT_RADIUS}px`,
          transition: INPUT_TRANSITION,
          overflow: "hidden",

          "&:hover:not([data-disabled='true'])": {
            borderColor: hasError
              ? INPUT_COLORS.border.error
              : INPUT_COLORS.border.hover,
          },

          "&:focus-within": {
            borderColor: hasError
              ? INPUT_COLORS.border.error
              : INPUT_COLORS.border.focus,
            boxShadow: hasError
              ? `0 0 0 1px ${INPUT_COLORS.border.error}`
              : `0 0 0 1px ${INPUT_COLORS.border.focus}`,
          },

          // The chevron icon on the start side (RTL)
          "& .select-chevron": {
            position: "absolute",
            insetInlineStart: `${paddingX}px`,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: INPUT_COLORS.icon.default,
            display: "flex",
            alignItems: "center",
          },
        }}
        data-disabled={disabled ? "true" : "false"}
      >
        {/* Chevron on the left (start in RTL) */}
        <Box component="span" className="select-chevron">
          <ChevronIcon />
        </Box>

        <Box
          component="select"
          id={generatedId}
          disabled={disabled}
          aria-invalid={hasError}
          {...field}
          sx={{
            flex: 1,
            height: "100%",
            // leave room for chevron on the start side
            paddingInlineStart: `${paddingX + 18 + 8}px`,
            paddingInlineEnd: `${paddingX}px`,
            paddingBlock: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "inherit",
            fontSize: `${fontSize}px`,
            fontWeight: 400,
            color: isEmpty
              ? INPUT_COLORS.text.placeholder
              : INPUT_COLORS.text.primary,
            appearance: "none",
            WebkitAppearance: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            direction: "rtl",
            "@media screen and (max-width: 768px)": {
              fontSize: "16px",
            },
            "& option": {
              color: INPUT_COLORS.text.primary,
              direction: "rtl",
            },
          }}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Box>
      </Box>

      {hasError && error?.message && (
        <Typography
          component="span"
          sx={getInputHelperStyles("error")}
        >
          {error.message}
        </Typography>
      )}
    </Box>
  );
}

export default FormSelect;
