import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ForgetPassword from './pages/ForgetPassword';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';

function AppRouter() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/login' element={<LoginPage />}></Route>
        <Route path='/registration' element={<RegisterPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
         <Route path='/forget-password' element={<ForgetPassword />}></Route>
         <Route path='/reset-password' element={<ResetPasswordPage />}></Route>
         <Route path='/profile-page' element={<ProfilePage />}></Route>
         <Route path='/navbar' element={<NavBar />}></Route>
        

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default AppRouter