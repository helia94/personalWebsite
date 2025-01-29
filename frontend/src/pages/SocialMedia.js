// File: src/pages/SocialMedia.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";

const socialItems = [
  {
    label: "Twitter",
    route: "/social-media/twitter",
    logoUrl: "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/twitter_logo.png",
  },
  {
    label: "LinkedIn",
    route: "/social-media/linkedin",
    logoUrl: "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/linkedin_logo.png",
  },
  {
    label: "GitHub",
    route: "/social-media/github",
    logoUrl: "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/github_logo.png",
  },
];

function SocialHome() {
  return (
    <div>
      <h2>Connect with Me</h2>
      <p>Select a platform from the sidebar to visit my profile.</p>
    </div>
  );
}

function ExternalLink({ platform }) {
  const platformUrls = {
    twitter: "https://twitter.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
  };

  const url = platformUrls[platform];

  return (
    <div>
      <h2>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h2>
      <button
        className="external-visit-button"
        onClick={() => window.open(url, "_blank")}
      >
        Visit {platform.charAt(0).toUpperCase() + platform.slice(1)}
      </button>
    </div>
  );
}

export default function SocialMedia() {
  return (
    <div className="content-with-sub">
      <SecondarySidebarBasic heading="Social Media" items={socialItems} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<SocialHome />} />
          <Route path=":platform" element={<ExternalLink />} />
        </Routes>
      </div>
    </div>
  );
}
