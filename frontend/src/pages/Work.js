// File: src/pages/Work.js
import React from "react";
import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import TechStack from "./TechStack"
import "./Work.css"



export const workItems = [
  { label: "Freelance", route: "/work/freelance" },
  { label: "Experience", route: "/work/experience"},
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


const PortfolioShowcase = () => {
  return (
    <div>
      <section className="portfolio-showcase">
        <h1>Portfolio Highlights</h1>
        <div className="portfolio-section" id="geocoding">
          <div className="portfolio-content">
            <h2>Geocoding Developer API</h2>
            <p>
          At PTV Logistics, I worked on the <strong>Geocoding Developer API</strong>, a powerful tool that transforms free-form text into precise geographic coordinates. This API is the backbone of location-based services, enabling businesses to optimize logistics, improve delivery accuracy, and enhance customer experiences.
        </p>
        <p>
          I optimized the geocoding logic using <strong>Quarkus</strong> and <strong>Java</strong>, ensuring high performance and scalability. Additionally, I integrated <strong>Azure ML pipelines</strong> to train and evaluate large language models (LLMs), significantly improving the API's accuracy and efficiency.
        </p>
            <a href="https://developer.myptv.com/en/documentation/geocoding-places-api" target="_blank" rel="noopener noreferrer">
              Discover more
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/geocoding_rbcpgs.png"
              alt="Geocoding API Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="model2go">
          <div className="portfolio-content">
            <h2>PTV Model2Go</h2>
            <p>
          <strong>PTV Model2Go</strong> is a cutting-edge solution for automated transport model generation. I played a key role in developing and maintaining Python modules that power this product, enabling seamless integration with APIs and serverless jobs.
        </p>
        <p>
          I also established a robust testing framework, increasing test coverage from <strong>0% to 80%</strong>, ensuring a high-quality codebase. This product is a game-changer for logistics companies, allowing them to create accurate transport models in minutes.
        </p>
            <a href="https://www.ptvgroup.com/en/products/ptv-model2go" target="_blank" rel="noopener noreferrer">
              Explore Model2Go
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045147/model2go_wa1iz8.jpg"
              alt="PTV Model2Go Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="route-optimisation">
          <div className="portfolio-content">
            <h2>Route Optimisation API & Route-Optimiser</h2>
            <p>
          The <strong>Route Optimization API</strong> is a strategic product for PTV, solving complex vehicle routing problems (VRP). I contributed to the development of a meta-heuristic solver, restructuring the existing <strong>C++</strong> codebase to integrate state-of-the-art academic algorithms.
        </p>
        <p>
          This API helps logistics companies reduce costs, minimize delivery times, and improve resource utilization. My work ensured that the solver could handle real-world constraints, such as time windows and vehicle capacities, with exceptional efficiency.
        </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-api/quick-start-route-optimisation-api" target="_blank" rel="noopener noreferrer">
              See the solution in action
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/routeoptimizer_i3i1r5.webp"
              alt="Route Optimisation Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="optiflow">
          <div className="portfolio-content">
            <h2>PTV Optiflow</h2>
            <p>
          <strong>PTV Optiflow</strong> is a SaaS product designed to optimize large-scale logistics operations. I worked on a new microservice for this product, leveraging <strong>AWS</strong> and <strong>Spring Boot</strong> to build a scalable and reliable solution.
        </p>
        <p>
          My contributions included implementing <strong>Domain-Driven Design (DDD)</strong> principles and collaborating with a team using <strong>Mob Programming</strong>. This ensured that the microservice met the highest standards of quality and performance.
        </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-optiflow-api/quick-start-route-optimization-optiflow" target="_blank" rel="noopener noreferrer">
              Learn about Optiflow
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/optiflow_cnxtrr.jpg"
              alt="PTV Optiflow Demo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


function Freelance() {

  const navigate = useNavigate();

  const handleBookTime = () => {
    navigate('/interactive/book');
  };

  return (
    <div>
      <h1>Freelance</h1>
      <section className="freelance-intro" style={{ marginBottom: "3rem" }}>
        <p>
          I decided to focus on <em>building my own products</em>, but until they become profitable, I support myself by offering specialized services. Until December 2024, I was a senior software engineer at <em>PTV</em>, a cloud software company with highly competitive optimization solutions for the logistics and delivery business, serving leading supermarkets and delivery services in Germany and the Benelux region.
        </p>
      </section>
      <section className="speaking-section-colored">
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
      style={{ marginTop: "4rem", textAlign: "center", padding: "3rem", borderRadius: "8px" }}>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" , marginBottom: "2rem"}}>
          If you need expert help in optimization or ML, let's talk! 
          I’m also happy to be recommended to anyone who could benefit from my skills.
        </p>
        <button type="submit" className="submit-button" onClick={handleBookTime}>
            Book an Introductory Session
          </button>
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
          <Route path="/experience" element={
            <div>
              <PortfolioShowcase/>
              <TechStack/>
            </div>
          }></Route>
          <Route path="/collaborate" element={<WorkDetail sectionId = "Collaborate" />} />
        </Routes>
      </div>}
    </div>
  );
}
