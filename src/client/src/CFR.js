import React, { useState, useEffect } from "react";
import pokerImage from './images/cfr.png'; // Adjust the import path as necessary
import cfrImage from './images/cfr.png'; // Adjust the import path as necessary
import viperImage from './images/cfr.png'; // Adjust the import path as necessary

const CFR = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const toggleModal = () => setModalVisible(!modalVisible);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    useEffect(() => {
        const slides = document.getElementsByClassName("mySlides");
        if (slides.length > 0) {
            const interval = setInterval(() => {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                setSlideIndex((prev) => {
                    const newIndex = (prev + 1) % slides.length;
                    slides[newIndex].style.display = "block";
                    return newIndex;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a href="#home" className="w3-bar-item w3-button"><b>XAI Poker</b></a>
                    <div className="w3-right w3-hide-small">
                        <a href="#Process" className="w3-bar-item w3-button">Process</a>
                        <a href="#about" className="w3-bar-item w3-button">About</a>
                        <a href="#contact" className="w3-bar-item w3-button">Contact</a>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: "1500px" }} id="home">
                <img className="w3-image" src={pokerImage} alt="Poker AI" style={{ width: '1500px', height: 'auto', maxHeight: '600px' }} />
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min"><b>XAI Poker</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
            </header>

            {/* Page content */}
            <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
                {/* Project Section */}
                <div className="w3-container w3-padding-32" id="Process">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Process</h3>
                    <div className="w3-row-padding">
                        {/* Add your project images here */}
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">CFR Agent</div>
                                <img src={cfrImage} alt="CFR Agent" style={{ width: "100%" }} />
                            </div>
                        </div>
                        {/* Repeat for other Process */}
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">Training Process</div>
                                <img src={pokerImage} alt="Training Process" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">VIPER Explainability</div>
                                <img src={viperImage} alt="VIPER Explainability" style={{ width: '400px', height: 'auto', maxHeight: '600px', maxWidth: '600px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CFR;