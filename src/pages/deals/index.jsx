import React, {useState} from 'react';
import './deals.css';
import Header from '../../components/header';
import Offer from '../../components/offers';
import Footer from '../../components/footer';

function App() {
  const offers = [
    {
      title: 'Free Zinger Worth ₹209',
      description: 'Free Chicken Zinger on a cart value of ₹499 or above on first order.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
    {
      title: '2PC Hot & Crispy @ ₹99',
      description: 'Add 2 Pc Hot n Crispy Chicken at just ₹99 on min cart value of ₹499 or more.',
      buttonText: 'View Details',
      buttonApply: 'Apply Offer',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=48.85',
    },
  ];
  const Item_Per_Page = 7;
  const [visibleOffers,setVisibalOffers] = useState(Item_Per_Page);
  const loadMoreOffers = () => {
    setVisibalOffers(pervVisibleOffers => pervVisibleOffers + Item_Per_Page);
  };

  return (
    <div className="App">
      {<Header />}
      <div className="offer-header"><h1>OFFERS</h1></div>
      <img className="stripe-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt=""/>
      <div className='offers-texts'>
        <div className="np"><p>NATIONAL OFFERS</p></div>
        <div className='signIn'><a href='signPage'>Sign In to see exclusive offers & deals</a></div>
      </div>
      <div className="offers">
          <div className='offers-deals-card'>
            <h3 className='offer-store-text'>Select a kfc to see local offers</h3>
            <div className='offer-store-btn'>
              <button className="offer-btn">Find a KFC</button>
            </div>
          </div>
          <div className="login-card">
            <h3 className="offer-login-text">Sign in to see more exclusive offers & deals</h3>
            <div class="offer-login-btn-container">
              <button class="login-btn">Login</button>
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

export default App;