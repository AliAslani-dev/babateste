// src/components/ui/Button/variants/IconButton.tsx
"use client";

import { forwardRef } from "react";
import MuiIconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { getIconButtonStyles } from "./IconButton.styles";
import type { IconButtonShape } from "./IconButton.styles";
import {

  BUTTON_TYPOGRAPHY_VARIANT,
} from "../Button.constants";
import type {
  IconButtonProps,
  ButtonTypographyVariant,
} from "../Button.types";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      color = "neutral",
      appearance = "ghost",
      size = "md",
      shape = "rounded",
      rounded = false,
      typographyVariant,
      loading = false,
      disabled,
      children,
      sx,
      ...rest
    },
    ref
  ) {
    // 👇 shape نهایی: اگه rounded=true بود و shape=square نبود → circle
    const finalShape: IconButtonShape =
      rounded && shape !== "square" ? "circle" : shape;

    const finalVariant: ButtonTypographyVariant =
      typographyVariant ?? BUTTON_TYPOGRAPHY_VARIANT[size];

    // 👇 اگه children متن بود، داخل Typography بذار
    const isTextChild =
      typeof children === "string" || typeof children === "number";

    return (
      <MuiIconButton
        ref={ref as React.Ref<HTMLButtonElement>}
        disableRipple
        disabled={disabled || loading}
        sx={[
          getIconButtonStyles({
            color,
            appearance,
            size,
            shape: finalShape,
            disabled,
            loading,
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...rest}
      >
        {loading ? (
          <CircularProgress
         
            thickness={4}
            sx={{ color: "inherit", display: "block" }}
          />
        ) : isTextChild ? (
          <Typography
            component="span"
            variant={finalVariant}
            sx={{ color: "inherit", fontWeight: "inherit", lineHeight: 1 }}
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </MuiIconButton>
    );
  }
);

export default IconButton;