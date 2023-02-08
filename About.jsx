import Box from "@mui/material/Box";
import React from "react";
import Chart from "./Chart";
import Sidenavbar from "./Sidenavbar";
import IconButton from "@mui/material/IconButton";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import "./About.css";

import ListItemIcon from "@mui/material/ListItemIcon";

import { Mail, Phone } from "@mui/icons-material";

function About() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box height={10} padding={6}>
            <h2>About</h2>
          </Box>

          <Typography paragraph>
            <div id="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur L orem ipsum dolor sit
                amet consectetur adipisicing elit. Harum, molestiae officiis
                placeat ipsam, delectus aliquid omnis Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Distinctio praesentium quisquam
                eos! Porro, ex illo natus corrupti nemo laboriosam deserunt modi
                repudiandae illum omnis nostrum voluptate in asperiores dolorem
                vero. accusantium nam voluptas:
              </p>
              <p>
                Lorem ipsum dolor sit amet,
                <i> consectetur L orem ipsum dolor</i> sit amet consectetur
                adipisicing elit. Harum, molestiae officiis placeat ipsam,
                delectus aliquid omnis accusantium Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Cumque ipsum, architecto magnam
                illum ex laborum quaerat dolorem dolorum nobis nulla libero
                sapiente aspernatur. Saepe aliquid dicta nihil voluptatem, ipsum
                non. nam voluptas:
                <strong>Lorem ipsum</strong> dolor sit amet consectetur
                adipisicing elit. Natus earum quia doloribus quasi, consequuntur
                aliquam perspiciatis nostrum facere, sunt accusantium est
                officiis sed a, corporis expedita!
                <del> Dolore nulla soluta deleniti.</del>
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
export default About;
