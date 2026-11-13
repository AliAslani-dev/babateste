"use client";

import { AppSnackbar } from "@/components/ui/AppSnackBar";
import {
  FormDatePicker,
  FormInput,
  FormSubmitButton,
  FormSwitch,
} from "@/components/ui/common";
import { useMe } from "@/features/auth";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
  keyframes,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { ChangeEvent } from "react";

import EditIcon from "@/components/ui/icons/EditIcon/EditIcon";
import { semanticColors } from "@/theme";

import {
  personalInfoFieldsStyles,
  personalInfoSubmitWrapperStyles,
  profileAvatarEditButtonStyles,
  profileAvatarStyles,
  profileAvatarWrapperStyles,
  retiredDescriptionStyles,
  retiredLedgerInputStyles,
  retiredSectionStyles,
  retiredSwitchWrapperStyles,
} from "./PersonalInfoFields.styles";
import type { PersonalInfoFormValues } from "../personalInfo.schema";

const nationalCodeShake = keyframes`
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-2px); }
  75%      { transform: translateX(2px); }
`;

const nationalCodePulse = keyframes`
  0%   { box-shadow: 0 0 0 0    rgba(237, 108, 2, 0.45); }
  70%  { box-shadow: 0 0 0 10px rgba(237, 108, 2, 0);    }
  100% { box-shadow: 0 0 0 0    rgba(237, 108, 2, 0);    }
`;

type PersonalInfoFieldsProps = {
  isSaving?: boolean;
  initialValues: PersonalInfoFormValues | null;
  selectedImage: File | null;
  onImageChange: (file: File | null) => void;
};

function normalizeValue(value: unknown): string {
  if (value == null) return "";
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return String(value).trim();
}

