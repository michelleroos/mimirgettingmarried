import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
require("babel-core/register");
require("babel-polyfill");

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});