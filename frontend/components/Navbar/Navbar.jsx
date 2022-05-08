import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UploadForm from "../UploadForm/UploadForm";

export default function Navbar() {
  const currentUserId = useSelector((state) => state.session.id);
  const dispatch = useDispatch();
  const MenuItems = ["RSVP", "Details", "Faq"];
  const [sidebar, setSidebar] = useState(false);

  return (
    <div id="navbar-container">
      {/* <UploadForm /> */}

      <div id="logo" onClick={() => setSidebar(false)}>
        <Link to="/" id="logo-web">
          <p id="logo">A & M</p>
          <i className="fas fa-heart"></i>
        </Link>
      </div>

      <div id="menu-icon" onClick={() => setSidebar(!sidebar)}>
        <i className={sidebar ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={sidebar ? "menu active" : "menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li
              className="menu-links"
              key={index}
              onClick={() => setSidebar(false)}
            >
              <Link to={item.toLowerCase()}>{item}</Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
}
