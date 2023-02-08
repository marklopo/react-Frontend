import Box from "@mui/material/Box";
import React from "react";
import Sidenavbar from "./Sidenavbar";
import Typography from "@mui/material/Typography";
import "./Contact.css";

import ListItemIcon from "@mui/material/ListItemIcon";
import { Mail, Phone } from "@mui/icons-material";

function Contact() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box height={10} padding={6}>
            <h2>Contact</h2>
          </Box>

          <Typography paragraph>
            <div id="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur L orem ipsum dolor sit
                amet consectetur adipisicing elit. Harum, molestiae officiis
                placeat ipsam, delectus aliquid omnis accusantium nam voluptas:
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
              <p> delectus aliquid omnis</p>
            </div>
            <br />
            <div id="icons">
              <ListItemIcon>
                <Phone /> 12XXXXXXX
              </ListItemIcon>
              <br></br>
              <br></br>
              <ListItemIcon>
                <Mail /> .......@.......
              </ListItemIcon>
            </div>
          </Typography>

          <div id="mail-form">
            <fieldset>
              <legend>Your message</legend>
              <form id="fo">
                <label for="user">Name: </label>
                <br></br>
                <input id="user" type="text"></input>
                <br></br>
                <label for="email">E-mail: </label>
                <br></br>
                <input id="email" type="text"></input>
                <br></br>
                <p>
                  <label>Text:</label>
                </p>
                <textarea id="tarea" rows="10" cols="50"></textarea> <br></br>
                <input type="submit" value="Submit"></input>
              </form>
            </fieldset>
          </div>
        </Box>
      </Box>
      <footer>
        <p>© 2023 Company Name</p>
      </footer>
    </>
  );
}
export default Contact;
