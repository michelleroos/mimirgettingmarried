import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Location from "./Location/Location";
import LoginFormContainer from "./Session/LoginFormContainer";
// import NavbarContainer from "./Navbar/NavbarContainer";
import Navbar from "./Navbar/Navbar";
import RSVP from "./RSVP/Rsvp";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./UploadForm/UploadForm";
import Welcome from "./Welcome/Welcome";
// import WelcomeContainer from "./Welcome/WelcomeContainer";

export default function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="app" >

      <Navbar />
      <Route exact path="/" component={Welcome} />
      <ProtectedRoute path="/faq" component={Faq} />
      <ProtectedRoute path="/rsvp" component={RSVP} />
      <ProtectedRoute path="/schedule" component={Schedule} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Footer />
    </div >
  )
}
