// File: src/pages/Interactive.js
import React from "react";
import { Routes, Route } from "react-router-dom";
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

export default function Interactive() {
  return (
    <div className="content-with-sub">
      <SecondarySidebarBasic heading="Interactive" items={interactiveItems} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<InteractiveHome />} />
          <Route path="book" element={<BookCalendar />} />
          <Route path="ama" element={<AMA />} />
          <Route path="share" element={<ShareMessage />} />
        </Routes>
      </div>
    </div>
  );
}
