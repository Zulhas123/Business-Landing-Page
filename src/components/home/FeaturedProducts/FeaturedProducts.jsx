import React, { useState } from "react";
import ProductCard from "../../product/ProductCard/ProductCard";
import { useCart } from "../../../context/CartContext";
import "./FeaturedProducts.css";

/* ================================
   IMAGE IMPORTS (VITE REQUIRED)
================================ */
import headphone1 from "../../../assets/images/products/headphone-1.jpg";
import headphone2 from "../../../assets/images/products/headphone-2.jpg";
import headphone3 from "../../../assets/images/products/headphone-3.jpg";
import headphone4 from "../../../assets/images/products/headphone-4.jpg";
import headphone5 from "../../../assets/images/products/headphone-5.jpg";
import headphone6 from "../../../assets/images/products/headphone-6.jpg";
import headphone7 from "../../../assets/images/products/headphone-7.jpg";
import headphone8 from "../../../assets/images/products/headphone-8.jpg";
import headphone9 from "../../../assets/images/products/headphone-9.jpg";
import headphone10 from "../../../assets/images/products/headphone-10.jpg";
import headphone11 from "../../../assets/images/products/headphone-11.jpg";
import headphone12 from "../../../assets/images/products/headphone-12.jpg";
import headphone13 from "../../../assets/images/products/headphone-13.jpg";

import watch1 from "../../../assets/images/products/watch-1.jpg";
import watch2 from "../../../assets/images/products/watch-2.jpg";
import watch3 from "../../../assets/images/products/watch-3.jpg";
import watch4 from "../../../assets/images/products/watch-4.jpg";
import watch5 from "../../../assets/images/products/watch-5.jpg";
import watch6 from "../../../assets/images/products/watch-6.jpg";
import watch7 from "../../../assets/images/products/watch-7.jpg";
import watch8 from "../../../assets/images/products/watch-8.jpg";
import watch9 from "../../../assets/images/products/watch-9.jpg";
import watch10 from "../../../assets/images/products/watch-10.jpg";

import shoes from "../../../assets/images/products/shoes.jpg";
import jacket from "../../../assets/images/products/jacket.jpg";
import chair from "../../../assets/images/products/chair.jpg";
import grocery from "../../../assets/images/products/grocery.png";
import book from "../../../assets/images/products/books-1.png";
import toy from "../../../assets/images/products/toys-1.png";

/* ================================
   CATEGORY TABS
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
   FEATURED PRODUCTS
================================ */
const featuredProductsByCategory = {
  electronics: [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 120,
      discountPrice: 99,
      image: headphone1,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 120,
      discountPrice: 99,
      image: headphone2,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 120,
      discountPrice: 99,
      image: headphone3,
      rating: 4.5,
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 150,
      discountPrice: 129,
      image: watch1,
      rating: 4.6,
    },
    {
      id: 5,
      title: "Smart Watch",
      price: 150,
      discountPrice: 129,
      image: watch2,
      rating: 4.6,
    },
  ],

  fashion: [
    {
      id: 1,
      title: "Running Shoes",
      price: 90,
      discountPrice: 79,
      image: shoes,
      rating: 4.3,
    },
    {
      id: 2,
      title: "Denim Jacket",
      price: 140,
      discountPrice: 119,
      image: jacket,
      rating: 4.5,
    },
  ],

  home: [
    {
      id: 1,
      title: "Wooden Chair",
      price: 180,
      discountPrice: 149,
      image: chair,
      rating: 4.4,
    },
  ],

  beauty: [
    {
      id: 1,
      title: "Skincare Kit",
      price: 85,
      discountPrice: 69,
      image: jacket,
      rating: 4.6,
    },
  ],

  sports: [
    {
      id: 1,
      title: "Yoga Mat",
      price: 50,
      discountPrice: 39,
      image: jacket,
      rating: 4.4,
    },
  ],

  grocery: [
    {
      id: 1,
      title: "Organic Grocery Pack",
      price: 60,
      discountPrice: 49,
      image: grocery,
      rating: 4.2,
    },
  ],

  books: [
    {
      id: 1,
      title: "Inspirational Book",
      price: 30,
      discountPrice: 24,
      image: book,
      rating: 4.7,
    },
  ],

  toys: [
    {
      id: 1,
      title: "Wooden Toy Set",
      price: 55,
      discountPrice: 45,
      image: toy,
      rating: 4.6,
    },
  ],
};

/* ================================
   COMPONENT
================================ */
export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("electronics");
  const { addToCart } = useCart();

  const products = featuredProductsByCategory[activeCategory] || [];

  return (
    <section className="featured-products">
      {/* HEADER */}
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
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={`${activeCategory}-${product.id}`}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <p className="no-products">No products available</p>
        )}
      </div>
    </section>
  );
}
