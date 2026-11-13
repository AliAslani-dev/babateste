"use client";

import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import type { FieldValues, Path } from "react-hook-form";
import {
  INPUT_COLORS,
  INPUT_RADIUS,
  INPUT_TRANSITION,
} from "@/components/ui/Input";
import { FormField } from "./FormField";

export interface FormFileUploadProps<T extends FieldValues> {
  name: Path<T>;
  accept?: string;
  maxSizeMB?: number;
  hint?: string;
  fullWidth?: boolean;
}

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function FormFileUpload<T extends FieldValues>({
  name,
  accept = ".pdf,.doc,.docx",
  maxSizeMB = 5,
  hint,
  fullWidth = true,
}: FormFileUploadProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormField<T>
      name={name}
      render={({ field, error, invalid, touched }) => {
        const hasError = Boolean(invalid && touched);
        const file = field.value as File | null | undefined;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const picked = e.target.files?.[0] ?? null;
          if (picked && picked.size > maxSizeMB * 1024 * 1024) {
            field.onChange(null);
            return;
          }
          field.onChange(picked ?? null);
        };

        const handleRemove = () => {
          field.onChange(null);
          if (inputRef.current) inputRef.current.value = "";
        };

        return (
          <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              style={{ display: "none" }}
              onChange={handleChange}
            />

            {file ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  direction: "rtl",
                  px: "16px",
                  height: 56,
                  border: `1px solid ${hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.focus}`,
                  borderRadius: `${INPUT_RADIUS}px`,
                  bgcolor: INPUT_COLORS.background.default,
                  transition: INPUT_TRANSITION,
                }}
              >
                <Typography variant="regularSm" component="span" sx={{ color: INPUT_COLORS.text.primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {file.name}
                </Typography>
                <Box
                  component="button"
                  type="button"
                  onClick={handleRemove}
                  aria-label="حذف فایل"
                  sx={{ display: "flex", alignItems: "center", color: INPUT_COLORS.icon.default, cursor: "pointer", border: "none", bgcolor: "transparent", flexShrink: 0, ml: "8px" }}
                >
                  <CloseIcon />
                </Box>
              </Box>
            ) : (
              <Box
                component="button"
                type="button"
                onClick={() => inputRef.current?.click()}
                sx={{
                  width: "100%",
                  minHeight: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  direction: "rtl",
                  px: "16px",
                  gap: "12px",
                  border: `1px solid ${hasError ? INPUT_COLORS.border.error : INPUT_COLORS.border.default}`,
                  borderRadius: `${INPUT_RADIUS}px`,
                  bgcolor: INPUT_COLORS.background.default,
                  cursor: "pointer",
                  transition: INPUT_TRANSITION,
                  fontFamily: "inherit",
                  textAlign: "right",
                  "&:hover": { borderColor: INPUT_COLORS.border.hover },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
                  <Typography variant="regularSm" component="span" sx={{ color: INPUT_COLORS.text.primary }}>
                    {hint ?? `فرمت های مجاز PDF , DOC`}
                  </Typography>
                  <Typography variant="regularSm" component="span" sx={{ color: INPUT_COLORS.text.placeholder }}>
                    {`(حداکثر ${maxSizeMB} مگابایت)`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${INPUT_COLORS.border.default}`,
                    borderRadius: "10px",
                    color: INPUT_COLORS.icon.default,
                  }}
                >
                  <FileUploadOutlinedIcon sx={{ fontSize: 22 }} />
                </Box>
              </Box>
            )}

            {hasError && error && (
              <Typography component="span" sx={{ display: "block", mt: "4px", fontSize: "12px", color: INPUT_COLORS.helper.error, textAlign: "right" }}>
                {error}
              </Typography>
            )}
          </Box>
        );
      }}
    />
  );
}

export default FormFileUpload;
