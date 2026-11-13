// src/components/common/Form/index.ts

// ─── Components ───
export { Form } from "./Form";
export { FormField } from "./FormField";
export { FormInput } from "./FormInput";
export { FormPasswordInput } from "./FormPasswordInput";
export { FormNumberInput } from "./FormNumberInput";
export { FormTextarea } from "./FormTextarea";
export { FormSearchInput } from "./FormSearchInput";
export { FormSubmitButton } from "./FormSubmitButton";
export { FormDatePicker } from "./FormDatePicker";
export { FormSwitch } from "./FormSwitch";
export { FormToggleGroup } from "./FormToggleGroup";
export { FormSelect } from "./FormSelect";
export type { FormSelectProps, SelectOption } from "./FormSelect";
export { FormBottomSheet } from "./FormBottomSheet";
export type { FormBottomSheetProps, BottomSheetOption } from "./FormBottomSheet";
export { FormFileUpload } from "./FormFileUpload";
export type { FormFileUploadProps } from "./FormFileUpload";
// ─── Types ───
export type {
  FormProps,
  FormFieldProps,
  FormFieldRenderProps,
  FormInputProps,
  FormPasswordInputProps,
  FormNumberInputProps,
  FormTextareaProps,
  FormSearchInputProps,
  FormSubmitButtonProps,
  FormDatePickerProps,
  FormSwitchProps,
  FormToggleGroupProps,
  ToggleOption,
} from "./Form.types";

// ─── Styles ───
export { getFormStyles, getRootErrorStyles } from "./Form.styles";
