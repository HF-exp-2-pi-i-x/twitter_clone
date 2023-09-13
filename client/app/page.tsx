"use client";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

// icons
import TweetBox from "@/components/Tweetbox";
import HomePost from "@/components/HomePost";

export default function Home() {
  // type to be added
  const [tweets, setTweets] = useState([]);
  const [follow, setFollow] = useState<boolean>(false);

  const handleFollow = () => {
    setFollow((follow) => !follow);
  };

  return (
    <Box>
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
      <HomePost />
      <Divider sx={{ mt: 1 }} />
      <Box id="tweets">
        <TweetBox />
        <TweetBox />
        <TweetBox />
        <TweetBox />
        <TweetBox />
      </Box>
    </Box>
  );
}
