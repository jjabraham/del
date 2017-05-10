import React from 'react';
import logo from '../static/logo.png';
import './header.css';

const Header = () => (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="name">
        Project Name
      </div>
    </div>
);

export default Header;
