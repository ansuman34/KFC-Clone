import React from "react";
import img from '../../assets/img/CAT289.jpg'
import './card.css'
import { Link} from 'react-router-dom';

const card = () => {
  return (
    <div className="card-Wrapper">
      <Link to="/deals">
        <div className="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">
                INTERNATIONAL BURGER FEST 
                </p>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default card;
