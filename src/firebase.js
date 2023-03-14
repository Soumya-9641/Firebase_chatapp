// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAuuAESGHCkmzxN556nQnTwLRzACaaY54A",
  authDomain: "chatapp-8e322.firebaseapp.com",
  projectId: "chatapp-8e322",
  storageBucket: "chatapp-8e322.appspot.com",
  messagingSenderId: "554440562343",
  appId: "1:554440562343:web:d173bc4995a875e4372d82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)