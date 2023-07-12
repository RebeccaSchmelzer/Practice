import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to Mentorship Platform</h1>
      <div className="homepage-content">
        <h2 className="homepage-subtitle">Get Started</h2>
        <p className="homepage-description">Choose an option:</p>
        <div className="homepage-buttons">
          <Link to="/signin">
            <button className="homepage-button">Sign In</button>
          </Link>
          <Link to="/create-profile">
            <button className="homepage-button">Create New Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
