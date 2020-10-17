import React from 'react';
import Gif from '../assets/img/hero.gif';
import UploadArea from './UploadArea';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Quick Upload & <br /> Get Shareable Link.
        </h1>
        <UploadArea />
      </div>
      <div className="hero__right">
        <img src={Gif} alt="Animation Gif" className="hero__gif" />
      </div>
    </div>
  );
};

export default Home;
