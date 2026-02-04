import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    comment: "Amazing quality and fast delivery. Highly recommended!",
  },
  {
    name: "Sarah Smith",
    comment: "Great customer support and smooth checkout experience.",
  },
  {
    name: "Michael Lee",
    comment: "Best online shopping experience I've had.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>“{t.comment}”</p>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
