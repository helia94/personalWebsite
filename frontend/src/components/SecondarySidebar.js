// File: src/components/SecondarySidebar.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MobileViewProvider, MobileViewContext } from "../context/MobileViewContext";


export default function SecondarySidebar({ heading, categories, isMobile }) {
  const [expanded, setExpanded] = useState([]);
  const { mobileView, setMobileView, contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);

  const toggleExpand = (title) => {
    if (expanded.includes(title)) {
      setExpanded(expanded.filter((x) => x !== title));
    } else {
      setExpanded([...expanded, title]);
    }
  };

  return (
    <div className="sub-sidebar">
      <h3>{heading}</h3>
      {categories.map((cat) => (
        <div key={cat.title}>
          <div
            className="submenu-title"
            onClick={() => toggleExpand(cat.title)}
          >
            {cat.title}
          </div>
          {expanded.includes(cat.title) && (
            <div className="submenu-list">
              {cat.items.map((item) => (
                <Link
                  key={item.label}
                  to={item.route}
                  className="submenu-item"
                  onClick={() => setMobileView("main")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      {isMobile && (
        <button
          style={{ position: 'fixed', bottom: '5px', right: '5px' }}
          onClick={() => setMobileView("main")}
        >
          close
        </button>
      )}
    </div>
  );
}
