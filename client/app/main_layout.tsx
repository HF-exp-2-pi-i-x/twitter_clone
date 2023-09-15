import LeftSideBar from "@/components/LeftSideBar";
import RightSidebar from "@/components/RightSidebar";
import { Box, Divider, Grid } from "@mui/material";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Box sx={{ width: "80%", mx: " auto" }}>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item id="left-sidebar" xs={3}>
            <LeftSideBar />
          </Grid>
          <Grid item id="content" xs={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" />
            {children}
            <Divider orientation="vertical" />
          </Grid>
          <Grid item id="right-sidebar" xs={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
