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
  { label: "Second Date", route: "/projects/second-date" },
  { label: "Tango Diario", route: "/projects/tango-diario" },
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
          content="Helia Jamshidi projects, Jous, Emotion Explorer, Second Date, Tango Diario"
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
          <div className="project-item">
            <iframe
              src="https://jous.app"
              title="Jous preview"
              className="app-iframe"
            ></iframe>
            <a href="https://jous.app" target="_blank" rel="noopener noreferrer">
              <button className="visit-page-button">Open Jous</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondDate() {
  return (
    <div>
      <Helmet>
        <title>Second Date | Helia Jamshidi</title>
        <meta
          name="description"
          content="Swipe through fun date ideas contributed by the community."
        />
        <meta property="og:title" content="Second Date | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Explore Helia's experiment to make dating less like work."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects/second-date" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects/second-date" />
      </Helmet>
      <h1>Second Date</h1>
      <p>Swipe-based collection of first-date ideas aimed at making dates playful and engaging.</p>
      <div className="sample-images-section">
        <div className="image-gallery" >
          <div className="project-item">
            <iframe
              src="https://seconddate.date/swipe"
              title="Second Date preview"
              className="app-iframe"
            ></iframe>
            <a href="https://seconddate.date/swipe" target="_blank" rel="noopener noreferrer">
              <button className="visit-page-button">Open Second Date</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TangoDiario() {
  return (
    <div>
      <Helmet>
        <title>Tango Diario | Helia Jamshidi</title>
        <meta
          name="description"
          content="A daily five-minute practice tool for tango musicality."
        />
        <meta property="og:title" content="Tango Diario | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Practice tango musicality step by step with weekly topics."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects/tango-diario" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects/tango-diario" />
      </Helmet>
      <h1>Tango Diario</h1>
      <p>Practice tango musicality with short daily exercises and weekly themes.</p>
      <div className="sample-images-section">
        <div className="image-gallery" >
          <div className="project-item">
            <iframe
              src="https://tango-diario.com/"
              title="Tango Diario preview"
              className="app-iframe"
            ></iframe>
            <a href="https://tango-diario.com/" target="_blank" rel="noopener noreferrer">
              <button className="visit-page-button">Open Tango Diario</button>
            </a>
          </div>
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
          <Route path="/second-date" element={<SecondDate />} />
          <Route path="/tango-diario" element={<TangoDiario />} />
        </Routes>
      </div>}
    </div>
  );
}
