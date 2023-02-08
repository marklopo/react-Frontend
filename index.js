import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import "./index.css";
import Sidenavbar from "./Sidenavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/h" exact element={<Home />}></Route>
          <Route path="" exact element={<Home />}></Route>
          <Route path="/c" exact element={<Contact />}></Route>
          <Route path="/g" exact element={<Gallery />}></Route>
          <Route path="/a" exact element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
