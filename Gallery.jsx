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
import "./Gallery.css";
import Slider from "./Slider";

function Gallery() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box height={10} padding={6}>
            <h2>Gallery</h2>
          </Box>
          <div id="slider">
            <Slider />
          </div>
        </Box>
      </Box>

      <footer>
        <p>© 2023 Company Name</p>
      </footer>
    </>
  );
}
export default Gallery;
