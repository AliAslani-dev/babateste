import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";
import type { InputSize, InputStatus, InputVariant } from "./Input.types";
import {
  INPUT_COLORS,
  INPUT_FONT_SIZE,
  INPUT_HEIGHTS,
  INPUT_ICON_SIZE,
  INPUT_PADDING_X,
  INPUT_RADIUS,
  INPUT_TRANSITION,
} from "./Input.constants";

// ───────────────────────────────────────────────────────────
//   Type Alias (بدون union → بدون خطا)
// ───────────────────────────────────────────────────────────
type StyleObject = CSSProperties & {
  [key: `&${string}`]: StyleObject | string | number;
  [key: `@${string}`]: StyleObject | string | number;
};

// ───────────────────────────────────────────────────────────
//  Style Args
// ───────────────────────────────────────────────────────────
export interface InputStyleArgs {
  size?: InputSize;
  variant?: InputVariant;
  status?: InputStatus;
  fullWidth?: boolean;
  disabled?: boolean;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  hasPrefix?: boolean;
  hasSuffix?: boolean;
}

// ───────────────────────────────────────────────────────────
//  Merge Helper
// ───────────────────────────────────────────────────────────
const mergeStyles = (...styles: StyleObject[]): StyleObject =>
  styles.reduce<StyleObject>((acc, style) => ({ ...acc, ...style }), {});

// ───────────────────────────────────────────────────────────
//  Border Color by Status
// ───────────────────────────────────────────────────────────
const getBorderColor = (status: InputStatus): string => {
  switch (status) {
    case "error":
      return INPUT_COLORS.border.error;
    case "success":
      return INPUT_COLORS.border.success;
    case "warning":
      return INPUT_COLORS.border.warning;
    default:
      return INPUT_COLORS.border.default;
  }
};

// ───────────────────────────────────────────────────────────
//  Base Styles
// ───────────────────────────────────────────────────────────
const getBaseStyles = ({
  size = "md",
  variant = "default",
  status = "default",
  fullWidth = false,
  disabled = false,
  hasStartIcon = false,
  hasEndIcon = false,
  hasPrefix = false,
  hasSuffix = false,
}: InputStyleArgs): StyleObject => {
  const height = INPUT_HEIGHTS[size];
  const paddingX = INPUT_PADDING_X[size];
  const fontSize = INPUT_FONT_SIZE[size];
  const iconSize = INPUT_ICON_SIZE[size];

  const borderColor = getBorderColor(status);

  const background =
    variant === "filled"
      ? INPUT_COLORS.background.filled
      : variant === "ghost"
        ? INPUT_COLORS.background.ghost
        : INPUT_COLORS.background.default;

  const paddingStart = hasStartIcon
    ? `${paddingX + iconSize + 8}px`
    : hasPrefix
      ? `${paddingX + 12}px`
      : `${paddingX}px`;

  const paddingEnd = hasEndIcon
    ? `${paddingX + iconSize + 8}px`
    : hasSuffix
      ? `${paddingX + 12}px`
      : `${paddingX}px`;

  return {
    // ─── Container ───
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: fullWidth ? "100%" : "auto",
    height,
    backgroundColor: background,
    border: `1px solid ${borderColor}`,
    borderRadius: `${INPUT_RADIUS}px`,
    transition: INPUT_TRANSITION,
    overflow: "hidden",

    // ─── Input ───
    "& input, & textarea": {
      flex: 1,
      minWidth: 0,
      height: "100%",
      paddingInlineStart: paddingStart,
      paddingInlineEnd: paddingEnd,
      paddingBlock: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "inherit",
      fontSize: `${fontSize}px`,
      fontWeight: 400,
      color: INPUT_COLORS.text.primary,
      lineHeight: 1.4,
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "textfield",
      backgroundColor: "transparent",
      // ✅ مهم برای PWA موبایل
      touchAction: "auto",
      userSelect: "text",
      WebkitUserSelect: "text",
      pointerEvents: "auto",
      cursor: "text",

      // ✅ جلوگیری از iOS zoom
      "@media screen and (max-width: 768px)": {
        fontSize: "16px",
      },

      "&::placeholder": {
        color: INPUT_COLORS.text.placeholder,
        opacity: 1,
      },

      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },

      "&:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 1000px ${background} inset`,
        WebkitTextFillColor: INPUT_COLORS.text.primary,
      },
    },

    "& textarea": {
      paddingBlock: "10px",
      resize: "none",
      height: "auto",
      lineHeight: 1.5,
    },

    // ─── Icons ───
    "& .MuiInputAdornment-root, & .input-icon": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: INPUT_COLORS.icon.default,
      pointerEvents: "none",

      height: iconSize,
      transition: INPUT_TRANSITION,

      "& svg": {
        height: iconSize,
      },
    },

    "& .input-icon-start": {
      insetInlineStart: `${paddingX}px`,
    },

    "& .input-icon-end": {
      insetInlineEnd: `${paddingX}px`,
      pointerEvents: "auto",
    },

    // ─── Prefix / Suffix ───
    "& .input-prefix, & .input-suffix": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: `${fontSize}px`,
      color: INPUT_COLORS.text.placeholder,
      pointerEvents: "none",
      userSelect: "none",
    },

    "& .input-prefix": {
      insetInlineStart: `${paddingX}px`,
    },

    "& .input-suffix": {
      insetInlineEnd: `${paddingX}px`,
    },

    // ─── Number Controls ───
    "& .input-number-controls": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2px",
      height: "100%",
      paddingInlineEnd: "8px",
      marginInlineStart: "auto",

      "& button": {
        width: `${iconSize + 4}px`,
        height: `${iconSize + 2}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "4px",
        color: INPUT_COLORS.icon.default,
        transition: INPUT_TRANSITION,
        padding: 0,

        "&:hover:not(:disabled)": {
          backgroundColor: INPUT_COLORS.background.filled,
          color: INPUT_COLORS.text.primary,
        },

        "&:active:not(:disabled)": {
          backgroundColor: INPUT_COLORS.border.default,
        },

        "&:disabled": {
          opacity: 0.4,
          cursor: "not-allowed",
        },

        "& svg": {
          width: `${iconSize - 4}px`,
          height: `${iconSize - 4}px`,
        },
      },
    },

    // ─── Hover ───
    "&:hover:not([data-disabled='true']):not(:focus-within)": {
      borderColor:
        status === "default" ? INPUT_COLORS.border.hover : borderColor,
    },

    // ─── Focus ───
    "&:focus-within": {
      borderColor:
        status === "default" ? INPUT_COLORS.border.focus : borderColor,
      boxShadow:
        status === "default"
          ? `0 0 0 1px ${INPUT_COLORS.border.focus}`
          : status === "error"
            ? `0 0 0 1px ${INPUT_COLORS.border.error}`
            : status === "success"
              ? `0 0 0 1px ${INPUT_COLORS.border.success}`
              : `0 0 0 1px ${INPUT_COLORS.border.warning}`,

      "& .input-icon": {
        color:
          status === "default"
            ? INPUT_COLORS.icon.focus
            : status === "error"
              ? INPUT_COLORS.icon.error
              : INPUT_COLORS.icon.default,
      },
    },

    "& input:-webkit-autofill, & textarea:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${background} inset`,
      WebkitTextFillColor: INPUT_COLORS.text.primary,
      caretColor: "auto",
      border: "none",
      outline: "none",
      transition: "background-color 9999s ease-out 0s",
    },

    // ─── Disabled ───
    ...(disabled && {
      cursor: "not-allowed",
      "& input,& textarea ":{
            cursor: "not-allowed",
      },

      // "& input:-webkit-autofill, & textarea:-webkit-autofill": {
      //   WebkitBoxShadow: `0 0 0 1000px ${background} inset`,
      //   WebkitTextFillColor: INPUT_COLORS.text.disabled,
      //   caretColor: INPUT_COLORS.text.disabled,
      // },

      "& .input-icon": {
        color: INPUT_COLORS.icon.default,
      },
    }),
  };
};

