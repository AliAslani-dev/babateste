import type { ReactNode } from "react";

export interface AlertProps {
  /** Title text — demiboldSm, text/primary */
  title: string;
  /** Description text — mediumSm, text/primary */
  description: string;
  /** Icon rendered next to the title. Defaults to AlertIcon if not provided. */
  icon?: ReactNode;
  className?: string;
}
