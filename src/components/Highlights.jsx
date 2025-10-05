import React from 'react';

export default function Highlights() {
  return (
    <section id="highlights" className="highlights">
      <h2 className="section-title">Today’s Special</h2>

      <div className="special">
        <figure className="special__image">
          <img
            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/10/20/YK506_Pan-Seared-Chilean-Sea-Bass-with-Frisee-and-Ponzu-Butter_s4x3.jpg.rend.hgtvcom.406.305.suffix/1634744302321.webp"
            alt="Grilled Sea Bass with Citrus Couscous"
          />
        </figure>

        <div className="special__details">
          <h3>Grilled Sea Bass &amp; Citrus Couscous</h3>
          <p className="muted">
            Fresh sea bass with olive oil and herbs, served with lemon-infused
            couscous and seasonal vegetables.
          </p>
          <p className="price">$19.95</p>
        </div>
      </div>
    </section>
  );
}
