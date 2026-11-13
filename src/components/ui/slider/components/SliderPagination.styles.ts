import { semanticColors } from "@/theme";

type SliderStyle = {
  [key: string]: unknown;
};

export const sliderPaginationStyles: SliderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  background: "rgba(117, 117, 117, 0.4)",
  boxSizing: "border-box",
  overflow: "hidden",
};

export const sliderPaginationSmallStyles: SliderStyle = {
  width: 34,
  height: 8,
  gap: "2px",
  padding: "2px",
};

export const sliderPaginationLargeStyles: SliderStyle = {
  width: 94,
  height: 10,
  gap: "2px",
  padding: "2px 4px",
};

export const sliderPaginationDotStyles: SliderStyle = {
  width: 4,
  height: 4,
  minWidth: 4,
  padding: 0,
  border: 0,
  borderRadius: "50%",
  background: semanticColors.background.default,
  cursor: "pointer",
  boxSizing: "border-box",
};

export const sliderPaginationActiveStyles: SliderStyle = {
  width: 12,
  height: 4,
  minWidth: 12,
  padding: 0,
  border: 0,
  borderRadius: "8px",
  background: semanticColors.action.primary,
  cursor: "pointer",
  boxSizing: "border-box",
};