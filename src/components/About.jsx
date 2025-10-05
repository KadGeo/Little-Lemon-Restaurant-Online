import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Little Lemon — New York</h2>
      <p className="muted">
        Little Lemon is a neighborhood bistro serving Mediterranean-inspired
        dishes using local, seasonal ingredients. Our menu changes frequently
        and our team prides itself on warm, attentive service.
      </p>

      <div className="about__grid">
        <figure className="about__photo">
          <img
            src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop"
            alt="Restaurant interior"
          />
        </figure>

        <div className="footer-widgets">
          <div>
            <h3 className="widget-title">Doormat Navigation</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#highlights">Menu</a></li>
              <li><a href="#highlights">Reservations</a></li>
              <li><a href="#testimonials">Order Online</a></li>
              <li><a href="#about">Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="widget-title">Contact</h3>
            <ul>
              <li>123 Lemon St, New York, NY</li>
              <li>Phone: (212) 555-0123</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>
          <div>
            <h3 className="widget-title">Social Media</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
