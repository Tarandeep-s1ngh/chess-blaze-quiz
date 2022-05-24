import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlDUBNk8YVyTqel5jr-KDxHjO7t7kVKo",
  authDomain: "chess-blaze.firebaseapp.com",
  projectId: "chess-blaze",
  storageBucket: "chess-blaze.appspot.com",
  messagingSenderId: "727246632747",
  appId: "1:727246632747:web:7d0ccc320cadbb42d0776e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
