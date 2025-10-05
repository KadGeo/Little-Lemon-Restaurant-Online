
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.svg';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main">
        <Link className="brand" to="/" aria-label="Little Lemon home">
          Little Lemon
        </Link>
        <figure className="navbar__logo">
            <img
              src={logo}
              alt="Little Lemon Logo"
            />
        </figure>
            <ul className="navlinks">
              <li><Link to="/">Home</Link></li>
              <li><a href="#highlights">Menu</a></li>
              <li><a href="#highlights">Reservations</a></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
            </header>
      );
        <nav className="navbar__inner" aria-label="Main">
          <figure className="navbar__logo">
            <img
              src={logo}
              alt="Little Lemon Logo"
            />
          </figure>
          <ul className="navlinks">
            <li><a href="#hero">Home</a></li>
            <li><a href="#highlights">Menu</a></li>
            <li><a href="#highlights">Reservations</a></li>
            <li><a href="#testimonials">Order Online</a></li>
            <li><a href="#about">Login</a></li>
          </ul>
    <span className="brand">Little Lemon</span>
        </nav>
        }
