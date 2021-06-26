import React from "react";
import ReactDOM from "react-dom";
import { logIn, logOut, signUp } from "./actions/session_actions";
import Root from "./frontend/components/root";
import configureStore from "./store/store";
// import { logIn, logOut, signUp } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // TESTING
    // const test = <div>This is the DOM</div>;
    window.signUp = signUp;
    window.logIn = logIn;
    window.logOut = logOut;
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});