import React from 'react';

const items = [
  { name: 'Sophia', text: 'Absolutely delicious!', rating: 5 },
  { name: 'Liam', text: 'Fresh flavors and friendly service.', rating: 5 },
  { name: 'Maya', text: 'Best Mediterranean spot in town.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      {items.map((t, i) => (
        <article className="card" key={i}>
          <div className="card__rating">{'★'.repeat(t.rating)}</div>
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
