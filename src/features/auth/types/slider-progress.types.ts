export interface SliderProgressProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}