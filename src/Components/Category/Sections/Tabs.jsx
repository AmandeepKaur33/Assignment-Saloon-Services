import React, { useState, useRef } from "react";
import "../../../Tabs.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Color Services");
  const sliderRef = useRef(null);

  const tabs = [
    "Color Services",
    "Natural Hairstyling",
    "Relaxer/Texturizer/Keratin",
    "Extensions",
    "Special Services",
    "Natural Hairstyling",
    "Relaxer/Texturizer/Keratin",
    "Extensions",
    "Special Services", // Example of more tabs
  ];

  const services = {
    "Color Services": [
      {
        title: "NEW SINGLE PROCESS WITH FULL HEAD HIGHLIGHTS",
        duration: "2 hrs, 30 mins",
        price: "$495",
        description: "This process completely changes your hair color to brown, with a full head of highlights.",
      },
      {
        title: "NEW FULL HEAD HIGHLIGHTS",
        duration: "2 hrs, 30 mins",
        price: "$410",
        description: "A full head of highlights to make hair blonde, golden, or soft brown. Natural hair.",
      },
      {
        title: "BLONDE HIGHLIGHTS (Half Head Highlights)",
        duration: "2 hrs, 30 mins",
        price: "from $175",
        description: "A half head of highlights to make hair blonde, golden, or soft brown. Natural hair.",
      },
      // Add more services as needed
    ],
    "Natural Hairstyling": [
      { title: "NATURAL STYLE 1", duration: "1 hr", price: "$100", description: "Natural hairstyling description." },
      // Add more services as needed
    ],
    "Relaxer/Texturizer/Keratin": [
      { title: "RELAXER FULL HEAD", duration: "2 hrs", price: "$150", description: "Full head relaxer service." },
      // Add more services as needed
    ],
    Extensions: [
      { title: "EXTENSIONS FULL HEAD", duration: "3 hrs", price: "$300", description: "Full head extension service." },
      // Add more services as needed
    ],
    "Special Services": [
      { title: "SPECIAL SERVICE 1", duration: "1 hr", price: "$250", description: "Special service description." },
      // Add more services as needed
    ],
  };

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 150;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 150;
  };

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="tabs" ref={sliderRef}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      <div className="content">
        <h2>{activeTab}</h2>
        <div className="services">
          {services[activeTab].map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.duration}</p>
              <p>{service.price}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;