import React from "react";
import logo from "../../../img/logo.svg";
import icon from "../../../img/logo2.svg";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      <nav role="navigation">
      </nav>
      <nav>
        <div className="nav-text">
          <a href="">Магазины</a>
          <a href="">Акции</a>
          <a href="">Доставка и оплата</a>
        </div>
        <div className="image">
          <img className="image-item" src={icon} alt="" />
        </div>
        <a href="https://yandex.uz/maps/215/dubna/house/prospekt_nauki_25/Z04YdwBhS0EDQFtsfXt3c3VjZw==/?ll=37.171276%2C56.762937&z=17.2">
          <img src={logo} alt="" />
          Москва, ул. Науки 25
        </a>
        <div className="icon">
          <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" />
          <img src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/head-portrait-2.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
