// src/components/ui/Button/variants/LoadingButton.tsx
"use client";

import { forwardRef } from "react";

import Button from "../Button";
import type { ButtonProps } from "../Button.types";

export type LoadingButtonProps = Omit<ButtonProps, "loading"> & {
  loading?: boolean;
};

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton(
    { loading = false, loadingText, children, ...rest },
    ref
  ) {
    return (
      <Button
        ref={ref}
        loading={loading}
        loadingText={loadingText}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default LoadingButton;