import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <Link to="/" className="w3-bar-item w3-button"><b>XAI Poker</b></Link>
        <div className="w3-right w3-hide-small">
          <Link to="/#Process" className="w3-bar-item w3-button">Process</Link>
          <Link to="/#Demo" className="w3-bar-item w3-button">Demo</Link>
          <Link to="/#about" className="w3-bar-item w3-button">About</Link>
          <Link to="/#contact" className="w3-bar-item w3-button">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;