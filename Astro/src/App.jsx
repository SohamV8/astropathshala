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

// Importing Courses
import KP from './Pages/Courses/KP';
import Lalcourse from './Pages/Courses/Lalcourse';
import Nadi from './Pages/Courses/Nadi';
import Numerology from './Pages/Courses/Numerology';
import Tarotcourse from './Pages/Courses/Tarotcourse';
import Vediccourse from './Pages/Courses/Vediccourse';
import Workshops from './Pages/Courses/Workshops';

// Importing Services
import Consultation from './Pages/Service/Consultation';
import PathPooja from './Pages/Service/PathPooja';
import WhatsappButton from './Components/WhatsappButton';
import Navbar from './Components/Navbar';
import Popular from './Pages/Courses/Popular';

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Header />
        <div className="app-container">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/service" element={<Services />} />
            <Route path="/books" element={<Books />} />
            <Route path="/gems" element={<Gems />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/combo" element={<Combo />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* Courses */}
            <Route path="/courses/Popular" element={<Popular />} />
            <Route path="/courses/kp" element={<KP />} />
            <Route path="/courses/lalcourse" element={<Lalcourse />} />
            <Route path="/courses/nadi" element={<Nadi />} />
            <Route path="/courses/numerology" element={<Numerology />} />
            <Route path="/courses/tarotcourse" element={<Tarotcourse />} />
            <Route path="/courses/vediccourse" element={<Vediccourse />} />
            <Route path="/courses/workshops" element={<Workshops />} />
            
            {/* Services */}
            <Route path="/service/consultation" element={<Consultation />} />
            <Route path="/service/pathpooja" element={<PathPooja />} />
          </Routes>
        </div>
      </Router>
<WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
