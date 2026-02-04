import React, { useEffect, useState } from "react";
import ProductCard from "../../product/ProductCard/ProductCard";
import "./FlashSale.css";

const flashProducts = [
  {
    id: 101,
    title: "Gaming Mouse",
    price: 60,
    discountPrice: 39,
    image: "/images/products/mouse.png",
  },
  {
    id: 102,
    title: "Mechanical Keyboard",
    price: 120,
    discountPrice: 89,
    image: "/images/products/keyboard.png",
  },
  {
    id: 103,
    title: "Noise Cancelling Headset",
    price: 180,
    discountPrice: 139,
    image: "/images/products/headset.png",
  },
];

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flash-sale">
      <div className="flash-header">
        <h2>⚡ Flash Sale</h2>
        <div className="countdown">
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>

      <div className="flash-products">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

/* Helpers */
function getRemainingTime() {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 6); // 6-hour sale

  const diff = endTime - new Date();

  return {
    hours: format(Math.floor(diff / (1000 * 60 * 60))),
    minutes: format(Math.floor((diff / (1000 * 60)) % 60)),
    seconds: format(Math.floor((diff / 1000) % 60)),
  };
}

function format(num) {
  return String(num).padStart(2, "0");
}

function TimeBox({ label, value }) {
  return (
    <div className="time-box">
      <span className="time">{value}</span>
      <span className="label">{label}</span>
    </div>
  );
}
