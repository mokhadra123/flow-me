import React from "react";
import "./NavbarStyle.css";
import { useStateContext } from "../../context/ContextProvider";
const NavbarComponent = () => {
  const { logout } = useStateContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <header>
        <h1>Flow Me</h1>

        <ul className="header-main-list">
          <li className="main-list">
            <a className="main-link" href="/">
              Home
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/">
              Profile
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/login" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavbarComponent;
