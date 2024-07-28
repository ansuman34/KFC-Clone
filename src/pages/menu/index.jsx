import React from 'react';
import './menu.css';
import './db.json';
import Header from '../../components/header';
import Footer from '../../components/footer';


function Menu() {
  return (
    <div>
      <Header />
      <header>
        <nav>
          <ul>
            <li><a href="#newchickenrolls">New Chicken Rolls</a></li>
            <li><a href="#valueLunchSpecials">Value Lunch Specials</a></li>
            <li><a href="#chickenbucket">Chicken Buckets</a></li>
            <li><a href="#burgers">Burgers</a></li>
            <li><a href="#snacks">Snacks</a></li>
            <li><a href="#beverages">Beverages</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="New Chicken Rolls">
          <h1>New Chicken Rolls</h1>
          <h2>Thai Spicy chicken roll</h2>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K973.jpg?ver=49.63" alt="" />
          <p>non-veg</p>
          <p>Our Thai Spicy chicken roll is a delicious combination of crispy chicken, fresh vegetables
            and creamy sauce, all wrapped up in a soft and fluffy bun.</p>
            <p>Price: ₹109.00</p>
            <button>Order Now</button>
            <h3>Classic Chicken Roll & Pepsi Combo</h3>
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002324.jpg?ver=49.63" alt="" />
            <p>non-veg</p>
            <p>Our Classic Chicken Roll & Pepsi Combo is a match made in heaven. Enjoy our
              crispy chicken roll with a refreshing glass of Pepsi.</p>
              <p>Price: ₹149.00</p>
              <button>Order Now</button>
              <h4>Indian Tandoori Chicken Roll</h4>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K975.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p>Our Indian Tandoori Chicken Roll is a flavorful combination of marinated chicken,
                crispy onions and creamy sauce, all wrapped up in a soft and fluffy bun.</p>
                <p>Price: ₹129.00</p>
                <button>Order Now</button>
                <h5>Indian Spicy Veg Roll</h5>
                <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K976.jpg?ver=49.63" alt="" />
                <p>veg</p>
                <p>Our Indian Spicy Veg Roll is a delicious combination of crispy vegetables, fresh
                  herbs and creamy sauce, all wrapped up in a soft and fluffy bun.</p>
                  <p>Price: ₹99.00</p>
                  <button>Order Now</button>
                  <h6>2 Double Chicken Roll</h6>
                  <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002316.jpg?ver=49.63" alt="" />
                  <p>non-veg</p>
                  <p>Our 2 Double Chicken Roll is a mouth-watering combination of crispy chicken,
                    fresh vegetables and creamy sauce, all wrapped up in a soft and fluffy bun.</p>
                    <p>Price: ₹199.00</p>
                    <button>Order Now</button>

        </section>
        <section id = "valueLunchSpecials">
        <h1>Value Lunch Specials</h1>
        <h2>2 Chicken Longer Burgers Lunch Combo</h2>
        <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002503.jpg?ver=49.63" alt="" />
        <p>non-veg</p>
        <p>Our 2 Chicken Longer Burgers Lunch Combo is a delicious combination of crispy chicken
          and creamy sauce, all wrapped up in a soft and fluffy bun.</p>
          <p>Price: ₹149.00</p>
          <button>Order Now</button>
          <h3>2 Chicken Rolls Lunch Combo</h3>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002504.jpg?ver=49.63" alt="" />
          <p>non-veg</p>
          <p>Our new 2 Single Chicken Rolls, 4 Chicken Strips and a 1 Pepsi PET 475ml</p>
            <p>Price: ₹199.00</p>
            <button>Order Now</button>
            <h4>2 Rice Bowlz Lunch Combo</h4>
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002505.jpg?ver=49.63" alt="" />
            <p>non-veg</p>
            <p> new 2 Rizo Rice Bowlz, 4 Chicken Strips and a 1 Pepsi PET 475ml.</p>
              <p>Price: ₹299.00</p>
              <button>Order Now</button>
              <h5>Chicken Longer & Rice Lunch Combo</h5>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002507.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p> 1 Chicken Longer Burger, 1 Rizo Rice Bowlz, 4 Strips and a Pepsi PET 475ml.</p>
              <p>Price: ₹249.00</p>
              <button>Order Now</button>
              <h6>2 Chicken Longer Deluxe Lunch Combo</h6>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002509.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p> new 2 Chicken longer, 2 Strips, 2 HC and a Pepsi PET</p>
                <p>Price: ₹349.00</p>
                <button>Order Now</button>
          </section>
        
        <section id="chickenbucket">
          <h1>Chicken Buckets</h1>
          <h2>All in One Bucket</h2>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002340.jpg?ver=49.63" alt="Chicken Image" />
          <p>non-veg</p>
          <p>1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml</p>
          <p>Price: ₹499.00</p>
          <button>Order Now</button>
          <h3>All Chicken Box</h3>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=49.63" alt="chicken image" />
          <p>non-veg</p>
          <p>A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price</p>
          <p>Price: ₹219.00</p>
          <button>Order Now</button>
           <h4>Mingles Bucket Meal</h4>
           <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002162.jpg?ver=49.63" alt="" />
           <p>non-veg</p>
           <p> 4 Wings,2 Peri Strips, Reg Popcorn, Med Fries & 1 Pepsi 475ml</p>
           <p>Price: ₹599.00</p>
           <button>Order Now</button>
           <h5>Big 8</h5>
           <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000891.jpg?ver=49.63" alt="" />
           <p>non-veg</p>
           <p>this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken</p>
           <p>Price: ₹499.00</p>
           <button>Order Now</button>
           <h6>8 pc Hot & Crispy Chicken</h6>
           <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K009.jpg?ver=49.63" alt="" />
           <p>non-veg</p>
           <p>8 pc Hot & Cripsy</p>
           <p>Price: ₹449.00</p>
           <button>Order Now</button>
           <h6>Peri Peri 5 Leg Pc Meal</h6>
           <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=49.63" alt="" />
           <p>non-veg</p>
           <p> 5 pc Peri Peri Leg, Reg Popcorn, Med Fries</p>
           <p>Price: ₹299.00</p>
           <button>Order Now</button>
        </section>
        <section id="burgers">
          <h1>Burgers</h1>
          <h2>Mexican Zinger Pro Burger</h2>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K696.jpg?ver=49.63" alt="" />
          <p>non-veg</p>
          <p>Spicy Zinger Fillet, topped with melted cheese, lettuce, tomato,
            onion, pickles, jalapenos, chipotle mayo, served on a toasted bun</p>
            <p>Price: ₹299.00</p>
            <button>Order Now</button>
            <h3>Indian Paneer Zinger Burger</h3>
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K912.jpg?ver=49.63" alt="" />
            <p>veg</p>
            <p>Indian-style Zinger Burger with a crispy Paneer patty, topped with melted
              cheese, lettuce, tomato, onion, pickles, served on a toasted bun</p>
              <p>Price: ₹249.00</p>
              <button>Order Now</button>
              <h4>Caribbean Spicy Zinger Burger & Popcorn Meal</h4>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002412.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p>Caribbean Spicy Zinger Burger with Medium Popcorn and Pepsi PET 475ml at a deal price</p>
              <p>Price: ₹439.00</p>
              <button>Order Now</button>
              <h5>Mexican Zinger Pro Burger & Popcorn Meal</h5>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002415.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p>Mexican Zinger Pro Burger with Medium Popcorn and Pepsi PET 475ml</p>
              <p>Price: ₹459.00</p>
              <button>Order Now</button>
              <h6>Caribbean Spicy Zinger Burger</h6>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K815.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p>Relish the Caribbean spicy zinger</p>
              <p>Price: ₹299.00</p>
              <button>Order Now</button>
              <h6>2 Chicken Krisper Burgers</h6>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001025.jpg?ver=49.63" alt="" />
              <p>non-veg</p>
              <p>2 delicious chicken value burgers - at a deal price</p>
              <p>Price: ₹199.00</p>
              <button>Order Now</button>    
        </section>
        <section id="snacks">
          <h1>Snacks</h1>
          <h2>Chocolate Lava Cake</h2>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=49.63" alt="" />
          <p>veg</p>
          <p>Rich, gooey chocolate cake, served warm</p>
          <p>Price: ₹49.00</p>
          <button>Order Now</button>
          <h3>Chicken & Fries Bucket</h3>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=49.63" alt="" />
          <p>non-veg</p>
          <p>Bucket of 3 pieces of chicken and 2 large fries</p>
          <p>Price: ₹299.00</p>
          <button>Order Now</button>
          <h4>Regular Popcorn</h4>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=49.63" alt="" />
          <p>non-veg</p>
          <p>Regular popcorn, served in a bucket</p>
          <p>Price: ₹149.00</p>
          <button>Order Now</button>
        </section>
        <section id="beverages">
          <h1>Beverages</h1>
          <h2>Pepsi 475ml PET</h2>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=49.63" alt="" />
          <p>veg</p>
          <p>Quench your thirst with a cold Pepsi</p>
          <p>Price: ₹25.00</p>
          <button>Order Now</button>
          <h4>7UP Can 300 ml</h4>
          <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=49.63" alt="" />
          <p>veg</p>
          <p>Quench your thirst with a cold 7UP</p>
          <p>Price: ₹20.00</p>
          <button>Order Now</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;