import React from 'react';
import './Header.css';
import logo from '../assests/TAMM LOGO.jpg';
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Site Logo" className="logo" />
      <h1>TAMM</h1>
    </header>
  );
};

export default Header;
