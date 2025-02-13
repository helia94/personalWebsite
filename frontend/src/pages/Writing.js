// File: src/pages/Writing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import { useContext, useState, useEffect } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";

export const writingData = [
  {
    title: "Tango",
    items: [
      { label: "For Non-dancers", route: "/writing/tango/non-dancers" },
      { label: "(p) Teaching for Young Beginners", route: "/writing/tango/teaching" },
      { label: "(p) Tango Music", route: "/writing/tango/music" },
      { label: "(p) Learning Tango Faster", route: "/writing/tango/leaning" },
      { label: "(p) A Woman in Tango", route: "/writing/tango/woman-in-tango" },
      { label: "(p) Giving and Getting", route: "/writing/tango/giving-getting" },
      { label: "(p) Talking about Tango", route: "/writing/tango/questions" }
    ],
  },
  {
    title: "Dating",
    items: [
      { label: "Third Generation of Online Dating", route: "/writing/dating/online-dating" },
      { label: "(p) First Date Ideas", route: "/writing/dating/first-date" }
    ],
  },
  {
    title: "SmallTalk",
    items: [
      { label: "(p) Connection", route: "/writing/smalltalk/connection" },
      { label: "(p) Hard Not to SmallTalk", route: "/writing/smalltalk/smalltalk-sticks" }
    ],
  },
  {
    title: "Work",
    items: [
      { label: "Shadow of University", route: "/writing/work/university" },
      { label: "Vocation", route: "/writing/work/vocation" }
    ],
  }
];


function WritingHome() {
  return (
    <div>
      <h2>Writing Overview</h2>
      <p>Select a topic from the left sub-menu to read articles.</p>
    </div>
  );
}


