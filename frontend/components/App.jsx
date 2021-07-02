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
import Splash from "./Splash/Splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import RSVPContainer from "./RSVP/RsvpContainer";
import Account from "./Account/Account";
import Faq from "./FAQ/Faq";
import Guests from "./Guests/Guests";
import Location from "./Location/Location";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./Account/UploadForm";
import ImageGrid from "./Guests/ImageGrid";
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
            {/* <ProtectedRoute path="/account" component={Account} /> */ }
            <ProtectedRoute path="/faq" component={Faq} />
            
            {/* <ProtectedRoute path="/guests" component={ImageGrid} /> */}
            {/* <ProtectedRoute path="/guests">
                <ImageGrid setSelectedImg={setSelectedImg}/>
            </ProtectedRoute> */}
            <Route path="/guests">
                <ImageGrid setSelectedImg={setSelectedImg}/>
            </Route>

            {/* <ProtectedRoute path="/guests" component={Modal} /> */}
            <Route path="/guests">
                { selectedImg && 
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            </Route>
            {/* <ProtectedRoute path="/guests">
                <Modal setSelectedImg={setSelectedImg}/>
            </ProtectedRoute> */}
            {/* <ProtectedRoute path="/guests" component={Guests} /> */ }

            <ProtectedRoute path="/location" component={Location} />
            <ProtectedRoute path="/rsvp" component={RSVPContainer} />
            <ProtectedRoute path="/schedule" component={Schedule} />
            <ProtectedRoute path="/welcome" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div >
    )
}
