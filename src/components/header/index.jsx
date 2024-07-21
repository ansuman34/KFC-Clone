import React from 'react';
import logo from '../../assets/img/kfcLogo.492728c6.svg';
import logo2 from '../../assets/img/bucket_cart_icon.svg';
import './header.css';
const header = () => {
  return (
    <>
        <div className='header'>
            <div className="headerLocation">
                <div className="locationData">
                <i class="bi bi-geo-alt-fill color"></i>Allow location access for local store menu and promos
                </div>
                <button className='locationButton'>set location</button>
            </div>
            <hr />
            <div className="headerWrapper">
                <div className="navitems-left">
                    <div className="logo">
                        <img src={logo} alt="kfc" />
                    </div>
                    <div className="auth-links">
                        <ul>
                            <li><a href="">menu</a></li>
                            <li><a href="">deals</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navitems-right">
                    <div className="auth-links">
                        <ul>
                            <li><a href=""><i class="bi bi-person-circle"></i> sign in</a></li>
                        </ul>
                    </div>
                    <div className="order">
                        <a href="">₹0</a>
                        <img src={logo2} alt="bucket"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="headerBottom">
            <div class="headBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
            <button className='hButtomButton'>Start Over</button>
        </div>
    </>
  )
}

export default header
