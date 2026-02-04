import React from "react";
import "./TrustBadges.css";

const badges = [
  {
    icon: "🔒",
    title: "Secure Payment",
    desc: "100% secure payment",
  },
  {
    icon: "🚚",
    title: "Free Shipping",
    desc: "On all orders",
  },
  {
    icon: "↩",
    title: "Easy Returns",
    desc: "7-day return policy",
  },
  {
    icon: "⭐",
    title: "Trusted by Customers",
    desc: "10,000+ happy users",
  },
];

export default function TrustBadges() {
  return (
    <section className="trust">
      <div className="trust-container">
        {badges.map((badge, index) => (
          <div className="trust-item" key={index}>
            <span className="trust-icon">{badge.icon}</span>
            <div className="trust-text">
              <h4>{badge.title}</h4>
              <p>{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
