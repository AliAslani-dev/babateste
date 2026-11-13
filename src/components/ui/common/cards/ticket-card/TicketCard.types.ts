export interface TicketCardProps {
  /** Path to the card image, served from public/images/cards/ticket-card */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Card title — demiboldSm / leading-5 */
  title: string;
  /** Discount text — regularXs / leading-5 */
  discount: string;
  /** Point value — mediumXs / leading-5 */
  point: string;
  /** Label for the details link */
  detailsLabel?: string;
  /** Callback when details link is clicked */
  onDetailsClick?: () => void;
}
