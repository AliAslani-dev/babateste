import BaseIcon, { BaseIconProps } from "../../BaseIcon";

export type ArrowLeftIconProps = Omit<
  BaseIconProps,
  "children" | "viewBox"
> & {
  width?: number | string;
  height?: number | string;
};

export default function ArrowLeftIcon({
  width = 12,
  height = 9,
  ...props
}: ArrowLeftIconProps) {
  return (
    <BaseIcon
      viewBox="0 0 12 9"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M4.85355 0.146447C5.04882 0.341709 5.04882 0.658291 4.85355 0.853553L1.70711 4H11.1667C11.4428 4 11.6667 4.22386 11.6667 4.5C11.6667 4.77614 11.4428 5 11.1667 5H1.70711L4.85355 8.14645C5.04882 8.34171 5.04882 8.65829 4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L0.146447 4.85355C-0.0488155 4.65829 -0.0488155 4.34171 0.146447 4.14645L4.14645 0.146447C4.34171 -0.0488155 4.65829 -0.0488155 4.85355 0.146447Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  );
}