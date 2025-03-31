import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShowHome = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <button onClick={handleShowHome} className="w3-bar-item w3-button" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <b>XAI Poker</b>
        </button>
        <div className="w3-right w3-hide-small">
        <a href="#Process" className="w3-bar-item w3-button">Process</a>
        <a href="#about" className="w3-bar-item w3-button">About</a>
        <a href="#contact" className="w3-bar-item w3-button">Contact</a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;