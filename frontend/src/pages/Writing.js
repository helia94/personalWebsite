// File: src/pages/Writing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import SecondarySidebar from "../components/SecondarySidebar";

export const writingData = [
  {
    title: "Tango",
    items: [
      { label: "Article Tango 1", route: "/writing/tango/article-tango-1" },
      { label: "Article Tango 2", route: "/writing/tango/article-tango-2" },
      { label: "Article Tango 3", route: "/writing/tango/article-tango-3" },
    ],
  },
  {
    title: "Dating",
    items: [
      { label: "Article Dating 1", route: "/writing/dating/article-dating-1" },
      { label: "Article Dating 2", route: "/writing/dating/article-dating-2" },
      { label: "Article Dating 3", route: "/writing/dating/article-dating-3" },
    ],
  },
  {
    title: "SmallTalk",
    items: [
      { label: "Article SmallTalk 1", route: "/writing/smalltalk/article-smalltalk-1" },
      { label: "Article SmallTalk 2", route: "/writing/smalltalk/article-smalltalk-2" },
      { label: "Article SmallTalk 3", route: "/writing/smalltalk/article-smalltalk-3" },
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Article Personal 1", route: "/writing/personal/article-personal-1" },
      { label: "Article Personal 2", route: "/writing/personal/article-personal-2" },
      { label: "Article Personal 3", route: "/writing/personal/article-personal-3" },
    ],
  },
  {
    title: "Work",
    items: [
      { label: "Article Work 1", route: "/writing/work/article-work-1" },
      { label: "Article Work 2", route: "/writing/work/article-work-2" },
      { label: "Article Work 3", route: "/writing/work/article-work-3" },
    ],
  }
  // etc...
];

function WritingHome() {
  return (
    <div>
      <h2>Writing Overview</h2>
      <p>Select a topic from the left sub-menu to read articles.</p>
    </div>
  );
}

function ArticlePage() {
  return (
    <div>
      <h2>Sample Writing Article</h2>
      <p>This is some placeholder text for the writing article content.</p>
    </div>
  );
}

export default function Writing() {
  return (
    <div className="content-with-sub">
      <SecondarySidebar heading="Writing" categories={writingData} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<WritingHome />} />
          <Route path=":category/:article" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}
