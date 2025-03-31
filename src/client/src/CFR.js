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
            

            {/* Header */}
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: "1500px" }} id="home">
                <img className="w3-image" src={pokerImage} alt="Poker AI" style={{ width: '1500px', height: 'auto', maxHeight: '600px' }} />
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min"><b>CounterFactual Regret Minimization</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
            </header>

            {/* Page content */}
            <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
                {/* Project Section */}
                <div className="w3-container w3-padding-32" id="Process">
  <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Process</h3>
  <p style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '20px', color: 'white' }}>
    Counterfactual Regret Minimization (CFR) is a powerful algorithm used in game theory and artificial intelligence to compute optimal strategies in imperfect information games. The process can be broken down into the following steps:
  </p>
  <ul style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '10px', color: 'white' }}>
    <li><strong>Initialization:</strong> The algorithm begins by initializing the regret values for each action in the game. These values represent the difference between the actual payoff and the best possible payoff had a different action been chosen.</li>
    <li><strong>Simulating the Game:</strong> The game is simulated multiple times, allowing agents to explore different strategies and outcomes. During each simulation, players make decisions based on their current strategies.</li>
    <li><strong>Regret Calculation:</strong> After each round of the game, the algorithm calculates the regret values for each action taken. This involves comparing the actual outcomes with the potential outcomes had different actions been chosen.</li>
    <li><strong>Strategy Update:</strong> The regret values are then used to update the players' strategies. Actions with higher regret values are more likely to be chosen in future iterations, while actions with lower regret values are less likely to be selected.</li>
    <li><strong>Convergence:</strong> Over time, as the simulations continue, the regret values converge, leading to strategies that approach Nash equilibria. At this point, no player has an incentive to deviate from their strategy, as doing so would not yield a better outcome.</li>
    <li><strong>Application:</strong> CFR has been successfully applied in various domains, including poker, where it helps AI agents make decisions that are nearly optimal against human opponents.</li>
  </ul>
</div>


</div>
</div>
    );
};

export default CFR;