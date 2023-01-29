// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require("firebase/auth")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
//   appId: process.env.REACT_APP_FIREBASE_APP
// };
const firebaseConfig = {
    apiKey: "AIzaSyDYGxTNaXkIjJW9ulvkHhBBtSV5j08vBvk",
    authDomain: "react-auth-dev-d7479.firebaseapp.com",
    projectId: "react-auth-dev-d7479",
    storageBucket: "react-auth-dev-d7479.appspot.com",
    messagingSenderId: "602533633055",
    appId: "1:602533633055:web:41eaeef348f95aaccf092a"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;