// src/components/ui/Button/Button.tsx
"use client";

import { forwardRef } from "react";
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { getButtonStyles } from "./Button.styles";
import {

  BUTTON_TYPOGRAPHY_VARIANT,
} from "./Button.constants";
import type {
  ButtonProps,
  ButtonShape,
  ButtonTypographyVariant,
} from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    color = "primary",
    appearance = "solid",
    size = "md",
    shape = "rounded",
    rounded = false,
    typographyVariant,
    icon,
    iconPosition = "start",
    loading = false,
    loadingText,
    fullWidth = false,
    disabled,
    children,
    sx,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;

  // 👇 shape نهایی: اگه rounded=true بود و shape=square نبود → pill
  const finalShape: ButtonShape =
    rounded && shape !== "square" ? "pill" : shape;

  // 👇 variant نهایی: اگه کاربر داده باشه از همون، وگرنه بر اساس size
  const finalVariant: ButtonTypographyVariant =
    typographyVariant ?? BUTTON_TYPOGRAPHY_VARIANT[size];

  const startIcon =
    icon && iconPosition === "start" && !loading ? icon : undefined;

  const endIcon =
    icon && iconPosition === "end" && !loading ? icon : undefined;

  // 👇 محتوای متنی داخل Typography
  const textContent = loading ? loadingText ?? children : children;

  const content = (
    <>
      {loading && (
        <CircularProgress
          
          thickness={4}
          sx={{ color: "inherit", display: "block" }}
        />
      )}
      {textContent != null && textContent !== false && (
        <Typography
          component="span"
          variant={finalVariant}
          sx={{
            color: "inherit",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {textContent}
        </Typography>
      )}
    </>
  );

  return (
    <MuiButton
      ref={ref as React.Ref<HTMLButtonElement>}
      disableElevation
      disableRipple
      disabled={isDisabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={[
        getButtonStyles({
          color,
          appearance,
          size,
          shape: finalShape,
          fullWidth,
          loading,
          disabled,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {content}
    </MuiButton>
  );
});

export default Button;