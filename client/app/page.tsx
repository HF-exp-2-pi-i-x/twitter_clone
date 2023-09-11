"use client";

import {
  Box,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Home() {
  // type to be added
  const [tweets, setTweets] = useState([]);
  const [follow, setFollow] = useState<boolean>(false);

  const handleChange = () => {
    setFollow((follow) => !follow);
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
        <Tabs value={follow} variant="fullWidth" onChange={handleChange}>
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
              alignItems: "center",
            }}
          >
            <AccountCircleIcon fontSize="large" sx={{ color: "gray" }} />
          </Grid>
          <Grid item xs>
            <TextField
              placeholder="What is happening?!"
              multiline
              minRows={1}
              maxRows={4}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
