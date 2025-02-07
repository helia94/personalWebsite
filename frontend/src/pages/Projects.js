// File: src/pages/Projects.js
import React from "react";
import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";

const projectItems = [
  { label: "Project One", route: "/projects/project-one" },
  { label: "Project Two", route: "/projects/project-two" },
];

function ProjectsHome() {
  return (
    <div>
      <h2>Projects Overview</h2>
      <p>Simple secondary sidebar with no collapsible items.</p>
    </div>
  );
}

function ProjectDetail() {
  const { projId } = useParams();
  return (
    <div>
      <h2>{projId}</h2>
      <p>Some details about {projId} here.</p>
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
          <Route path=":projId" element={<ProjectDetail />} />
        </Routes>
      </div>}
    </div>
  );
}
