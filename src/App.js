import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import  Home  from './pages/Home';
import  Login  from './pages/Login';
import  Register  from './pages/Register';
import  Profile  from './pages/Profile';
import  Event  from './pages/Event';
import  NoPage  from './pages/NoPage';
import Header from './components/header';
import Footer from './components/footer';

function Layout({ children }) {
	const location = useLocation();
	const excludePaths = ['/login', '/register'];

	return (
		<div>
		<>
            {!excludePaths.includes(location.pathname) && <Header />}
            {children}
            {!excludePaths.includes(location.pathname) && <Footer />}
        </>

		</div>
	);
}

export default function App() {
	  return (
	<BrowserRouter>
	  
	  <Routes>
	  	<Route index element={<Login />} />
		<Route path="/home" element={<Layout><Home /></Layout>} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/profile" element={<Layout><Profile /></Layout>} />
		<Route path="/event" element={<Layout><Event /></Layout>} />
		<Route path="*" element={<Layout><NoPage /></Layout>} />
	  </Routes>
	
	</BrowserRouter>
  )
}
