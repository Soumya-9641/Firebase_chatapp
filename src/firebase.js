// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase  
const firebaseConfig = {
  apiKey: "AIzaSyA7Dm94YVuGCw5fcJyIq4OAESA_Kou_mWk",
  authDomain: "auth-84c87.firebaseapp.com",
  projectId: "auth-84c87",
  storageBucket: "auth-84c87.appspot.com",
  messagingSenderId: "141897618194",
  appId: "1:141897618194:web:bc71b8cc66480a69bd59cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const auth = getAuth(app)
export default app
export const storage = getStorage();
export const db = getFirestore();