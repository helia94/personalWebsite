// App.js
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBarsStaggered, FaBars  } from "react-icons/fa6";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Bookmarks from "./pages/Bookmarks";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Interactive from "./pages/Interactive";
import SocialMedia from "./pages/SocialMedia";

import { writingData } from "./pages/Writing";
import { workItems } from "./pages/Work";
import { bookmarkCategories } from "./pages/Bookmarks";

import { MobileViewProvider, MobileViewContext } from "./context/MobileViewContext";

function AppContent() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const { mobileView, setMobileView, contentIsVisibleMobile, toc1IsVisibleMobile } = useContext(MobileViewContext);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    checkMobile();
    setMobileView("main")


    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {isMobile && (
          <div className="mobile-header">
            {mobileView === "toc2" && <button onClick={() => setMobileView("toc1")}><FaBars /></button>}
            {mobileView === "main" && <button onClick={() => setMobileView("toc2")}><FaBarsStaggered /></button>}
          </div>
        )}
        {(!isMobile || toc1IsVisibleMobile) && (
          <div className="left-sidebar">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isMobile={isMobile} />
          </div>
        )}
        {(!isMobile || !toc1IsVisibleMobile) && (
          <MainContent
            writingData={writingData}
            workItems={workItems}
            bookmarkCategories={bookmarkCategories}
            isMobile={isMobile}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writing/*" element={<Writing isMobile={isMobile}/>} />
              <Route path="/bookmarks/*" element={<Bookmarks isMobile={isMobile} />} />
              <Route path="/projects/*" element={<Projects isMobile={isMobile} />} />
              <Route path="/work/*" element={<Work isMobile={isMobile} />} />
              <Route path="/interactive/*" element={<Interactive isMobile={isMobile} />} />
              <Route path="/social-media" element={<SocialMedia isMobile={isMobile} />} />
            </Routes>
          </MainContent>
        )}
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <MobileViewProvider>
      <AppContent />
    </MobileViewProvider>
  );
}
