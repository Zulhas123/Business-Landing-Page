import React, { useState } from "react";
import ProductCard from "../../product/ProductCard/ProductCard";
import { useCart } from "../../../context/CartContext";
import "./FeaturedProducts.css";

/* ================================
   CATEGORY DATA
================================ */
const categories = [
  { key: "electronics", label: "Electronics" },
  { key: "fashion", label: "Fashion" },
  { key: "home", label: "Home & Living" },
  { key: "beauty", label: "Beauty" },
  { key: "sports", label: "Sports" },
  { key: "grocery", label: "Groceries" },
  { key: "books", label: "Books" },
  { key: "toys", label: "Toys" },
];

/* ================================
   FEATURED PRODUCTS (CATEGORY WISE)
================================ */
const featuredProductsByCategory = {
  electronics: [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 120,
      discountPrice: 99,
      image: "/images/products/headphones.png",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 150,
      discountPrice: 129,
      image: "/images/products/watch.png",
      rating: 4.6,
    },
  ],

  fashion: [
    {
      id: 3,
      title: "Running Shoes",
      price: 90,
      discountPrice: 79,
      image: "/images/products/shoes.png",
      rating: 4.3,
    },
    {
      id: 4,
      title: "Denim Jacket",
      price: 140,
      discountPrice: 119,
      image: "/images/products/jacket.png",
      rating: 4.5,
    },
  ],

  home: [
    {
      id: 5,
      title: "Wooden Chair",
      price: 180,
      discountPrice: 149,
      image: "/images/products/chair.png",
      rating: 4.4,
    },
  ],

  beauty: [
    {
      id: 6,
      title: "Skincare Kit",
      price: 85,
      discountPrice: 69,
      image: "/images/products/skincare.png",
      rating: 4.6,
    },
  ],

  sports: [
    {
      id: 7,
      title: "Yoga Mat",
      price: 50,
      discountPrice: 39,
      image: "/images/products/yogamat.png",
      rating: 4.4,
    },
  ],

  grocery: [
    {
      id: 8,
      title: "Organic Grocery Pack",
      price: 60,
      discountPrice: 49,
      image: "/images/products/grocery.png",
      rating: 4.2,
    },
  ],

  books: [
    {
      id: 9,
      title: "Inspirational Book",
      price: 30,
      discountPrice: 24,
      image: "/images/products/book.png",
      rating: 4.7,
    },
  ],

  toys: [
    {
      id: 10,
      title: "Wooden Toy Set",
      price: 55,
      discountPrice: 45,
      image: "/images/products/toy.png",
      rating: 4.6,
    },
  ],
};

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("electronics");
  const { addToCart } = useCart(); 

  return (
    <section className="featured-products">
      <div className="featured-header">
        <h2>Featured Products</h2>
        <p>Top products from each category, selected for you</p>
      </div>

      {/* CATEGORY TABS */}
      <div className="featured-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={activeCategory === cat.key ? "active" : ""}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {featuredProductsByCategory[activeCategory].map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    </section>
  );
}
