import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UploadForm from '../UploadForm/UploadForm';
import { Button } from './Button';
// import { MenuItems } from './MenuItems';

export default function Navbar({ logOut }) {

  const [clicked, setClicked] = useState(false);
  const currentUserId = useSelector((state) => state.session.id);
  const MenuItems = ['Rsvp', 'Schedule', 'Faq']

  const handleClick = () => {
    setClicked(!clicked);
  }

  const logOutBtn = (
    <ul className="nav-session">
      <li className="nav-links-mobile"><Link to="/" onClick={logOut}>Log out</Link></li>
      {/* <li className="nav-links-mobile"><Link to="/" onClick={dispatch(logOut())}>Log out</Link></li> */}
    </ul>
  )

  if (currentUserId) {
    return (
      <div id="navbar-container">
        {/* <UploadForm /> */}

        <div id="nav-logo">
          <Link to="/">
            <p id="logo">A & M</p>
            <i className="fas fa-heart"></i>
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li className="nav-links" key={index}>
                <Link to={item.toLowerCase()}>{item}</Link>
              </li>
            )
          })}
          {clicked ? <li className="nav-links"><Link to="/" onClick={logOut}>Log out</Link></li> : <></>}
        </ul>

        {clicked ? <></> : logOutBtn}

        {/* <Button className="nav-links-mobile" onClick={logOut}>Log out</Button> */}
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