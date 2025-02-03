// File: src/pages/Work.js
import React from "react";
import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";

export const workItems = [
  { label: "Experience", route: "/work/experience"},
  { label: "Freelance", route: "/work/freelance" },
  { label: "Values", route: "/work/values"},
  { label: "Interests", route: "/work/interests"},
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

function WorkDetail() {
  const { sectionId } = useParams();
  return (
    <div>
      <h2>{sectionId}</h2>
      <p>Details about {sectionId} go here.</p>
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
          <Route path=":sectionId" element={<WorkDetail />} />
        </Routes>
      </div>}
    </div>
  );
}
