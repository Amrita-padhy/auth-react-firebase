import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBgl6vyThdhFAxTypEwItpSpkn2EAINIZM",
  authDomain: "react-firebase-auth-dc293.firebaseapp.com",
  projectId: "react-firebase-auth-dc293",
  storageBucket: "react-firebase-auth-dc293.appspot.com",
  messagingSenderId: "578690728899",
  appId: "1:578690728899:web:0aa7db5d2fe589c59d3376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

