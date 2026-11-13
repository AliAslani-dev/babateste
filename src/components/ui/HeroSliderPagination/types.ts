// src/components/ui/HeroSliderPagination/types.ts
import type { SxProps, Theme } from "@mui/material/styles";

export interface HeroSliderPaginationProps {
  total: number;
  current: number;
  activeColor?: string;
  inactiveColor?: string;
  onSelect?: (index: number) => void;
  sx?: SxProps<Theme>;
}
