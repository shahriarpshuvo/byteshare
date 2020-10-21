import React from 'react';
import Logo from '../assets/img/logo.svg';
import { RiMailSendFill } from 'react-icons/ri';

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
        <a href="https://spshuvo.com" target="_black" className="button button--main" rel="noopener noreferrer">
          <RiMailSendFill />
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
