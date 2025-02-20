// File: src/pages/Bookmarks.js
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useContext } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";
import "./Bookmarks.css";
import EconTalk from "./EconTalk"
import Collage from "../components/Collage"

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
        label: "(p) Being You",
        route: "/bookmarks/being-you"
      },
      {
        label: "(p) The Song Of Significance",
        route: "/bookmarks/the-song-of-significance"
      },
      {
        label: "(p) Tribes",
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
        label: "(p) Conversations with Tyler",
        route: "/bookmarks/conversations-with-tyler"
      },
      {
        label: "(p) Akimbo",
        route: "/bookmarks/akimbo"
      },
      {
        label: "(p) Where do we begin",
        route: "/bookmarks/where-do-we-begin"
      },
    ],
  },
  {
    title: "Web",
    items: [
      {
        label: "(p) Epicllama",
        route: "/bookmarks/epicllama"
      }
    ],
  },,
  {
    title: "Goodies",
    items: [
      {
        label: "(p) Perfect Socks",
        route: "/bookmarks/perfect-socks"
      },
      {
        label: "(p) Perfect Chair",
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

const LisaYouTubeEmbed = () => {
  return (
    <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/0gks6ceq4eQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Emotions Explained"
    ></iframe>
    <p>Watch Lisa Feldman Barrett explain how emotions are made.</p>
  </div>
  );
};

function BookmarkDetail() {
  const { bookmarkId } = useParams();

  // Create an entry for every bookmark in bookmarkCategories.
  // The keys here (e.g. "come-as-you-are") match the last segment of the route.
  const bookmarksInfo = {
    "come-as-you-are": {
      name: "Come As You Are",
      url: "https://www.simonandschuster.com/books/Come-As-You-Are-Revised-and-Updated/Emily-Nagoski/9781982165314",
      description: () => (
        <div>
        <p>
          If I could suggest only one book, it would surely be <i>Come As You Are</i> by <b>Emily Nagoski</b>. To show you why, let me ask you a few questions:
        </p>
      <section className="speaking-section">
      <div className="list-section">
        <ul style={{listStyle :"none"}}>
          <li>
            Did you form expectations about how you should feel or desire around sexuality before you had a chance to discover what you truly feel and desire?
          </li>
          <li>
            Are you afraid of hurting your partner’s feelings while also fearing not meeting their expectations?
          </li>
          <li>
            Do you wonder if "good" and "normal" sexual experiences have been defined by what works for most men?
          </li>
          <li>
            Do you struggle to like or trust your body to behave the way you want it to?
          </li>
          <li>
            Do you think there’s something wrong with your desires?
          </li>
        </ul>
        </div>
        </section>
        <p>
          If you feel that your sexuality is a stranger to yourself; if you feel you should have sex more or less than you want; if you’ve changed and want to reclaim something from your past; if you can’t fully let go during intimacy, or if you think you’ve lost the desire for sex entirely—this book is worth reading.
        </p>
        <p>
          <b>Emily Nagoski</b> doesn’t tell you what to do. There are no techniques or tricks. Instead, the book feels like an invitation to enter a safe space for a few minutes where you can drop all expectations around sex and simply experience how you feel without them. It’s like the author is holding your hand, helping you feel normal, comfortable, and okay in your body. Even if you already feel comfortable in your skin, this book can bring empathy for others who struggle under the weight of cultural expectations around sex.
        </p>
        <blockquote class="quote">
          When people ask me, "Am I normal?" They're asking, "Do I belong?" The answer is yes. You belong in your body. You belong in the world. You've belonged since the day you were born, this is your home. You don't have to earn it by conforming to some externally imposed sexual standard.
        </blockquote>
  
        <div>
          <h3>Who should not read the book:</h3>
          <p>
            If you’re looking for a straightforward, science-heavy, fact-driven guide to sexuality, you will be disappointed. <i>Come As You Are</i> is more like talking to a therapist or a good friend—it’s conversational, and filled with metaphors and repetition. The overly chatty tone can come off as condescending, or even infantilizing, especially to those who prefer a more serious tone. For me, the repetition was a feature, not a bug. I didn’t go into this book looking for facts and information; I wanted understanding and a change of mindset, which I believe is only possible through repetition. I plan to read it more times. But I can see how it might feel redundant or unnecessary to others.
          </p>
          <p>
            Additionally, some readers notice the book’s heteronormative scope. It primarily centers on cisgender women’s experiences.
          </p>
        </div>
      </div>
      )
    },
    "how-emotions-are-made": {
      name: "How Emotions Are Made",
      url: "https://lisafeldmanbarrett.com/books/how-emotions-are-made/",
      description: () => (
        <div>
          <p>
          <i>How Emotions Are Made</i> suggests that your brain might mix up the bodily feelings of <b>having the flu</b> with those of <b>falling in love</b>.
           The premise is that your brain is a prediction machine. It doesn’t passively receive sensory data;
            it uses past experience to predict and interpret them.
            She introduces the concept of the <b>'body budget,'</b> where your brain acts like an accountant, constantly adjusting and allocating energy, nutrition, and oxygen to keep you going.
            Even the presence of your boss in the hallway can alter your budget, draining or boosting energy.
            You might interpret bodily signals as being sick or falling in love, depending on context.
          </p>
          <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739118864/Screenshot_2025-02-09_162336_js4lmm.png"
              alt="Cat Photos"
              style={{width:"30rem", maxWidth:"90%"}}
            />
          <p>
            There’s a lot about how we classify and label emotions. 
            You see something, your body reacts, and then you guess or construct which 'emotion' you’re feeling based on your assumptions and past experiences. 
            She then provides ideas for building a healthier body budget—getting good sleep, better nutrition, exercise, physical touch, and gratitude. 
            It redefines how I see emotions and the line between <b>'body' and 'mind’</b>.
          </p>
          <LisaYouTubeEmbed/>
          <Collage/>
        </div>
        
      )
    },
    "why-we-sleep": {
      name: "Why We Sleep",
      url: "https://www.goodreads.com/book/show/34466963-why-we-sleep",
      description: () => (
        <div>
        <img
            src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739119872/Screenshot_2025-02-09_174438_gllcmf.png"
            alt="Cat Photos"
            style={{width:"40rem", maxWidth:"90%"}}
          />
          <p>
          Why We Sleep by Matthew Walker changed my view of sleep. 
          I used to think of sleep as simply "turning off," like a laptop, but it’s far more complex. Sleep is not passive; 
          it’s an active process where parts of your brain are even more active than when you’re awake.
          </p>
          <p>
          The book covers the best research on sleep, its effects on emotional and physical health, and why we dream. 
          It also provides ways for improving sleep. 
          While I felt Walker could be more rigorous in some conclusions, 
          the book is an effective way to shift your mindset about sleep and take it seriously—not as wasted time, but as a critical part of life.
          </p>
          <p>I for example had no idea that we and many other animal have four sleep cycles of sleep with dearm and without. 
            Here is how it looks if like me, you did not know about it either.</p>
        <img
            src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739120164/Screenshot_2025-02-09_175458_vx4tki.png"
            alt="sleep cycles"
            style={{width:"40rem", maxWidth:"90%"}}
          />
          <div style={{margin: "3rem"}}>
          <p>
            You can get a taste of the book from his podcast.
          </p>
          <iframe 
            src="https://open.spotify.com/embed-podcast/show/1aIVAabjRjnmiouX0zCzF3" 
            width="100%" 
            height="352" 
            frameborder="0" 
            allow="encrypted-media" 
            allowtransparency="true">
          </iframe>
          </div>
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
        <EconTalk/>
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
      <h1>{info.name || "Unknown Bookmark"}</h1>
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
