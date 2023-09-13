import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SidebarItem from "./SidebarItem";
// icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Xlogo: React.ReactNode = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
  >
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
);

const iconList: { text: string; icon: React.ReactNode }[] = [
  { text: "Home", icon: <HomeIcon fontSize="large" /> },
  { text: "Explore", icon: <SearchIcon fontSize="large" /> },
  { text: "Notifications", icon: <NotificationsNoneIcon fontSize="large" /> },
  { text: "Messages", icon: <MailOutlineIcon fontSize="large" /> },
  { text: "List", icon: <ArticleOutlinedIcon fontSize="large" /> },
  { text: "Community", icon: <PeopleOutlinedIcon fontSize="large" /> },
  { text: "Verified", icon: Xlogo },
  { text: "Profile", icon: <PersonOutlinedIcon fontSize="large" /> },
  { text: "More", icon: <PendingOutlinedIcon fontSize="large" /> },
];

const LeftSideBar = () => {
  return (
    <List sx={{ width: "341px", height: "100%", position: "fixed" }}>
      <SidebarItem icon={Xlogo} />

      {iconList.map((item, index) => {
        return <SidebarItem key={index} text={item.text} icon={item.icon} />;
      })}

      <ListItem>
        <Button
          sx={{ borderRadius: "100px", width: "90%" }}
          variant="contained"
        >
          Post
        </Button>
      </ListItem>

      <ListItem key="user" sx={{ position: "absolute", bottom: 0 }}>
        <ListItemButton
          sx={{
            borderRadius: "100px",
            alignItems: "space-around",
            gap: "10px",
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>username</Typography>
            <Typography sx={{ color: "rgb(83, 100, 113)" }}>
              @user_id
            </Typography>
          </Box>
          <MoreHorizIcon sx={{ ml: "auto" }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default LeftSideBar;
