import React from 'react';
import './offer.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Offer({ title, description, url, date }) {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const buttonApply = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowDetails = () => setShowDetails(true);
  const handleHideDetails = () => setShowDetails(false);

  const truncatedTitle = title.length > 15 ? title.substring(0, 15) + '...' : title;
  const truncatedDescription = description.length > 70 ? description.substring(0, 70) + '...' : description;

  return (
    <div className="offer-card">
      <img src={url} alt={title} className="offer-image" />
      <h3>{truncatedTitle}</h3>
      <p>{truncatedDescription}</p>
      <div className="buttons">
        <div>
          <a onClick={handleShowDetails}>View Details</a>
        </div>
        <button onClick={buttonApply}>Apply Offer</button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>START YOUR ORDER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="order-body">
              <h1 className="A1">HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</h1>
              <Button variant="primary" className="A2">Delivery</Button>
              <Button variant="primary" className="A2">Pick up</Button>
              <Button variant="primary" className="A2">Dine In</Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={showDetails} onHide={handleHideDetails} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>EXCLUSIVE OFFERS FOR YOU</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <button onClick={buttonApply}>Apply Offer</button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Offer;