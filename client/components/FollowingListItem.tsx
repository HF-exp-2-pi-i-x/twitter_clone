import { Avatar, Box, Button, ListItemButton, Typography } from "@mui/material";

const FollowingListItem = (props: { username: string; id: string }) => {
  return (
    <ListItemButton
      sx={{ p: 1, width: "100%", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Avatar alt="K" />
        <Box>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "rgb(15, 20, 25)",
            }}
          >
            {props.username}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "rgb(83, 100, 113)",
            }}
          >
            {props.id}
          </Typography>
        </Box>
      </Box>
      <Button
        size="small"
        sx={{
          mt: 1,
          borderRadius: "30px",
          backgroundColor: "rgb(15, 20, 25)",
          ":hover": {
            backgroundColor: "rgb(15, 20, 25)",
          },
        }}
        variant="contained"
      >
        Follow
      </Button>
    </ListItemButton>
  );
};

export default FollowingListItem;
