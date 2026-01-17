// File: src/pages/Writing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from 'axios'
import { useContext, useState, useEffect } from "react";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebar from "../components/SecondarySidebar";
import MemoryTypes from "./MemoryTypes";

export const writingData = [
  {
    title: "Tango",
    items: [
      { label: "For Non-dancers", route: "/writing/tango/non-dancers" },
      { label: "Mentoring for Young Beginners", route: "/writing/tango/mentoring" },
      { label: "Exercises Ideas", route: "/writing/tango/exercises" },
      { label: "(p) Tango Music", route: "/writing/tango/music" },
      { label: "(p) A Woman in Tango", route: "/writing/tango/woman-in-tango" },
      { label: "(p) Giving and Getting", route: "/writing/tango/giving-getting" },
      { label: "(p) Talking about Tango", route: "/writing/tango/questions" },
      { label: "My perfect tanda", route: "/writing/tango/perfect-tanda" }
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
    title: "Career",
    items: [
      { label: "Shadow of University", route: "/writing/career/university" },
      { label: "Vocation", route: "/writing/career/vocation" }
    ],
  },
  {
    title: "Technology",
    items: [
      { label: "Memory Types", route: "/writing/technology/memory-types" }
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Nonsense", route: "/writing/personal/nonsense" },
      { label: "Rules to Live By", route: "/writing/personal/newTitle" }
    ],
  },

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
          content="Discover the essence of social Tango, an improvised dance embracing physical closeness, courage, and cultural rituals."
        />
        <meta
          name="keywords"
          content="Tango, social dance, embrace, improvisation, Tango culture"
        />
        <meta name="author" content="Helia Jamshidi" />

        {/* Open Graph */}
        <meta property="og:title" content="Tango for Non-Dancers | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Tango isn't about roses and fishnets, it’s a social dance blending physical mastery, improvisation, and culture. Learn how it can enrich your life."
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
          content="Learn why Tango is addictive, full of rituals, and fosters deeper connections through its improvisational embrace."
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
        It’s a universal thing for people outside Argentina not to understand what Tango can feel like until they’ve actually danced socially for several years. In the beginning, it might seem like something else entirely compared to what it becomes later. If you’ve only seen Tango in movies or videos, with a rose in the mouth or fishnets, set that aside. Let’s start from scratch.
      </p>
      <div className="image-gallery" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <p> In the playlist below, you will find humorous and cynical, but mostly accurate takes on Tango. There are also videos where social dancers share why they enjoy Tango. You'll see several clips of people dancing Tango socially, and finally, to complete the mix, a recorded video of a Tango Show (last 10/10 video). Keep in mind, he has been living Tango all his life, and this is not what most Tango dancing looks like.          </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=bYLG3di8iOf6Wjoc&amp;list=PLisEU8FzrGwnSVuma3SLQLL91jqFKlFvm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <p>
        On a structural level, I like explaining Tango by comparing it to a combination of elements in tennis and in playing music. Like tennis, you need physical mastery, quick reactions, and constant improvisation based on your partner. The details get finer over time, and you can’t plan moves a week in advance, you have to respond in the moment. Unlike tennis, though, there is no single goal, no 'winning' or points. You do not work against your opponent but with your partner. “Dancing better” means something different to every person, it can be dancing to every beat in the music, or dancing minimally, it could mean pleasing your partner or it could mean expressing your emotions, as with the music the final goal is up to you.
      </p>
      <p>
        It’s deeply historical, cultural, and social, connected to other forms of art like music and poetry. But unlike playing an instrument, social Tango is highly improvised. You don’t get a music sheet; you listen to your partner and the music, creating something new in the moment.
      </p>
      <p>
        So here are six things I enjoy most in Tango.
      </p>
      <p>
        <strong>Details:</strong> I enjoy Tango because of its endlessness. Even after 10 or 20 years, you’ll feel like you’re just beginning. The music, the connection, the physicality, it’s an addiction to wanting more. The same songs have been played for nearly a century, yet people still find nuances.
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
        <strong>Rituals:</strong> The Tango community also has codes and rituals built over more than a century: how the DJ arranges music, how to enter or leave the dance floor, ways to invite or decline a dance, when to switch partners, and so on. Some are archaic and follow an expired gendered lens, but many feel elegant and comforting, they keep things running smoothly and prevent chaos and damage to one’s ego.
      </p>
      <p>
        <strong>Travel:</strong> Travel blends nicely with Tango. Before dancing, I was just a tourist everywhere I went. Now, I can find a milonga in most cities and blend into the local community in a single night. You talk, you dance, you see how people live, and it’s often a deeper experience than typical tourism.
      </p>
      <p>
        Finally, Tango is wonderfully arbitrary. We pour in so much effort for a fleeting dance that isn’t broadcasted or recorded, that no one else sees, which we might not even remember. It exists only at that moment and then vanishes.
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
            Depiction of a Tango song by Murat Erdemsel
          </p>
        </a>
      </div>
    </div>
  );
}

