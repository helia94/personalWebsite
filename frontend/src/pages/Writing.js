// File: src/pages/Writing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";
import "./writing.css"

const linkToMedium3rdGeneration = "https://medium.com/fourth-wave/how-to-transition-to-a-third-generation-of-online-dating-platforms-05315ddeb388?format=html"
const linkToMediumVocation = "https://medium.com/@helia.jm/can-i-find-satisfying-work-93385a3bcd41?format=html"
const linkToMediumUniversity = "https://medium.com/@helia.jm/the-long-shadow-of-the-university-ec66129852ed?format=html"

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
      { label: "Third Generation of Online Dating", route: "/writing/dating/online-dating" },
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
      { label: "Shadow of University", route: "/writing/work/university" },
      { label: "Vocation", route: "/writing/work/vocation" },
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



function MediumArticle(link) {
  const [articleHTML, setArticleHTML] = useState("");

  useEffect(() => {
    const proxyUrl = "http://localhost:3001/proxy?url=" + encodeURIComponent(link);
    fetch(proxyUrl)
    .then(res => res.text()) // ✅ Read response as text (HTML)
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      // Clean up unnecessary elements
      doc.querySelectorAll('[data-testid^="header"]').forEach(el => el.remove());
      doc.querySelectorAll("button").forEach(btn => btn.remove());
      doc.querySelectorAll("svg").forEach(svg => svg.remove());
      
      setArticleHTML(doc.body.innerHTML);
    })
    .catch(err => console.error("Fetch error:", err));
  
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: articleHTML }} />;
}




function ArticlePage() {
  return (
    <div>
      <h2>Sample Writing Article</h2>
      <p>This is some placeholder text for the writing article content.</p>
    </div>
  );
}

export default function Writing({isMobile}) {
    const {contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);

  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) && 
      <SecondarySidebar heading="Writing" categories={writingData} isMobile={isMobile}/>
      }
      
      {(!isMobile || contentIsVisibleMobile) && 
      <div className="content-area">
        <Routes>
          <Route path="/" element={<WritingHome />} />
          {/* Tango Articles */}
          <Route path="/tango/article-tango-1" element={<ArticlePage />} />
          <Route path="/tango/article-tango-2" element={<ArticlePage />} />
          <Route path="/tango/article-tango-3" element={<ArticlePage />} />

          {/* Dating Articles */}
          <Route path="/dating/online-dating" element={MediumArticle(linkToMedium3rdGeneration)} />
          <Route path="/dating/article-dating-2" element={<ArticlePage />} />
          <Route path="/dating/article-dating-3" element={<ArticlePage />} />

          {/* SmallTalk Articles */}
          <Route path="/smalltalk/article-smalltalk-1" element={<ArticlePage />} />
          <Route path="/smalltalk/article-smalltalk-2" element={<ArticlePage />} />
          <Route path="/smalltalk/article-smalltalk-3" element={<ArticlePage />} />

          {/* Personal Articles */}
          <Route path="/personal/article-personal-1" element={<ArticlePage />} />
          <Route path="/personal/article-personal-2" element={<ArticlePage />} />
          <Route path="/personal/article-personal-3" element={<ArticlePage />} />

          {/* Work Articles */}
          <Route path="/work/university" element={MediumArticle(linkToMediumUniversity)} />
          <Route path="/work/vocation" element={MediumArticle(linkToMediumVocation)} />
          <Route path="/work/article-work-3" element={<ArticlePage />} />
        </Routes>
      </div>
      }
    </div>
  );
}
