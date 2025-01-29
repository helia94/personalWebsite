// File: src/components/Sidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaPenFancy,
  FaBookmark,
  FaProjectDiagram,
  FaBriefcase,
  FaExchangeAlt,
  FaUserFriends,
} from "react-icons/fa";

// Main Menu Items With Icons
const menuItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Writing", path: "/writing", icon: <FaPenFancy /> },
  { name: "Bookmarks", path: "/bookmarks", icon: <FaBookmark /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Work", path: "/work", icon: <FaBriefcase /> },
  { name: "Interactive", path: "/interactive", icon: <FaExchangeAlt /> },
  { name: "Social Media", path: "/social-media", icon: <FaUserFriends /> },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActiveMenu(item.name);
    navigate(item.path);
  };

  return (
    <div className="left-sidebar">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`sidebar-item ${activeMenu === item.name ? "active" : ""}`}
          onClick={() => handleClick(item)}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-text">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
