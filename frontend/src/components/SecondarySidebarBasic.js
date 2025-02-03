// File: src/components/SecondarySidebarBasic.js
import React from "react";
import { Link } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import {useContext } from "react";

/**
 * For pages that have a simple (non-collapsible) secondary sidebar.
 * items = [
 *   { label: "SubPage1", route: "/page/subpage1", logoUrl: "https://..." },
 *   ...
 * ]
 */
export default function SecondarySidebarBasic({ heading, items, isMobile }) {
  const { setMobileView } = useContext(MobileViewContext);
  return (
    <div className="sub-sidebar">
      <h3>{heading}</h3>
      <ul className="simple-submenu">
        {items.map((it) => (
          <li key={it.label}>
            <Link to={it.route} className="submenu-item" onClick={() => setMobileView("main")}>
              {it.logoUrl && (
                <img src={it.logoUrl} alt={`${it.label} logo`} className="submenu-logo" />
              )}
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
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
