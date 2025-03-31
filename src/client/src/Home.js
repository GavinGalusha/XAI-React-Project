import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import pokerImage from './images/HomeScreen.jpg';
import pokerImage2 from './images/poker.png';
import cfrImage from './images/cfr.png';
import gavin from './images/gavin.jpeg'
import viperImage from './images/viper.png'
import Navbar from './Navbar';
import David from './images/David.JPG'
import RJ from './images/Rj.png'
import evan from './images/evan.png'

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const toggleModal = () => setModalVisible(!modalVisible);
  const toggleMenu = () => setMenuVisible(!menuVisible);


  const navigate = useNavigate(); // Initialize useHistory

  const handleShowCFR = () => {
    navigate('/cfr'); // Navigate to the CFR route
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send form data to the backend
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, comment }),
    });

    // Log the response for debugging
    const responseData = await response.text(); // Get the response text
    console.log('Response from server:', responseData); // Log the response

    if (response.ok) {
        setMessage('Message sent successfully!');
        // Clear the form fields
        setName('');
        setEmail('');
        setSubject('');
        setComment('');
    } else {
        setMessage('Error sending message. Please try again.');
    }
};





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
      {/*
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
*/}
      {/* Header */}
      <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: "1500px" }} id="home">
      <img className="w3-image" src={pokerImage} alt="Poker AI" style={{ width: '1500px', height: 'auto', maxHeight: '600px'}}/> 
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
            {/* CFR Agent */}
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">CFR Agent</div>
                <button 
                  onClick={handleShowCFR} 
                  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src={cfrImage} alt="CFR Agent" style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top" }} />
                </button>
              </div>
            </div>

            {/* Training Process */}
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Training Process</div>
                <img src={pokerImage} alt="Training Process" style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>

            {/* VIPER Explainability */}
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">VIPER Explainability</div>
                <img src={viperImage} alt="VIPER Explainability" style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="w3-container w3-padding-32" id="Demo">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Demo</h3>
          <p>This section will later implement a poker GUI where a poker bot plays and explains its moves.</p>
          <div className="poker-gui-placeholder">
            {/* Poker GUI will be implemented here */}
          </div>
        </div>

        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
          <p>Contributers</p>
        </div>

        {/* Team Section */}
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={gavin} alt="Gavin Galusha" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }} />
            <h3>Gavin Galusha</h3>
            <p className="w3-opacity"></p>
            <p></p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>

          <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={RJ} alt="Rouqin Ji" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }} />
            <h3>Rouqin Ji</h3>
            <p className="w3-opacity"></p>
            <p></p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>

          <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={David} alt="David Webster" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }} />
            <h3>David Webster</h3>
            <p className="w3-opacity"></p>
            <p></p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>

          <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={evan} alt="Evan Nyhus" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "top" }} />
            <h3>Evan Nyhus</h3>
            <p className="w3-opacity"></p>
            <p></p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
          <p>Let's get in touch!</p>
          <form onSubmit={handleSubmit}>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="w3-input w3-section w3-border"
          placeholder="Comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
      {message && <p>{message}</p>} {/* Display success or error message */}
    </div>

        {/* Image of location/map */}
        <div className="w3-container">
          <img src={pokerImage2} className="w3-image" style={{ width: "100%" }} />
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-center w3-black w3-padding-16">
       
      </footer>
    </div>
  );
};

export default Home;
