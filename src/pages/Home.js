// File: src/pages/Home.js
import React from "react";
import "./Home.css";

export default function Home() {
  const sampleImages = [
    "https://res.cloudinary.com/demo/image/upload/v1690000000/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1690000001/another-sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1690000002/esther_perel_sample3.jpg",
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>John Doe</h1>
          <h2>Therapist • Author • Speaker</h2>
          <p>
            Exploring the complex cultural and relational shifts that shape modern love and desire.
          </p>
          <button className="cta-button">Discover More</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>My Work in Relationships &amp; Communication</h2>
        <p>
          With years of experience in couples therapy and a passion for understanding the human condition, I focus on how we relate and connect with each other.
        </p>
      </div>

      {/* Books Section */}
      <div className="books-section">
        <h2>Books &amp; Publications</h2>
        <div className="book-grid">
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/demo/image/upload/w_200,h_300/v1/mating_in_captivity.jpg"
              alt="Mating in Captivity"
            />
            <h4>Mating in Captivity</h4>
            <p>Unlocking erotic intelligence in long-term relationships.</p>
            <button className="visit-page-button">Visit Page</button>
          </div>
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/demo/image/upload/w_200,h_300/v1/the_state_of_affairs.jpg"
              alt="The State of Affairs"
            />
            <h4>The State of Affairs</h4>
            <p>Rethinking infidelity and the meaning of trust.</p>
            <button className="visit-page-button">Visit Page</button>
          </div>
        </div>
      </div>

      {/* Sample Images Section */}
      <div className="sample-images-section">
        <h2>Gallery</h2>
        <div className="image-gallery">
          {sampleImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sample ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>

      {/* Speaking Section */}
      <div className="speaking-section">
        <h2>Keynotes &amp; Events</h2>
        <ul>
          <li>Global Leadership Summit</li>
          <li>Modern Love Conference</li>
          <li>Therapy Innovators Forum</li>
        </ul>
      </div>
    </div>
  );
}
