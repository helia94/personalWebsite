// File: src/pages/SocialMedia.js
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const socialItems = [
  {
    label: "Twitter",
    route: "/social-media/twitter",
    logoUrl: "https://res.cloudinary.com/dl9xg597r/image/upload/v1738627019/5279123_tweet_twitter_twitter_logo_icon_whldcc.svg",
    profileUrl: "https://x.com/JamshidiHelia",
  },
  {
    label: "LinkedIn",
    route: "/social-media/linkedin",
    logoUrl: "https://res.cloudinary.com/dl9xg597r/image/upload/v1738627019/5279114_linkedin_network_social_network_linkedin_logo_icon_wz4ntu.svg",
    profileUrl: "https://www.linkedin.com/in/helia-jamshidi/",
  },
  {
    label: "GitHub",
    route: "/social-media/github",
    logoUrl: "https://res.cloudinary.com/dl9xg597r/image/upload/v1738627019/394187_github_icon_izyihl.svg",
    profileUrl: "https://github.com/helia94",
  },
  {
    label: "Instagram",
    route: "/social-media/instagram",
    logoUrl: "https://res.cloudinary.com/dl9xg597r/image/upload/v1738627019/5279112_camera_instagram_social_media_instagram_logo_icon_eb5exo.svg",
    profileUrl: "https://www.instagram.com/jouscards/",
  },
  {
    label: "TikTok",
    route: "/social-media/tiktok",
    logoUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tiktok.svg",
    profileUrl: "https://tiktok.com/@dating_evolution_berlin",
  },
  {
    label: "linktr",
    route: "/social-media/linktr",
    logoUrl: "https://res.cloudinary.com/dl9xg597r/image/upload/v1749124415/images_xbnrr4.png",
    profileUrl: "https://linktr.ee/heliajamshidi",
  },
];

export default function SocialMedia() {
  return (
    <div className="content-with-sub">
      <div className="sub-sidebar">
        <h3>Social Media</h3>
        <ul className="simple-submenu" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {socialItems.map((it) => (
            <li
              key={it.label}
              style={{
                 margin: 0, padding: "0px 0  !important", lineHeight: "0rem  !important" }}
            >
              <a
                className="submenu-item"
                style={{
                  all: "unset",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85rem",
                  lineHeight: "0.5rem  !important",
                  color: "#242424",
                  textDecoration: "none",
                  padding: "0px 0px  !important",
                }}
                href={it.profileUrl}
              >
                <img
                  src={it.logoUrl}
                  alt={`${it.label} logo`}
                  className="submenu-logo"
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <span>{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
