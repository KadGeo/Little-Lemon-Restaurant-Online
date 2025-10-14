import React from 'react';

const items = [
  { name: 'Sophia', text: 'Absolutely delicious!', rating: 5 },
  { name: 'Liam', text: 'Fresh flavors and friendly service.', rating: 5 },
  { name: 'Maya', text: 'Best Mediterranean spot in town.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="sr-only">Customer Testimonials</h2>
      {items.map((t, i) => (
        <article className="card" key={i} aria-label={`Testimonial from ${t.name}`}>
          <div className="card__rating" aria-label={`Rating: ${t.rating} out of 5 stars`} role="img">
            {'★'.repeat(t.rating)}
          </div>
          <div className="card__body">
            <img
              src={`https://i.pravatar.cc/80?img=${i + 11}`}
              alt={`${t.name}'s avatar`}
            />
            <div>
              <strong>{t.name}</strong>
              <p className="muted">{t.text}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
