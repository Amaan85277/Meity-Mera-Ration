// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mera-ration---p.firebaseapp.com",
  projectId: "mera-ration---p",
  storageBucket: "mera-ration---p.appspot.com",
  messagingSenderId: "725161796165",
  appId: "1:725161796165:web:47b0d880c9d5671558392c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);