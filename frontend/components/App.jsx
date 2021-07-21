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
import Welcome from "./Welcome/Welcome";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import RSVPContainer from "./RSVP/RsvpContainer";
import Faq from "./FAQ/Faq";
import Guests from "./Guests/Guests";
import Location from "./Location/Location";
import Footer from "./Footer/Footer";
import Schedule from "./Schedule/Schedule";
import Account from "./Account/Account";
import UploadForm from "./UploadForm/UploadForm";
import ImageGrid from "./Guests/GuestImageGrid";
import Modal from "./Guests/Modal";

export default function App(ownProps) {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="app" >
            
            <NavbarContainer />

            <Route exact path="/" component={Welcome} />

            <ProtectedRoute path="/account" component={Account} />
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
            
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <Footer />
        </div >
    )
}
