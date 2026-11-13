import { Box, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  dateRowStyles,
  infoIconStyles,
  infoTextStyles,
  locationRowStyles,
  titleStyles,
} from "../styles";

interface Props {
  title: string;
  date: string;
  location: string;
}

export const EventCardContent = ({ title, date, location }: Props) => (
  <>
    {/* عنوان */}
    <Typography variant="boldSm" sx={titleStyles}>
      {title}
    </Typography>

    {/* تاریخ و ساعت */}
    <Box sx={dateRowStyles}>
      <CalendarTodayOutlinedIcon sx={infoIconStyles} />
      <Typography sx={infoTextStyles}>{date}</Typography>
    </Box>

    {/* محل برگزاری */}
    <Box sx={locationRowStyles}>
      <LocationOnOutlinedIcon sx={infoIconStyles} />
      <Typography sx={infoTextStyles}>{location}</Typography>
    </Box>
  </>
);