// ───────────────────────────────────────────────────────────
//  Label Styles
// ───────────────────────────────────────────────────────────
export const getLabelStyles = (): StyleObject => ({
  display: "block",
  marginBottom: "6px",
  fontSize: "13px",
  fontWeight: 600,
  color: INPUT_COLORS.text.primary,
  fontFamily: "inherit",
});

// ───────────────────────────────────────────────────────────
//  Helper Text Styles
// ───────────────────────────────────────────────────────────
export const getHelperStyles = (status: InputStatus): StyleObject => ({
  display: "block",
  marginTop: "6px",
  fontSize: "12px",
  lineHeight: 1.4,
  color:
    status === "error"
      ? INPUT_COLORS.helper.error
      : status === "success"
        ? INPUT_COLORS.helper.success
        : INPUT_COLORS.helper.default,
  fontFamily: "inherit",
});

// ───────────────────────────────────────────────────────────
//  Counter Styles (برای Textarea)
// ───────────────────────────────────────────────────────────
export const getCounterStyles = (isOver: boolean): StyleObject => ({
  fontSize: "12px",
  color: isOver ? INPUT_COLORS.helper.error : INPUT_COLORS.helper.default,
  marginInlineStart: "auto",
  fontFamily: "inherit",
});

// ───────────────────────────────────────────────────────────
//  Main Exports
// ───────────────────────────────────────────────────────────
export const getInputStyles = (args: InputStyleArgs): SxProps<Theme> =>
  mergeStyles(getBaseStyles(args)) as SxProps<Theme>;

export const getInputLabelStyles = (): SxProps<Theme> =>
  getLabelStyles() as SxProps<Theme>;

export const getInputHelperStyles = (
  status: InputStatus = "default",
): SxProps<Theme> => getHelperStyles(status) as SxProps<Theme>;

export const getInputCounterStyles = (isOver: boolean): SxProps<Theme> =>
  getCounterStyles(isOver) as SxProps<Theme>;
