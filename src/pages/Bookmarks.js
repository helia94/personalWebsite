// File: src/pages/Bookmarks.js
import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import SecondarySidebar from "../components/SecondarySidebar";
import "./Bookmarks.css";

// Define the categories and their respective bookmark items
const bookmarkCategories = [
  {
    title: "Book",
    items: [
      {
        label: "Cool Site",
        route: "/bookmarks/cool-site",
        logoUrl:
          "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/cool_site_logo.png",
      },
      // Add more book-related bookmarks here
    ],
  },
  {
    title: "Podcast",
    items: [
      {
        label: "Talk Podcast",
        route: "/bookmarks/talk-podcast",
        logoUrl:
          "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/talk_podcast_logo.png",
      },
      // Add more podcast-related bookmarks here
    ],
  },
  {
    title: "Web",
    items: [
      {
        label: "Fun Blog",
        route: "/bookmarks/fun-blog",
        logoUrl:
          "https://res.cloudinary.com/demo/image/upload/w_40,h_40/v1/fun_blog_logo.png",
      },
      // Add more web-related bookmarks here
    ],
  },
  // Add more categories if needed
];

function BookmarksHome() {
  return (
    <div>
      <h2>Bookmarks</h2>
      <p>Choose a bookmark from the sidebar to explore.</p>
    </div>
  );
}

function BookmarkDetail() {
  const { bookmarkId } = useParams();
  const bookmarksInfo = {
    "cool-site": {
      name: "Cool Site",
      url: "https://example.com",
      description: "A cool site for awesome content.",
    },
    "fun-blog": {
      name: "Fun Blog",
      url: "https://blog.example.com",
      description: "A blog filled with fun and engaging posts.",
    },
    "talk-podcast": {
      name: "Talk Podcast",
      url: "https://podcasts.example.com",
      description: "A podcast where interesting topics are discussed.",
    },
    // Add more bookmark details here
  };
  const info = bookmarksInfo[bookmarkId] || {};

  return (
    <div>
      <h2>{info.name || "Unknown Bookmark"}</h2>
      {info.url && (
        <button
          className="visit-btn"
          onClick={() => window.open(info.url, "_blank")}
        >
          Visit Page
        </button>
      )}
      <p>
        {info.description
          ? info.description
          : `This is a short description for ${info.name || "the bookmark"}.`}
      </p>
    </div>
  );
}

export default function Bookmarks() {
  return (
    <div className="content-with-sub">
      <SecondarySidebar heading="Bookmarks" categories={bookmarkCategories} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<BookmarksHome />} />
          <Route path=":bookmarkId" element={<BookmarkDetail />} />
        </Routes>
      </div>
    </div>
  );
}
