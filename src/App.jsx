import React from 'react';
import './App.css';
import Footer from './assets/Footer';
import Header from './assets/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
