"use client";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type SidebarItemProps = {
  text?: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ text, icon }: SidebarItemProps) => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ListItem key={text}>
      <ListItemButton sx={{ borderRadius: "100px" }}>
        <ListItemIcon>{icon}</ListItemIcon>
        {large && <ListItemText primary={text} />}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
