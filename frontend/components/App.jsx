import React, { useState } from "react";
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
import Splash from "./Welcome/Welcome";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import RSVPContainer from "./RSVP/RsvpContainer";
import Account from "./Account/Account";
import Faq from "./FAQ/Faq";
import Guests from "./Guests/Guests";
import Location from "./Location/Location";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./Account/ProfileUploadForm";
import ImageGrid from "./Guests/GuestImageGrid";
import Modal from "./Guests/Modal";

export default function App() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div id="app" >
            <header>
                <NavbarContainer />
            </header>
            <Route exact path="/" component={Splash} />
            <ProtectedRoute path="/account" component={UploadForm} />
            <ProtectedRoute path="/faq" component={Faq} />
            <Route path="/guests">
                <ImageGrid setSelectedImg={setSelectedImg}/>
            </Route>
            <Route path="/guests">
                { selectedImg && 
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            </Route>
            <ProtectedRoute path="/location" component={Location} />
            <ProtectedRoute path="/rsvp" component={RSVPContainer} />
            <ProtectedRoute path="/schedule" component={Schedule} />
            <ProtectedRoute path="/welcome" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div >
    )
}
