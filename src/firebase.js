// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX7mX8Frj3J9voKSe3MmJY5QWW6kpV02U",
  authDomain: "clone-4a5d2.firebaseapp.com",
  databaseURL: "https://clone-4a5d2-default-rtdb.firebaseio.com",
  projectId: "clone-4a5d2",
  storageBucket: "clone-4a5d2.appspot.com",
  messagingSenderId: "795719853291",
  appId: "1:795719853291:web:27e73dd60eaefa0c9a4aae",
  measurementId: "G-HTS3H8MRKV"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
