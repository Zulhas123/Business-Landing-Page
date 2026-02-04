import React, { useState } from "react";
import "./Categories.css";

// thumbnails
import electronicsThumb from "../../../assets/images/categories/electronics.png";
import fashionThumb from "../../../assets/images/categories/fashion.png";
import homeThumb from "../../../assets/images/categories/home.png";
import beautyThumb from "../../../assets/images/categories/beauty.png";
import sportsThumb from "../../../assets/images/categories/sports.png";
import groceryThumb from "../../../assets/images/categories/grocery.png";
import booksThumb from "../../../assets/images/categories/books.png";
import toysThumb from "../../../assets/images/categories/toys.png";

// electronics images
import e1 from "../../../assets/images/categories/electronics/laptop-1.jpg";
import e2 from "../../../assets/images/categories/electronics/laptop-2.jpg";
import e3 from "../../../assets/images/categories/electronics/laptop-3.jpg";
import e4 from "../../../assets/images/categories/electronics/laptop-4.jpg";
import e5 from "../../../assets/images/categories/electronics/laptop-5.jpg";
import e6 from "../../../assets/images/categories/electronics/laptop-1.jpg";

// fashion images
import f1 from "../../../assets/images/categories/fashion/fashion-1.png";
import f2 from "../../../assets/images/categories/fashion/fashion-2.png";
import f3 from "../../../assets/images/categories/fashion/fashion-3.png";
import f4 from "../../../assets/images/categories/fashion/fashion-4.png";
import f5 from "../../../assets/images/categories/fashion/fashion-5.png";
import f6 from "../../../assets/images/categories/fashion/fashion-1.png";

// home images
import h1 from "../../../assets/images/categories/home/home-1.png";
import h2 from "../../../assets/images/categories/home/home-2.png";
import h3 from "../../../assets/images/categories/home/home-3.png";
import h4 from "../../../assets/images/categories/home/home-4.png";
import h5 from "../../../assets/images/categories/home/home-5.png";
import h6 from "../../../assets/images/categories/home/home-1.png";

// beauty images
import b1 from "../../../assets/images/categories/beauty/beauty-1.png";
import b2 from "../../../assets/images/categories/beauty/beauty-2.png";
import b3 from "../../../assets/images/categories/beauty/beauty-3.png";
import b4 from "../../../assets/images/categories/beauty/beauty-4.png";
import b5 from "../../../assets/images/categories/beauty/beauty-5.png";
import b6 from "../../../assets/images/categories/beauty/beauty-1.png";

// sports images
import s1 from "../../../assets/images/categories/sports/sports-1.png";
import s2 from "../../../assets/images/categories/sports/sports-2.png";
import s3 from "../../../assets/images/categories/sports/sports-3.png";
import s4 from "../../../assets/images/categories/sports/sports-4.png";
import s5 from "../../../assets/images/categories/sports/sports-5.png";
import s6 from "../../../assets/images/categories/sports/sports-1.png";

// grocery images
import g1 from "../../../assets/images/categories/grocery/grocery-1.png";
import g2 from "../../../assets/images/categories/grocery/grocery-2.png";
import g3 from "../../../assets/images/categories/grocery/grocery-3.png";
import g4 from "../../../assets/images/categories/grocery/grocery-4.png";
import g5 from "../../../assets/images/categories/grocery/grocery-5.png";
import g6 from "../../../assets/images/categories/grocery/grocery-1.png";

// books images
import bk1 from "../../../assets/images/categories/books/books-1.png";
import bk2 from "../../../assets/images/categories/books/books-2.png";
import bk3 from "../../../assets/images/categories/books/books-3.png";
import bk4 from "../../../assets/images/categories/books/books-4.png";
import bk5 from "../../../assets/images/categories/books/books-5.png";
import bk6 from "../../../assets/images/categories/books/books-1.png";

// toys images
import t1 from "../../../assets/images/categories/toys/toys-1.png";
import t2 from "../../../assets/images/categories/toys/toys-2.png";
import t3 from "../../../assets/images/categories/toys/toys-1.png";
import t4 from "../../../assets/images/categories/toys/toys-2.png";
import t5 from "../../../assets/images/categories/toys/toys-1.png";
import t6 from "../../../assets/images/categories/toys/toys-2.png";

const categories = [
  {
    id: 1,
    key: "electronics",
    name: "Electronics",
    thumb: electronicsThumb,
    images: [e1, e2, e3, e4, e5,e6],
  },
  {
    id: 2,
    key: "fashion",
    name: "Fashion",
    thumb: fashionThumb,
    images: [f1, f2, f3, f4, f5,f6],
  },
  {
    id: 3,
    key: "home",
    name: "Home & Living",
    thumb: homeThumb,
    images: [h1, h2, h3, h4, h5,h6],
  },
  {
    id: 4,
    key: "beauty",
    name: "Beauty",
    thumb: beautyThumb,
    images: [b1, b2, b3, b4, b5,b6],
  },
  {
    id: 5,
    key: "sports",
    name: "Sports",
    thumb: sportsThumb,
    images: [s1, s2, s3, s4, s5,s6],
  },
  {
    id: 6,
    key: "grocery",
    name: "Groceries",
    thumb: groceryThumb,
    images: [g1, g2, g3, g4, g5,g6],
  },
  {
    id: 7,
    key: "books",
    name: "Books",
    thumb: booksThumb,
    images: [bk1, bk2, bk3, bk4, bk5,bk6],
  },
  {
    id: 8,
    key: "toys",
    name: "Toys",
    thumb: toysThumb,
    images: [t1, t2, t3, t4, t5,t6],
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  const visibleCategories = activeCategory
    ? categories.filter((cat) => cat.key === activeCategory)
    : categories;

  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Shop by Category</h2>
        <p>Browse products across popular categories</p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="category-filter">
        <button
          className={!activeCategory ? "active" : ""}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.key ? "active" : ""}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* CATEGORY GRID */}
      <div className="category-grid">
        {visibleCategories.map((cat) => (
          <div key={cat.id} className="category-card">
            <h4>{cat.name}</h4>

            <div className="category-images">
              {cat.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${cat.name}-${i}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
