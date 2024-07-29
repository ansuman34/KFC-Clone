import React from 'react';
import logo from '../../assets/img/kfcLogo.492728c6.svg';
import logo2 from '../../assets/img/bucket_cart_icon.svg';
import './header.css';
import { Link} from 'react-router-dom';


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
            <br/>
            <hr />
            <div className="headerWrapper">
                <div className="navitems-left">  
                    <Link to="/" ><img src={logo} className='logo' alt="kfc" /></Link>
                    <div className="auth-links">
                        <ul>
                            <li></li>
                            <li><Link to="/deals">deals</Link></li>
                            <li><Link to="/menu">menu</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navitems-right">
                    <div className="auth-links">
                        <ul>
                            <li><Link to='/signin'><i class="bi bi-person-circle"></i> sign in</Link></li>
                        </ul>
                    </div>
                    <div className="order">
                        <Link to='/cart'><a href="">₹0</a> </Link>
                        
                        <img className='oredr_logo' src={logo2} alt="bucket"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="headerBottom">
            <div class="headBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
            <button className='hBottomButton'>Start Over</button>
        </div>
    </>
  )
}

export default header
