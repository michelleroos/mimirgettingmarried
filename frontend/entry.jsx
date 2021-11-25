import React from "react";
import ReactDOM from "react-dom";
import { sendRSVP } from "./actions/rsvp_actions";
import { logIn, logOut, signUp } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store";
require("babel-core/register");
require("babel-polyfill");
// import { logIn, logOut, signUp } from "./util/session_api_util";
import { getUser } from "./actions/user_actions"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // if (window.currentUser) {
  //     const preloadedState = { session: { currentUser: window.currentUser } };
  //     store = configureStore(preloadedState);
  //     delete window.currentUser;
  // } else {
  //     store = configureStore();
  // }

  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  // TESTING
  // const test = <div>This is the DOM</div>;
  // window.signUp = signUp;
  // window.logIn = logIn;
  // window.logOut = logOut;
  window.sendRSVP = sendRSVP;
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.getUser = getUser;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});