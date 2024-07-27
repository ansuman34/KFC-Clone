import React from 'react';
import './offer.css';

function Offer({ title, description, buttonText, buttonApply, image }) {
  return (
    <div className="offer-card">
      <img src={image} alt={title} className="offer-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons">
        <div><a href='moreDetail'>{buttonText}</a></div>
        <button>{buttonApply}</button>
      </div>
    </div>
  );
}

export default Offer;