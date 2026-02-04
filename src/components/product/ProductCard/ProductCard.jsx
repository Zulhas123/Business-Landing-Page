import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <div className="price">
        <span className="discount">${product.discountPrice}</span>
        <span className="original">${product.price}</span>
      </div>

      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
