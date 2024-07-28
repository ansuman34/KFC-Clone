import React, { useState } from 'react';
import './sign_in.css';
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
        <img src="https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_02-23-2024-12-20/images/KFC_logo.svg" width="50 px" alt="KFC logo"/>
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