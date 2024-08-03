import React from "react";
import "./home.css";
import Header from "../../components/header";
import Slider from "../../components/slider";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Card from "../../components/card";
import img from "../../assets/img/finger_lickin.svg";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="home-Wrapper">
      <Header />
      <Banner />
      <h2 className="heading" style={{color:'black'}}>BROWSE CATAGORIES</h2>
      <div className="browsing_components">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Link to='/menu'>
          <div class="card">
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">view all menu⟶</p>
              </div>
            </div>
        </Link>
      </div>
      <Slider />
      <Footer />
    </div>
  );
};

export default home;
