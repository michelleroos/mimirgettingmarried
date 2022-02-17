import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UploadForm from '../UploadForm/UploadForm';

export default function Navbar({ logOut }) {

  const [clicked, setClicked] = useState(false);
  const currentUserId = useSelector((state) => state.session.id);
  const MenuItems = ['Rsvp', 'Schedule', 'Faq']

  const handleClick = () => {
    setClicked(!clicked);
  }

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

        <div id="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul id={clicked ? 'menu active' : 'menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li id="menu-links" key={index}>
                <Link to={item.toLowerCase()}>{item}</Link>
              </li>
            )
          })}
          {clicked ? <li id="menu-links"><Link to="/" onClick={logOut}>Log out</Link></li> : null}
        </ul>

        {clicked ? null : <div id="log-out"><Link to="/" onClick={logOut}>Log out</Link></div>}
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