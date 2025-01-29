// File: src/components/SecondarySidebarBasic.js
import React from "react";
import { Link } from "react-router-dom";

/**
 * For pages that have a simple (non-collapsible) secondary sidebar.
 * items = [
 *   { label: "SubPage1", route: "/page/subpage1", logoUrl: "https://..." },
 *   ...
 * ]
 */
export default function SecondarySidebarBasic({ heading, items }) {
  return (
    <div className="sub-sidebar">
      <h3>{heading}</h3>
      <ul className="simple-submenu">
        {items.map((it) => (
          <li key={it.label}>
            <Link to={it.route} className="submenu-item">
              {it.logoUrl && (
                <img src={it.logoUrl} alt={`${it.label} logo`} className="submenu-logo" />
              )}
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
