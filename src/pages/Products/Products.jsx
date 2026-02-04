import React, { useState } from "react";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import "./Products.css";

const mockProducts = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Headphone", price: 99 },
  { id: 3, title: "Keyboard", price: 150 },
];

export default function Products() {
  const [sort, setSort] = useState("default");

  return (
    <section className="products-page">
      <h2>All Products</h2>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
      </select>

      <div className="product-grid">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
