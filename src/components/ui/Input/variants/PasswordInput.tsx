"use client";

import { forwardRef, useState } from "react";
import { Box } from "@mui/material";

import Input from "../Input";
import type { PasswordInputProps } from "../Input.types";

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    { visible: visibleProp, onToggleVisibility, ...rest },
    ref,
  ) {
    const [internalVisible, setInternalVisible] = useState(false);
    const isVisible = visibleProp ?? internalVisible;

    const handleToggle = () => {
      if (visibleProp === undefined) setInternalVisible((v) => !v);
      onToggleVisibility?.();
    };

    return (
      <Input
        ref={ref}
        type={isVisible ? "text" : "password"}
        endIcon={
          <Box
            component="button"
            type="button"
            onClick={handleToggle}
            aria-label={isVisible ? "پنهان کردن" : "نمایش"}
            sx={{
              background: "transparent",
              border: 0,
              padding: 0,
              cursor: "pointer",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </Box>
        }
        {...rest}
      />
    );
  },
);

export default PasswordInput;
