import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UploadForm from '../UploadForm/UploadForm';

export default function Navbar() {

  const currentUserId = useSelector((state) => state.session.id);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const MenuItems = ['Rsvp', 'Schedule', 'Faq']
  const [sidebar, setSidebar] = useState(false);

  if (currentUserId) {
    return (
      <div id="navbar-container">
        {/* <UploadForm /> */}

        <div id="logo" onClick={() => setSidebar(false)}>
          <Link to="/" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            {hover ? <p id="logo">A & M</p> : <i className="fas fa-heart"></i>}
          </Link>
        </div>

        <div id="menu-icon" onClick={() => setSidebar(!sidebar)}>
          <i className={sidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={sidebar ? 'menu active' : 'menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li id="menu-links" key={index} onClick={() => setSidebar(false)}>
                <Link to={item.toLowerCase()}>{item}</Link>
              </li>
            )
          })}
          {sidebar ? <li id="menu-links"><Link to="/" onClick={() => dispatch(logOut())}>Log out</Link></li> : null}
        </ul>

        {sidebar ? null : <div id="log-out"><Link to="/" onClick={() => dispatch(logOut())}>Log out</Link></div>}
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