import React from "react";

function Footer() {
  return (
    <footer>
      <img src= "restuarant.jpg" alt="Little Lemon Restaurant"/>
  <nav aria-label="Footer doormat navigation">

    <ul>
      <li><a href="/Webpages/Homepage.html">Home</a></li>
      <li><a href="/Webpages/Aboutpage.html">About</a></li>
      <li><a href="/Webpages/Menupage.html">Menu</a></li>
      <li><a href="/Webpages/Reservationpage.html">Reservations</a></li>
      <li><a href="/Webpages/OrderOnlinepage.html">Order Online</a></li>
      <li><a href="/Webpages/Loginpage.html">Login</a></li>
    </ul>
  </nav>

  {/* -- Contact Section-- */}
    <section aria-labelledby="contact-title">
    <h2 id="contact-title">Contact</h2>
    <address>
      <p>📍 123 Placeholder St, City, Country</p>
      <p>📞 (000) 000-0000</p>
      <p>✉️ <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
    </address>
  </section>


{/*-- Social Media Section --*/}
  <section aria-label="Social media links">
  <h3>Social Media</h3>
  <nav aria-label="Little Lemon social media">
    <ul>
      <li><a href=" " aria-label="Visit Little Lemon on Facebook">Facebook</a></li>
      <li><a href=" " aria-label="Visit Little Lemon on X (formerly Twitter)">X</a></li>
      <li><a href=" " aria-label="Visit Little Lemon on Instagram">Instagram</a></li>
    </ul>
  </nav>
  </section>

      <small>&copy; {new Date().getFullYear()} My App</small>
    </footer>
  );
}

export default Footer;
