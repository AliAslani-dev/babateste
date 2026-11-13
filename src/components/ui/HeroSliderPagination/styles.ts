// src/components/ui/HeroSliderPagination/styles.ts
import type { SxProps, Theme } from "@mui/material/styles";

export const BULLET_SIZE = 8; // px — قطر دایره غیرفعال
export const BULLET_ACTIVE_WIDTH = 24; // px — عرض bullet فعال (pill)
export const BULLET_HEIGHT = 8; // px

export const getPaginationRootStyles = (): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
});

export const getBulletStyles = ({
  isActive,
  activeColor,
  inactiveColor,
}: {
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
}): SxProps<Theme> => ({
  display: "block",
  height: `${BULLET_HEIGHT}px`,
  width: isActive ? `${BULLET_ACTIVE_WIDTH}px` : `${BULLET_SIZE}px`,
  borderRadius: `${BULLET_HEIGHT / 2}px`,
  backgroundColor: isActive ? activeColor : inactiveColor,
  transition: "width 300ms ease, background-color 300ms ease",
  cursor: "pointer",
  border: "none",
  padding: 0,
  flexShrink: 0,
  // گسترش ناحیه کلیک بدون تغییر ظاهر
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    inset: "-6px",
  },
  position: "relative",
});
