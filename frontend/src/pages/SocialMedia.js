// File: src/pages/SocialMedia.js
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    label: "Email",
    route: "/social-media/email",
    logoUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gmail.svg",
    profileUrl: "mailto:helia.jm@gmail.com",
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
      <Helmet>
        <title>Social Media Links | Helia Jamshidi</title>
        <meta
          name="description"
          content="Find Helia on Twitter, LinkedIn, GitHub, Instagram and TikTok."
        />
        <meta property="og:title" content="Social Media Links | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Quick links to Helia's profiles across major platforms."
        />
        <meta property="og:url" content="https://heliajamshidi.me/social-media" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/social-media" />
      </Helmet>
      <div className="sub-sidebar" style={{ textAlign: "left" }}>
        <h3 style={{ margin: "0 0 4px", fontSize: "0.9rem" }}>Social Media</h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {socialItems.map((it) => (
            <li key={it.label} style={{ margin: 0, padding: 0 }}>
              <a
                href={it.profileUrl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left" ,
                  justifyContent: "flex-start",
                  fontSize: "0.9rem",
                  lineHeight: "1",
                  padding: "0px 0",
                  textDecoration: "none",
                  color: "#242424",
                  height: "40px",
                  gap: "0px",
                }}
              >
                <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>
                  {it.label}
                </span>
                <img
                  src={it.logoUrl}
                  alt=""
                  style={{ width: "14px", height: "14px", flexShrink: 0 }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
