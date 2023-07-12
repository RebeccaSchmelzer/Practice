import React, { useState } from 'react';
import './MentorshipForm.css'; // Import the CSS file for styling

const MentorshipForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');
  const [goals, setGoals] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation and submission logic here

    // Reset form fields
    setName('');
    setEmail('');
    setInterests('');
    setGoals('');
    setAvailability('');
  };

  return (
    <div className="mentorship-form">
      <h2>Mentorship Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests:</label>
          <textarea
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="goals">Goals:</label>
          <textarea
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <textarea
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MentorshipForm;
