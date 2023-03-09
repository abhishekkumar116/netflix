// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBM0rg_tck7rx0E_hnvQQsiBlwyCMOOtL4",
  authDomain: "react-netflix-clone-3bfe8.firebaseapp.com",
  projectId: "react-netflix-clone-3bfe8",
  storageBucket: "react-netflix-clone-3bfe8.appspot.com",
  messagingSenderId: "135495857683",
  appId: "1:135495857683:web:f61a3a198f1184542af1e6",
  measurementId: "G-5XPS5M5G7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//onst analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);