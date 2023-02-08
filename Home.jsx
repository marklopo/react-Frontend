import React from "react";
import Chart from "./Chart";
import Sidenavbar from "./Sidenavbar";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { height } from "@mui/system";
import { yellow } from "@mui/material/colors";
import "./Home.css";
function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} textAlign="center">
          <Box height={10} padding={12} textAlign="center">
            <h1>Welcome to Our Website</h1>
          </Box>

          <Typography paragraph>
            <div id="home">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida
              </p>
              <p>
                rutrum quisque non tellus. <b>Convallis convallis</b> tellus id
                interdum velit laoreet id donec ultrices. Odio morbi quis
                commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras.
              </p>

              <p>
                rutrum quisque non tellus. Convallis convallis tellus id
                interdum velit laoreet id donec ultrices. Odio morbi quis
                commodo odio aenean sed <b>Convallis convallis</b> adipiscing.
                Amet nisl suscipit adipiscing bibendum est ultricies integer
                quis. Cursus euismod quis viverra nibh cras. Metus vulputate.
              </p>
            </div>
          </Typography>
        </Box>
      </Box>
      <footer>
        <p>© 2023 Company Name</p>
      </footer>
    </>
  );
}
export default Home;
