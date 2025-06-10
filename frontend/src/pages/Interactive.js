// File: src/pages/Interactive.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Interactive Tools | Helia Jamshidi</title>
        <meta
          name="description"
          content="Book time, ask questions or share a message with Helia Jamshidi."
        />
        <meta property="og:title" content="Interactive Tools | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Choose from booking, AMA or sharing a message to connect."
        />
        <meta property="og:url" content="https://heliajamshidi.me/interactive" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/interactive" />
      </Helmet>
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
