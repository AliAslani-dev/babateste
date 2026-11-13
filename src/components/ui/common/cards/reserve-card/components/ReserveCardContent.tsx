import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  textSectionStyles,
  infoRowStyles,
  infoIconStyles,
} from "../ReserveCard.styles";
import { semanticColors } from "@/theme";
import { CalendarIcon } from "@/components/ui/icons";

interface Props {
  doctorName: string;
  specialty: string;
  time: string;
  date: string;
}

export const ReserveCardContent = ({
  doctorName,
  specialty,
  time,
  date,
}: Props) => (
  <>
    {/* متن‌های توضیحی */}
    <Box sx={textSectionStyles}>
      <Typography variant="mediumSm" sx={{ textAlign: "right" }}>نوبت پیشنهادی برای شما</Typography>
      <Typography variant="medium2xs" sx={{ textAlign: "right" }}>{doctorName}</Typography>
      <Typography variant="medium2xs" sx={{ textAlign: "right" }} color="text.secondary">{specialty}</Typography>
    </Box>

    {/* ردیف زمان و تاریخ — یک باکس واحد با جداکننده عمودی */}
    <Box sx={infoRowStyles}>
      {/* ساعت */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <AccessTimeIcon sx={infoIconStyles} />
        <Typography variant="medium2xs">{time}</Typography>
      </Box>

      {/* جداکننده عمودی */}
      <Box sx={{ width: "1px", height: 16, bgcolor: semanticColors.border.secondary, flexShrink: 0 }} />

      {/* تاریخ */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <CalendarIcon  size={15}/>
        <Typography variant="medium2xs">{date}</Typography>
      </Box>
    </Box>
  </>
);
