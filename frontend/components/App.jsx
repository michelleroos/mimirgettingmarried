import React from "react";
import NavbarContainer from "./Navbar/NavbarContainer";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from "./Session/LoginFormContainer";
import SignupFormContainer from "./Session/SignupFormContainer";
import Splash from "./Splash/Splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import RSVPContainer from "./RSVP/RsvpContainer";
import Account from "./Account/Account";
import Faq from "./FAQ/Faq";
import Guests from "./Guests/Guests";
import Location from "./Location/Location";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./Account/UploadForm";

const App = () => (
    <div id="app">
        <header>
            <NavbarContainer />
        </header>
        <Route exact path="/" component={Splash} />
        <ProtectedRoute path="/account" component={UploadForm} />
        {/* <ProtectedRoute path="/account" component={Account} /> */}
        <ProtectedRoute path="/faq" component={Faq} />
        <ProtectedRoute path="/guests" component={Guests} />
        <ProtectedRoute path="/location" component={Location} />
        <ProtectedRoute path="/rsvp" component={RSVPContainer} />
        <ProtectedRoute path="/schedule" component={Schedule} />
        <ProtectedRoute path="/welcome" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;