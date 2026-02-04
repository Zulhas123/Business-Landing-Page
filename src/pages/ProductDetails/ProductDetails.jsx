import React from "react";
import Gallery from "../../components/product/Gallery/Gallery.jsx";
import SpecsTable from "../../components/product/SpecsTable/SpecsTable";
import Reviews from "../../components/product/Reviews/Reviews.jsx";
import QA from "../../components/product/QA/QA";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <section className="product-details">
      <div className="details-top">
        <Gallery />
        <div className="product-info">
          <h1>Wireless Headphones</h1>
          <p className="price">$99 <span>$120</span></p>
          <p className="stock">In Stock</p>

          <button className="add-cart">Add to Cart</button>

          <p className="description">
            High-quality wireless headphones with noise cancellation and long battery life.
          </p>
        </div>
      </div>

      <SpecsTable />
      <Reviews />
      <QA />
    </section>
  );
}
