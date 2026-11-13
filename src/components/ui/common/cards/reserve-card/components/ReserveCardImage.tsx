import { Box } from "@mui/material";

interface Props {
  src: string;
  alt: string;
}

export const ReserveCardImage = ({ src, alt }: Props) => (
  <Box
    role="img"
    aria-label={alt}
    sx={{
      width: 155,
      flexShrink: 0,
      alignSelf: "stretch",
      backgroundImage: `url(${src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
    }}
  />
);
