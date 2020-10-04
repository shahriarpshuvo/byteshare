import React from 'react';
import Logo from '../assets/img/logo.svg';
import { BiCoffeeTogo } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="byteShare Logo" />
          <h1>byteShare</h1>
        </a>
      </div>
      <div className="header__c2a">
        <a href="/" className="button button--main">
          <BiCoffeeTogo />
          Buy Me Coffee
        </a>
      </div>
    </header>
  );
};

export default Header;
