// File: src/pages/Home.js
import React from "react";
import "./Home.css";

export default function Home() {


  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Helia Jamshidi</h1>
          <h2>Freelance Software Engineer • Creator • Tango Dancer</h2>
          <p>
            Starting entrepreneurial journey, and supporting myself with freelancing at the moment.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>Building community</h2>

        <p>
          Hi. This is Helia. Welcome to my digital space. This is not a portfolio website please vitit the work tab for that. 
          This is my attempt to occupy a digital space as a human, not just a professional. 
          I’m training myself to publish awful first drafts, and since I started this website in February of 2025, it’s still awful—but I’m committed to exposing this first draft.
        </p>
        <p>
          I know most of you don’t have a lot of time. That’s okay. My target reader is the rare person—maybe one in a hundred—who wants to make time for me in their life. 
          The purpose of this homepage is to explain who I am and what I desire most from you, and how I can include you in my life.
        </p>
        <p>
          I’m an Iranian born and raised woman. I moved to Holland when I was 23, and two days later I moved to Karlsruhe, Germany, where I’ve now lived for more than four years. 
          After all this time, I have a happy personal life, but my connection to the city and the people around me remains minimal, and I want that to change. 
          This website is here to give you a taste of me so you can decide if you want to be part of my future—if you want to be a friend, if you want to get to know me, 
          if you want me to get to know you, or if we can do something together and stay connected.
        </p>
        <p>
          I once spent a week in Lisbon and two weeks in Berlin, and I met so many people so fast. It made me sad to realize how much more spark 
          I had in those short trips than I’ve had in four years in Karlsruhe. It feels like something I can change, and I’m determined to try.
        </p>
        <p>
          Another reason I’ve made this space is that repeating my life story every time I meet a new person takes ages, and I want to experiment 
          with accelerating past that introductory phase. I like the idea of skipping the basics, finding people who already know my context, 
          who understand where I need to be understood, and who want to share themselves in return.
        </p>

        <h3>On Conversations</h3>
        <p>
          A crucial thing to know about me as a friend is that I crave deeper connections. Small talk drains me. 
          I want to talk about real stuff—feelings, aspirations, the juicy things in life. I want us to discover new things about each other 
          and ourselves in real time. That kind of conversation energizes me.
        </p>
        <p>
          Ironically, though I love conversation, I don’t always feel connected through words alone. 
          I’ve never felt the most connection with the people who “get” me the most intellectually. 
          My closest bonds often form through physical presence—through affectionate contact. Touch makes me feel accepted, normal, and seen. 
          I know that’s not how everyone feels, but it’s my physiology. Relationships without any physical dimension have been very meaningful to me, 
          but they often leave me with a hole where that closeness should be.
        </p>

        <h3>On Curiosity</h3>
        <p>
          I’m often perceived as curious and optimistic. I don’t usually go super deep into a single topic, but I love diving into the basics of almost anything. 
          I’ve done countless random presentations—about the history of potatoes in Europe, about pirate ship economies and rules, 
          about animal reproduction theories and bizarre anatomy (like certain ducks’ 42 cm corkscrew-shaped penises). 
          I’m fascinated by these weird facts and how they reflect on evolution and the human mind, even if I don’t become an expert in them.
        </p>

        <h3>On Doing Stuff Together</h3>
        <p>
          Another underrated way I connect is simply by doing things with people. Since most of my friends are long-distance, we mostly talk when we do connect, 
          but I really miss shared activities like hiking, cooking, or reading together. Beyond that, I crave collaboration. 
          I’ve never truly had a partner in crime for creative, software, art, or event projects. The last time I experienced anything like that outside my company was when I was 18, and I miss it.
        </p>
      </div>

      {/* Books Section */}
      <div className="books-section">
        <h2>Favorite Books &amp; Podcats</h2>
        <div className="book-grid">
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/EconTalk_viuikc.png"
              alt="Mating in Captivity"
            />
            <h4>EconTalk</h4>
            <p>Been a listener for ten years. Has strongly shaped my world view.</p>
            {/*<button className="visit-page-button">Visit Page</button>*/}
          </div>
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/ab6765630000ba8addba47c1c103baae10e6b258_dw8jqq.jpg"
              alt="The State of Affairs"
            />
            <h4>Conversations with Tyler</h4>
            <p>Tyler has an unmatched depth and breadth about cultur.</p>
            {/*<button className="visit-page-button">Visit Page</button>*/}
          </div>
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/unnamed_ynerzm.jpg"
              alt="The State of Affairs"
            />
            <h4>Come As You Are</h4>
            <p>The one book I would wish everyone would read. The book feels like a warm hug.</p>
            {/*<button className="visit-page-button">Visit Page</button>*/}
          </div>
          <div className="book-card">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/919lXZEzvIL._SL1500__gs9gfk"
              alt="How Emotions Are Made"
            />
            <h4>How Emotions Are Made</h4>
            <p>I had the feeling Lisa Feldman went to great lengths to prove herself wrong—a rare trait among scientists in complex fields.</p>
            {/*<button className="visit-page-button">Visit Page</button>*/}
          </div>
        </div>
      </div>

      {/* Sample Images Section */}
      <div className="sample-images-section">
        <h2>Projects</h2>
        <div className="image-gallery">
        <a href="https://jous.app" target="_blank" rel="noopener noreferrer">
            <img
              key={0}
              src={"https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738794201/Screenshot_2025-01-29_210213_amqqyk.png"}
              alt={`Sample 1`}
              className="gallery-image"
            />
            </a>
        </div>
      </div>

      {/* Speaking Section 
      <div className="speaking-section">
        <h2>Keynotes &amp; Events</h2>
        <ul>
          <li>Global Leadership Summit</li>
          <li>Modern Love Conference</li>
          <li>Therapy Innovators Forum</li>
        </ul>
      </div>*/}
    </div>
  );
}
