import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Styles/index.css";
import "./Styles/homepage.css";
import "./Styles/story.css";
import "./Styles/puzzle.css";
import "./Styles/controlPanel.css";

ReactDOM.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
