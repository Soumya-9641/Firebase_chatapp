// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase  
const firebaseConfig = {
  apiKey: "AIzaSyBQxfxHNdsNUI2wGffJ68odIYeZ9-K00l8",
  authDomain: "authchat-6e919.firebaseapp.com",
  projectId: "authchat-6e919",
  storageBucket: "authchat-6e919.appspot.com",
  messagingSenderId: "952087194664",
  appId: "1:952087194664:web:d6edf9cec60eb225ee991d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()