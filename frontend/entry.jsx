import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const test = <div>This is the DOM</div>;
    ReactDOM.render(test, root);
});