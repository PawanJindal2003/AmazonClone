import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (event) => {
    event.preventDefault();
    //firebase login systum
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerHandler = (event) => {
    event.preventDefault();
    //firebase systum register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
      <img className="login__logo" src="/loginLogo.png" alt="Black Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>

          <button
            className="login__signInButton"
            onClick={signInHandler}
            type="submit"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interest
          Based Ads{" "}
        </p>

        <button className="login__registerButton" onClick={registerHandler}>
          Create your Amazon Account
        </button>
      </div>

      <div className="login__copyright">
        <div class="login__copyright__line1">
          <h6>Conditions of Use</h6>
          <h6>Privacy Notes</h6>
          <h6>Help</h6>
        </div>

        <div class="login__copyright__line2">
          <h6>© 1996-2023, Ruby13.com, Inc. or its affiliates</h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
