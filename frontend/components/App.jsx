import React, { useState } from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Faq from "./FAQ/Faq";
import Footer from "./Footer/Footer";
import Location from "./Location/Location";
import LoginFormContainer from "./Session/LoginFormContainer";
import NavbarContainer from "./Navbar/NavbarContainer";
import RSVP from "./RSVP/Rsvp";
import RSVPContainer from "./RSVP/_RsvpContainer";
import Schedule from "./Schedule/Schedule";
import SignupFormContainer from "./Session/SignupFormContainer";
import UploadForm from "./UploadForm/UploadForm";
import Welcome from "./Welcome/Welcome";

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
