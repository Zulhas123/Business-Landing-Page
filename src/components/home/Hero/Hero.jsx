import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";

import img1 from "../../../assets/images/laptop-1.jpg";
import img2 from "../../../assets/images/laptop-2.jpg";
import img3 from "../../../assets/images/laptop-3.jpg";
import img4 from "../../../assets/images/laptop-4.jpg";
import img5 from "../../../assets/images/laptop-5.jpg";
import img6 from "../../../assets/images/laptop-6.jpg";
import img7 from "../../../assets/images/laptop-7.jpg";
import img8 from "../../../assets/images/laptop-8.jpg";
import img9 from "../../../assets/images/laptop-9.jpg";
import img10 from "../../../assets/images/laptop-10.jpg";

import "./Hero.css";

const heroImages = [img1, img2, img3, img4, img5,img6,img7,img8,img9,img10,];

export default function Hero() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🔥 Trusted by 10,000+ Customers</span>

        <h1>
          Shop Smarter. <br />
          <span>Live Better.</span>
        </h1>

        <p>
          Discover premium-quality products at unbeatable prices.
          Enjoy fast delivery, secure payments, and hassle-free returns — all in one place.
        </p>

        <div className="hero-actions">
          <Button variant="primary" onClick={() => navigate("/products")}>
            Shop Now
          </Button>
          <Button variant="secondary" onClick={() => navigate("/about")}>
            Learn More
          </Button>
        </div>

        <div className="hero-trust">
          <div>🔒 Secure Payment</div>
          <div>🚚 Free Shipping</div>
          <div>↩ Easy Returns</div>
        </div>
      </div>

      {/* IMAGE SHOWCASE */}
      <div className="hero-image">
        <img
          src={heroImages[activeIndex]}
          alt="Featured product preview"
          loading="lazy"
        />

        {/* DOT INDICATORS */}
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
