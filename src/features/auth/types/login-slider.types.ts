import type { LoginSlideData } from "./login-slide.types";

export interface LoginSliderProps {
  slides: LoginSlideData[];
  currentSlide: number;
}

export interface LoginSlideProps {
  slide: LoginSlideData;
  isActive: boolean;
  isFirst: boolean;
}