"use client";

import { Box, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import TweetBox from "@/components/Tweetbox";
import HomePost from "@/components/HomePost";
import MainLayout from "./main_layout";

import { tweetType } from "@/types/types";
import HomeTab from "@/components/HomeTab";

export default function Home() {
  const [tweets, setTweets] = useState<tweetType[]>([]);
  const [follow, setFollow] = useState<boolean>(false);

  const router = useRouter();

  const { state } = useContext(AuthContext);

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
        <HomeTab follow={follow} handleFollow={handleFollow} />
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
