"use client";

import { forwardRef, useCallback, useId, useState } from "react";
import { Box, Typography } from "@mui/material";

import {
  getInputHelperStyles,
  getInputLabelStyles,
  getInputStyles,
} from "../Input.styles";
import type { NumberInputProps } from "../Input.types";
import { toEnglishNumber, toPersianNumber } from "@/lib/utils";

// ───────────────────────────────────────────────────────────
//  Helpers
// ───────────────────────────────────────────────────────────
const formatNumber = (
  value: number | null | undefined,
  thousandSeparator?: string,
  decimalScale?: number
): string => {
  if (value === null || value === undefined) return "";

  const str =
    decimalScale !== undefined ? value.toFixed(decimalScale) : String(value);

  if (!thousandSeparator) return str;

  const [intPart, decPart] = str.split(".");
  const formattedInt = intPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandSeparator
  );

  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
};

const parseNumber = (
  str: string,
  thousandSeparator?: string
): number | null => {
  if (!str) return null;

  let cleaned = toEnglishNumber(str);
  if (thousandSeparator) {
    cleaned = cleaned.split(thousandSeparator).join("");
  }
  cleaned = cleaned.replace(/[^\d.-]/g, "");

  const num = Number(cleaned);
  return Number.isNaN(num) ? null : num;
};

const clamp = (value: number, min?: number, max?: number): number => {
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
};

// ───────────────────────────────────────────────────────────
//  Icons
// ───────────────────────────────────────────────────────────
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// ───────────────────────────────────────────────────────────
//  Component
// ───────────────────────────────────────────────────────────
const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    {
      size = "md",
      variant = "default",
      status = "default",
      value: valueProp,
      persianDigits = false,
      defaultValue,
      min,
      max,
      step = 1,
      showControls = false,
      thousandSeparator,
      decimalScale,
      allowDecimal = false,
      onChange,
      label,
      helperText,
      errorMessage,
      fullWidth = false,
      disabled,
      placeholder,
      sx,
      id: idProp,
      onBlur,
      ...rest
    },
    ref
  ) {
    const generatedId = useId();
    const id = idProp ?? generatedId;

    const isControlled = valueProp !== undefined;
    const [internalValue, setInternalValue] = useState<number | null>(
      defaultValue ?? null
    );

    const numericValue = isControlled ? (valueProp ?? null) : internalValue;

    const [displayValue, setDisplayValue] = useState<string>(() =>
      formatNumber(numericValue, thousandSeparator, decimalScale)
    );

    const hasError = status === "error" || Boolean(errorMessage);
    const finalStatus = hasError ? "error" : status;

    // ─── Handlers ───
    const updateValue = useCallback(
      (newValue: number | null) => {
        const clamped =
          newValue !== null ? clamp(newValue, min, max) : null;

        if (!isControlled) {
          setInternalValue(clamped);
        }
        onChange?.(clamped);
      },
      [isControlled, min, max, onChange]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      if (!raw) {
        setDisplayValue("");
        updateValue(null);
        return;
      }

      const parsed = parseNumber(raw, thousandSeparator);

      if (parsed !== null) {
        setDisplayValue(
          formatNumber(parsed, thousandSeparator, decimalScale)
        );
        updateValue(parsed);
      } else {
        setDisplayValue(raw);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setDisplayValue(
        formatNumber(numericValue, thousandSeparator, decimalScale)
      );
      onBlur?.(e);
    };

    const handleIncrement = () => {
      const next = (numericValue ?? 0) + step;
      const clamped = clamp(next, min, max);
      setDisplayValue(
        formatNumber(clamped, thousandSeparator, decimalScale)
      );
      updateValue(clamped);
    };

    const handleDecrement = () => {
      const prev = (numericValue ?? 0) - step;
      const clamped = clamp(prev, min, max);
      setDisplayValue(
        formatNumber(clamped, thousandSeparator, decimalScale)
      );
      updateValue(clamped);
    };

    // ─── Styles ───
    const inputStyles = getInputStyles({
      size,
      variant,
      status: finalStatus,
      fullWidth,
      disabled,
      hasEndIcon: showControls,
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
          <input
            ref={ref}
            id={id}
            type="text"
            //  کیبورد عددی
            inputMode={allowDecimal ? "decimal" : "numeric"}
            //  pattern برای iOS
            pattern={allowDecimal ? "[0-9]*[.,]?[0-9]*" : "[0-9]*"}
            autoComplete="off"
            enterKeyHint="done"
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={helperContent ? `${id}-helper` : undefined}
            value={persianDigits ? toPersianNumber(displayValue) : displayValue}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            {...rest}
          />

          {showControls && (
            <Box className="input-number-controls">
              <button
                type="button"
                onClick={handleIncrement}
                disabled={
                  disabled ||
                  (max !== undefined && (numericValue ?? 0) >= max)
                }
                aria-label="افزایش"
                tabIndex={-1}
              >
                <PlusIcon />
              </button>
              <button
                type="button"
                onClick={handleDecrement}
                disabled={
                  disabled ||
                  (min !== undefined && (numericValue ?? 0) <= min)
                }
                aria-label="کاهش"
                tabIndex={-1}
              >
                <MinusIcon />
              </button>
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
  }
);

export default NumberInput;
