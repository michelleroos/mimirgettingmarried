import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import LoginFormContainer from "./Session/LoginFormContainer";
import Navbar from "./Navbar/Navbar";
import RSVP from "./RSVP/Rsvp";
import Schedule from "./Schedule/Schedule";
import UploadForm from "./UploadForm/UploadForm";
import WeddingParty from "./WeddingParty/WeddingParty";
import Welcome from "./Welcome/Welcome";

export default function App() {

  return (
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/faq" component={Faq} />
      <Route path="/rsvp" component={RSVP} />
      <Route path="/weddingparty" component={WeddingParty} />
      <Route path="/schedule" component={Schedule} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Footer />
    </div>
  );
}
