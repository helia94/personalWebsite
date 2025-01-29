// File: src/components/SecondarySidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * categories = [
 *   {
 *     title: "Section Title",
 *     items: [
 *       { label: "SubItem 1", route: "/page/subitem1" },
 *       { label: "SubItem 2", route: "/page/subitem2" }
 *     ]
 *   },
 *   ...
 * ]
 */

export default function SecondarySidebar({ heading, categories }) {
  const [expanded, setExpanded] = useState([]);

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
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
