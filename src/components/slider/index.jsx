import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import logo from '../../assets/img/YAYCHKN.jpg';
import logo2 from '../../assets/img/YAYFRIES.jpg';
import logo3 from '../../assets/img/YAYPOP.jpg';
import logo4 from '../../assets/img/YAYSTRIPS.jpg';
import logo5 from '../../assets/img/YAYVZINGER.jpg';
import bannerTop from '../../assets/img/vector3.svg';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline-block", background:"black", borderRadius: "50%" ,textAlign:"center"
        }}
      onClick={onClick}
    />
  );
}

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-container">
      <div className='bannerTop'> 
        <img src={bannerTop} alt="" />
      </div>
      <h2> Exclusive Offers For You </h2>
      <Slider {...settings}>
        <div className="slide">
          <img src={logo} alt="Offer 1" />
          <div className="slideBottom">
            <p>Free 1pc Chicken</p>
            <a href="#" class="card_btn btn btn-primary">
              apply offer
          </a>
          </div>
        </div>
        <div className="slide">
          <img src={logo5} alt="Offer 1" />
          <div className="slideBottom">
            <p>Free Zinger worth ₹209</p>
            <a href="#" class="card_btn btn btn-primary">
              apply offer
          </a>
          </div>
        </div>
        <div className="slide">
          <img src={logo4} alt="Offer 2" />
          <div className="slideBottom">
            <p>3PC Hot & Crispy @ ₹99</p>
            <a href="#" class="card_btn btn btn-primary">
              apply offer
          </a>
          </div>
        </div>
        <div className="slide">
          <img src={logo3} alt="Offer 3" />
          <div className="slideBottom">
            <p>Upto ₹100/- OFF</p>
            
            <a href="#" class="card_btn btn btn-primary">
              apply offer
          </a>
          </div>

        </div>
        <div className="slide">
          <img src={logo2} alt="Offer 4" />
          <div className="slideBottom">
            <p>Flat ₹75/- OFF</p>
            <a href='#' class='card_link'>view details</a>
            <a href="#" class="card_btn btn btn-primary">
              apply offer
          </a>
          </div>

        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;