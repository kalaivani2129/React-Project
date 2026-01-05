import React from "react";
import "./About.css";
import newsImg from "../assets/Banner.jpg";

const About = () => {
  return (
    <section className="lux-about" id="about">
      <div className="lux-container">

        <p className="lux-subtitle">ABOUT US</p>
        <h1 className="lux-title">Delivering Truth Since 2024</h1>

        <div className="lux-grid">

          {/* LEFT */}
          <div className="lux-card left">
            <h2>Our Story</h2>
            <p>
              NewsMag was created with a simple mission — to make reliable news
              accessible to everyone. In a world of information overload, we
              focus on clarity, accuracy, and relevance.
            </p>
            <p>
              What started as a passion project has evolved into a modern news
              platform covering technology, business, health, sports, and
              entertainment — all in one place.
            </p>
            <button className="lux-btn">Learn More</button>
          </div>

          {/* CENTER IMAGE */}
          <div className="lux-image">
            <img src={newsImg} alt="News Illustration" />
          </div>

          {/* RIGHT */}
          <div className="lux-card right">
            <h2>Our Vision</h2>
            <ul>
              <li>✔ Accurate & verified reporting</li>
              <li>✔ Clean and distraction-free reading</li>
              <li>✔ News that matters, delivered fast</li>
            </ul>
            <button className="lux-btn">Learn More</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;