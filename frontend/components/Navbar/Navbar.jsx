import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

export default function Navbar ({ currentUser, logOut }) {
    
    const loggedOut = () => (
        <nav className="navbar">
            <ul>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </nav>
    );

    const loggedIn = () => (
        // <nav className="navbar">
        //     <ul>
        //         <li><Link to="/">Welcome</Link></li>
        //         <li><Link to="/rsvp">RSVP</Link></li>
        //         <li><Link to="/guests">Guests</Link></li>
        //         <li><Link to="/location">Location</Link></li>
        //         <li><Link to="/schedule">Schedule</Link></li>
        //         <li><Link to="/faq">FAQ</Link></li>
        //         <li><Link to="/account">Account</Link></li>
        //         <button className="header-button" onClick={logOut}>Log Out</button>
        //     </ul>
        // </nav>
        <nav className="navbar">
            <ul>
                {MenuItems.map((item, index) => {
                    return(
                        <li className={item.cName} key={index}>
                            <Link to={item.title.toLowerCase()}>{item.title}</Link>
                        </li>
                    )
                })}
                <button className="header-button" onClick={logOut}>Log Out</button>
            </ul>
        </nav>
    );

    return currentUser ? loggedIn() : loggedOut();
};
