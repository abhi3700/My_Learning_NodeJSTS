import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import App from "./screens/App";
import "./style.css";

function AppMain() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/App/" exact component={App} />
    </Router>
  );
}

export default AppMain;
