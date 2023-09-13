import { Box, ListItemButton, Typography } from "@mui/material";
// icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TrendingListItem = (props: {
  heading: string;
  title: string;
  post: string;
}) => {
  return (
    <ListItemButton sx={{ p: 0, display: "block" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Typography
          sx={{ color: "rgb(83, 100, 113)", fontSize: "13px", ml: 2 }}
        >
          {props.heading}
        </Typography>
        <MoreHorizIcon
          fontSize="small"
          sx={{ color: "rgb(83, 100, 113)", mr: 2 }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "15px",
          ml: 2,
          fontWeight: "bold",
          color: "rgb(15, 20, 25)",
        }}
      >
        {props.title}
      </Typography>
      <Typography sx={{ color: "rgb(83, 100, 113)", fontSize: "13px", ml: 2 }}>
        {`${props.post} posts`}
      </Typography>
    </ListItemButton>
  );
};

export default TrendingListItem;
