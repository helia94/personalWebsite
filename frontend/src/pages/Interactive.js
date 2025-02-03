// File: src/pages/Interactive.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import BookCalendar from "./interactive/BookCalendar";
import AMA from "./interactive/AMA";
import ShareMessage from "./interactive/ShareMessage";

const interactiveItems = [
  { label: "Book Calendar", route: "/interactive/book" },
  { label: "Ask Me Anything", route: "/interactive/ama" },
  { label: "Share Anything", route: "/interactive/share" },
];

function InteractiveHome() {
  return (
    <div>
      <h2>Interactive Overview</h2>
      <p>Select a tool from the sidebar.</p>
    </div>
  );
}

export default function Interactive({isMobile}) {
  const {contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);
  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) && 
      <SecondarySidebarBasic heading="Interactive" items={interactiveItems} />}
      {(!isMobile || contentIsVisibleMobile) && 
      <div className="content-area">
        <Routes>
          <Route path="/" element={<InteractiveHome />} />
          <Route path="book" element={<BookCalendar />} />
          <Route path="ama" element={<AMA />} />
          <Route path="share" element={<ShareMessage />} />
        </Routes>
      </div>}
    </div>
  );
}
