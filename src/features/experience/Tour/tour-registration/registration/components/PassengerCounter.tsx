
"use client";

import { Box, IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { passengerCounterStyles } from "./PassengerCounter.styles";


interface PassengerCounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function PassengerCounter({
  count,
  onIncrease,
  onDecrease,
}: PassengerCounterProps) {
  return (
    <Box sx={passengerCounterStyles.root}>
      <Typography variant="demiboldSm" sx={passengerCounterStyles.title}>
        تعداد نفرات
      </Typography>

      <Box sx={passengerCounterStyles.counterRow}>
        <IconButton
          aria-label="افزایش تعداد مسافران"
          onClick={onIncrease}
          sx={passengerCounterStyles.actionButton}
        >
          <AddRoundedIcon sx={passengerCounterStyles.icon} />
        </IconButton>

        <Box sx={passengerCounterStyles.countBox}>
          <Typography variant="demiboldSm">
            {count.toLocaleString("fa-IR")}
          </Typography>

          <Typography variant="regularSm">
            نفر
          </Typography>
        </Box>

        <IconButton
          aria-label="کاهش تعداد مسافران"
          onClick={onDecrease}
          disabled={count <= 1}
          sx={passengerCounterStyles.actionButton}
        >
          <RemoveRoundedIcon sx={passengerCounterStyles.icon} />
        </IconButton>
      </Box>
    </Box>
  );
}
