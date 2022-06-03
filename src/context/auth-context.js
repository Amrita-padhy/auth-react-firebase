import React, { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "../firebase-auth.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(firebaseAuth,user => {
      console.log(user);
    setCurrentUser(user)
  })

  return () => {
    unsubscribe()
  }
}, [])





// register
  function register(email, password) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }
//   login
  function login(email, password) {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }
// 
function logout() {
  return signOut(firebaseAuth)  
}
function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(firebaseAuth, provider)
  }



  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
