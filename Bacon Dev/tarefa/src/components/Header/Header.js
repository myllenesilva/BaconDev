import React from 'react';
import './Header.css';
import logo from "./img/titulo.png"

function Header() {
  return (
    <div id="header">
      <img src={logo}></img>
    </div>
  );
}

export default Header;