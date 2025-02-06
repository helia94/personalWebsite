// File: src/pages/Writing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import { useContext, useState, useEffect } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";
import "./writing.css"

export const writingData = [
  {
    title: "Tango",
    items: [
      { label: "For Non-dancers", route: "/writing/tango/non-dancers" },
      { label: "Teaching for Young Beginners", route: "/writing/tango/teaching" },
      { label: "Tango Music", route: "/writing/tango/music" },
      { label: "Learning Tango Faster", route: "/writing/tango/leaning" },
      { label: "A Woman in Tango", route: "/writing/tango/woman-in-tango" },
      { label: "Giving and Getting", route: "/writing/tango/giving-getting" },
      { label: "Talking about Tango", route: "/writing/tango/questions" }
    ],
  },
  {
    title: "Dating",
    items: [
      { label: "Third Generation of Online Dating", route: "/writing/dating/online-dating" },
      { label: "First Date Ideas", route: "/writing/dating/first-date" }
    ],
  },
  {
    title: "SmallTalk",
    items: [
      { label: "Connection", route: "/writing/smalltalk/connection" },
      { label: "Hard Not to SmallTalk", route: "/writing/smalltalk/smalltalk-sticks" }
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Article Personal 1", route: "/writing/personal/article-personal-1" }
    ],
  },
  {
    title: "Work",
    items: [
      { label: "Shadow of University", route: "/writing/work/university" },
      { label: "Vocation", route: "/writing/work/vocation" }
    ],
  }
];


function WritingHome() {
  return (
    <div>
      <h2>Writing Overview</h2>
      <p>Select a topic from the left sub-menu to read articles.</p>
    </div>
  );
}


const MediumArticle = ({ rssFeed, targetSlug }) => {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssFeed
        )}`
      )
      .then((res) => {
        // Find the article whose link includes the target slug, or fallback to the first item
        const found = res.data.items.find((item) =>
          item.link.includes(targetSlug)
        )
        setArticle(found || res.data.items[0])
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [rssFeed, targetSlug])

  if (!article) return <div>Loading...</div>

  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        Read on Medium
      </a>
    </div>
  )
}



function ArticlePage({ title }) {
  return (
    <div>
      <h1>{title}</h1>
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
          <Route path="/tango/non-dancers" element={<ArticlePage title= "For Non-dancers"/>} />
          <Route path="/tango/teaching" element={<ArticlePage title= "Teaching for Young Beginners"/>} />
          <Route path="/tango/music" element={<ArticlePage title= "Tango Music" />} />
          <Route path="/tango/leaning" element={<ArticlePage title= "Learning Tango Faster" />} />
          <Route path="/tango/woman-in-tango" element={<ArticlePage title= "A Woman in Tango" />} />
          <Route path="/tango/giving-getting" element={<ArticlePage title= "Giving and Getting" />} />
          <Route path="/tango/questions" element={<ArticlePage title= "Talking about Tango" />} />

          {/* Dating Articles */}
          <Route path="/dating/online-dating" element={<MediumArticle
  rssFeed="https://medium.com/feed/@helia.jm"
  targetSlug="how-to-transition-to-a-third-generation-of-online-dating-platforms"
/>} />
          <Route path="/dating/first-date" element={<ArticlePage title= "First Date Ideas"/>} />

          {/* SmallTalk Articles */}
          <Route path="/smalltalk/connection" element={<ArticlePage title= "Conection"/>} />
          <Route path="/smalltalk/smalltalk-sticks" element={<ArticlePage title= "It Is Hard Not to SmallTalk"/>} />

          {/* Personal Articles */}
          <Route path="/personal/article-personal-1" element={<ArticlePage title= "Personal Article 1"/>} />

          {/* Work Articles */}
          <Route path="/work/university" element={<MediumArticle
  rssFeed="https://medium.com/feed/@helia.jm"
  targetSlug="the-long-shadow-of-the-university"
/>} />
          <Route path="/work/vocation" element={<MediumArticle
                                                  rssFeed="https://medium.com/feed/@helia.jm"
                                                  targetSlug="can-i-find-satisfying-work"
                                                />} />
        </Routes>
      </div>
      }
    </div>
  );
}
