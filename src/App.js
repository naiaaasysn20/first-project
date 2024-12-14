import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Login  from './pages/Login';
import  Register  from './pages/Register';
import  Profile  from './pages/Profile';
import  Event  from './pages/Event';
import  NoPage  from './pages/NoPage';

export default function App() {
	  return (
	<BrowserRouter>
	  <Routes>
	  	<Route index element={<Home />} />
		<Route path="/home" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/event" element={<Event />} />
		<Route path="*" element={<NoPage />} />
	  </Routes>
	</BrowserRouter>
  )
}