export default function PersonalInfoFields({
  isSaving = false,
  initialValues,
  selectedImage,
  onImageChange,
}: PersonalInfoFieldsProps) {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nationalCodeWrapperRef = useRef<HTMLDivElement | null>(null);
  const hasShakenRef = useRef(false);
  const formInitializedRef = useRef(false);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  const { data: profile, isLoading, isError } = useMe();

  const { control, reset } = useFormContext<PersonalInfoFormValues>();

  const values = useWatch({ control });

  const isRetired = values.isRetired;

  const isNationalCodeMissingFromServer = Boolean(
    profile && !profile.nationalCode?.trim(),
  );

  useEffect(() => {
    if (!initialValues) return;
    if (formInitializedRef.current) return;

    reset(initialValues);
    formInitializedRef.current = true;
  }, [initialValues, reset]);

  useEffect(() => {
    if (!isNationalCodeMissingFromServer) return;
    if (hasShakenRef.current) return;

    const wrapper = nationalCodeWrapperRef.current;
    if (!wrapper) return;

    hasShakenRef.current = true;
    wrapper.classList.add("nc-shake");
    const t = setTimeout(() => wrapper.classList.remove("nc-shake"), 700);
    return () => clearTimeout(t);
  }, [isNationalCodeMissingFromServer]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setImageError("فرمت تصویر باید JPG، PNG یا WEBP باشد.");
      setSnackbarOpen(true);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setImageError("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
      setSnackbarOpen(true);
      return;
    }

    setImageError(null);
    onImageChange(file);
  };

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(selectedImage);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (isError) {
      setSnackbarOpen(true);
      setImageError(null);
    }
  }, [isError]);

  if (isLoading) {
    return (
      <CircularProgress
        thickness={4}
        sx={{ color: "inherit", display: "block" }}
      />
    );
  }

  if (isError || !profile) {
    return (
      <AppSnackbar
        open={snackbarOpen}
        message="دریافت اطلاعات پروفایل ناموفق بود. لطفاً دوباره تلاش کنید."
        type="error"
        onClose={() => setSnackbarOpen(false)}
      />
    );
  }

  const hasChanges = Boolean(
    initialValues &&
      (Boolean(selectedImage) ||
        normalizeValue(values.fullName) !==
          normalizeValue(initialValues.fullName) ||
        normalizeValue(values.nationalCode) !==
          normalizeValue(initialValues.nationalCode) ||
        normalizeValue(values.phoneNumber) !==
          normalizeValue(initialValues.phoneNumber) ||
        normalizeValue(values.birthDate) !==
          normalizeValue(initialValues.birthDate) ||
        normalizeValue(values.email) !==
          normalizeValue(initialValues.email) ||
        Boolean(values.isRetired) !== Boolean(initialValues.isRetired) ||
        normalizeValue(values.ledgerNumber) !==
          normalizeValue(initialValues.ledgerNumber)),
  );

  return (
    <Stack sx={personalInfoFieldsStyles}>
      <Box sx={profileAvatarWrapperStyles}>
        <Avatar
          src={previewUrl ?? profile?.profileImage ?? undefined}
          alt={profile?.name ?? "تصویر پروفایل"}
          sx={profileAvatarStyles}
        />

        <IconButton
          aria-label="ویرایش تصویر پروفایل"
          onClick={() => fileInputRef.current?.click()}
          disabled={isSaving}
          sx={profileAvatarEditButtonStyles}
        >
          <EditIcon color={semanticColors.text.primary} />
        </IconButton>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          hidden
          onChange={handleImageChange}
        />
      </Box>

      <FormInput<PersonalInfoFormValues>
        name="fullName"
        placeholder="نام و نام خانوادگی"
        endIcon={<EditIcon color={semanticColors.text.primary} />}
      />

      <Box
        ref={nationalCodeWrapperRef}
        sx={{
          position: "relative",
          borderRadius: 2,
          ...(isNationalCodeMissingFromServer && {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -4,
              borderRadius: 3,
              pointerEvents: "none",
              animation: `${nationalCodePulse} 1.6s ease-out infinite`,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.warning.main,
              borderWidth: 1.5,
              transition: theme.transitions.create("border-color"),
            },
            "& .MuiInputBase-root": {
              backgroundColor: theme.palette.warning.main + "0A",
            },
            "& .MuiInputLabel-root": {
              color: theme.palette.warning.main,
              fontWeight: 700,
            },
          }),
          "&.nc-shake": {
            animation: `${nationalCodeShake} 0.35s ease-in-out 2`,
          },
        }}
      >
        <FormInput<PersonalInfoFormValues>
          name="nationalCode"
          persianDigits
          placeholder="کد ملی *"
          endIcon={<EditIcon />}
        />

        {isNationalCodeMissingFromServer && (
          <Box
            sx={{
              position: "absolute",
              top: -6,
              right: -6,
              width: 14,
              height: 14,
              borderRadius: "50%",
              bgcolor: theme.palette.warning.main,
              border: `2px solid ${theme.palette.background.paper}`,
              animation: `${nationalCodePulse} 1.6s ease-out infinite`,
            }}
          />
        )}
      </Box>

      <FormInput<PersonalInfoFormValues>
        name="phoneNumber"
        persianDigits
        placeholder="شماره موبایل"
        endIcon={<EditIcon color={semanticColors.text.primary} />}
      />
      <FormDatePicker<PersonalInfoFormValues>
        name="birthDate"
        placeholder="تاریخ تولد (اختیاری)"
        endIcon={<EditIcon color={semanticColors.text.primary} />}
      />
      <FormInput<PersonalInfoFormValues>
        name="email"
        placeholder="ایمیل"
        endIcon={<EditIcon color={semanticColors.text.primary} />}
      />
      <Box sx={retiredSectionStyles}>
        <Box sx={retiredSwitchWrapperStyles}>
          <FormSwitch<PersonalInfoFormValues>
            name="isRetired"
            label="بازنشسته هستم"
          />
        </Box>

        <Typography variant="regularXs" sx={retiredDescriptionStyles}>
          در صورت بازنشسته بودن شماره دفترکل خود را وارد کنید
        </Typography>

        {Boolean(isRetired) && (
          <Box sx={retiredLedgerInputStyles}>
            <FormInput<PersonalInfoFormValues>
              name="ledgerNumber"
              label="دفتر کل"
              placeholder="شماره دفتر کل"
              endIcon={<EditIcon color={semanticColors.text.primary} />}
            />
          </Box>
        )}
      </Box>

      <Box sx={personalInfoSubmitWrapperStyles}>
        <FormSubmitButton
          fullWidth
          shape="pill"
          size="lg"
          disableWhenInvalid={false}
          disabled={isSaving || !hasChanges}
        >
          {isSaving ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </FormSubmitButton>
      </Box>

      <AppSnackbar
        open={snackbarOpen}
        message={
          imageError ??
          "دریافت اطلاعات پروفایل ناموفق بود. لطفاً دوباره تلاش کنید."
        }
        type="error"
        onClose={() => {
          setSnackbarOpen(false);
          setImageError(null);
        }}
      />
    </Stack>
  );
}
