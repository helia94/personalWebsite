import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Bookmarks from "./pages/Bookmarks";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Interactive from "./pages/Interactive";
import SocialMedia from "./pages/SocialMedia";

// Import data
import { writingData } from "./pages/Writing";
import { workItems } from "./pages/Work";
import { bookmarkCategories } from "./pages/Bookmarks";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <Router>
      <div className="app-container">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <MainContent
          writingData={writingData}
          workItems={workItems}
          bookmarkCategories={bookmarkCategories}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing/*" element={<Writing />} />
            <Route path="/bookmarks/*" element={<Bookmarks />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/work/*" element={<Work />} />
            <Route path="/interactive/*" element={<Interactive />} />
            <Route path="/social-media" element={<SocialMedia />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}
