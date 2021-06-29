import React from "react";
import GreetingContainer from "./greetingContainer";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import Splash from "./splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import RSVPContainer from "./rsvp_container";

const App = () => (
    <div id="app">
        <header>
            <GreetingContainer />
        </header>
        <Route exact path="/" component={Splash} />
        <ProtectedRoute path="/rsvp" component={RSVPContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;