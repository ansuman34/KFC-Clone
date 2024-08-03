import React from 'react';
import logo from '../../assets/img/kfcLogo.492728c6.svg';
import logo2 from '../../assets/img/bucket_cart_icon.svg';
import './header.css';
import { Link} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const buttonApply = () => setShow(true);
  return (
    <>
      <div className="header">
        <div className="headerLocation">
          <div className="locationData">
            <i className="bi bi-geo-alt-fill"></i> Allow location access for local store menu and promos
          </div>
          <button onClick={buttonApply} className='locationButton'>Set Location</button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>START YOUR ORDER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="order-body">
                <h1>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h1>
                <Button variant="primary">Delivery</Button>
                <Button variant="primary">Pick up</Button>
                <Button variant="primary">Dine In</Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <br />
      </div>
      <hr />
      <div className="headerWrapper">
        <div className="navitems-left">
          <Link to="/">
            <img src={logo} className="logo" alt="kfc" />
          </Link>
          <div className="auth-links">
            <ul>
              <li></li>
              <li>
                <Link to="/deals">deals</Link>
              </li>
              <li>
                <Link to="/menu">menu</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navitems-right">
          <div className="auth-links">
            <ul>
              <li>
                <Link to="/signin">
                  <i className="bi bi-person-circle"></i> sign in
                </Link>
              </li>
            </ul>
          </div>
          <div className="order">
            <Link to="/cart">
              <img className="oredr_logo" src={logo2} alt="bucket" />
            </Link>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
        <button className="hBottomButton" onClick={handleShow}>
          Start Order
        </button>
      </div>
    </>
  );
};

export default Header;