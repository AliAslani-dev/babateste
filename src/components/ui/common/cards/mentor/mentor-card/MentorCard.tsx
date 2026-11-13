import { Card, Box } from "@mui/material";
import { CardImage } from "./components/CardImage";
import { CardContent } from "./components/CardContent";
import { CardAction } from "./components/CardAction";
import { cardStyles, topSectionStyles } from "./MentorCard.styles";
import { MentorCardProps } from "./MentorCard.types";

export const MentorCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onButtonClick,
}: MentorCardProps) => {
  return (
    <Card sx={cardStyles}>
      {/* بخش بالا: تصویر + عنوان + توضیحات */}
      <Box sx={topSectionStyles}>
        <CardImage src={imageSrc} alt={imageAlt} size={80} />
        <CardContent title={title} description={description} />
      </Box>

      {/* بخش پایین: دکمه */}
      <CardAction text={buttonText} onClick={onButtonClick}  />
    </Card>
  );
};
