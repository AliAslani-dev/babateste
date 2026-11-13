"use client";

import { useEffect } from "react";
import type { FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { Box } from "@mui/material";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

import { Input } from "@/components/ui/Input";
import { FormField } from "./FormField";
import type { FormDatePickerProps } from "./Form.types";

const getTodayJalali = (withTime: boolean): string => {
  const now = new DateObject({
    date: new Date(),
    calendar: persian,
    locale: persian_fa,
  });

  return withTime
    ? now.format("YYYY/MM/DD HH:mm:ss")
    : now.format("YYYY/MM/DD");
};

export function FormDatePicker<T extends FieldValues>({
  name,
  defaultToToday = false,
  withTime = false,
  ...inputProps
}: FormDatePickerProps<T>) {
  const { setValue, watch } = useFormContext<T>();
  const currentValue = watch(name);

  // ست کردن تاریخ امروز به عنوان پیش‌فرض (یک بار در mount)
  useEffect(() => {
    if (!defaultToToday) return;
    if (currentValue) return;

    setValue(name, getTodayJalali(withTime) as never, {
      shouldValidate: false,
      shouldDirty: false,
      shouldTouch: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => {
        const hasError = invalid && touched;

        return (
          <Box
            sx={{
              width: inputProps.fullWidth ? "100%" : "auto",
              "& > div": { width: "100%" },
            }}
          >
            <DatePicker
              value={field.value || null}
              plugins={
                withTime ? [<TimePicker position="bottom" />] : undefined
              }
              onChange={(date) => {
                if (!date) {
                  field.onChange("");
                  return;
                }

                field.onChange(
                  withTime
                    ? date.format("YYYY/MM/DD HH:mm:ss")
                    : date.format("YYYY/MM/DD"),
                );
              }}
              format={withTime ? "YYYY/MM/DD HH:mm:ss" : "YYYY/MM/DD"}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              render={(value, openCalendar) => {
                const iconButton = inputProps.endIcon ? (
                  <Box
                    component="span"
                    onClick={openCalendar}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {inputProps.endIcon}
                  </Box>
                ) : undefined;

                return (
                  <Input
                    {...inputProps}
                    endIcon={iconButton}
                    value={value ?? ""}
                    name={field.name}
                    onFocus={() => {
                      field.onBlur();
                      openCalendar();
                    }}
                    readOnly
                    status={hasError ? "error" : inputProps.status}
                    errorMessage={
                      (touched ? error : undefined) ??
                      inputProps.errorMessage
                    }
                  />
                );
              }}
            />
          </Box>
        );
      }}
    />
  );
}

export default FormDatePicker;