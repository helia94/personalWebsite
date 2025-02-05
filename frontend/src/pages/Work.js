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
      <section className="freelance-intro" style = {{marginBottom: "3rem"}}>
        <p>
          I have decided to work on my own products, but until they are profitable I support myself by offering the services I specialize in. 
          Until December 2024, I was a senior software engineer at PTV, a cloud software company with highly competitive optimization solutions 
          for the logistics and delivery business, serving some of the biggest supermarkets and delivery services in Germany and the Benelux region.
        </p>
      </section>
      <section className="speaking-section">
        <h2>You can trust me with:</h2>
        <div className="list-section">
          <h3>Operation Research</h3>
          <ul>
            <li>Solving your discrete (integer) optimization problems with linear programming and modern meta-heuristics.</li>
            <li>Consulting to speed up your current discrete optimization solver.</li>
            <li>Combining ML/AI with traditional meta-heuristics.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>ML / AI</h3>
          <ul>
            <li>Setting up your ML pipelines, from data gathering to evaluation, monitoring, and impact (Azure ML).</li>
            <li>Finetuning open-source foundation models for your purpose and deploying them on your local cloud.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Data Science</h3>
          <ul>
            <li>Statistical analysis, data storytelling, and data visualization.</li>
            <li>Delivering the most curious and comprehensive interpretation of your data you’ve ever seen.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Microservices / SaaS / APIs</h3>
          <ul>
            <li>Building back-end services in Quarkus, Spring Boot, .NET, or Flask.</li>
            <li>Providing minimal front-end demos to test and showcase the project (not for final users).</li>
          </ul>
        </div>
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
