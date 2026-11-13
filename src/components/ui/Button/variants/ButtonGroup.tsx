// src/components/ui/Button/variants/ButtonGroup.tsx
"use client";

import React, { Children, cloneElement, isValidElement } from "react";
import { Box } from "@mui/material";

import { BUTTON_RADIUS } from "../Button.constants";
import type { ButtonGroupProps } from "../Button.types";

const ButtonGroup = ({
  children,
  orientation = "horizontal",
  color = "primary",
  appearance = "solid",
  size = "md",
  fullWidth = false,
  sx,
}: ButtonGroupProps) => {
  const isHorizontal = orientation === "horizontal";
  const radius = BUTTON_RADIUS.rounded;

  const childArray = Children.toArray(children).filter(isValidElement);

  return (
    <Box
      role="group"
      sx={[
        {
          display: "inline-flex",
          flexDirection: isHorizontal ? "row" : "column",
          width: fullWidth ? "100%" : "auto",
          "& > *:not(:first-of-type)": isHorizontal
            ? { marginInlineStart: "-1px" }
            : { marginBlockStart: "-1px" },
          "& > *:first-of-type": isHorizontal
            ? {
                borderStartStartRadius: `${radius}px`,
                borderEndStartRadius: `${radius}px`,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              }
            : {
                borderStartStartRadius: `${radius}px`,
                borderStartEndRadius: `${radius}px`,
                borderEndStartRadius: 0,
                borderEndEndRadius: 0,
              },
          "& > *:last-of-type": isHorizontal
            ? {
                borderStartEndRadius: `${radius}px`,
                borderEndEndRadius: `${radius}px`,
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              }
            : {
                borderEndStartRadius: `${radius}px`,
                borderEndEndRadius: `${radius}px`,
                borderStartStartRadius: 0,
                borderStartEndRadius: 0,
              },
          "& > *:only-of-type": {
            borderRadius: `${radius}px`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {childArray.map((child, index) =>
        cloneElement(child as React.ReactElement<any>, {
          key: index,
          color: (child as any).props.color ?? color,
          appearance: (child as any).props.appearance ?? appearance,
          size: (child as any).props.size ?? size,
          sx: {
            ...(child as any).props.sx,
            ...(fullWidth && { flex: 1 }),
          },
        })
      )}
    </Box>
  );
};

export default ButtonGroup;