import { Card, CardContent } from "@mui/material";
import type { EventCardProps } from "./types";
import { cardStyles, contentStyles } from "./styles";
import { EventCardImage } from "./components/EventCardImage";
import { EventCardContent } from "./components/EventCardContent";
import { EventCardAction } from "./components/EventCardAction";

export default function EventCard({
  imageSrc,
  imageAlt,
  title,
  date,
  location,
  onActionClick,
  sx,
}: EventCardProps) {
  return (
    <Card
      sx={{
        ...cardStyles,
        ...sx,
      }}
    >
      <EventCardImage src={imageSrc} alt={imageAlt} />

      <CardContent sx={contentStyles}>
        <EventCardContent title={title} date={date} location={location} />
        <EventCardAction onClick={onActionClick} />
      </CardContent>
    </Card>
  );
}
