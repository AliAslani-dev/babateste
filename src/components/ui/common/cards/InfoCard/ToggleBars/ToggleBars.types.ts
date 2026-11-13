export interface ToggleBarsItem {
  label: string;
  value: string;
}

export interface ToggleBarsProps {
  items: ToggleBarsItem[];
  value: string;
  gap?: number | string;
  onChange: (value: string) => void;
}
