import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";
import TrendingListItem from "./TrendingListItem";
import FollowingListItem from "./FollowingListItem";

function RightSidebar() {
  return (
    <Box id="right-sidebar-search" sx={{ width: "100%" }}>
      <TextField
        fullWidth
        variant="standard"
        sx={{
          backgroundColor: "rgb(239, 243, 244)",
          p: 1,
          mt: 1,
          ml: 3,
          borderRadius: "50px",
        }}
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
      <List
        sx={{
          px: 2,
          py: 2,
          mt: 2,
          ml: 3,
          width: "100%",
          backgroundColor: "rgb(239, 243, 244)",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(15, 20, 25)",
          }}
        >
          Subscribe to Premium
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "rgb(15, 20, 25)",
          }}
        >
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </Typography>
        <Button
          sx={{
            mt: 1,
            borderRadius: "30px",
            backgroundColor: "rgb(15, 20, 25)",
            ":hover": {
              backgroundColor: "rgb(15, 20, 25,0.8)",
            },
          }}
          variant="contained"
        >
          Subscribe
        </Button>
      </List>
      <List
        sx={{
          mt: 2,
          ml: 3,
          width: "100%",
          backgroundColor: "rgb(239, 243, 244)",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            ml: 2,
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(15, 20, 25)",
          }}
        >
          Trends for you
        </Typography>

        <TrendingListItem
          heading="Gaming · Trending"
          title="#unity3d"
          post="4,269"
        />
        <TrendingListItem
          heading="Trending"
          title="#ElonMuskIsATraitor"
          post="2.39k"
        />
        <TrendingListItem
          heading="Gaming · Trending"
          title="Unreal Engine"
          post="7,017"
        />
        <TrendingListItem
          heading="Sports · Trending"
          title="Kyrie"
          post="7,200"
        />
        <ListItemButton>
          <Typography sx={{ fontSize: "15px", color: "rgb(29, 155, 240)" }}>
            Show more
          </Typography>
        </ListItemButton>
      </List>

      <List
        sx={{
          mt: 2,
          ml: 3,
          width: "100%",
          backgroundColor: "rgb(239, 243, 244)",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(15, 20, 25)",
            ml: 2,
          }}
        >
          Who to follow
        </Typography>
        <FollowingListItem username="BBC News(UK)" id="@BBCNews" />
        <FollowingListItem
          username="Academia Aesthetics"
          id="@AcademiaAesthe1"
        />
        <FollowingListItem username="Kellyanne Conway" id="@KellyannePolls" />
      </List>

      <Box
        id="links"
        sx={{ ml: 3, my: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}
      >
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          Terms of service
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          Cookie Policy
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          Accessibility
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          Ads info
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          More
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          © 2023 X Corp.
        </Typography>
      </Box>
    </Box>
  );
}

export default RightSidebar;
