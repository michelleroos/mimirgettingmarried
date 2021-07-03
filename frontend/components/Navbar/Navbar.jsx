import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MenuItems } from './MenuItems';

export default function Navbar ({ currentUser, logOut }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const loggedOut = () => (
            <ul>
                <li className="nav-links"><Link to="/login">Log in</Link></li>
                <li className="nav-links"><Link to="/signup">Sign up</Link></li>
            </ul>
    );

    const loggedIn = () => (
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
                <li className="nav-links"><Link to="/" onClick={logOut}>Log out</Link></li>
            </ul>
            {/* <Button className="nav-links-mobile" onClick={logOut}>Log out</Button> */}
        </>
    );

    return (
        <nav className="navbarItems">
            <div className="nav-logo">
                <Link to="/">
                    <p className="text">A&M</p>
                    <i class="fas fa-heart"></i>
                </Link>
            </div>
            {currentUser ? loggedIn() : loggedOut()}
        </nav>
    )
};