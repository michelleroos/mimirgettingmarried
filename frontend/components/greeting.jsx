import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logOut }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up</Link>
        </nav>
    );
    const personalGreeting = () => (
        <nav>
            <ul className="navbar">
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/RSVP">RSVP</Link></li>
                <li><Link to="/location">Location & travel</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/guests">Guests</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/account">Account</Link></li>
            <button className="header-button" onClick={logOut}>Log Out</button>
            </ul>
        </nav>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
