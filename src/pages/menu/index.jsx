import React from 'react';
import './menu.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import chickenImage from '../../assets/img/chicken.jpg';
import sandwichesImage from '../../assets/img/sandwitch.jpg';
import sidesImage from '../../assets/img/sides.jpg';
import dessertsImage from '../../assets/img/desserts.jpg';

function Menu() {
  return (
    <div>
      <Header />
      <header>
        <nav>
          <ul>
            <li><a href="#chicken">Chicken</a></li>
            <li><a href="#sandwiches">Sandwiches</a></li>
            <li><a href="#sides">Sides</a></li>
            <li><a href="#desserts">Desserts</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="chicken">
          <h2>Chicken</h2>
          <img src={chickenImage} alt="Chicken Image" />
          <ul>
            <li>Original Recipe Chicken</li>
            <li>Extra Crispy Tenders</li>
            <li>Nashville Hot Chicken</li>
          </ul>
        </section>
        <section id="sandwiches">
          <h2>Sandwiches</h2>
          <img src={sandwichesImage} alt="Sandwiches Image" />
          <ul>
            <li>Original Recipe Chicken Sandwich</li>
            <li>Chicken Littles Sandwich</li>
            <li>KFC Famous Bowls</li>
          </ul>
        </section>
        <section id="sides">
          <h2>Sides</h2>
          <img src={sidesImage} alt="Sides Image" />
          <ul>
            <li>Mashed Potatoes</li>
            <li>Coleslaw</li>
            <li>Baked Beans</li>
          </ul>
        </section>
        <section id="desserts">
          <h2>Desserts</h2>
          <img src={dessertsImage} alt="Desserts Image" />
          <ul>
            <li>Chocolate Chip Pie</li>
            <li>Pecan Pie</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;