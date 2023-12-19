import React from 'react';
import './App.css';
import Footer from './assets/Footer';
import Header from './assets/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Pages/Events';
import Faculties from './Pages/Faculties';
import FacultiCard from './Components/Faculties/FacultiCard';
import Admission from './Pages/Admission';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
   
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About/>} />
          <Route path="/Faculties" element={<Faculties/>} >
            <Route path=':id' element={<FacultiCard/>}/>
          </Route>
          <Route path="/Events" element={<Events/>} />
          <Route path="/Admission" element={<Admission/>} />
          <Route path="/Contacts" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
