import React, { useState, useEffect } from "react";
import "./BannerSlider.css";

const banners = [
  {
    id: 1,
    title: "Big Sale 50% Off",
    subtitle: "Limited time offer on electronics",
    image: "/images/banners/banner1.jpg",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Latest fashion collections",
    image: "/images/banners/banner2.jpg",
  },
  {
    id: 3,
    title: "Free Shipping",
    subtitle: "On orders over $99",
    image: "/images/banners/banner3.jpg",
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-slider">
      <div
        className="banner"
        style={{ backgroundImage: `url(${banners[index].image})` }}
      >
        <div className="banner-overlay">
          <h2>{banners[index].title}</h2>
          <p>{banners[index].subtitle}</p>
        </div>
      </div>
    </section>
  );
}
