// File: src/pages/Projects.js
import React, { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import "./Projects.css"

const projectItems = [
  { label: "Jous", route: "/projects/jous" },
  { label: "Emotion Explorer", route: "/projects/emotion-explorer" },
];

function ProjectsHome() {
  return (
    <div>
      <Helmet>
        <title>Projects | Helia Jamshidi</title>
        <meta
          name="description"
          content="Overview of personal and experimental projects by Helia Jamshidi."
        />
        <meta
          name="keywords"
          content="Helia Jamshidi projects, Jous, Emotion Explorer"
        />
        <meta property="og:title" content="Projects | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Discover apps and tools Helia is building or experimenting with."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects" />
      </Helmet>
      <h2>Projects Overview</h2>
      <p>Choose a project to findout more about it.</p>
    </div>
  );
}

function Jous() {
  return (
    <div>
      <Helmet>
        <title>Jous Conversation Cards | Helia Jamshidi</title>
        <meta
          name="description"
          content="Community app with conversation questions to spark meaningful dialogue."
        />
        <meta property="og:title" content="Jous Conversation Cards | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Discover Jous, an app for avoiding small talk and connecting over thoughtful questions."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects/jous" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects/jous" />
      </Helmet>
      <h1>Jous Conversation Cards</h1>
      <p>This App is for people trying to avoid small talk. It is a cozy community for questions that spark conversations. But it is not Reddit! To answer questions in Jous, you should search inward, inside yourself. For families, friends, dates, and strangers. Anyone can share questions on Jous, the question set changes daily.</p>
      <div className="sample-images-section">
        <div className="image-gallery" >
          <a href="https://jous.app" target="_blank" rel="noopener noreferrer">
            <img
              key={0}
              src="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738794201/Screenshot_2025-01-29_210213_amqqyk.png"
              alt="Sample 1"
              className="gallery-image"
              style={{width: "50rem", maxWidth: "90%"}}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function EmotionResolver() {
  const [emotion, setEmotion] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const quickEmotions = ['Calm', 'Angry', 'Bitter'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('/api/emotion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emotion })
      });
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Emotion Explorer | Helia Jamshidi</title>
        <meta
          name="description"
          content="Tool to discover nuanced emotions and their cultural context."
        />
        <meta property="og:title" content="Emotion Explorer | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Find more specific words for how you feel using this simple app."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects/emotion-explorer" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects/emotion-explorer" />
      </Helmet>
      <h1>Emotion Explorer</h1>
      <h4 style={{textAlign: "center", marginTop:"0px", marginBottom:"3rem"}}>Find out similar but more specific emotions from other cultures</h4>

      <div className="quick-emotions">
        {quickEmotions.map((item) => (
          <button key={item} type="button" className="quick-btn" onClick={() => setEmotion(item)}>
            {item}
          </button>
        ))}
      </div>

      <form className="emotion-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          className="emotion-input"
        />
        <button type="submit" className="submit-btn" disabled={loading || !emotion.trim()}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>

      {result && (
        <div className="result">
          <p className="result-intro">{result.intro}</p>
          <div className="emotion-grid">
            {result.emotions.map((item, idx) => (
              <div key={idx} className="emotion-card">
                <h3>{item.name}</h3>
                <h4>{item.language}</h4>
                <p>{item.meaning}</p>
                <p className="cultural-context">
                  <strong>Cultural context:</strong> {item['cultural context']}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects({isMobile}) {
    const {contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);
  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) && 
      <SecondarySidebarBasic heading="Projects" items={projectItems} />}
      {(!isMobile || contentIsVisibleMobile) && 
      <div className="content-area">
        <Routes>
          <Route path="/" element={<ProjectsHome />} />
          <Route path="/jous" element={<Jous />} />
          <Route path="/emotion-explorer" element={<EmotionResolver />} />
        </Routes>
      </div>}
    </div>
  );
}
