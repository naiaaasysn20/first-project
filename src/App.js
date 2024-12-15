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

function Layout({ children}) {
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
	  <Layout>
	  <Routes>
	  	<Route index element={<Login />} />
		<Route path="/home" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/event" element={<Event />} />
		<Route path="*" element={<NoPage />} />
	  </Routes>
	</Layout>
	</BrowserRouter>
  )
}