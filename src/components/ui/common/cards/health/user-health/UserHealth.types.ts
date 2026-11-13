export interface UserHealthProps {
  image: string;
  title: string;
  subtitle: string;
  subtitleSuffix?: string;
  text: string;
  /** Optional color applied to the title */
  titleColor?: string;
  /** Optional color applied to the bottom text */
  textColor?: string;
  /** When set, the bottom text becomes a link to this href */
  textHref?: string;
  disabled?: boolean;
}
