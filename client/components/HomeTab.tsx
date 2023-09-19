import { Box, Tab, Tabs, Typography } from "@mui/material";

const HomeTab = ({
  follow,
  handleFollow,
}: {
  follow: boolean;
  handleFollow: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
}) => {
  return (
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
  );
};

export default HomeTab;
