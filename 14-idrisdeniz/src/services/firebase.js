// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTxEqFwOmLVa1jVR3OYlOPMrT-Mqvs4MY",
  authDomain: "idrisdeniz-26380.firebaseapp.com",
  projectId: "idrisdeniz-26380",
  storageBucket: "idrisdeniz-26380.appspot.com",
  messagingSenderId: "235733564473",
  appId: "1:235733564473:web:0a118a6bff9a7ef66c61e8"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
