import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type SidebarItemProps = {
  text?: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ text, icon }: SidebarItemProps) => {
  return (
    <ListItem key={text}>
      <ListItemButton sx={{ borderRadius: "100px" }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
