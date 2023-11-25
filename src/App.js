import Checkout from "./Checkout";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
function App() {
  <meta
    name="description"
    content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
  />;
  const promise = loadStripe(
    "pk_test_51OD8LbSADQeb1tS0Cod90dJ6XrHoRio7FSvz0oDu2Gq1SjpyKiQTq0hIAD0admeEK8TUNGk75hRWyQUI0ZRPgqrL00eB5lmpGl"
  );
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);

      if (authUser) {
        //the user just loggedin / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer/>
              </>
            }
          />
          <Route
            exact
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer/>
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer/>
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
