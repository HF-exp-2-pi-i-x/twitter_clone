"use client";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

// icons
import TweetBox from "@/components/Tweetbox";
import HomePost from "@/components/HomePost";

type tweetType = {
  id: number;
  uid: number;
  username: string;
  post: string;
  date: string;
};

export default function Home() {
  // type to be added
  const [tweets, setTweets] = useState<tweetType[]>([]);
  const [follow, setFollow] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllTweets = async () => {
      try {
        let res;
        if (!follow) {
          res = await axios.get("http://localhost:4001/tweets");
        } else {
          res = await axios.post("http://localhost:4001/followedTweets", {
            uid: 1,
          });
        }
        setTweets(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTweets();
  }, [follow]);

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
        {tweets.map((tweet) => {
          return (
            <TweetBox
              id={tweet.id}
              uid={tweet.uid}
              username={tweet.username}
              date={tweet.date}
              post={tweet.post}
            />
          );
        })}
      </Box>
    </Box>
  );
}
