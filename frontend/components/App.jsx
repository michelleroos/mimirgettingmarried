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
import RSVPContainer from "./RSVP/_RsvpContainer";
import RSVP from "./RSVP/Rsvp";
import Faq from "./FAQ/Faq";
import Guests from "./Guests/Guests";
import Location from "./Location/Location";
import Footer from "./Footer/Footer";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./UploadForm/UploadForm";
import ImageGrid from "./Guests/GuestImageGrid";
import Modal from "./Guests/Modal";

export default function App() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="app" >

            {/* {!path && <NavbarContainer />} */}
            <NavbarContainer />

            <Route exact path="/" component={Welcome} />

            <ProtectedRoute path="/faq" component={Faq} />

            <Route path="/guests">
                <ImageGrid setSelectedImg={setSelectedImg} />
            </Route>

            <Route path="/guests">
                {selectedImg &&
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </Route>

            <ProtectedRoute path="/location" component={Location} />
            <ProtectedRoute path="/rsvp" component={RSVP} />
            <ProtectedRoute path="/schedule" component={Schedule} />

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <Footer />
        </div >
    )
}
