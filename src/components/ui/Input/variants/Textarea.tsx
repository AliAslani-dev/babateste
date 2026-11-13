"use client";

import { forwardRef, useId } from "react";
import { Box, Typography } from "@mui/material";
import { semanticColors } from "@/theme";
import {
  getInputHelperStyles,
  getInputLabelStyles,
  getInputStyles,
} from "../Input.styles";
import type { TextareaProps } from "../Input.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      size = "md",
      variant = "default",
      status = "default",
      label,
      helperText,
      errorMessage,
      fullWidth = false,
      minRows = 3,
      maxRows,
      showCount = false,
      maxLength,
      disabled,
      value,
      defaultValue,
      onChange,
      sx,
      id: idProp,
      ...rest
    },
    ref,
  ) {
    const generatedId = useId();
    const id = idProp ?? generatedId;

    const hasError = status === "error" || Boolean(errorMessage);
    const finalStatus = hasError ? "error" : status;

    // Count chars for showCount
    const currentLength = String(value ?? defaultValue ?? "").length;

    const styles = getInputStyles({
      size,
      variant,
      status: finalStatus,
      fullWidth,
      disabled,
    });

    return (
      <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
        {label && (
          <Typography component="label" htmlFor={id} sx={getInputLabelStyles()}>
            {label}
          </Typography>
        )}

        <Box
          sx={[
            styles,
            {
              height: "auto",
              alignItems: "flex-start",
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          data-disabled={disabled ? "true" : "false"}
        >
          <Box
            component="textarea"
            ref={ref}
            id={id}
            rows={minRows}
            maxLength={maxLength}
            disabled={disabled}
            aria-invalid={hasError}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            style={{
              maxHeight: maxRows ? `${maxRows * 24}px` : undefined,
              overflowY: maxRows ? "auto" : undefined,
            }}
            {...rest}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "6px",
            gap: 1,
          }}
        >
          {(errorMessage || helperText) && (
            <Typography component="span" sx={getInputHelperStyles(finalStatus)}>
              {errorMessage ?? helperText}
            </Typography>
          )}

          {showCount && maxLength && (
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                color:
                  currentLength >= maxLength
                    ? semanticColors.status.error
                    : semanticColors.text.secondary,
                marginInlineStart: "auto",
              }}
            >
              {currentLength} / {maxLength}
            </Typography>
          )}
        </Box>
      </Box>
    );
  },
);

export default Textarea;
