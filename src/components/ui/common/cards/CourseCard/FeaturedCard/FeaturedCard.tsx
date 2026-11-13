import { Card, CardContent, Divider } from "@mui/material";

import type { FeaturedCardProps } from "./FeaturedCard.types";
import {
  cardStyles,
  contentStyles,
  dividerStyles,
} from "./FeaturedCard.styles";

import { FeaturedCardImage } from "./components/FeaturedCardImage";
import { FeaturedCardTitle } from "./components/FeaturedCardTitle";
import { FeaturedCardStats } from "./components/FeaturedCardStats";
import { FeaturedCardDescription } from "./components/FeaturedCardDescription";
import { FeaturedCardAction } from "./components/FeaturedCardAction";

export default function FeaturedCard({
  imageSrc,
  imageAlt,
  title,
  stats,
  description,
  actionLabel,
  onActionClick,
}: FeaturedCardProps) {
  return (
    <Card sx={cardStyles}>
      <FeaturedCardImage src={imageSrc} alt={imageAlt} />
      <FeaturedCardTitle title={title} />
      <Divider sx={dividerStyles} />

      <CardContent sx={contentStyles}>
        <FeaturedCardStats stats={stats} />
        <FeaturedCardDescription description={description} />
        <FeaturedCardAction label={actionLabel} onClick={onActionClick} />
      </CardContent>
    </Card>
  );
}
