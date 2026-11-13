"use client";

import { Box, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import type { ReviewFormValues } from "../schema/review.schema";
import { sectionSx, sectionTitleSx, discountRowSx, discountInputSx } from "./Review.styles";

export default function DiscountCode() {
  const { register } = useFormContext<ReviewFormValues>();

  return (
    <Box sx={sectionSx}>
      <Typography variant="demiboldSm" sx={sectionTitleSx}>
        کد تخفیف
      </Typography>

      <Box sx={discountRowSx}>
        {/* Apply button — left side in RTL */}
        <Button
          appearance="solid"
          color="primary"
          size="xs"
          shape="pill"
          type="button"
        >
          اعمال
        </Button>

        {/* Edit icon */}
        <EditOutlinedIcon sx={{ fontSize: 20, color: "text.secondary", flexShrink: 0 }} />

        {/* Input — disabled per Figma spec */}
        <Box
          component="input"
          {...register("discountCode")}
          disabled
          placeholder="کدی وجود ندارد"
          sx={discountInputSx}
        />
      </Box>
    </Box>
  );
}
