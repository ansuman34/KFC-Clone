import React, { useState } from 'react';
import './sign_in.css';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState(() => {
    const storedPhoneNumbers = localStorage.getItem('phoneNumbers');
    return storedPhoneNumbers ? JSON.parse(storedPhoneNumbers) : [];
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D+/g, ''); // remove non-digit characters
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (phoneNumber.length !== 10) {
        setError('Please enter a valid 10-digit phone number');
        return;
      }
      const existingPhoneNumber = phoneNumbers.find((number) => number === phoneNumber);
      if (existingPhoneNumber) {
        navigate('/', { replace: true });
      } else {
        const newPhoneNumbers = [...phoneNumbers, phoneNumber];
        localStorage.setItem('phoneNumbers', JSON.stringify(newPhoneNumbers));
        setPhoneNumbers(newPhoneNumbers);
        setPhoneNumber('');
        navigate('/otp', { replace: true });
      }
    } catch (error) {
      setError(error.message);
    }
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
          maxLength={10} // restrict input to 10 characters
        />
        <button onClick={handleSubmit}>Send Me a Code</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>or</p>
        <Link to='/'>
          <button className="guest">Skip, Continue As Guest</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;