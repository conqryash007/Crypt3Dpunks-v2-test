import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// toastify css
import "react-toastify/dist/ReactToastify.css";
// You can also use <link> for styles

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Document fonts/AdobeFnt23.lst";
import "./Assets/Document fonts/desktop.ini";
import "./Assets/Document fonts/Thunder Bold.otf";
import "./Assets/Document fonts/Ubuntu-Bold.ttf";
import "./Assets/Document fonts/Ubuntu-Light.ttf";
import "./Assets/Document fonts/Ubuntu-Medium.ttf";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
