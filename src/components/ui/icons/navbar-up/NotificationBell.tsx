import BaseIcon, { BaseIconProps } from "../BaseIcon";

export type NotificationBellIconProps = Omit<
  BaseIconProps,
  "children" | "viewBox"
> & {
  width?: number | string;
  height?: number | string;
};

export default function NotificationBellIcon({
  width = 24,
  height = 24,
  ...props
}: NotificationBellIconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        d="M9.00049 2.67366C9.90976 2.2417 10.9269 2 12.0006 2C15.8665 2 19.0006 5.13401 19.0006 9V9.7041C19.0006 10.5491 19.2507 11.3752 19.7194 12.0783L20.868 13.8012C21.9171 15.3749 21.1162 17.5139 19.2915 18.0116C14.518 19.3134 9.48307 19.3134 4.70962 18.0116C2.88491 17.5139 2.08398 15.3749 3.13311 13.8012L4.28172 12.0783C4.75043 11.3752 5.00055 10.5491 5.00055 9.7041V9C5.00055 7.92638 5.24225 6.90921 5.67421 5.99994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C12.2445 22 12.4847 21.9827 12.7192 21.9492M16.5 19C16.2329 19.7126 15.781 20.3428 15.1985 20.8393"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}
