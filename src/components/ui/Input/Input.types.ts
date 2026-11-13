// src/components/ui/Input/Input.types.ts
import type { SxProps, Theme } from "@mui/material/styles";
import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

// ───────────────────────────────────────────────────────────
//   Types
// ───────────────────────────────────────────────────────────
export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "filled" | "ghost";
export type InputStatus = "default" | "error" | "success" | "warning";

// ───────────────────────────────────────────────────────────
//   Input Props
// ───────────────────────────────────────────────────────────
export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "color"
  > {
  size?: InputSize;
  variant?: InputVariant;
  status?: InputStatus;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  prefix?: string;
  suffix?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

// ───────────────────────────────────────────────────────────
//   Textarea Props
// ───────────────────────────────────────────────────────────
export interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "color"
  > {
  size?: InputSize;
  variant?: InputVariant;
  status?: InputStatus;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  minRows?: number;
  maxRows?: number;
  showCount?: boolean;
  maxLength?: number;
  sx?: SxProps<Theme>;
}

// ───────────────────────────────────────────────────────────
//   SearchInput Props
// ───────────────────────────────────────────────────────────
export interface SearchInputProps extends InputProps {
  onClear?: () => void;
  onSearch?: (value: string) => void;
}

// ───────────────────────────────────────────────────────────
//   PasswordInput Props
// ───────────────────────────────────────────────────────────
export interface PasswordInputProps extends InputProps {
  visible?: boolean;
  onToggleVisibility?: () => void;
}

// ───────────────────────────────────────────────────────────
//   NumberInput Props
// ───────────────────────────────────────────────────────────
export interface NumberInputProps
  extends Omit<
    InputProps,
    "onChange" | "value" | "defaultValue" | "type" | "min" | "max" | "step"
  > {
  /** مقدار عددی */
  value?: number | null;

  /** Display numeric values with Persian digits when enabled. */
  persianDigits?: boolean;

  /** مقدار پیش‌فرض */
  defaultValue?: number | null;

  /** حداقل */
  min?: number;

  /** حداکثر */
  max?: number;

  /** گام (پیش‌فرض: 1) */
  step?: number;

  /** نمایش دکمه‌های + و - */
  showControls?: boolean;

  /** جداکننده هزارگان */
  thousandSeparator?: string;

  /** تعداد رقم اعشار */
  decimalScale?: number;

  /** اجازه اعشار */
  allowDecimal?: boolean;

  /** callback با مقدار عددی */
  onChange?: (value: number | null) => void;
}
