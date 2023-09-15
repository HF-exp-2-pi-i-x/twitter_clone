"use client";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import TweetBox from "@/components/Tweetbox";
import HomePost from "@/components/HomePost";
import MainLayout from "./main_layout";

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

  // to be changed
  const { state } = useContext(AuthContext);
  const router = useRouter();
  // console.log(state);
  useEffect(() => {
    if (!state.id) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchAllTweets = async () => {
      try {
        let res;
        if (!follow) {
          res = await axios.get("http://localhost:4001/tweets");
        } else {
          res = await axios.post("http://localhost:4001/followedTweets", {
            uid: state.id,
          });
        }
        setTweets(res.data);
        // console.log(res.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchAllTweets();
  }, [follow]);

  const handleFollow = () => {
    setFollow((follow) => !follow);
  };

  return (
    <MainLayout>
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
                key={tweet.id}
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
    </MainLayout>
  );
}
