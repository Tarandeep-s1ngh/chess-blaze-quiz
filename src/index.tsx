import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/QuizContext";

const firebaseConfig = {
  apiKey: "AIzaSyDQlDUBNk8YVyTqel5jr-KDxHjO7t7kVKo",
  authDomain: "chess-blaze.firebaseapp.com",
  projectId: "chess-blaze",
  storageBucket: "chess-blaze.appspot.com",
  messagingSenderId: "727246632747",
  appId: "1:727246632747:web:7d0ccc320cadbb42d0776e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();

export const storage = getStorage(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