const MentoringSection = () => {
  return (
    <div>
      <Helmet>
        {/* General SEO Tags */}
        <title>Learn Argentine Tango in Karlsruhe | Mentoring for Beginners</title>
        <meta
          name="description"
          content="Join personalized mentoring sessions for Argentine Tango in Karlsruhe. Learn balance, musicality, and milonga techniques. Perfect for beginners and young dancers."
        />
        <meta
          name="keywords"
          content="Argentine Tango Karlsruhe, learn milonga, tango mentoring, tango beginners, tango dance Karlsruhe, tango musicality, tango balance, tango community Karlsruhe"
        />

        {/* German SEO Tags */}
        <meta
          name="description"
          lang="de"
          content="Lernen Sie Argentinischen Tango in Karlsruhe mit persönlichem Mentoring für Anfänger. Verbessern Sie Balance, Musikalität und Milonga-Techniken. Perfekt für junge Tänzer und Einsteiger."
        />
        <meta
          name="keywords"
          lang="de"
          content="Argentinischer Tango Karlsruhe, Milonga lernen, Tango Mentoring, Tango Anfänger, Tango tanzen Karlsruhe, Tango Musikalität, Tango Balance, Tango Gemeinschaft Karlsruhe"
        />

        {/* Open Graph Tags (for social media sharing) */}
        <meta property="og:title" content="Learn Argentine Tango in Karlsruhe | Mentoring for Beginners" />
        <meta
          property="og:description"
          content="Join personalized mentoring sessions for Argentine Tango in Karlsruhe. Learn balance, musicality, and milonga techniques. Perfect for beginners and young dancers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heliajamshidi.me/writing/tango/mentoring" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Argentine Tango in Karlsruhe | Mentoring for Beginners" />
        <meta
          name="twitter:description"
          content="Join personalized mentoring sessions for Argentine Tango in Karlsruhe. Learn balance, musicality, and milonga techniques. Perfect for beginners and young dancers."
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://heliajamshidi.me/writing/tango/mentoring" />
      </Helmet>
      <section className="speaking-section">
        <h1>Mentoring for Young Beginners</h1>
        <p>
          I like to mentor young beginners to Tango with <strong>one-on-one or small-group sessions</strong> for people from one up to three years of dancing. Whether you’re leading or following, this is for people who already like Tango and want to improve and enjoy it. If you’re not sure if Tango is for you, visit the <strong>Group Beginner Classes in AKK</strong> instead. If you’re in love with Tango and want a push, <strong>write me</strong>.
        </p>

        <section className="speaking-section-colored">
          <h2>Why Mentoring Matters</h2>
          <p>
            Tango dancing itself is cheap, pay <strong>10 euros</strong>, and dance for six hours. But learning can be expensive, especially early on, and you don’t always need the most famous teacher from Buenos Aires. Plus, we need <strong>new, young dancers</strong> to learn faster so they don’t get frustrated and quit.
          </p>
        </section>

        <section className="list-section">
          <h3>Six Areas to Train Independently</h3>
          <p>
            There’s a feeling in tango that you only improve by dancing with people who are better than you. That used to bother me because it means your progress depends on who you manage to dance with, rather than on your own practice. I focus on <strong>six areas</strong> that you can train by yourself, without relying on a more advanced partner:
          </p>
          <ul>
            <li><strong>Balance:</strong> Exercising stable standing, walking, and turning, identifying good vs. bad balance habits.</li>
            <li><strong>Articulation and Control:</strong> Learning to move softly, controlling your leg speed, turning smoothly, all without a partner.</li>
            <li><strong>Musicality:</strong> In the first few years, all tango music can sound alike. I like to help you find at least one orchestra or one song you fall in love with, and then discover layers: rhythm, melody, texture.</li>
            <li><strong>Leader Strategies:</strong> If you lead, how not to get bored with your own ideas? Exercises and patterns to keep your dance fresh.</li>
            <li><strong>Full-Body Engagement:</strong> Using your toes, your arms, your torso, and your head, so dancing isn’t just about feet or arms alone.</li>
            <li><strong>Mental Aspects:</strong> Rejections, fear, confidence, gratitude, desire, calm, and attitude. These are rarely addressed in standard classes but can block or free you.</li>
          </ul>
        </section>

        <section className="call-to-action">
          <h3>Join the Community</h3>
          <p>
            To have a place to practice, you have to be a member of <strong>Tanzsportclub Astoria Karlsruhe</strong>. Membership is <strong>60 euros per 3 months</strong>, or you can suggest your own location.
          </p>
          <p>
            This is part of my wish to expand my community in Karlsruhe, and I am sure you have something I can learn from you. <strong>We will find out.</strong>
          </p>
          <a href="mailto:helia.jm@gmail.com" className="submit-button">
            Write Me
          </a>
        </section>
      </section>
    </div>
  );
};

