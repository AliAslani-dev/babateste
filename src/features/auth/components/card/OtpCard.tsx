"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import {
  loginCardSx,
  loginCardTitleSx,
  loginCardDescriptionSx,
} from "../../styles";
import {
  otpInputsRowSx,
  otpCellSx,
  otpFooterRowSx,
  otpResendSx,
  otpEditPhoneSx,
} from "../../styles/otp-card.styles";
import { FormSubmitButton } from "@/components/ui/common/Form";
import { toEnglishNumber, toPersianNumber } from "@/lib/utils";
import type { LoginFormValues } from "../../schemas/login.schema";

const OTP_LENGTH = 5;
const RESEND_SECONDS = 120;

interface OtpCardProps {
  phone: string;
  onEditPhone: () => void;
  onResend: () => void;
  onComplete?: (code: string) => void;
  isSubmitting?: boolean;
  isResending?: boolean;
}

export default function OtpCard({
  phone,
  onEditPhone,
  onResend,
  onComplete,
  isSubmitting = false,
  isResending = false,
}: OtpCardProps) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<LoginFormValues>();

  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const submittedRef = useRef(false);

  // ── countdown ────────────────────────────────────────────
  useEffect(() => {
    if (timer <= 0) return;
    const id = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  // ── auto-focus first cell on mount ───────────────────────
  useEffect(() => {
    const t = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // ── WebOTP API: پر شدن خودکار از پیامک (Chrome/Edge اندروید) ──
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("OTPCredential" in window)) return;
    if (!onComplete) return;

    const abortController = new AbortController();

    navigator.credentials
      .get({
        // @ts-expect-error - OTPCredential نوع رسمی در TS استاندارد نیست
        otp: { transport: ["sms"] },
        signal: abortController.signal,
      })
      .then((otp: unknown) => {
        const code = (otp as { code?: string } | null)?.code;
        if (!code) return;
        if (code.length !== OTP_LENGTH) return;

        setValue("otp_code", code, { shouldValidate: true });

        if (!submittedRef.current) {
          submittedRef.current = true;
          setTimeout(() => onComplete(code), 0);
        }
      })
      .catch((err: unknown) => {
        if ((err as Error)?.name !== "AbortError") {
          console.error("WebOTP error:", err);
        }
      });

    return () => abortController.abort();
  }, [setValue, onComplete]);

  const formattedTimer = toPersianNumber(
    `${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`
  );
  const canResend = timer === 0 && !isResending;

  const focusCell = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  const handleResend = () => {
    if (!canResend) return;
    setTimer(RESEND_SECONDS);
    submittedRef.current = false;
    focusCell(0);
    onResend();
  };

  return (
    <Box sx={loginCardSx}>
      <Typography
        variant="boldLg"
        sx={{ ...loginCardTitleSx, display: "block", mb: 0.5 }}
      >
        کد تایید را وارد کنید
      </Typography>

      <Typography
        variant="regularSm"
        sx={{ ...loginCardDescriptionSx, display: "block", mb: 2.5 }}
      >
        کد تایید برای شماره {toPersianNumber(phone)} پیامک شد.
      </Typography>

      <Controller
        name="otp_code"
        control={control}
        render={({ field }) => {
          const otpValue = field.value ?? "";
          const digits = Array.from(
            { length: OTP_LENGTH },
            (_, i) => otpValue[i] ?? ""
          );
          const anyFocused = focusedIndex !== -1;
          const errorMessage = errors.otp_code?.message;

          const tryAutoSubmit = (value: string) => {
            if (value.length !== OTP_LENGTH) return;
            if (submittedRef.current) return;
            submittedRef.current = true;
            setTimeout(() => onComplete?.(value), 0);
          };

          const handleChange = (index: number, raw: string) => {
            const digit = toEnglishNumber(raw).replace(/\D/g, "").slice(-1);
            const next = [...digits];
            next[index] = digit;
            const nextValue = next.join("");
            field.onChange(nextValue);
            submittedRef.current = false;

            if (digit && index < OTP_LENGTH - 1) {
              focusCell(index + 1);
            }

            if (digit && index === OTP_LENGTH - 1) {
              tryAutoSubmit(nextValue);
            }
          };

          const handleKeyDown = (
            index: number,
            e: React.KeyboardEvent<HTMLInputElement>
          ) => {
            if (e.key === "Backspace") {
              if (digits[index]) {
                const next = [...digits];
                next[index] = "";
                field.onChange(next.join(""));
                submittedRef.current = false;
              } else if (index > 0) {
                focusCell(index - 1);
              }
            } else if (e.key === "ArrowLeft" && index < OTP_LENGTH - 1) {
              focusCell(index + 1);
            } else if (e.key === "ArrowRight" && index > 0) {
              focusCell(index - 1);
            }
          };

          const handlePaste = (e: React.ClipboardEvent) => {
            e.preventDefault();
            const pasted = e.clipboardData
              .getData("text")
              .replace(/[۰-۹٠-٩]/g, (digit) => toEnglishNumber(digit))
              .replace(/\D/g, "")
              .slice(0, OTP_LENGTH);
            if (!pasted) return;

            const next = Array(OTP_LENGTH).fill("");
            pasted.split("").forEach((ch, i) => {
              next[i] = ch;
            });
            const nextValue = next.join("");
            field.onChange(nextValue);
            submittedRef.current = false;
            focusCell(Math.min(pasted.length, OTP_LENGTH - 1));

            if (pasted.length === OTP_LENGTH) {
              tryAutoSubmit(nextValue);
            }
          };

          return (
            <>
              <Box sx={otpInputsRowSx(anyFocused)} onPaste={handlePaste}>
                {digits.map((val, i) => (
                  <Box
                    key={i}
                    sx={otpCellSx(i === OTP_LENGTH - 1, anyFocused)}
                  >
                    <input
                      ref={(el) => {
                        inputRefs.current[i] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={toPersianNumber(val)}
                      onChange={(e) => handleChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                      onFocus={() => setFocusedIndex(i)}
                      onBlur={() => {
                        setFocusedIndex(-1);
                        field.onBlur();
                      }}
                      autoComplete="one-time-code"
                      disabled={isSubmitting}
                    />
                  </Box>
                ))}
              </Box>

              <Typography
                variant="regularSm"
                sx={{
                  color: "#DC2626",
                  fontSize: 12,
                  textAlign: "center",
                  mb: 1.5,
                  display: "block",
                  minHeight: 18,
                  visibility: errorMessage ? "visible" : "hidden",
                }}
              >
                {errorMessage || " "}
              </Typography>
            </>
          );
        }}
      />

      <Box sx={otpFooterRowSx}>
        <Box sx={otpResendSx(canResend)} onClick={handleResend}>
          <Typography
            variant="regularSm"
            component="span"
            sx={{ color: "inherit", fontSize: 12 }}
          >
            {isResending ? "در حال ارسال..." : "ارسال مجدد کد"}
          </Typography>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          {!canResend && !isResending && (
            <Typography
              variant="regularSm"
              component="span"
              sx={{ color: "inherit", fontSize: 12 }}
            >
              {formattedTimer}
            </Typography>
          )}
        </Box>

        <Box sx={otpEditPhoneSx} onClick={onEditPhone}>
          <Typography
            variant="regularSm"
            component="span"
            sx={{ color: "inherit", fontSize: 12 }}
          >
            ویرایش شماره
          </Typography>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" />
          </svg>
        </Box>
      </Box>

      <FormSubmitButton
        color="primary"
        appearance="solid"
        size="lg"
        shape="pill"
        fullWidth
        disableWhenInvalid={false}
        loading={isSubmitting}
      >
        ورود به شریف نوا
      </FormSubmitButton>
    </Box>
  );
}
