import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItemHandler = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id,
    });
  };
  return (
    <>
      <div className="checkoutProduct">
        <div>
          <img className="checkoutProduct__image" src={image} alt="" />
        </div>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeItemHandler}>Remove from Basket</button>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
