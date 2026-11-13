"use client";

import { forwardRef, useId } from "react";
import { Box, Typography } from "@mui/material";

import {
  getInputHelperStyles,
  getInputLabelStyles,
  getInputStyles,
} from "./Input.styles";
import type { InputProps } from "./Input.types";

// ───────────────────────────────────────────────────────────
//  Auto-detect inputMode از type
// ───────────────────────────────────────────────────────────
const detectInputMode = (
  type: string
): React.HTMLAttributes<HTMLInputElement>["inputMode"] => {
  switch (type) {
    case "email":
      return "email";
    case "tel":
      return "tel";
    case "url":
      return "url";
    case "number":
      return "numeric";
    case "search":
      return "search";
    default:
      return "text";
  }
};

// ───────────────────────────────────────────────────────────
//  Auto-detect autoComplete از type
// ───────────────────────────────────────────────────────────
const detectAutoComplete = (type: string): string | undefined => {
  switch (type) {
    case "email":
      return "email";
    case "tel":
      return "tel";
    case "url":
      return "url";
    case "password":
      return "current-password";
    default:
      return "off";
  }
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = "md",
    variant = "default",
    status = "default",
    startIcon,
    endIcon,
    prefix,
    suffix,
    label,
    helperText,
    errorMessage,
    fullWidth = false,
    disabled,

    // ─── HTML native ───
    type = "text",
    inputMode,
    autoComplete,
    autoCapitalize,
    autoCorrect,
    enterKeyHint,

    // ─── MUI ───
    sx,
    id: idProp,

    // ─── جدا شده ───
    defaultValue,
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
    onKeyPress,

    ...rest
  },
  ref
) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  const hasError = status === "error" || Boolean(errorMessage);
  const finalStatus = hasError ? "error" : status;

  const finalInputMode = inputMode ?? detectInputMode(type);
  const finalAutoComplete = autoComplete ?? detectAutoComplete(type);

  const inputStyles = getInputStyles({
    size,
    variant,
    status: finalStatus,
    fullWidth,
    disabled,
    hasStartIcon: Boolean(startIcon),
    hasEndIcon: Boolean(endIcon),
    hasPrefix: Boolean(prefix),
    hasSuffix: Boolean(suffix),
  });

  const helperContent = errorMessage ?? helperText;

  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
      {label && (
        <Typography
          component="label"
          htmlFor={id}
          sx={getInputLabelStyles()}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={[inputStyles, ...(Array.isArray(sx) ? sx : [sx])]}
        data-disabled={disabled ? "true" : "false"}
      >
        {startIcon && (
          <Box component="span" className="input-icon input-icon-start">
            {startIcon}
          </Box>
        )}

        {prefix && (
          <Box component="span" className="input-prefix">
            {prefix}
          </Box>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          inputMode={finalInputMode}
          autoComplete={finalAutoComplete}
          autoCapitalize={autoCapitalize ?? "off"}
          autoCorrect={autoCorrect ?? "off"}
          enterKeyHint={enterKeyHint ?? "done"}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={helperContent ? `${id}-helper` : undefined}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          {...rest}
        />

        {suffix && (
          <Box component="span" className="input-suffix">
            {suffix}
          </Box>
        )}

        {endIcon && (
          <Box component="span" className="input-icon input-icon-end">
            {endIcon}
          </Box>
        )}
      </Box>

      {helperContent && (
        <Typography
          id={`${id}-helper`}
          component="span"
          sx={getInputHelperStyles(finalStatus)}
        >
          {helperContent}
        </Typography>
      )}
    </Box>
  );
});

export default Input;