import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Propertydetails from './pages/Propertydetails/Propertydetails';
import  land  from "./constants/land";
import Houses from './pages/Houses/Houses';
import Land from './pages/Land/Land';
import Apartment from './pages/Apartment/Apartment';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import Landsell from './pages/SellyourLand/Landsell';

function App() {


  return (
    <>
     <Router>
        <Navbar/><br /><br /><br />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<Houses/> } />
          <Route path="/yourland" element={<Land/> } />
          <Route path="/apartment" element={<Apartment/> } />
          <Route path="/contactus" element={<ContactUs/> } />
          <Route path="/aboutus" element={<About/> } />
          <Route path="/sellyourland" element={<Landsell/> } />

          <Route path="/land/:id" element={<Propertydetails  land={land}/>} />
        </Routes>
          <Footer/> 
      </Router>
  
    </>
  )
}

export default App
