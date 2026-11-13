import type { ReactNode } from "react";

export type SliderPaginationVariant = "small" | "large";

export type SliderProps<T> = {
  items: T[];

  renderSlide: (item: T, index: number) => ReactNode;

  showArrows?: boolean;

  showPagination?: boolean;

  paginationVariant?: SliderPaginationVariant;

  paginationPosition?: "inside" | "outside";

  defaultIndex?: number;

  activeIndex?: number;

  onIndexChange?: (index: number) => void;

  loop?: boolean;
  slidesPerView?: number;
  slidesToScroll?: number;
  swipeDirection?: "ltr" | "rtl";

  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export type SliderPaginationProps = {
  count: number;

  activeIndex: number;

  variant?: SliderPaginationVariant;

  onChange?: (index: number) => void;
};

export type SliderArrowProps = {
  direction: "next" | "previous";

  disabled?: boolean;

  onClick: () => void;
};
