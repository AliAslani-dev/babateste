import type { ReactNode, SVGProps } from "react";

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  children: ReactNode;
}

export default function BaseIcon({
  size,
  color,
  children,
  style,
  width,
  height,
  viewBox = "0 0 24 24",
  ...props
}: BaseIconProps) {
  return (
    <svg
      width={size ?? width}
      height={size ?? height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color,
        display: "block",
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </svg>
  );
}