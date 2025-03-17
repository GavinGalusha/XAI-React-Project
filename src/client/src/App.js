import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import CFR from "./CFR";
import Demo from "./Demo"; // Import the Demo component
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
  }, []);

  const handleShowGraph = () => {
    setShowGraph(!showGraph);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home handleShowCFR={handleShowGraph} />} /> {/* Default route */}
          <Route path="/cfr" element={<CFR />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;