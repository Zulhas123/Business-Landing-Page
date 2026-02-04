import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to get special offers and updates</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed successfully!");
        }}
      >
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
