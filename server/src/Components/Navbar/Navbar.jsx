// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  const Items = [
    { name: "Home", link: "/home" },
    { name: "Login", link: "/login" },
    { name: "map", link: "/map" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="nav">
      <div className="nav-logo">Farmers Welfare</div>
      <ul className="nav-menu">
        {Items.map((item, index) => (
          <li className="nav-items-list" key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