const MediumArticle = ({ rssFeed, targetSlug }) => {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssFeed
        )}`
      )
      .then((res) => {
        // Find the article whose link includes the target slug, or fallback to the first item
        const found = res.data.items.find((item) =>
          item.link.includes(targetSlug)
        )
        setArticle(found || res.data.items[0])
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [rssFeed, targetSlug])

  if (!article) return <div>Loading...</div>

  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        Read on Medium
      </a>
    </div>
  )
}

function TangoIntroduction() {
  return (
    <div>
      <Helmet>
        <title>Tango for Non-Dancers | Helia Jamshidi</title>
        <meta
          name="description"
          content="Discover the essence of social tango—an improvised dance embracing physical closeness, courage, and cultural rituals."
        />
        <meta
          name="keywords"
          content="Tango, social dance, embrace, improvisation, tango culture"
        />
        <meta name="author" content="Helia Jamshidi" />

        {/* Open Graph */}
        <meta property="og:title" content="Tango for Non-Dancers | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Tango isn't about roses and fishnets—it’s a social dance blending physical mastery, improvisation, and culture. Learn how it can enrich your life."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/v1739135937/tango-hug_nq2ql5.png"
        />
        <meta property="og:url" content="https://heliajamshidi.me/writing/tango" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tango for Non-Dancers | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="Learn why tango is addictive, full of rituals, and fosters deeper connections through its improvisational embrace."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/v1739135937/tango-hug_nq2ql5.png"
        />

        <link rel="canonical" href="https://heliajamshidi.me/writing/tango" />
      </Helmet>

      <h1>
        Tango For Non-dancers
      </h1>
      <p>
        It’s a universal thing for people outside Argentina not to understand what tango can feel like until they’ve actually danced socially for several years. In the beginning, it might seem like something else entirely compared to what it becomes later. If you’ve only seen tango in movies or videos, with a rose in the mouth or fishnets, set that aside. Let’s start from scratch.
      </p>
      <p>
        On a structural level, I like explaining tango by comparing it to a combination of elements in tennis and in playing music. Like tennis, you need physical mastery, quick reactions, and constant improvisation based on your partner. The details get finer over time, and you can’t plan moves a week in advance—you have to respond in the moment. Unlike tennis, though, there is no single goal—no 'winning' or points. You do not work against your opponent but with your partner. “Dancing better” means something different to every person, it can be dancing to every beat in the music, or dancing minimally, it could mean pleasing your partner or it could mean expressing your emotions, as with the music the final goal is up to you.
      </p>
      <p>
        It’s deeply historical, cultural, and social, connected to other forms of art like music and poetry. But unlike playing an instrument, social Tango is highly improvised. You don’t get a music sheet; you listen to your partner and the music, creating something new in the moment.
      </p>
      <p>
        So here are six things I enjoy most in Tango.
      </p>
      <p>
        <strong>Details:</strong> I enjoy Tango because of its endlessness. Even after 10 or 20 years, you’ll feel like you’re just beginning. The music, the connection, the physicality—it’s an addiction to wanting more. The same songs have been played for nearly a century, yet people still find nuances.
      </p>
      <p>
        <strong>Embrace:</strong> Over time, you become comfortable with close physical contact and reading subtle signals in another person’s body. Every dancing night, you hug new or familiar people in a tight embrace. It changes your perspective on physical closeness, and you develop your attention in the moment, a kind of body-based meditation.
      </p>
      <p style={{ textAlign: 'center' }}>
        <img
          src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739135937/tango-hug_nq2ql5.png"
          alt="Tango Hug"
          style={{ width: "40rem", maxWidth: "90%" }}
        />
      </p>
      <p>
        <strong>Courage:</strong> You’ll need courage, especially in the beginning, to approach strangers, ask for a dance, ask that they give you 12 minutes of undivided attention, and watch you make many mistakes and slightly put their toes at risk. But that courage spreads to other parts of life.
      </p>
      <p>
        <strong>Rituals:</strong> The tango community also has codes and rituals built over more than a century: how the DJ arranges music, how to enter or leave the dance floor, ways to invite or decline a dance, when to switch partners, and so on. Some are archaic and follow an expired gendered lens, but many feel elegant and comforting—they keep things running smoothly and prevent chaos and damage to one’s ego.
      </p>
      <p>
        <strong>Travel:</strong> Travel blends nicely with tango. Before dancing, I was just a tourist everywhere I went. Now, I can find a milonga in most cities and blend into the local community in a single night. You talk, you dance, you see how people live, and it’s often a deeper experience than typical tourism.
      </p>
      <p>
        Finally, tango is wonderfully arbitrary. We pour in so much effort for a fleeting dance that isn’t broadcasted or recorded, that no one else sees, which we might not even remember. It exists only at that moment and then vanishes.
      </p>
      <div className="image-gallery" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a
          href="https://muraterdemsel.com/MuratsArt/MuratsArt.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontStyle: 'italic', fontSize: "0.8rem" }}
        >        <img
            src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739138215/SOS-website_obuiw2.jpg"
            alt="Tango Music Depiction"
            style={{ width: "40rem", maxWidth: "90%", display: "block" }}
          />
          <p style={{ fontStyle: 'italic' }}>
            Depiction of a tango song by Murat Erdemsel
          </p>
        </a>
      </div>
    </div>
  );
}

function ArticlePage({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is some placeholder text for the writing article content.</p>
    </div>
  );
}

export default function Writing({ isMobile }) {
  const { contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);

  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) &&
        <SecondarySidebar heading="Writing" categories={writingData} isMobile={isMobile} />
      }

      {(!isMobile || contentIsVisibleMobile) &&
        <div className="content-area">
          <Routes>
            <Route path="/" element={<WritingHome />} />
            {/* Tango Articles */}
            <Route path="/tango/non-dancers" element={<TangoIntroduction />} />
            <Route path="/tango/teaching" element={<ArticlePage title="Teaching for Young Beginners" />} />
            <Route path="/tango/music" element={<ArticlePage title="Tango Music" />} />
            <Route path="/tango/leaning" element={<ArticlePage title="Learning Tango Faster" />} />
            <Route path="/tango/woman-in-tango" element={<ArticlePage title="A Woman in Tango" />} />
            <Route path="/tango/giving-getting" element={<ArticlePage title="Giving and Getting" />} />
            <Route path="/tango/questions" element={<ArticlePage title="Talking about Tango" />} />

            {/* Dating Articles */}
            <Route path="/dating/online-dating" element={<MediumArticle
              rssFeed="https://medium.com/feed/@helia.jm"
              targetSlug="how-to-transition-to-a-third-generation-of-online-dating-platforms"
            />} />
            <Route path="/dating/first-date" element={<ArticlePage title="First Date Ideas" />} />

            {/* SmallTalk Articles */}
            <Route path="/smalltalk/connection" element={<ArticlePage title="Conection" />} />
            <Route path="/smalltalk/smalltalk-sticks" element={<ArticlePage title="It Is Hard Not to SmallTalk" />} />

            {/* Personal Articles */}
            <Route path="/personal/article-personal-1" element={<ArticlePage title="Personal Article 1" />} />

            {/* Work Articles */}
            <Route path="/work/university" element={<MediumArticle
              rssFeed="https://medium.com/feed/@helia.jm"
              targetSlug="the-long-shadow-of-the-university"
            />} />
            <Route path="/work/vocation" element={<MediumArticle
              rssFeed="https://medium.com/feed/@helia.jm"
              targetSlug="can-i-find-satisfying-work"
            />} />
          </Routes>
        </div>
      }
    </div>
  );
}
