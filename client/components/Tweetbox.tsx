import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
// icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ScreenRotationAltOutlinedIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

type tweetType = {
  id: number;
  uid: number;
  username: string;
  post: string;
  date: string;
};

const TweetBox = (props: tweetType) => {
  return (
    <Box id={`${props.id}`}>
      <Grid container sx={{ mt: 1 }}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Avatar sx={{ bgcolor: "red" }}>R</Avatar>
        </Grid>
        <Grid item xs>
          <Box
            id="tweet-info"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography textAlign={"justify"}>
              {`${props.username} @${props.uid} 4${props.date}`}
            </Typography>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <Typography sx={{ mb: 2 }}>{props.post}</Typography>

          <Box
            id="tweet-actions"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Tooltip title="Reply" sx={{ float: "left" }}>
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              </Tooltip>
              <Typography sx={{ float: "right", ml: 1 }}>5</Typography>
            </Box>
            <Box>
              <Tooltip title="Repost" sx={{ float: "left" }}>
                <ScreenRotationAltOutlinedIcon fontSize="small" />
              </Tooltip>
              <Typography sx={{ float: "right", ml: 1 }}>1</Typography>
            </Box>
            <Box>
              <Tooltip title="Like" sx={{ float: "left" }}>
                <FavoriteBorderOutlinedIcon fontSize="small" />
              </Tooltip>
              <Typography sx={{ float: "right", ml: 1 }}>10</Typography>
            </Box>
            <Box>
              <Tooltip title="View" sx={{ float: "left" }}>
                <BarChartOutlinedIcon fontSize="small" />
              </Tooltip>
              <Typography sx={{ float: "right", ml: 1 }}>1000</Typography>
            </Box>
            <Box>
              <Tooltip title="Share" sx={{ float: "left" }}>
                <IosShareOutlinedIcon fontSize="small" />
              </Tooltip>
              <Typography sx={{ float: "right", mx: 1 }}>9</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default TweetBox;
