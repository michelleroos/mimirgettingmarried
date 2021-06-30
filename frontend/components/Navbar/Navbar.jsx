import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

export default function Navbar ({ currentUser, logOut }) {

    const [state, setState] = useState(false);
    
    const loggedOut = () => (
        <nav className="navbar">
            <ul>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </nav>
    );

    const loggedIn = () => (
        <nav className="navbar">
            <div className="menu-icon" onClick={() => setState(!state)}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
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
