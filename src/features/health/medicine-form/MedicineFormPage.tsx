"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import { DatePickerIcon } from "@/components/ui/icons";
import { parse as parseJalali } from "date-fns-jalali";

import {
  Form,
  FormInput,
  FormDatePicker,
  FormTextarea,
  FormSwitch,
  FormToggleGroup,
  FormSubmitButton,
} from "@/components/ui/common/Form";

import {
  medicineSchema,
  type MedicineFormValues,
  CONSUMPTION_TIME_OPTIONS,
} from "./medicine.schema";
import {
  medicineFormFieldsContainerStyles,
  medicineFormImageBoxStyles,
  medicineFormImageStyles,
  medicineFormLabelStyles,
  medicineFormSubmitWrapperStyles,
  medicineFormWrapperStyles,
} from "./MedicineForm.styles";
import { useAddMedicine } from "@/features/health/api";
import {
  useEditingMedicine,
  useSetEditingMedicine,
  myMedicineKeys,
} from "@/features/health/api";
import { toJalaliDate } from "@/lib/utils/toJalaliDate";
import { toEnglishNumber } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════
//  Component
// ═══════════════════════════════════════════════════════════
export default function MedicineFormPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: addMedicine } = useAddMedicine();
  const editingMedicine = useEditingMedicine();
  const setEditingMedicine = useSetEditingMedicine();

  const defaultValues: MedicineFormValues = {
    medicineName: editingMedicine?.title ?? "",
    amount: editingMedicine?.amount ?? "",
    consumptionTime: editingMedicine
      ? editingMedicine.shouldTakeAtMorning
        ? "morning"
        : editingMedicine.shouldTakeAtNoon
          ? "noon"
          : "night"
      : "morning",
    startDate: toEnglishNumber(toJalaliDate(editingMedicine?.startDate)),
    endDate: toEnglishNumber(toJalaliDate(editingMedicine?.endDate)),
    reminder: editingMedicine?.hasReminder ?? false,
    notes: editingMedicine?.notes ?? "",
  };

  const toGregorian = (persianDate: string): string => {
    // Input: "۱۴۰۵/۰۷/۰۷" or "1405/07/07"  →  Output: "2026-09-29"
    // Normalize Persian-Indic digits to ASCII
    const normalized = persianDate.replace(/[۰-۹]/g, (d) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
    );
    // date-fns-jalali's parse converts Jalali → Gregorian JS Date
    const date = parseJalali(normalized, "yyyy/MM/dd", new Date());
    const gy = date.getFullYear();
    const gm = date.getMonth() + 1;
    const gd = date.getDate();
    return `${gy}-${String(gm).padStart(2, "0")}-${String(gd).padStart(2, "0")}`;
  };

  const handleSubmit = (data: MedicineFormValues) => {
    addMedicine(
      {
        title: data.medicineName,
        amount: data.amount,
        should_take_at_morning: data.consumptionTime === "morning",
        should_take_at_noon: data.consumptionTime === "noon",
        should_take_at_night: data.consumptionTime === "night",
        start_date: toGregorian(data.startDate),
        end_date: data.endDate ? toGregorian(data.endDate) : undefined,
        reminder: data.reminder,
        descriptions: data.notes ?? "",
      },
      {
        onSuccess: () => {
          setEditingMedicine(null);
          queryClient.invalidateQueries({ queryKey: myMedicineKeys.all });
          router.push("/health/my-medicine");
        },
      },
    );
  };

  return (
    <Box sx={medicineFormWrapperStyles}>
      {/* ─── Medicine Image ─── */}
      <Box sx={medicineFormImageStyles}>
        <Box
          component={Image}
          src="/images/health/medicine.png"
          alt="دارو"
          width={100}
          height={100}
          sx={medicineFormImageBoxStyles}
        />
      </Box>

      {/* ─── Form ─── */}
      <Form<MedicineFormValues>
        schema={medicineSchema}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      >
        <Box sx={medicineFormFieldsContainerStyles}>
          {/* نام دارو */}
          <Box>
            <Typography variant="demiboldSm" sx={medicineFormLabelStyles}>
              نام دارو
            </Typography>
            <FormInput<MedicineFormValues>
              name="medicineName"
              persianDigits
              placeholder="مثلا: سلکسیب ۲۰۰"
              fullWidth
            />
          </Box>

          {/* مقدار */}
          <Box>
            <Typography variant="demiboldSm" sx={medicineFormLabelStyles}>
              مقدار
            </Typography>
            <FormInput<MedicineFormValues>
              name="amount"
              persianDigits
              placeholder="مثلا: ۵ میلی گرم"
              fullWidth
            />
          </Box>

          {/* زمان مصرف */}
          <FormToggleGroup<MedicineFormValues>
            name="consumptionTime"
            label="زمان مصرف"
            options={[...CONSUMPTION_TIME_OPTIONS]}
          />

          {/* تاریخ شروع */}
          <Box>
            <Typography variant="demiboldSm" sx={medicineFormLabelStyles}>
              تاریخ شروع
            </Typography>
            <FormDatePicker<MedicineFormValues>
              name="startDate"
              placeholder="۱۴۰۴/۰۸/۱۲"
              fullWidth
              endIcon={<DatePickerIcon />}
            />
          </Box>

          {/* تاریخ پایان (اختیاری) */}
          <Box>
            <Typography variant="demiboldSm" sx={medicineFormLabelStyles}>
              تاریخ پایان (اختیاری)
            </Typography>
            <FormDatePicker<MedicineFormValues>
              name="endDate"
              placeholder="۱۴۰۴/۰۸/۱۲"
              fullWidth
              endIcon={<DatePickerIcon />}
            />
          </Box>

          {/* یادآوری مصرف */}
          <FormSwitch<MedicineFormValues>
            name="reminder"
            label="یادآوری مصرف"
          />

          {/* یادداشت (اختیاری) */}
          <Box>
            <Typography variant="demiboldSm" sx={medicineFormLabelStyles}>
              یادداشت (اختیاری)
            </Typography>
            <FormTextarea<MedicineFormValues>
              name="notes"
              placeholder="مثلا: مصرف قرص قبل از وعده ی صبحانه باشد."
              fullWidth
              minRows={4}
            />
          </Box>

          {/* دکمه ثبت */}
          <Box sx={medicineFormSubmitWrapperStyles}>
            <FormSubmitButton
              appearance="solid"
              color="primary"
              shape="pill"
              size="lg"
              fullWidth
              disableWhenInvalid={false}
            >
              ثبت دارو
            </FormSubmitButton>
          </Box>
        </Box>
      </Form>
    </Box>
  );
}
