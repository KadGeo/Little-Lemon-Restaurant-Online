import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">Little Lemon</h1>
        <p className="hero__lead">
          Fresh Mediterranean flavors, seasonal produce, and warm hospitality.
        </p>
        <a className="btn" href="#highlights" aria-label="Book a table at Little Lemon restaurant">Book a Table</a>
      </div>
      <figure className="hero__image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
          alt="A beautifully set table with food"
        />
      </figure>
    </section>
  );
}
