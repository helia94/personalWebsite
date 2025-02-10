// File: src/pages/Projects.js
import React, { useState } from "react";
import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";

const projectItems = [
  { label: "Jous", route: "/projects/jous" },
  { label: "Emotion Explorer", route: "/projects/emotion-xxplorer" },
];

function ProjectsHome() {
  return (
    <div>
      <h2>Projects Overview</h2>
      <p>Choose a project to findout more about it.</p>
    </div>
  );
}

function Jous() {
  return (
    <div>
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
        if (response.ok) {
          const data = await response.json();
          setResult(data);
        } else {
          console.error('Server error');
        }
      } catch (error) {
        console.error('Request failed:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const quickEmotions = ['Calm', 'Angry', 'Bitter'];
  
    return (
      <div className="ama-container">
        <h1>Emotion Explorer</h1>
  
        {/* Quick Emotions */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {quickEmotions.map((e) => (
            <button 
              key={e}
              type="button" 
              className="admin-button"
              onClick={() => setEmotion(e)}
            >
              {e}
            </button>
          ))}
        </div>
  
        {/* Form */}
        <form className="question-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your emotion"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="form-input"
          />
          <button 
            type="submit" 
            className="submit-button" 
            disabled={loading || !emotion.trim()}
          >
            {loading ? "Loading this might take some time" : "Send"}
          </button>
        </form>
  
        {/* Result */}
        {result && (
          <div>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{result.intro}</p>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              {result.emotions.map((item, idx) => (
                <div key={idx} className="question-card" style={{ backgroundColor: '#fff' }}>
                  <h3 style={{ marginTop: 0 }}>{item.name}</h3>
                  <h4 style={{ marginTop: 0 }}>{item.language}</h4>
                  <p>{item.meaning}</p>
                  <p style={{fontSize: "0.9rem"}}> <b>Cultural context: </b>{item["cultural context"]}</p>
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
          <Route path="/emotion-resolver" element={<EmotionResolver />} />
        </Routes>
      </div>}
    </div>
  );
}
