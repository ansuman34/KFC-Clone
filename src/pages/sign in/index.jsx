import React, { useState } from 'react';
import './sign in.css';
import { Link } from "react-router-dom";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Sign In / Sign up</h2>
        <h1>KFC</h1>
        <p>LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</p>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handleInputChange}
        />
        <Link to='/otp'>
          <button>Send Me a Code</button>
        </Link>
        <p>or</p>
        <Link to='/'>
            <button className="guest">Skip, Continue As Guest</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn ;