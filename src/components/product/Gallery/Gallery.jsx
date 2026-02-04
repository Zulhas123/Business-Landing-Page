import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div className="gallery-main">
        <img src={activeImage} alt="Product preview" />
      </div>

      {/* Thumbnails */}
      <div className="gallery-thumbs">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={img === activeImage ? "active" : ""}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
