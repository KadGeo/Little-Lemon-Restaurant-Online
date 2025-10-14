import React from 'react';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">Little Lemon — New York</h2>
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
          <nav aria-label="Footer navigation">
            <h3 className="widget-title">Doormat Navigation</h3>
            <ul role="list">
              <li><a href="#hero" aria-label="Navigate to home section">Home</a></li>
              <li><a href="#highlights" aria-label="Navigate to menu section">Menu</a></li>
              <li><a href="#highlights" aria-label="Navigate to reservations section">Reservations</a></li>
              <li><a href="#testimonials" aria-label="Navigate to order online section">Order Online</a></li>
              <li><a href="#about" aria-label="Navigate to login page">Login</a></li>
            </ul>
          </nav>
          <address>
            <h3 className="widget-title">Contact</h3>
            <ul role="list">
              <li>123 Lemon St, New York, NY</li>
              <li>Phone: <a href="tel:+12125550123" aria-label="Call us at (212) 555-0123">(212) 555-0123</a></li>
              <li>Email: <a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a></li>
            </ul>
          </address>
          <nav aria-label="Social media links">
            <h3 className="widget-title">Social Media</h3>
            <ul role="list">
              <li><a href="#" aria-label="Visit our Facebook page">Facebook</a></li>
              <li><a href="#" aria-label="Visit our X (Twitter) page">X</a></li>
              <li><a href="#" aria-label="Visit our Instagram page">Instagram</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
