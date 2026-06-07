import React, { useState, useEffect } from "react";
import "./Header.css";
import foodHeader from "../assets/foodHeader.png";
import biryaniHeader from "../assets/biryaniHeader.png";
import drinkHeader from "../assets/drinkHeader.png";

const slides = [
  {
    title: "Savor the Freshness of Organic Greens",
    description: "Our handpicked organic salads are crafted with seasonal farm-fresh ingredients to bring you nutrient-rich deliciousness.",
    image: foodHeader,
    badge: "Fresh & Healthy",
    themeColor: "#008000",
    bgColor: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)"
  },
  {
    title: "Indulge in Rich & Aromatic Flavors",
    description: "Experience the legacy of authentic Indian spices with our steaming, slow-cooked clay pot biryanis.",
    image: biryaniHeader,
    badge: "Chef Special",
    themeColor: "#15803d",
    bgColor: "linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)"
  },
  {
    title: "Quench Your Thirst with Mocktails",
    description: "Cool down with our refreshing, hand-muddled lime and mint mojitos made to order.",
    image: drinkHeader,
    badge: "Cooling Drinks",
    themeColor: "#16a34a",
    bgColor: "linear-gradient(135deg, #f0fdf4 0%, #c8e6c9 100%)"
  }
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="header" style={{
      background: slide.bgColor,
      borderColor: `${slide.themeColor}20`
    }}>
      <div className="header-left">
        <span className="slide-badge" style={{
          backgroundColor: `${slide.themeColor}15`,
          color: slide.themeColor
        }}>
          {slide.badge}
        </span>
        <h1 className="slide-title">
          {slide.title}
        </h1>
        <p className="slide-desc">
          {slide.description}
        </p>
        <button className="order-btn" style={{
          backgroundColor: slide.themeColor,
          boxShadow: `0 8px 20px ${slide.themeColor}20`
        }}>
          Order Now
        </button>
      </div>
      <div className="header-right">
        <div className="slideshow-container">
          <div className="main-image-wrapper">
            <img src={slide.image} alt={slide.title} className="slide-image animate-slide" key={current} />
          </div>
          <div className="thumbnail-track">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`thumbnail-item ${idx === current ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
                style={{
                  borderColor: idx === current ? s.themeColor : "transparent"
                }}
              >
                <img src={s.image} alt="Thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
