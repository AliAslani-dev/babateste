import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { MenuItem } from "../../types/profile.types";

export const SETTINGS_MENU_ITEMS: MenuItem[] = [
  {
    label: "اطلاعات شخصی",
    icon: NotificationsNoneOutlinedIcon,
    href: "/profile/personal-info",
  },
  {
    label: "اعلان‌ها",
    icon: NotificationsNoneOutlinedIcon,
    href: "/profile/notifications",
  },
  {
    label: "حریم خصوصی و دسترسی‌ها",
    icon: ShieldOutlinedIcon,
    href: "/profile/privacy",
  },
  {
    label: "تنظیمات برنامه",
    icon: SettingsOutlinedIcon,
    href: "/profile/settings",
  },
  {
    label: "راهنما و پشتیبانی",
    icon: HelpOutlineOutlinedIcon,
    href: "/profile/support",
  },
  {
    label: "درباره شریف نوا",
    icon: InfoOutlinedIcon,
    href: "/profile/about",
  },
];