import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={customHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
