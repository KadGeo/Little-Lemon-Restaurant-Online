import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.svg';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Little Lemon home page">
          Little Lemon
        </Link>
        <figure className="navbar__logo">
          <img
            src={logo}
            alt="Little Lemon Logo"
          />
        </figure>
        <ul className="navlinks" role="list">
          <li><Link to="/" aria-label="Navigate to home page">Home</Link></li>
          <li><a href="#highlights" aria-label="Navigate to menu section">Menu</a></li>
          <li><a href="#highlights" aria-label="Navigate to reservations section">Reservations</a></li>
          <li><Link to="/testimonials" aria-label="Navigate to testimonials page">Testimonials</Link></li>
          <li><Link to="/about" aria-label="Navigate to about page">About</Link></li>
          <li><Link to="/booking" aria-label="Navigate to booking page">Booking</Link></li>
          <li><Link to="/confirmed" aria-label="Navigate to confirmation page">Confirmation</Link></li>
        </ul>
      </nav>
    </header>
  );
}
