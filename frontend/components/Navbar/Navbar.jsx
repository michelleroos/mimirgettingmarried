import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UploadForm from '../UploadForm/UploadForm';

export default function Navbar({ logOut }) {

  const currentUserId = useSelector((state) => state.session.id);
  const MenuItems = ['Rsvp', 'Schedule', 'Faq']
  const [sidebar, setSidebar] = useState(false);

  if (currentUserId) {
    return (
      <div id="navbar-container">
        {/* <UploadForm /> */}

        <div id="logo">
          <Link to="/">
            <p id="logo">A & M</p>
            <i className="fas fa-heart"></i>
          </Link>
        </div>

        <div id="menu-icon" onClick={() => setSidebar(!sidebar)}>
          <i className={sidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={sidebar ? 'menu active' : 'menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li id="menu-links" key={index}>
                <Link to={item.toLowerCase()}>{item}</Link>
              </li>
            )
          })}
          {sidebar ? <li id="menu-links"><Link to="/" onClick={logOut}>Log out</Link></li> : null}
        </ul>

        {sidebar ? null : <div id="log-out"><Link to="/" onClick={logOut}>Log out</Link></div>}
      </div>
    )
  } else {
    return (
      <div id="logged-out-nav">
        <p>JULY 23 2022 - PRAGUE</p>
      </div>
    )
  }

};