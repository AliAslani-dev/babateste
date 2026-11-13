import type { ReactNode } from "react";

export interface NotificationProps {
  /** Notification title — demiboldSm */
  title: string;
  /** Notification description — regularXs */
  description: string;
  /** Relative time label (e.g. "۱ ساعت پیش") — light2xs */
  time: string;
  /** Icon rendered on the right side of the notification */
  icon: ReactNode;
  /** Optional destination when the notification is clicked */
  href?: string;
}
