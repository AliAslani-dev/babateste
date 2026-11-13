export interface SaveButtonProps {
  savedColor?: string;
  color?: string;
  group?: string;
  getData?: () => unknown;
  isSaved?: boolean;
  onSave?: () => void;
}
