import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MenuItems } from './MenuItems';

export default function Navbar ({ currentUser, logOut, route }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const loggedOut = () => {
        if (!window.location.href.includes('login')) {
            return (
                <ul className="nav-menu-lo">
                    <li className="nav-links"><Link to="/login">Log in</Link></li>
                    <li className="nav-links"><Link to="/signup">Sign up</Link></li>
                </ul>
            )
        }
    };

    const loggedIn = () => {

        const logOutBtn = (
            <ul>
                <li className="nav-links-mobile"><Link to="/" onClick={logOut}>Log out</Link></li>
            </ul>
        )

        return (
            <>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className={item.cName} key={index}>
                                <Link to={item.title.toLowerCase()}>{item.title}</Link>
                            </li>
                        )
                    })}
                    {clicked ? <li className="nav-links"><Link to="/" onClick={logOut}>Log out</Link></li> : <></>}
                </ul>
                
                {clicked ? <></> : logOutBtn}

                {/* <Button className="nav-links-mobile" onClick={logOut}>Log out</Button> */}
            </>
        )
    };

    return (
        <nav className="navbarItems">
            <div className="nav-logo">
                <Link to="/">
                    <p className="logo">A & M</p>
                    <i className="fas fa-heart"></i>
                </Link>
            </div>
            {currentUser ? loggedIn() : loggedOut()}
        </nav>
    )
};