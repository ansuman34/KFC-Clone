import React, { useState, useEffect } from 'react';
import './cart.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/mobileLogo.png'
import empty_cart_logo from '../../assets/img/empty_cart.png'

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    setCartItems(cartData);
  }, []);

  const handleQuantityChange = (index, delta) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += delta;
    if (updatedCartItems[index].quantity <= 0) {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartData', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartData', JSON.stringify(updatedCartItems));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity, 10);
    return total + (isNaN(itemPrice) || isNaN(itemQuantity) ? 0 : itemPrice * itemQuantity);
  }, 0);

  return (
    <div>
      <Header />
      <main className="cart">
        <div className="cart_header">
          <img className='Logo' src={Logo} alt="" />
          <h1>My Cart</h1>
        </div>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                  <p>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
              <Link to='/'><button>Checkout</button></Link>
            </div>
          </div>
        ) : (
          <div className="emptycart">
            <div className="emptycart_text">
              <h1>Your cart is empty</h1>
              <Link to='/menu'><button>start order</button></Link>
            </div>
            <img src={empty_cart_logo} alt="" />
          </div>

        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;