import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const [{ user, basket }, dispatch] = useStateValue();

  const submitHandler = async (event) => {
    //do all the fancy stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            //
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created, //will give timestamp when order was created
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
  };

  const changeHandler = (event) => {
    //listen for changes in CardElement
    //and display error as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  //whenever the basket chages it will make some request
  //and update the speical stripe secret so that correct
  //amount could be asked from customer
  useEffect(() => {
    //to generate the special stripe secret which allows us to
    // charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        //axios is for making or getting a request
        method: "post",
        //stripe expects the total in a currencies sub units
        url: `/payments/create?total=${getBasketTotal(basket)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("SECRET KEY >>> ", clientSecret);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Items will be delivered to this address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Flat No 571, Kamal Vihar Appartments</p>
            <p>Sector- 7, Dwarka, New Delhi</p>
            <p>110075, India</p>
          </div>
        </div>

        {/* Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* error handling */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
