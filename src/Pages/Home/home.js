import React from 'react';
import headerImage from './img30.png';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-image-container">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="header-text-container">
          <p className="header-title">Your Digital Guide to Blockchain Mystery</p>
          <p className="header-subtitle">Unlock the world of cryptos with BitWit.</p>
        </div>
        <div className="header-buttons">
          <button className="header-button">WHITE PAPER</button>
          <button className="header-button">EXPLORE BITWIT</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
