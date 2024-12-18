import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Gems from './Pages/Gems';
import Courses from './Pages/Courses';
import Combo from './Pages/Combo';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Books from './Pages/Books';
import Footer from './Components/Footer';

function App() {
  return (
    <>
   
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/gems" element={<Gems />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

    <Footer />
    </>
  );
}

export default App;
