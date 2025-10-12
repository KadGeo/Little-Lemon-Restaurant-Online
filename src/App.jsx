
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}
