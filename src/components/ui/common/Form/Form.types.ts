// src/components/common/Form/Form.types.ts
import type { ReactNode, MutableRefObject } from "react";
import type { CheckboxProps } from "@mui/material/Checkbox";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type {
  UseFormProps,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  ControllerRenderProps,
  Path,
} from "react-hook-form";
import type { ZodType } from "zod";
import type { SxProps, Theme } from "@mui/material/styles";
import type {
  InputProps,
  PasswordInputProps,
  NumberInputProps,
  TextareaProps,
  SearchInputProps,
} from "@/components/ui/Input";
import type { ButtonProps } from "@/components/ui/Button";

// ═══════════════════════════════════════════════════════════
//  🎯 Form
// ═══════════════════════════════════════════════════════════
export interface FormProps<T extends FieldValues> extends Omit<
  UseFormProps<T>,
  "resolver"
> {
  /** Zod schema برای validation */
  schema: ZodType<T, FieldValues>;

  /** callback وقتی همه چیز معتبره */
  onSubmit: SubmitHandler<T>;

  children: ReactNode;

  /** فاصله بین فیلدها (default: 2) */
  spacing?: number;

  /** id برای فرم */
  id?: string;

  /** غیرفعال کردن native validation */
  noValidate?: boolean;

  /** استایل MUI */
  sx?: SxProps<Theme>;

  /** دسترسی به methods از بیرون */
  formRef?: MutableRefObject<UseFormReturn<T> | null>;

  /** نمایش خطای کلی فرم (root error) */
  showRootError?: boolean;
}

// ═══════════════════════════════════════════════════════════
//  🎯 FormField
// ═══════════════════════════════════════════════════════════
export interface FormFieldRenderProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  error?: string;
  invalid: boolean;
  touched: boolean;
}

export interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  render: (props: FormFieldRenderProps<T>) => ReactNode;
}

// ═══════════════════════════════════════════════════════════
//  🎯 Form Inputs
// ═══════════════════════════════════════════════════════════
export interface FormInputProps<T extends FieldValues> extends Omit<
  InputProps,
  "name" | "value" | "onChange" | "onBlur"
> {
  name: Path<T>;
  persianDigits?: boolean;
}

export interface FormPasswordInputProps<T extends FieldValues> extends Omit<
  PasswordInputProps,
  "name" | "value" | "onChange" | "onBlur"
> {
  name: Path<T>;
}

export interface FormDatePickerProps<T extends FieldValues>
  extends Omit<InputProps, "name" | "value" | "onChange" | "onBlur"> {
  name: Path<T>;
  /** اگر true باشد و مقدار خالی باشد، تاریخ امروز ست می‌شود */
  defaultToToday?: boolean;
  /** اگر true باشد، انتخاب ساعت هم فعال می‌شود */
  withTime?: boolean;
}
export interface FormNumberInputProps<T extends FieldValues> extends Omit<
  NumberInputProps,
  "name" | "value" | "onChange" | "onBlur"
> {
  name: Path<T>;
}

export interface FormTextareaProps<T extends FieldValues> extends Omit<
  TextareaProps,
  "name" | "value" | "onChange" | "onBlur"
> {
  name: Path<T>;
}

export interface FormSearchInputProps<T extends FieldValues> extends Omit<
  SearchInputProps,
  "name" | "value" | "onChange" | "onBlur" | "onClear"
> {
  name: Path<T>;
}

// ═══════════════════════════════════════════════════════════
//  🎯 FormSwitch
// ═══════════════════════════════════════════════════════════
export interface FormSwitchProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  disabled?: boolean;
}

// ═══════════════════════════════════════════════════════════
//  🎯 FormToggleGroup
// ═══════════════════════════════════════════════════════════
export interface ToggleOption {
  label: string;
  value: string;
}

export interface FormToggleGroupProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  options: ToggleOption[];
}

// ═══════════════════════════════════════════════════════════
//  🎯 FormSubmitButton
// ═══════════════════════════════════════════════════════════
export interface FormSubmitButtonProps extends Omit<
  ButtonProps,
  "type" | "loading"
> {
  /** loading دستی برای override */
  loading?: boolean;

  /** غیرفعال کردن چک isValid (default: true) */
  disableWhenInvalid?: boolean;
}
// ═══════════════════════════════════════════════════════════
// 🎯 FormCheckbox
// ═══════════════════════════════════════════════════════════

export interface FormCheckboxProps<T extends FieldValues> extends Omit<
  CheckboxProps,
  "name" | "value" | "checked" | "onChange"
> {
  name: Path<T>;
  label: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}
