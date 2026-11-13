import BaseIcon, { type BaseIconProps } from "../BaseIcon";

export type ChevronDownIconProps = Omit<
  BaseIconProps,
  "children" | "viewBox"
> & {
  width?: number | string;
  height?: number | string;
};

export default function ChevronDownIcon({
  width = 11,
  height = 5,
  ...props
}: ChevronDownIconProps) {
  return (
    <BaseIcon
      viewBox="0 0 11 5"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M0.120381 0.174613C0.300092 -0.0350496 0.615742 -0.0593303 0.825405 0.120381L5.16668 3.84147L9.50795 0.120381C9.71761 -0.0593299 10.0333 -0.0350491 10.213 0.174614C10.3927 0.384277 10.3684 0.699927 10.1587 0.879638L5.49207 4.87964C5.30483 5.04013 5.02852 5.04013 4.84128 4.87964L0.174613 0.879637C-0.0350496 0.699926 -0.0593303 0.384276 0.120381 0.174613Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  );
}