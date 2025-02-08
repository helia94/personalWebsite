// File: src/pages/Work.js
import React from "react";
import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import TechStack from "./TechStack"
import "./Home.css";



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
      <style>{`
        .portfolio-showcase {
          padding: 60px 20px;
          background: #f0f4f8;
          color: #333;
        }
        .portfolio-showcase h1 {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 40px;
        }
        .portfolio-section {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          padding: 20px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .portfolio-section:nth-child(even) {
          flex-direction: row-reverse;
        }
        .portfolio-content {
          flex: 1;
          padding: 20px;
        }
        .portfolio-content h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .portfolio-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .portfolio-content a {
          text-decoration: none;
          color: #0077cc;
          font-weight: bold;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.3s ease;
        }
        .portfolio-content a:hover {
          border-bottom: 2px solid #0077cc;
        }
        .portfolio-visual {
          flex: 1;
          padding: 20px;
          text-align: center;
        }
        .portfolio-visual img {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
      `}</style>
      <section className="portfolio-showcase">
        <h1>Portfolio Highlights</h1>
        <div className="portfolio-section" id="geocoding">
          <div className="portfolio-content">
            <h2>Geocoding Developer API</h2>
            <p>
              I revolutionized geolocation search with an API that transforms free text into precise geographic data. By integrating Quarkus, Java, and AI pipelines with Azure ML and Hugging Face, I boosted the system’s intelligence—making spatial queries smarter and lightning-fast.
            </p>
            <a href="https://developer.myptv.com/en/documentation/geocoding-places-api" target="_blank" rel="noopener noreferrer">
              Discover more
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://via.placeholder.com/400x300?text=Geocoding+API+Demo"
              alt="Geocoding API Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="model2go">
          <div className="portfolio-content">
            <h2>PTV Model2Go</h2>
            <p>
              With Model2Go, I helped build a lightweight yet robust transport modelling solution. It delivers accurate travel time estimations on the go, marrying speed with precision for modern, mobile-first applications.
            </p>
            <a href="https://www.ptvgroup.com/en/products/ptv-model2go" target="_blank" rel="noopener noreferrer">
              Explore Model2Go
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://via.placeholder.com/400x300?text=PTV+Model2Go+Demo"
              alt="PTV Model2Go Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="route-optimisation">
          <div className="portfolio-content">
            <h2>Route Optimisation API & Route-Optimiser</h2>
            <p>
              I reimagined route planning by restructuring a legacy C++ codebase and integrating modern VRP algorithms. This dynamic solution optimizes logistics in real time, turning complex routing challenges into efficient, cost-effective journeys.
            </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-api/quick-start-route-optimisation-api" target="_blank" rel="noopener noreferrer">
              See the solution in action
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://via.placeholder.com/400x300?text=Route+Optimisation+Demo"
              alt="Route Optimisation Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="optiflow">
          <div className="portfolio-content">
            <h2>PTV Optiflow</h2>
            <p>
              I powered a modern SaaS microservice that elevates transport planning. Utilizing AWS, .NET, and innovative practices like Domain Driven Design and Mob Programming, I helped create an intuitive, cloud-based solution that streamlines complex logistics workflows.
            </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-optiflow-api/quick-start-route-optimization-optiflow" target="_blank" rel="noopener noreferrer">
              Learn about Optiflow
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://via.placeholder.com/400x300?text=PTV+Optiflow+Demo"
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
