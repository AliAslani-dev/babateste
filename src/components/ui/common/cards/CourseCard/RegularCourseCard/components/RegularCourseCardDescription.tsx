"use client";

import { Typography } from "@mui/material";
import { regularDescriptionStyles } from "../RegularCourseCard.styles";

interface Props {
  description: string;
}

export const RegularCourseCardDescription = ({ description }: Props) => (
  <Typography sx={regularDescriptionStyles}>{description}</Typography>
);