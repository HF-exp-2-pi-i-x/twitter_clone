"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ScreenRotationAltOutlinedIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

export default function Home() {
  // type to be added
  const [tweets, setTweets] = useState([]);
  const [follow, setFollow] = useState<boolean>(false);
  const [audience, setAudience] = useState<string>("Everyone");

  const handleFollow = () => {
    setFollow((follow) => !follow);
  };

  const handleAudience = (e: any) => {
    setAudience(e.target.value);
  };

  return (
    <>
      <Box id="home-tabs">
        <Typography
          fontWeight={"bold"}
          color="rgb(15, 20, 25)"
          fontSize={20}
          sx={{ ml: 2, my: 2 }}
        >
          Home
        </Typography>
        <Tabs value={follow} variant="fullWidth" onChange={handleFollow}>
          <Tab value={false} label="For you" />
          <Tab value={true} label="Following" />
        </Tabs>
      </Box>
      <Divider />
      <Box id="home-textarea">
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <AccountCircleIcon fontSize="large" sx={{ color: "gray" }} />
          </Grid>
          <Grid item xs>
            <Select
              size="small"
              sx={{ borderRadius: "16px" }}
              value={audience}
              onChange={handleAudience}
            >
              <MenuItem value={"Everyone"}>
                <Typography color="primary" sx={{ fontSize: "0.8em" }}>
                  Everyone
                </Typography>
              </MenuItem>
              <MenuItem value={"Circle"}>
                <Typography sx={{ color: "green", fontSize: "0.8em" }}>
                  Circle
                </Typography>
              </MenuItem>
            </Select>
            <TextField
              variant="standard"
              placeholder="What is happening?!"
              multiline
              minRows={1}
              maxRows={4}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
              id="textarea-buttons"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                id="insert-list"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <Tooltip title="Media">
                  <PhotoOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "1.5em" }}
                  />
                </Tooltip>
                <Tooltip title="GIF">
                  <GifBoxOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "1.5em" }}
                  />
                </Tooltip>
                <Tooltip title="Poll">
                  <BallotOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "1.5em" }}
                  />
                </Tooltip>
                <Tooltip title="Emoji">
                  <SentimentSatisfiedOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "1.5em" }}
                  />
                </Tooltip>
                <Tooltip title="Schedule">
                  <CalendarMonthOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "1.5em" }}
                  />
                </Tooltip>
                <LocationOnOutlinedIcon
                  color="primary"
                  sx={{ fontSize: "1.5em" }}
                />
              </Box>
              <Box
                id="textarea-postbtn"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  sx={{ borderRadius: "100px", mr: 2 }}
                  variant="contained"
                >
                  Post
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box id="tweets">
        <TweetBox />
        <TweetBox />
        <TweetBox />
        <TweetBox />
        <TweetBox />
      </Box>
    </>
  );
}

const TweetBox = () => {
  return (
    <Card id="tweet">
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
              username @userid date"
            </Typography>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <Typography sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            commodo libero a est lobortis, nec dictum erat congue. Aliquam erat
            volutpat. Vivamus ultrices nisl nec placerat bibendum. Sed at porta
            elit, at tincidunt justo. Suspendisse consequat metus scelerisque
            odio tempus, quis posuere ligula cursus. Donec tincidunt, turpis at
            efficitur ultricies, nisl diam bibendum lectus, id laoreet augue
            velit nec mi. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </Typography>

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
              <Typography sx={{ float: "right", ml: 1 }}>9</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
