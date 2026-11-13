"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Box } from "@mui/material";

import {
  LOGIN_SLIDES,
  SLIDE_SWIPE_THRESHOLD,
} from "../constants/login-slides.constants";
import { useSwipe } from "../hooks/useSwipe";
import LoginSlider from "./slider/LoginSlider";
import SliderProgress from "./slider/SliderProgress";
import LoginCard from "./card/LoginCard";
import OtpCard from "./card/OtpCard";

import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { loginFormRootSx, loginCardWrapperSx } from "../styles";

import { Form } from "@/components/ui/common/Form";
import { tokenStorage } from "@/lib/api";
import { useLogin, useRequestOtp } from "@/features/auth";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const redirectTo = searchParams.get("redirect") ?? "/home";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneForDisplay, setPhoneForDisplay] = useState("");

  useEffect(() => {
    if (step !== "phone" || LOGIN_SLIDES.length <= 1) return;

    const timer = window.setTimeout(() => {
      setCurrentSlide((slide) => (slide + 1) % LOGIN_SLIDES.length);
    }, 3_000);

    return () => window.clearTimeout(timer);
  }, [currentSlide, step]);

  const login = useLogin();
  const requestOtp = useRequestOtp();

  const goToSlide = (index: number) => {
    if (index < 0 || index >= LOGIN_SLIDES.length) return;
    setCurrentSlide(index);
  };

  const { handlePointerDown, handlePointerUp } = useSwipe({
    threshold: SLIDE_SWIPE_THRESHOLD,
    onSwipeRight: () => goToSlide(currentSlide + 1),
    onSwipeLeft: () => goToSlide(currentSlide - 1),
  });

  const handlePhoneSubmit = async (data: LoginFormValues) => {
    try {
      await requestOtp.mutateAsync({ phone_number: data.phone });
      setPhoneForDisplay(data.phone);
      setStep("otp");
    } catch {}
  };

  const handleOtpSubmit = async (data: LoginFormValues) => {
    if (!data.otp_code || data.otp_code.length < 4) return;

    try {
      await login.mutateAsync({
        phone_number: data.phone,
        otp_code: data.otp_code,
      });
    } catch (error) {
      console.error("[LoginForm] login error:", error);
    }
  };

  // این تابع هم برای submit دستی و هم برای WebOTP استفاده می‌شه
  const handleOtpComplete = useCallback(
    async (code: string) => {
      if (!code || code.length < 4) return;
      try {
        await login.mutateAsync({
          phone_number: phoneForDisplay,
          otp_code: code,
        });
      } catch (error) {
        console.error("[LoginForm] WebOTP login error:", error);
      }
    },
    [login, phoneForDisplay],
  );

  const handleResendOtp = () => {
    requestOtp.mutate({ phone_number: phoneForDisplay });
  };

  const handleEditPhone = () => {
    setStep("phone");
    setPhoneForDisplay("");
    login.reset();
    requestOtp.reset();
  };

  return (
    <Box
      sx={loginFormRootSx}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <LoginSlider slides={LOGIN_SLIDES} currentSlide={currentSlide} />

      <SliderProgress
        total={LOGIN_SLIDES.length}
        current={currentSlide}
        onSelect={goToSlide}
      />

      <Box sx={loginCardWrapperSx}>
        <Form<LoginFormValues>
          schema={loginSchema}
          onSubmit={step === "phone" ? handlePhoneSubmit : handleOtpSubmit}
          defaultValues={{ phone: "", otp_code: "" }}
          mode="onChange"
        >
          {step === "phone" ? (
            <LoginCard />
          ) : (
            <OtpCard
              phone={phoneForDisplay}
              onEditPhone={handleEditPhone}
              onResend={handleResendOtp}
              onComplete={handleOtpComplete}
              isSubmitting={login.isPending}
              isResending={requestOtp.isPending}
            />
          )}
        </Form>
      </Box>
    </Box>
  );
}
