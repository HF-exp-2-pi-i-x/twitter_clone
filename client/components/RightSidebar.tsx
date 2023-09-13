import { Box, InputAdornment, TextField } from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";

function RightSidebar() {
  return (
    <Box sx={{ position: "fixed", width: "341px" }}>
      <TextField
        fullWidth
        variant="standard"
        sx={{
          backgroundColor: "rgb(239, 243, 244)",
          p: 1,
          mt: 1,
          borderRadius: "50px",
        }}
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </Box>
  );
}

export default RightSidebar;
