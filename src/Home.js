import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/thankyou/mob/new/stories/revised/PC/hero/2X_PC._CB574589084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456"
            title="Redmi 12C"
            price={9899}
            image="https://m.media-amazon.com/images/I/41mOO9Ro-2L._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="123466"
            title="Pova 5 Pro"
            price={13499}
            image="https://m.media-amazon.com/images/I/41gWa+F0PIL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="122456"
            title="Nokia G42"
            price={11899}
            image="https://m.media-amazon.com/images/I/41g6kR7fbaL._AC_SY200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123416"
            title="Levi's Men's Mid Rise 512 Slim Fit Jeans"
            price={1450}
            image="https://images-eu.ssl-images-amazon.com/images/I/81z63uQDawL._AC_UL160_SR160,160_.jpg"
            rating={4}
          />
          <Product
            id="123476"
            title="Levi's Men's Slim Jeans"
            price={1535}
            image="https://images-eu.ssl-images-amazon.com/images/I/71vqd7FP49L._AC_UL160_SR160,160_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="128456"
            title="Samsung 138 cm (55 inches) 4K Ultra HD Smart NEO QLED TV QA55QN95BAKLXL (Bright Silver) | With 3 Years Warranty"
            price={154999}
            image="https://m.media-amazon.com/images/I/81Ri+l0nQyL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456"
            title="MAGGI 2-Minute Instant Noodles, 840G (12 Pouches X 70G Each), Masala Noodles With Goodness Of Iron, Made With Choicest Quality Spices, Favourite Masala Taste, 840 Grams"
            price={160}
            image="https://m.media-amazon.com/images/I/81G0iD2cvDL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="123466"
            title="MAGGI 2-Minute Special Masala Instant Noodles, 70 Grams (Pack Of 12)"
            price={216}
            image="https://m.media-amazon.com/images/I/819-YmJDe5L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="122456"
            title="Ching's Just Soak Veg Hakka Noodles 140gm"
            price={30}
            image="https://m.media-amazon.com/images/I/61wbLlB+00L._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
