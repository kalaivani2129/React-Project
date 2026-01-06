import React from "react";
import "./Banner.css";
import bannerImage from "../assets/banner.jpg";

const Banner = () => {
  const categories = [
    "Technology",
    "Sports",
    "Health",
    "Entertainment",
    "Business",
  ];

  return (
    <section className="banner">
      <img src={bannerImage} alt="News Banner" className="banner-img" />
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">
            Breaking Stories.
            <br />
            Real Insights.
          </h1>

          <p className="banner-subtitle">
            Trusted news from technology, business, sports & beyond.
          </p>

          <div className="banner-categories">
            {categories.map((cat) => (
              <button key={cat} className="category-btn">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

