import React from "react";
import "./home.css";
import Header from "../../components/header";
import Slider from "../../components/slider";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Card from "../../components/card";
import img from "../../assets/img/finger_lickin.svg";

const home = () => {
  return (
    <div className="home-Wrapper">
      <Header />
      <Banner />
      <h3 className="heading">BROWSE CATAGORIES</h3>
      <div className="browsing_components">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="menu_img">
        <a href="#">
          <div class="all_menu">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">view all menu⟶</p>
            </div>
          </div>
        </a>
      </div>
    </div>
      <Slider />
      <Footer />
    </div>
  );
};

export default home;
