import React, {useState} from 'react';
import './deals.css';
import Header from '../../components/header';
import Offer from '../../components/offers';
import Footer from '../../components/footer';
import db2 from './db2.json';

 function Deals() {

  const offers = db2.deals;

  const Item_Per_Page = 7;
  const [visibleOffers,setVisibalOffers] = useState(Item_Per_Page);
  const loadMoreOffers = () => {
    setVisibalOffers(pervVisibleOffers => pervVisibleOffers + Item_Per_Page);
  };

  return (
    <div className="App">
      <Header />
      <div className="offer-header"><p>OFFERS</p></div>
      <img className="stripe-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt=""/>
      <div className='offers-texts'>
        <div className="np"><p>NATIONAL OFFERS</p></div>
        <div className='signIn'><a href='http://localhost:3000/signin'>Sign In to see exclusive offers & deals</a></div>
      </div>
      <div className="offers">
          <div className='offers-deals-card'>
            <h3 className='offer-store-text'>SELECT A KFC TO SEE LOCAL OFFERS</h3>
            <div className='offer-store-btn'>
              <button className="offer-btn">Find a KFC</button>
            </div>
          </div>
          <div className="login-card">
            <h3 className="offer-login-text">SIGN IN TO SEE EXCLUSIVE OFFERS & DEALS</h3>
            <div class="offer-login-btn-container">
              <a href="http://localhost:3000/signin"><button class="login-btn">Login</button></a>
            </div>
          </div>
          {offers.slice(0,visibleOffers).map((offer, index) => (
            <Offer key={index} {...offer} />
          ))}
      </div>
      {visibleOffers < offers.length && (
        <div className='load-more'>
          <button onClick={loadMoreOffers}>Load More</button>
          <p>Viewed {visibleOffers+2} of {offers.length}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Deals;