import React from "react";
import ReactDOM from "react-dom";

import { logIn, logOut, signUp } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // TESTING
    const test = <div>This is the DOM</div>;
    window.signUp = signUp;
    window.logIn = logIn;
    window.logOut = logOut;

    ReactDOM.render(test, root);
});