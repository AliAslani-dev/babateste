import Image from "next/image";
import { Box } from "@mui/material";
import { imageWrapperStyles } from "../styles";

interface Props {
  src: string;
  alt: string;
}

export const EventCardImage = ({ src, alt }: Props) => (
  <Box sx={imageWrapperStyles}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="300px"
      style={{ objectFit: "cover" }}
    />
  </Box>
);