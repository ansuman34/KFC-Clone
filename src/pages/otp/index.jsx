import React, { useState } from 'react';
import './otp.css';
import { Link } from "react-router-dom";

const Otp = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic
  };

  return (
    <div className="container">
      <h1>KFC</h1>
      <h2>We Just Texted You</h2>
      <p>Please enter the verification code we just sent to <strong>91**********</strong></p>
      <a href="#">Different Number?</a>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={code}
          onChange={handleChange}
          maxLength="4"
          className="otp-input"
        />
        <p>Your code will expire in: <span>0:172 sec</span></p>
        <a href="#">Resend the Code</a>
        <Link to='/'><button type="submit">Submit</button></Link>
      </form>
    </div>
  );
};

export default Otp;