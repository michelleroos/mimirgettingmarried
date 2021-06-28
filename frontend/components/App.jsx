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
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <h1>mimir getting married</h1>
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;