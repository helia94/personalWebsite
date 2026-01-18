// File: src/pages/Projects.js
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import "./Projects.css"

const projectItems = [
  { label: "Jous", route: "/projects/jous" },
  { label: "Second Date", route: "/projects/second-date" },
  { label: "Tango Diario", route: "/projects/tango-diario" },
  { label: "Melting Pots", route: "/projects/melting-pots" },
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
          content="Helia Jamshidi projects, Jous, Second Date, Tango Diario, Melting Pots"
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
          <iframe
            src="https://jous.app"
            title="Jous app"
            className="app-embed"
          ></iframe>
          <button
            className="visit-btn"
            onClick={() => window.open('https://jous.app', '_blank')}
          >
            Visit App
          </button>
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
          <iframe
            src="https://seconddate.date/swipe"
            title="Second Date app"
            className="app-embed"
          ></iframe>
          <button
            className="visit-btn"
            onClick={() => window.open('https://seconddate.date/swipe', '_blank')}
          >
            Visit App
          </button>
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
          <iframe
            src="https://tango-diario.com/"
            title="Tango Diario app"
            className="app-embed"
          ></iframe>
          <button
            className="visit-btn"
            onClick={() => window.open('https://tango-diario.com/', '_blank')}
          >
            Visit App
          </button>
        </div>
      </div>
    </div>
  );
}

function MeltingPots() {
  return (
    <div className="container">
      <Helmet>
        <title>Melting Pots | Helia Jamshidi</title>
        <meta
          name="description"
          content="Community hub for shared cultural connection and storytelling."
        />
        <meta property="og:title" content="Melting Pots | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Visit Melting Pots to explore community stories and cultural exchange."
        />
        <meta property="og:url" content="https://heliajamshidi.me/projects/melting-pots" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/projects/melting-pots" />
      </Helmet>
      <h1>Melting Pots</h1>
      <p>A community space for sharing cultural stories and building connection.</p>
      <div className="sample-images-section">
        <div className="image-gallery" >
          <iframe
            src="https://meltingpots.org"
            title="Melting Pots"
            className="app-embed"
          ></iframe>
          <button
            className="visit-btn"
            onClick={() => window.open('https://meltingpots.org', '_blank')}
          >
            Visit App
          </button>
        </div>
      </div>
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
          <Route path="/second-date" element={<SecondDate />} />
          <Route path="/tango-diario" element={<TangoDiario />} />
          <Route path="/melting-pots" element={<MeltingPots />} />
        </Routes>
      </div>}
    </div>
  );
}
