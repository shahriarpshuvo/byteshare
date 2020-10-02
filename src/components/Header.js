import React from 'react';
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <img src={Logo} alt="byteShare Logo" />
            <h1>byteShare</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
