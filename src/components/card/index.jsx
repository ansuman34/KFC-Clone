import React from "react";
import img from '../../assets/img/CAT289.jpg'
import './card.css'

const card = () => {
  return (
    <div className="card-Wrapper">
      <a href="#">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
              <p class="card-text">
              INTERNATIONAL BURGER FEST 
              </p>
            
          </div>
        </div>
      </a>
    </div>
  );
};

export default card;
