import BaseIcon, { type BaseIconProps } from "../BaseIcon";

export type ArrowBackRoundedIconProps = Omit<
  BaseIconProps,
  "children" | "viewBox"
> & {
  width?: number | string;
  height?: number | string;
};

export default function ArrowBackRoundedIcon({
  width = 22,
  height = 22,
  ...props
}: ArrowBackRoundedIconProps) {
  return (
    <BaseIcon viewBox="0 0 22 22" width={width} height={height} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 1.5C5.64137 1.5 1.5 5.64137 1.5 10.75C1.5 15.8586 5.64137 20 10.75 20C15.8586 20 20 15.8586 20 10.75C20 5.64137 15.8586 1.5 10.75 1.5ZM0 10.75C0 4.81294 4.81294 0 10.75 0C16.6871 0 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 0 16.6871 0 10.75ZM10.2803 7.21967C10.5732 6.92678 11.048 6.92678 11.3409 7.21967C11.6338 7.51256 11.6338 7.98744 11.3409 8.28033L9.62132 10H15.75C16.1642 10 16.5 10.3358 16.5 10.75C16.5 11.1642 16.1642 11.5 15.75 11.5H9.62132L11.3409 13.2197C11.6338 13.5126 11.6338 13.9874 11.3409 14.2803C11.048 14.5732 10.5732 14.5732 10.2803 14.2803L7.28033 11.2803C6.98744 10.9874 6.98744 10.5126 7.28033 10.2197L10.2803 7.21967Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}
