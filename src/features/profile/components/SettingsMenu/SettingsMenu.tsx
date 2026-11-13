"use client";

import Link from "next/link"; 

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { SETTINGS_MENU_ITEMS } from "./settingsMenu.constants";
import {
  settingsMenuContainerSx,
  settingsMenuListSx,
  settingsMenuItemSx,
  settingsMenuButtonSx,
  settingsMenuIconWrapperSx,
  settingsMenuIconSx,
  settingsMenuTextSx,
} from "../../styles/profile.styles";

export default function SettingsMenu() {
  return (
    <Box sx={settingsMenuContainerSx}>
      <List disablePadding sx={settingsMenuListSx}>
        {SETTINGS_MENU_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === SETTINGS_MENU_ITEMS.length - 1;

          return (
            <ListItem
              key={item.label}
              disablePadding
              sx={settingsMenuItemSx(isLast)}
            >
              <ListItemButton
                component={Link}
                href={item.href}
                sx={settingsMenuButtonSx}
              >
                <ListItemIcon sx={settingsMenuIconWrapperSx}>
                  <Icon sx={settingsMenuIconSx} />
                </ListItemIcon>

                <ListItemText primary={item.label} sx={settingsMenuTextSx} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}