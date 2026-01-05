
import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import NewsBoard from "./Components/NewsBoard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ReporterCard from "./Components/ReporterCard";
import "./App.css";


import Reporter2 from "./assets/Reporter 6.jpg";
import Reporter3 from "./assets/Reporter 3.jpg";
import Reporter4 from "./assets/Reporter 4.jpg";
import Reporter5 from "./assets/Reporter2.jpg";
import Reporter6 from "./assets/Reporter 5.jpg";
import Reporter7 from "./assets/Reporter 1.jpg";

const App = () => {
  const [category, setCategory] = useState("technology");

  // Reporter data
  const reporters = [
    { name: "Meera Nair", image: Reporter2, role: "Tech Correspondent" },
    { name: "Ananya Patel", image: Reporter3, role: "Sports Analyst" },
    { name: "Sneha Iyer", image: Reporter4, role: "Health Journalist" },
    { name: "Vikram Singh", image: Reporter5, role: "Entertainment Reporter" },
    { name: "Kunal Rao", image: Reporter6, role: "Business Editor" },
    { name: "Pooja", image: Reporter7, role: "Senior News Anchor" },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);

  // Section refs
  const homeRef = useRef(null);
  const categoryRef = useRef(null);
  const reporterRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Reporter scroll dots
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const pages = Math.ceil(el.scrollWidth / el.clientWidth);
    setTotalDots(pages);
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(page);
  };

  // Scroll to a section
  const scrollToSection = (id) => {
    const refs = {
      home: homeRef,
      category: categoryRef,
      reporter: reporterRef,
      about: aboutRef,
      contact: contactRef,
    };
    const el = refs[id]?.current;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Home / Banner */}
      <div id="home" ref={homeRef}>
        <Banner category={category} />
      </div>

      {/* Category Section */}
      <div id="category" ref={categoryRef}>
        <Categories category={category} setCategory={setCategory} />
      </div>

      {/* Reporter Section */}
      <div id="reporter" ref={reporterRef} className="container mt-5 pt-5">
        <h3 className="mb-3">Meet Our Reporters</h3>
        <div
          className="reporter-scroll"
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ display: "flex", overflowX: "auto", gap: "15px", paddingBottom: "10px" }}
        >
          {reporters.map((reporter, index) => (
            <ReporterCard key={index} reporter={reporter} />
          ))}
        </div>
        <div className="scroll-indicator" style={{ marginTop: "10px", textAlign: "center" }}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${activeIndex === index ? "active" : ""}`}
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: activeIndex === index ? "#3498db" : "#ccc",
                margin: "0 4px",
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" ref={aboutRef}>
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default App;




