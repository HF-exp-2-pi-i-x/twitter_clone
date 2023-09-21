import LeftSideBar from "@/components/LeftSideBar";
import RightSidebar from "@/components/RightSidebar";
import { Box, Divider, Grid, useMediaQuery, useTheme } from "@mui/material";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const median = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Grid container wrap="nowrap">
          <Grid item xs={1} lg={2} id="left-sidebar">
            <LeftSideBar />
          </Grid>
          <Grid item id="content" xs={true} sx={{ display: "flex" }}>
            <Divider orientation="vertical" />
            {children}
            <Divider orientation="vertical" />
          </Grid>
          {median && (
            <Grid item id="right-sidebar" xs={3}>
              <RightSidebar />
            </Grid>
          )}
        </Grid>
      </Box>
    </section>
  );
}
