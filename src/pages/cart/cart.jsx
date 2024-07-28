import React, { useEffect, useState } from "react";
import "./cart.css";
import linesLogo from "../../assets/img/mobileLogo.png";
import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import CartCards from "../../components/cartcards";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Cart = ({ purchase ={}, setPurchase }) => {
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();
  const gst = parseFloat(purchase.subTotal * 0.05).toFixed(2);

  const fetchData = () => {
    const localCart = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(localCart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cart-Body">
        <Header />
      {purchase.quantity < 1 ? (
        <div className="cart-cardsSection">
          <div className="cart-headingSection">
            <img src={linesLogo} alt="logo" className="cart-3lingLogo" />
            MY CART
          </div>

          <div className="cart-data-parent-Empty-box">
            <div className="cart-data-parent-Empty-box-left">
              <p>YOUR CART IS EMPTY. LET'S START AN ORDER!</p>
              <button
                className="cart-empty-Start-button"
                onClick={() => navigate("/menu")}
              >
                Start Order
              </button>
            </div>
            <div className="cart-data-parent-Empty-box-right">
              <img
                src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
                alt="empty cart img"
                className="EmptyCartImage"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-parentContianer">
          <div className="cart-cardsSection">
            <div className="cart-headingSection">
              <img src={linesLogo} alt="logo" className="cart-3lingLogo" />
              MY CART
            </div>
            <div className="cart-storedData">
              <div className="cart-storedData-left">
                {cartData.map((card, index) => {
                  return (
                    <CartCards
                      card={card}
                      key={index}
                      purchase={purchase}
                      setPurchase={setPurchase}
                      cartData={cartData}
                      setCartData={setCartData}
                    />
                  );
                })}
              </div>
              <div className="cart-storedData-right">
                <div className="cart-amoutBox">
                  <Heading>
                    {purchase.quantity}{" "}
                    {purchase.quantity > 1 ? " ITEMS" : " ITEM"}
                  </Heading>
                  <div className="cart-amountBox-offerBox">
                    <div className="cart-amountBox-offerBox-circle1"></div>
                    <div className="cart-amountBox-offerBox-text">
                      <p>Apply Offers & Deals</p>
                    </div>
                    <button
                      className="cart-amountBox-button"
                      onClick={() => navigate("/offers")}
                    >
                      View All
                    </button>
                    <div className="cart-amountBox-offerBox-circle2"></div>
                  </div>
                  <div className="cart-amountBox-total">
                    <p>Subtotal</p>
                    <p>₹ {purchase.subTotal}</p>
                  </div>
                  <div className="cart-amountBox-gst">
                    <p>GST</p>
                    <p>₹ {gst}</p>
                  </div>
                  <button
                    className="cart-amountBox-hopeBox-checkoutBtn"
                    onClick={() => navigate("/checkout")}
                  >
                    <p>Checkout </p> <p> ₹ {purchase.totalAmount}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Cart;