const NonsenseExercises = () => {
  return (
    <section className="speaking-section">
      <h1>Nonsense Exercises I Like to Try in Tango</h1>
      <h4>If you like them too, let’s find a time to practice</h4>

      <section className="list-section">
        <ul>
          <li>
            <strong>The leader connects with the space, the follower connects the couple with the music and time.</strong>
            <p>
              The leader focuses on navigating, reading the space, and reacting to the room. The follower tunes into the music, shaping movement based on rhythm and timing. The leader stops dictating steps and instead responds to the environment, while the follower takes charge of musicality.
            </p>
          </li>
          <li>
            <strong>Dance actively the whole time so you feel like you’re dancing, but no one sees you dancing.</strong>
            <p>
              Engage your whole body, feel the music, and move with subtlety. Keep the dance internal, minimal from the outside, yet fully alive inside.
            </p>
          </li>
          <li>
            <strong>Dance at two different tempos at the same time, one very slow, one faster.</strong>
            <p>
              One person moves slowly, the other speeds up. Both stay connected, adjusting to each other's rhythm while maintaining their distinct timing.
            </p>
          </li>
          <li>
            <strong>A single impulse from the leader results in multiple steps from the follower.</strong>
            <p>
              The leader gives one movement, but the follower extends it into multiple steps or a flowing sequence.
            </p>
          </li>
          <li>
            <strong>Play between control and lack of control.</strong>
            <p>
              Switch between leading precisely and letting go. Shift between structured movement and spontaneous reactions.
            </p>
          </li>
          <li>
            <strong>Suddenly dance against each other, interrupting the flow of the other’s movement.</strong>
            <p>
              Break patterns, disrupt your partner’s steps, create tension, and play with unexpected shifts.
            </p>
          </li>
          <li>
            <strong>Dance only to one element in the music and stay still when it’s absent.</strong>
            <p>
              Move only when your chosen element, beat, melody, counter-melody, etc., is present. When it’s gone, pause.
            </p>
          </li>
          <li>
            <strong>Lead the follower’s steps and execute the follower’s steps as a leader.</strong>
            <p>
              Leaders follow, followers lead, without switching roles. Each executes the other’s movement within their existing role.
            </p>
          </li>
          <li>
            <strong>Play with projections and positions. Dance more statically, moving from position to position with less transition in between.</strong>
            <p>
              Hold defined shapes, move between them with minimal extra movement. Focus on clear positions over fluid transitions.
            </p>
          </li>
          <li>
            <strong>Switch between a very light touch and a very intense touch.</strong>
            <p>
              Vary your connection, sometimes barely there, sometimes grounded and firm.
            </p>
          </li>
          <li>
            <strong>One person becomes the center, the other moves around them, then switch.</strong>
            <p>
              One stays as the axis while the other orbits, then reverse roles.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

const PerfectTanda = () => (
  <section className="speaking-section">
    <h1>My perfect tanda, the dopamine, and the serotonin.</h1>

    <p>
      Unlike athletic sport, in tango, one can chase many diverging types of highs and goals, and that is the point. From meditative state, to technique perfection, from physical to mental connection, to the high of discovering strangers, to drama, to ambition, to being one with music or the floor, and many more. To each, their own, this is about what I find myself chasising after, in the time being, subject to change of course in the (possibly not so far) future.
    </p>

    <p>
      A good tango night used to feel like this, in slight exaggeration. I am walking back from a milonga, calling my partner, reporting how it went. Na ja, …. The way was long, and they started late; The right dancer did not see me in the Tanda that I was waiting for to dance with her. But! I had a moment, a mysterious breath in the third song of Pugliese that I never had before. SO IT WAS ALL WORTH IT.
    </p>

    <p>
      A really good night lately looks like this. I went into the room content, and the milonga could have actually stopped at any moment, and been just as good. Most dancers were feeling comfortable and at home, at ease most of the time.  And I could feel that what I was giving to each partner was surprisingly different.
    </p>

    <p>
      More and more often, this is a feature unlocked in my regular milonga. A sense of satisfaction with how much we all have changed in the past four years. A contemplation of what could be next for us. With a certainty that even though I am not there, something of me is still happening there. And of others who do not, cannot, dance anymore, something of them dances in me. A consensus that our presence there was giving and not asking.
    </p>

    <p>
      This reminds me of this quote (in a quote) from a blog about addiction to tango. Which inspired me to think about my journey in the first place.
    </p>

    <p>
      “””<br />
      “Dr. Huberman, addiction is the progressive narrowing of things that give one pleasure.” If he is right, I then would say that the "extreme opposite" of addiction is flow:  The progressive ability to widen the spectrum of things that give pleasure.  It is when the simple things of life give pleasure.
      “””
    </p>

    <p>
      My perfect tanda at the moment is not a “The” at all, it is in fact “A” perfect Tanda, which happens mostly in the nights where every tanda is perfect.
    </p>

    <p>
      It is kind of like John Lennon singing, stemming from an oblivion to what good even is. Is a thirst like ‘I desperately want to get to know you’, and also ‘show you myself’, but that once you do, I promise not to care, and make it a big deal, I will let it sit there. It is like how your cat knows you're great, but he is just okay with it.
      This curious, yet uncaring human will carry with him for me the gift of freedom, without making me feel arbitrary. The moment is light, as if we just started dancing, and we have all the time in the world, without rushing to achieve and to feel, but with a present that does not let a moment pass by, as if it were the last dance of my life. The stakes are set to be incredibly low in a perfect tanda, nothing to lose.
    </p>

    <p>
      If tango were a relationship, my current favorite tanda would not feel like a first date, or even a passionate moment. It would be more like spending time with an old friend, where I could feel myself, accompanied, and at home. Lately, it is only in this anchor of trust that I find myself truly free to explore.
    </p>
  </section>
);

function ArticlePage({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is some placeholder text for the writing article content.</p>
    </div>
  );
}

function Poems() {
  return (
    <div>
      <div className="poem">
        <h4>1</h4>
        <p>Was your skin out of air?</p>
        <p>I feel you told me it was</p>
        <p>Would someone believe me when I tell them?</p>
        <p>Would I feel something if I touched them?</p>
        <p>That was not for me to know</p>
      </div>

      <div className="poem">
        <h4>2</h4>
        <p>How is anyone ever sure what they want?</p>
        <p>I asked you once</p>
        <p>You pushed all the doubts away</p>
        <p>Who else could tell me what I don't want to hear?</p>
        <p>When hope had crippled in, I asked you again</p>
        <p>How can I trust that you know yourself?</p>
      </div>

      <div className="poem">
        <h4>3</h4>
        <p>Does poetry have to be true, or just beautiful?</p>
        <p>How can I know the truth about you?</p>
        <p>I felt every colour, day after night</p>
        <p>How can I tell which day deserves to be told?</p>
        <p>Can I ever have two things at once, or will they tear me apart every time?</p>
        <p>No one cared less about impressing me</p>
        <p>But could you not just a little bit?</p>
        <p>How odd to find you so untaint</p>
        <p>How comforting to know nothing could be fake but myself</p>
        <p>Would I give that up to know that you cared what I think of you?</p>
        <p>Or could I just not face the shame for how far I have walked down paths that I did not choose?</p>
      </div>

      <div className="poem">
        <h4>4</h4>
        <p>The anticipation of possibility in complete unknown</p>
        <p>The sea of people I will not know</p>
        <p>The lonely cold walk to the warms that might await me</p>
        <p>When we are two, there is always something to share, a detail to remember together</p>
        <p>When we are two, they are the outside and we are the inside</p>
        <p>But I arrive here on a single point</p>
        <p>I take no space, even in theory</p>
        <p>Is there something to be missed about the inside?</p>
      </div>

      <div className="poem">
        <h4>5</h4>
        <p>It was not an easy way to this point</p>
        <p>Nor was it a short one</p>
        <p>To know I can stay here on the half floor</p>
        <p>To be not-interested</p>
        <p>To know what I wanted</p>
        <p>To let the others talk, laugh, and drink whisky</p>
        <p>But that I was here</p>
        <p>Only in company of my feet demanding attention</p>
        <p>To once not envy the desires I see</p>
        <p>How long I had wished for this</p>
        <p>How many nights that went with me not knowing</p>
        <p>But have I learned something, or is it what I will lose again?</p>
      </div>

      <div className="poem">
        <h4>6</h4>
        <p>Do I choose to have the choice?</p>
        <p>Do I put my heart and reflection, at mercy of people I don't know</p>
        <p>And do this next month and the one after that</p>
        <p>To once discover the same need in the eyes of another</p>
        <p>Will I go round and round again?</p>
        <p>Am I in it for the way, with no end to expect?</p>
        <p>Or do I choose to shield myself from the circle?</p>
        <p>With your heart, your gaze, and your arm on my shoulder, or your chest against mine?</p>
        <p>With a promise that you withhold nothing for the next ten minutes?</p>
      </div>

      <div className="poem">
        <h4>7</h4>
        <p>Have you ever thought about it?</p>
        <p>Did a second pass you by, even a forgettable one?</p>
        <p>Will you ever find out how I felt?</p>
        <p>I have told others</p>
        <p>Will you be mad?</p>
      </div>

      <div className="poem">
        <h4>8</h4>
        <p>I prepare myself to be distant</p>
        <p>Here when I can, when I have someone I know.</p>
        <p>What would you be expecting when I come back?</p>
        <p>Do I make it easy just for me?</p>
        <p>You never show how you hurt</p>
        <p>But it was already more than I could take.</p>
        <p>Can that ever be an excuse?</p>
        <p>Did you wish to be set free of me?</p>
        <p>Tell me you miss me, but don't hurt too much</p>
        <p>Make it easy for me, but not easy enough</p>
        <p>Leave me remembering your skin, but not always</p>
        <p>Let me rest my body next to yours, but just in my dreams</p>
      </div>

      <div className="poem">
        <h4>9</h4>
        <p>You wake up to see you're swimming in water</p>
        <p>It is warm and it gets warmer</p>
        <p>You swim, but there is no out</p>
        <p>Your feet reach the floor</p>
        <p>You know you can walk out</p>
        <p>But your feet are powerless in pushing the floor</p>
        <p>Where did the water come?</p>
        <p>You dreamed the water and now it stays</p>
        <p>Can I dream anything, no matter how enorm, how powerful?</p>
        <p>Does power come out of nothing?</p>
        <p>Can I be excused? ..No.</p>
        <p>...</p>
        <p>The water seems silly </p>
        <p>Maybe I can distract it with a joke</p>
        <p>Just enough to walk out</p>
        <p>I know it is a dream and nobody can see me in the water</p>
        <p>I could walk out with no one noticing</p>
        <p>But whenever I have hope, I get heavier</p>
        <p>I imagine myself dead. It is a dream after all</p>
        <p>I can be anyone</p>
        <p>If I am dead or someone else, ..</p>
        <p>Then maybe their feet can push the floor</p>
        <p>I get more afraid</p>
        <p>I stop to swimm and just think about walking</p>
        <p>I try to remember in detail how I have ever walked before</p>
        <p>Hours pass and I now have built a theory ..... </p>
      </div>

      <div className="poem">
        <h4>10</h4>
        <p>I give you my arms, and you give me your legs, he said</p>
        <p>But more than anything, it was his tears he gave me</p>
        <p>They were mine more than his</p>
        <p>It was only me they listened to</p>
      </div>
    </div>
  );
}

function RulesToLiveBy() {
  return (
    <div>
      <h1>Rules to Live By (in No Particular Order)</h1>
      <div style={{ maxWidth: "42rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <p style={{ fontStyle: "italic", marginBottom: 0 }}>
          Rules to live by, written as scattered notes.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
          <p>Don’t listen to reply.</p>
          <p>There is no intuition in unknown territory.</p>
          <p>Freedom is not the absence of restrictions, but finding the right ones.</p>
          <p>Technology has not been an automatic feature of history.</p>
          <p>
            When you have nothing but your identity and job to rest on, you find yourself
            constantly comparing yourself to others.
          </p>
          <p>
            When you keep focusing on the specific circumstance of your pain, you easily become
            angry and resentful.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", paddingLeft: "1rem" }}>
          <p style={{ fontStyle: "italic" }}>Friendship, passion, and selfless giving.</p>
          <p>Competition can make you see value where there is none.</p>
          <p>Kindness can come at the cost of not seeking the truth.</p>
          <p>You don’t want to be selfish.</p>
          <p>Allow yourself sometimes to take more shit from some people.</p>
          <p>
            We think we want ease and comfort, and of course, we do from time to time, but something
            inside longs for some calling that requires dedication and sacrifice.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            paddingLeft: "1.25rem",
            borderLeft: "2px solid #eee"
          }}
        >
          <p>Being Nice is not the same as being Kind.</p>
          <p>Maximize feeling responsible and minimize feeling guilty, and mark the difference.</p>
          <p>
            Decide when the game (set by others) is interesting enough (or cheap enough) to play,
            and when you should make your own games.
          </p>
          <p>Curiosity and playing for the long term can often turn fear around.</p>
          <p>
            Negative feelings about negative feelings are more annoying and formidable than the
            feelings alone.
          </p>
          <p>Being sad or mad cannot be a character.</p>
          <p>Attention (to anything) is a good antidote to boredom.</p>
          <p>If your values do not cost you anything, they are not your values.</p>
          <p>Between worrying and caring, choose the latter.</p>
          <p>
            95% of the time, I like to not take myself seriously, but still be able to recognize
            that 5% were, I need to take it dead serious.
          </p>
        </div>
      </div>
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
            <Route path="/tango/mentoring" element={<MentoringSection />} />
            <Route path="/tango/exercises" element={<NonsenseExercises/>} />
            <Route path="/tango/music" element={<ArticlePage title="Tango Music" />} />
            <Route path="/tango/woman-in-tango" element={<ArticlePage title="A Woman in Tango" />} />
            <Route path="/tango/giving-getting" element={<ArticlePage title="Giving and Getting" />} />
            <Route path="/tango/questions" element={<ArticlePage title="Talking about Tango" />} />
            <Route path="/tango/perfect-tanda" element={<PerfectTanda />} />

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
            <Route path="/personal/nonsense" element={<Poems />} />
            <Route path="/personal/newTitle" element={<RulesToLiveBy />} />

            {/* Career Articles */}
            <Route path="/career/university" element={<MediumArticle
              rssFeed="https://medium.com/feed/@helia.jm"
              targetSlug="the-long-shadow-of-the-university"
            />} />
            <Route path="/career/vocation" element={<MediumArticle
              rssFeed="https://medium.com/feed/@helia.jm"
              targetSlug="can-i-find-satisfying-work"
            />} />
            {/* Technology Articles */}
            <Route path="/technology/memory-types" element={<MemoryTypes />} />
          </Routes>
        </div>
      }
    </div>
  );
}
