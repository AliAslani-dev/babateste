export interface MedicineCardProps {
  /** Medicine name — bold, 14px, #09090B */
  name: string;
  /** Dose — e.g. "۵ میلی گرم" — regular, 12px, #757575 */
  dose: string;
  /** Time — e.g. "روزانه-صبح" — light, 12px, #757575 */
  time: string;
  /** Start date — e.g. "۱۲ آبان ۱۴۰۴" — light, 12px, #757575 */
  startDate: string;
  /** Controlled switch value */
  active?: boolean;
  /** Called when the toggle is changed */
  onToggle?: (active: boolean) => void;
  /** Called when the edit icon is clicked */
  onEdit?: () => void;
  className?: string;
}
