// File: src/pages/Bookmarks.js
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useContext } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";
import "./Bookmarks.css";

// Define the categories and their respective bookmark items
export const bookmarkCategories = [
  {
    title: "Book",
    items: [
      {
        label: "Come As You Are",
        route: "/bookmarks/come-as-you-are"
      },
      {
        label: "How Emotions Are Made",
        route: "/bookmarks/how-emotions-are-made"
      },
      {
        label: "Why We Sleep",
        route: "/bookmarks/why-we-sleep"
      },
      {
        label: "Being You",
        route: "/bookmarks/being-you"
      },
      {
        label: "The Song Of Significance",
        route: "/bookmarks/the-song-of-significance"
      },
      {
        label: "Tribes",
        route: "/bookmarks/tribes"
      },
    ],
  },
  {
    title: "Podcast",
    items: [
      {
        label: "EconTalk",
        route: "/bookmarks/econtalk"
      },
      {
        label: "Conversations with Tyler",
        route: "/bookmarks/conversations-with-tyler"
      },
      {
        label: "Akimbo",
        route: "/bookmarks/akimbo"
      },
      {
        label: "Where do we begin",
        route: "/bookmarks/where-do-we-begin"
      },
    ],
  },
  {
    title: "Web",
    items: [
      {
        label: "Epicllama",
        route: "/bookmarks/epicllama"
      },
      {
        label: "Perfect Socks",
        route: "/bookmarks/perfect-socks"
      },
      {
        label: "Perfect Chair",
        route: "/bookmarks/perfect-chair"
      },
    ],
  },
  // Add more categories if needed
];

function BookmarksHome() {
  return (
    <div>
      <h1>Books Overview</h1>
      <p>
        I think people's perspectives on life and things that interest them are so diverse that hardly any material or book can be recommended without knowing their context. But I have come to make some exceptions only because I wish someone had given me these earlier in my life. We are very different, yet we share at least some biology and we also share the systems that we live in.
      </p>
      <section className="speaking-section">
        <div>
          <h3>How the brain works:</h3>
          <div className="list-section">
            <ul>
              <li><i>Big Magic</i> is a tale of how fear and creativity work.</li>
              <li><i>Come As You Are</i> is your brain’s account of sexuality.</li>
              <li><i>Being You</i> is all about understanding perception, either perception of objects or perception of self.</li>
              <li><i>How Emotions Are Made</i> shows exactly what’s in the title.</li>
              <li><i>Why We Sleep</i> does the same.</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>How the systems we live in work:</h3>
          <div className="list-section">
            <ul>
              <li><i>This Is Strategy</i>, <i>Tribe</i>, and <i>The Song Of Significance</i> all by <b>Seth Godin</b> have excellent formulations of the different kinds of systems we have all around us, starting from a family to the globe.</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>How the body works:</h3>
          <div className="list-section">
            <ul>
              <li><i>Outlive</i> by <b>Pere Attia</b>, is a new way of looking at the body and long-term planning for our old age.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookmarkDetail() {
  const { bookmarkId } = useParams();

  // Create an entry for every bookmark in bookmarkCategories.
  // The keys here (e.g. "come-as-you-are") match the last segment of the route.
  const bookmarksInfo = {
    "come-as-you-are": {
      name: "Come As You Are",
      url: "https://www.amazon.com/Come-You-Are-Surprising-Science/dp/1472157238",
      description: () => (
        <div>
          <p>
            A groundbreaking book that explores the science of sexuality and how understanding your body can transform your life.
          </p>
        </div>
      )
    },
    "how-emotions-are-made": {
      name: "How Emotions Are Made",
      url: "https://www.amazon.com/How-Emotions-Are-Made-Secret/dp/0547677984",
      description: () => (
        <div>
          <p>
            An insightful exploration into the construction of emotions that challenges conventional wisdom and reshapes how we feel.
          </p>
        </div>
      )
    },
    "why-we-sleep": {
      name: "Why We Sleep",
      url: "https://www.amazon.com/Why-We-Sleep-Matthew-Walker/dp/1501144316",
      description: () => (
        <div>
          <p>
            A fascinating look at the vital importance of sleep and its impact on every aspect of our health and well-being.
          </p>
        </div>
      )
    },
    "being-you": {
      name: "Being You",
      url: "https://www.amazon.com/Being-You-Consciousness-Explained-Experience/dp/024136720X",
      description: () => (
        <div>
          <p>
            An exploration into the nature of consciousness and what it truly means to be yourself in a complex world.
          </p>
        </div>
      )
    },
    "the-song-of-significance": {
      name: "The Song Of Significance",
      url: "https://www.amazon.com/dp/placeholder", // Replace with the correct URL when available
      description: () => (
        <div>
          <p>
            A deep dive into the hidden meanings behind music and art, exploring how significance is woven into our culture.
          </p>
        </div>
      )
    },
    "tribes": {
      name: "Tribes",
      url: "https://www.sethgodin.com/books/tribes",
      description: () => (
        <div>
          <p>
            A compelling look at leadership and the power of communities, urging readers to find and lead their own tribes.
          </p>
        </div>
      )
    },
    "econtalk": {
      name: "EconTalk",
      url: "https://www.econtalk.org",
      description: () => (
        <div>
          <p>
            A long-running podcast that delves into economics, philosophy, and human behavior through engaging conversations.
          </p>
        </div>
      )
    },
    "conversations-with-tyler": {
      name: "Conversations with Tyler",
      url: "https://conversationswithtyler.com",
      description: () => (
        <div>
          <p>
            A thought-provoking podcast featuring interviews with some of the most influential thinkers in economics and culture.
          </p>
        </div>
      )
    },
    "akimbo": {
      name: "Akimbo",
      url: "https://akimbo.link",
      description: () => (
        <div>
          <p>
            A podcast that challenges conventional wisdom and offers fresh insights into business, culture, and innovation.
          </p>
        </div>
      )
    },
    "where-do-we-begin": {
      name: "Where do we begin",
      url: "https://wheredowebegin.org",
      description: () => (
        <div>
          <p>
            An intimate podcast exploring the beginnings of meaningful conversations and relationships, inviting reflection on life’s pivotal moments.
          </p>
        </div>
      )
    },
    "epicllama": {
      name: "Epicllama",
      url: "https://www.epicllama.com",
      description: () => (
        <div>
          <p>
            A quirky website that offers creative insights and a fresh perspective on modern culture.
          </p>
        </div>
      )
    },
    "perfect-socks": {
      name: "Perfect Socks",
      url: "https://www.perfectsocks.com",
      description: () => (
        <div>
          <p>
            Here are a pair of perfect home socks. (I dare you to find better).
          </p>
        </div>
      )
    },
    "perfect-chair": {
      name: "Perfect Chair",
      url: "https://www.perfectchair.com",
      description: () => (
        <div>
          <p>
            This chair is perfection. (I dare you to find better). And no I do not have it, I just sat on it.
          </p>
        </div>
      )
    }
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
      {info.description ? (
        // Render the description component
        <info.description />
      ) : (
        <p>
          {`This is a short description for ${info.name || "the bookmark"}.`}
        </p>
      )}
    </div>
  );
}

export default function Bookmarks({ isMobile }) {
  const { contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);
  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) && (
        <SecondarySidebar heading="Bookmarks" categories={bookmarkCategories} />
      )}
      {(!isMobile || contentIsVisibleMobile) && (
        <div className="content-area">
          <Routes>
            <Route path="/" element={<BookmarksHome />} />
            <Route path=":bookmarkId" element={<BookmarkDetail />} />
          </Routes>
        </div>
      )}
    </div>
  );
}
