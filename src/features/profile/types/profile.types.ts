import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  label: string;
  icon: SvgIconComponent;
  href: string; 
}

export interface ProfileInfoData {
  name: string;
  phoneNumber: string;
  avatarSrc: string;
}