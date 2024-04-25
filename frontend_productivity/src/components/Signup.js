// Signup.js
// Users assign their email and password
// Needs to check if account already exists on database

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig.js';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      // Check for existing account
      const response = await axios.get(`${API_BASE_URL}users/exists?email=${formData.email}`);
      if (response.data.exists) {
        setErrorMessage('Email already exists. Please choose another.');
        return;
      }

      // Create user
      const createUserResponse = await axios.post(`${API_BASE_URL}users`, formData);
      if (createUserResponse.data.success) {
        // Handle successful signup (e.g., redirect)
        console.log('Signup successful!'); // Replace with your logic
      } else {
        setErrorMessage(createUserResponse.data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Sign up</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center mt-3">
          <input
            type="text"
            className="mb-3"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="mb-3"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            className="mb-3"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="mb-3"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Make account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;