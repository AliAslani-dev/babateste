// src/components/ui/Button/Button.utils.ts
import type { SxProps, Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import type { ButtonSize } from "./Button.types";
import { BUTTON_HEIGHTS } from "./Button.constants";

/**
 * Merge چندین SxProps به صورت type-safe
 */
export const mergeSx = (
  ...styles: Array<SxProps<Theme> | undefined | false | null>
): SxProps<Theme> => styles.filter(Boolean) as SxProps<Theme>;

/**
 * ارتفاع دکمه بر اساس سایز
 */
export const getButtonHeight = (size: ButtonSize = "md"): number =>
  BUTTON_HEIGHTS[size];

/**
 * سایز آیکون بر اساس سایز دکمه
 */

 

/**
 * تبدیل SystemStyleObject به SxProps
 */
export const toSx = (style: SystemStyleObject<Theme>): SxProps<Theme> =>
  style as SxProps<Theme>;