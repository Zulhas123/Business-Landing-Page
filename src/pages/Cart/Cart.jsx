import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />

          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>${item.discountPrice}</p>

            <div className="qty">
              <button
                onClick={() =>
                  updateQty(item.id, Math.max(1, item.qty - 1))
                }
              >
                −
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="remove"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
