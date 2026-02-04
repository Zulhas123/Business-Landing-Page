import React from "react";
import "./Checkout.css";

export default function Checkout() {
  return (
    <section className="checkout">
      <h2>Checkout</h2>

      <form>
        <input placeholder="Full Name" />
        <input placeholder="Address" />
        <input placeholder="Card Number" />
        <button>Place Order</button>
      </form>
    </section>
  );
}
