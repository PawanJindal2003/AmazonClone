const functions = require("firebase-functions");
const express = require("express");
const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OD8LbSADQeb1tS0ciS5b6lfzplQjNFJOsrYoAuHkd6yLr6bKj4B6ARHMQaLYTB14JzPJIACSOmGuDMOXbX83NcD00dZLNaZ5E"
);

// API

// API config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello world"));
// app.get("/pawan", (request, response) => response.status(200).send("Hello pawan jindal"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "inr",
  });

  response.status(201).send({//201 is for passing a message OK
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command with ur
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-4a5d2/us-central1/api
