"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
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

const HomePost = () => {
  const [audience, setAudience] = useState<string>("Everyone");

  const handleAudience = (e: any) => {
    setAudience(e.target.value);
  };

  return (
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
                <PhotoOutlinedIcon color="primary" sx={{ fontSize: "1.5em" }} />
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
  );
};

export default HomePost;
