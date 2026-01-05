
import React, { useState, useEffect } from "react";
import "./NewsItem.css";
import newsPlaceholder from "../assets/news-placeholder.jpg";
import techPlaceholder from "../assets/tech-placeholder.jpg";
import businessPlaceholder from "../assets/business-placeholder.jpg";
import healthPlaceholder from "../assets/health-placeholder.jpg";
import sportsPlaceholder from "../assets/sports-placeholder.jpg";
import entertainmentPlaceholder from "../assets/entertainment-placeholder.jpg";

const placeholders = {
  technology: techPlaceholder,
  business: businessPlaceholder,
  health: healthPlaceholder,
  sports: sportsPlaceholder,
  entertainment: entertainmentPlaceholder,
};

const NewsItem = ({ title, description, src, category, url, publishedAt }) => {
  const imageSrc =
    src && src.startsWith("http")
      ? src
      : placeholders[category] || newsPlaceholder;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : "";

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSaved(savedNews.some((item) => item.url === url));
  }, [url]);

  const handleBookmark = () => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];

    if (saved) {
      const updated = savedNews.filter((item) => item.url !== url);
      localStorage.setItem("savedNews", JSON.stringify(updated));
      setSaved(false);
    } else {
      const newItem = { title, description, src, category, url, publishedAt };
      localStorage.setItem(
        "savedNews",
        JSON.stringify([...savedNews, newItem])
      );
      setSaved(true);
    }
  };

  return (
    <div className="card bg-dark text-light news-card">
      {category && (
        <span className={`news-badge ${category}`}>{category}</span>
      )}

      <img
        src={imageSrc}
        onError={(e) => {
          e.target.src = placeholders[category] || newsPlaceholder;
        }}
        className="card-img-top"
        alt={title || "news"}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />

      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>

        <p className="card-text">
          {description ? description.slice(0, 90) : "No Description"}
        </p>

        {formattedDate && (
          <small className="text-muted">
            Published: {formattedDate}
          </small>
        )}

        <br />

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-button read-more"
        >
          Read More
        </a>

        <button
          onClick={handleBookmark}
          className={`news-button save ${saved ? "saved" : ""}`}
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
