// File: src/pages/Work.js
import React from "react";
import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import "./Home.css";

export const workItems = [
  { label: "Freelance", route: "/work/freelance" },
  { label: "Experience", route: "/work/experience"},
  { label: "Values", route: "/work/values"},
  { label: "Collaborate", route: "/work/collaborate"},
];

function WorkHome() {
  return (
    <div>
      <h2>Work Overview</h2>
      <p>Explore my professional background and approach.</p>
    </div>
  );
}

function WorkDetail({ sectionId }) {
  return (
    <div>
      <h1>{sectionId}</h1>
      <p>Details about {sectionId} go here.</p>
    </div>
  );
}



function Freelance() {
  return (
    <div>
      <h1>Freelance</h1>
      <section className="freelance-intro" style={{ marginBottom: "3rem" }}>
        <p>
          I decided to focus on <em>building my own products</em>, but until they become profitable, I support myself by offering specialized services. Until December 2024, I was a senior software engineer at <em>PTV</em>, a cloud software company with highly competitive optimization solutions for the logistics and delivery business, serving leading supermarkets and delivery services in Germany and the Benelux region.
        </p>
      </section>
      <section className="speaking-section">
        <h2>You can <em>trust</em> me with:</h2>
        <div className="list-section">
          <h3>Operations Research</h3>
          <ul>
            <li>Solving your discrete (integer) optimization problems with linear programming and modern metaheuristics.</li>
            <li>Consulting to speed up your current discrete optimization solver.</li>
            <li>Combining ML/AI with traditional metaheuristics.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>ML / AI</h3>
          <ul>
            <li>Setting up your ML pipelines, from data gathering to evaluation, monitoring, and impact (Azure ML).</li>
            <li>Fine-tuning open-source <em>foundation models</em> for your needs and deploying them on your local cloud.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Data Science</h3>
          <ul>
            <li>Statistical analysis, data storytelling, and data visualization.</li>
            <li>Delivering the most insightful and comprehensive interpretation of your data.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Microservices / SaaS / APIs</h3>
          <ul>
            <li>Building back-end services in Quarkus, Spring Boot, .NET, or Flask.</li>
            <li>Providing minimal front-end demos to test and showcase the project (not intended for final users).</li>
          </ul>
        </div>
      </section>
      <section className="call-to-action" 
      style={{ marginTop: "4rem", textAlign: "center", padding: "3rem", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          If you need expert help in optimization, ML let's talk! 
          I’m also happy to be recommended to anyone who could benefit from my expertise.
        </p>
      </section>
    </div>
  );
}



export default function Work({isMobile}) {
    const {contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);
  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) && 
      <SecondarySidebarBasic heading="Work" items={workItems} />}
      {(!isMobile || contentIsVisibleMobile) && 
      <div className="content-area">
        <Routes>
          <Route path="/" element={<WorkHome />} />
          <Route path="/freelance" element={<Freelance/>} />
          <Route path="/experience" element={<WorkDetail sectionId = "Expereince" />} />
          <Route path="/values" element={<WorkDetail sectionId = "Values" />} />
          <Route path="/work/collaborate" element={<WorkDetail sectionId = "Collaborate" />} />
        </Routes>
      </div>}
    </div>
  );
}
