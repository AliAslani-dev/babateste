import { semanticColors } from "@/theme";
import { SxProps, Theme } from "@mui/material";

export const recentActivitiesContainerStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const recentActivitiesHeaderStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

export const recentActivitiesHeaderTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
};

export const recentActivitiesViewAllStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2px",
  color: semanticColors.text.primary,
  cursor: "pointer",
  textDecoration: "none",
  background: "none",
  border: "none",
  padding: 0,
};

export const recentActivitiesListStyles: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  border: `1px solid ${semanticColors.border.default}`,
  background: semanticColors.background.default,
  padding: "0 12px", // insets the dividers
  overflow: "hidden",
};

export const recentActivitiesRowStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "14px 0",
  gap: "12px",
  boxSizing: "border-box",
};

export const recentActivitiesImageWrapperStyles: SxProps<Theme> = {
  width: 48,
  height: 48,
  flex: "0 0 48px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const recentActivitiesImageSize = 32;

export const recentActivitiesImageStyles: React.CSSProperties = {
  width: recentActivitiesImageSize,
  height: recentActivitiesImageSize,
  objectFit: "contain",
};

export const recentActivitiesContentStyles: SxProps<Theme> = {
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // in RTL, flex-start is the right edge
  justifyContent: "center",
  gap: "4px",
};

export const recentActivitiesTitleStyles: SxProps<Theme> = {
  width: "100%",
  textAlign: "right",
  color: semanticColors.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const recentActivitiesDateStyles: SxProps<Theme> = {
  width: "100%",
  textAlign: "right",
  color: semanticColors.text.secondary,
};

export const recentActivitiesScoreBadgeStyles: SxProps<Theme> = {
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "6px",
  padding: "8px 8px 8px 12px", // top right bottom left: star is on the right
  borderRadius: "100px",
  backgroundColor: "#FFF5E8",
};

export const recentActivitiesScoreTextStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  whiteSpace: "nowrap",
};

// Gold coin with a white star
export const recentActivitiesStarCoinStyles: SxProps<Theme> = {
  width: 22,
  height: 22,
  flex: "0 0 22px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #FFD54A 0%, #FFB300 100%)",
  border: "1.5px solid #FFC93C",
  boxSizing: "border-box",
};

export const recentActivitiesStarIconStyles: SxProps<Theme> = {
  width: 14,
  height: 14,
  color: "#FFFFFF",
};

export const recentActivitiesDividerStyles: SxProps<Theme> = {
  width: "100%",
  height: "1px",
  backgroundColor: semanticColors.border.default,
  margin: 0,
  border: "none",
};