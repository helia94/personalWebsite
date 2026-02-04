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
      { label: "More Milonga Rituals", route: "/writing/tango/rituals" },
      { label: "My perfect tanda", route: "/writing/tango/perfect-tanda" },
      { label: "Say No", route: "/writing/tango/say-no" },
      { label: "Shame", route: "/writing/tango/shame" }
    ],
  },
  {
    title: "Dating",
    items: [
      { label: "Third Generation of Online Dating", route: "/writing/dating/online-dating" },
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
      { label: "Rules to Live by", route: "/writing/personal/rulesToLiveBy" }
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

function MoreMilongaRituals() {
  return (
    <div className="milonga-rituals">
      <Helmet>
        <title>More Milonga Rituals | Helia Jamshidi</title>
        <meta
          name="description"
          content="A collection of milonga rituals that bring dancers together: blindfold chairs, circle prompts, silent tandas, and more."
        />
        <meta
          name="keywords"
          content="milonga rituals, tango community, tango social dance, tango event ideas"
        />
        <meta name="author" content="Helia Jamshidi" />
        <meta property="og:title" content="More Milonga Rituals | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Creative milonga rituals to deepen connection: blindfold chairs, circle prompts, silence, and shared games."
        />
        <meta property="og:url" content="https://heliajamshidi.me/writing/tango/rituals" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="More Milonga Rituals | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="A list of rituals to add more warmth and connection to milongas."
        />
        <link rel="canonical" href="https://heliajamshidi.me/writing/tango/rituals" />
      </Helmet>

      <h1>More Milonga Rituals</h1>
      <p>
        One of the reasons I love milongas is for the rituals. I love the fact that when a stranger
        comes and watches a milonga, she would have in the beginning no idea how so many people can
        pair up within 10 seconds and come to the dance floor. I love that we clap for the DJ before
        a comparsita. I love that you begin the first and the last one with a special someone.
      </p>
      <p>
        And I like to have more rituals. These I have learned from the Taboe Camp in the
        Netherlands, and I hope they inspire you if you currently organize a milonga or a Tango
        event.
      </p>
      <p>
        My absolute favorite: Chairs with Blindfolds. You can sit, blindfold yourself, have some
        sort of a sign whether you want to lead or you want to follow, and people can ask you to
        dance by touching your hand or gently letting you know that they want to dance with you. I
        still don’t know with whom I danced while I was blindfolded, and I find that marvelous.
      </p>
      <p>
        One other thing Paras did, which I’ve dreamt of many, many times, I was sure that if I ever
        organize a weekend Tango, this would for sure be part of it. Sometimes she announces: We’re
        gathering. Everybody knows that this time they should come. It’s a call for everybody to
        join, unlike normal milongas or marathons, which have a very open beginning and end. I
        think it’s worth it, for some time, for everybody to join, where things can be shared.
      </p>
      <p>
        What she does is this: you’re in a big circle. I’ve also done this in Fuck the Small Talk
        or other meetups in non-Tango contexts, that’s why I knew it and loved it already. You stand
        in a big circle and then either a host or even the participants ask a question or say
        something, and then ask, “Who’s with me?” Somebody can step into the middle and say, “I like
        dancing both roles,” meaning they’re double role, and everybody else who’s double role joins
        them. From the beginning, everybody knows them, other options I like: “I came here on my
        own”, “I am a beginner”, “it is my first time in this event”. Or it could be about
        feelings: who thinks they’re not good enough in their dancing, who likes to play and not
        have strict roles, who loves Troilo, who loves only the closed embrace, whatever people in
        the moment want to ask. You suddenly have clues about who intrigues you that you might
        otherwise need two or three days to find out, and it puts us into new shared identities
        beyond man, woman, or where you’re from.
      </p>
      <p>
        Another thing I loved: every day, for a long Tanda, five or six songs, again everybody
        joins. You switch faster, randomly, after one song. The risk is lower. You try things. You
        dance with people you otherwise might not. There’s a lot of randomness and togetherness.
        The floor is full, and you get to know people very fast.
      </p>
      <p>
        Another version of this I experienced in Granada, Spain. Instead of a birthday vals where
        one person dances with many people, they made a very big ronda with everybody. They played
        a vals and switched very fast, the same way as a birthday vals. At the end, everybody had
        danced with everybody from the other role. In that case, you would follow the entire time
        and dance with all the leaders if you were following. I found that amazing. It’s a powerful
        way to understand how everyone’s embrace actually feels. A lot of information.
      </p>
      <p>
        What we also had, maybe it doesn’t work for a single-day milonga, or maybe it does, was
        having a lot of pens and cards. You could write anonymous notes and ask a third person to
        deliver them, or place them at someone’s seat or in their bag when they’re not looking. I
        find this letter-writing nostalgic and classy. You can say things you normally wouldn’t
        say: what impression someone left on you, how they made you feel. You give back in words
        what you want them to feel.
      </p>
      <p>
        The credit for this one goes to Sia and Oxana from Basel. They once did something in a
        milonga that I would like to have in every milonga, maybe even many times. Instead of
        playing different songs from one orchestra in one year, as the rule usually goes, they
        played the same song by different orchestras in one Tanda. Especially for less experienced
        dancers, it’s a gift to hear the radical diversity of interpretations of one composition.
        It’s an easy way to understand contrast when people are beginning their Tango journey and
        getting used to Tango music.
      </p>
      <p>
        Something I haven’t experienced yet but would love is better small talk around the tables,
        at the bar, when you’re not dancing. We already have more small talk in Tango than in other
        social events, but I’d love to go deeper. Having question cards around the milonga and
        making it normal to use them would significantly improve the quality of time. Otherwise,
        non-dancing time is often idle or shallow. These cards could be generic or an open-source
        version with Tango-specific questions, “see end of blog for a link”.
      </p>
      <p>
        What I’ve heard of but never experienced, and I’m eager to try, are two things. One:
        follower’s choice. For one or more Tandas, leaders sit passively and are chosen by
        followers. The other: dancing some Tandas in complete silence, invited by the DJ.
      </p>
      <p>
        Also, any rules that force more social friction, but because they’re rules, they’re not
        awkward, just excuses to interact. Simple things like you cannot pour yourself a drink;
        someone else must offer it. If you want water, the person next to you pours it. Coffee,
        whatever. People become more aware of each other’s needs, more accommodating, and that
        often leads to longer conversations.
      </p>
      <p>
        Another thing I’ve heard of but never experienced is dancing in the dark, with only bright
        bracelets, so you don’t run into other couples.
      </p>
      <p>
        And finally, something I would love in weekly or monthly local milongas: a helping box.
        Just a shoebox with cards. If something is going on in your life and you need help, you
        write it down. People can check the box and see if they can help or know someone who can,
        finding a flat, moving something, or recommending a doctor. I think meeting people over
        drinks just to talk is overrated, while doing projects and tasks together is underrated.
        This box could be a collection of excuses for people who already know each other to do
        more together than just Tango.
      </p>
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
      <Helmet>
        <title>Nonsense Exercises in Tango | Helia Jamshidi</title>
        <meta
          name="description"
          content="A playful list of tango exercises and prompts for experimentation, musicality, and connection."
        />
        <meta
          name="keywords"
          content="tango exercises, tango practice, tango improvisation, tango musicality"
        />
        <meta name="author" content="Helia Jamshidi" />
        <meta property="og:title" content="Nonsense Exercises in Tango | Helia Jamshidi" />
        <meta
          property="og:description"
          content="A playful list of tango exercises and prompts for experimentation, musicality, and connection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heliajamshidi.me/writing/tango/exercises" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Nonsense Exercises in Tango | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="A playful list of tango exercises and prompts for experimentation, musicality, and connection."
        />
        <link rel="canonical" href="https://heliajamshidi.me/writing/tango/exercises" />
      </Helmet>
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
    <Helmet>
      <title>My Perfect Tanda | Helia Jamshidi</title>
      <meta
        name="description"
        content="A reflection on the kinds of highs tango offers and what a perfect tanda feels like."
      />
      <meta
        name="keywords"
        content="perfect tanda, tango reflections, tango connection, tango rituals"
      />
      <meta name="author" content="Helia Jamshidi" />
      <meta property="og:title" content="My Perfect Tanda | Helia Jamshidi" />
      <meta
        property="og:description"
        content="A reflection on the kinds of highs tango offers and what a perfect tanda feels like."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://heliajamshidi.me/writing/tango/perfect-tanda" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="My Perfect Tanda | Helia Jamshidi" />
      <meta
        name="twitter:description"
        content="A reflection on the kinds of highs tango offers and what a perfect tanda feels like."
      />
      <link rel="canonical" href="https://heliajamshidi.me/writing/tango/perfect-tanda" />
    </Helmet>
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

const SayNo = () => (
  <section className="speaking-section">
    <Helmet>
      <title>Say No in Tango | Helia Jamshidi</title>
      <meta
        name="description"
        content="Why kindly saying no in tango can deepen consent, trust, and the joy of dancing."
      />
      <meta
        name="keywords"
        content="tango consent, saying no in tango, tango boundaries, tango community"
      />
      <meta name="author" content="Helia Jamshidi" />
      <meta property="og:title" content="Say No in Tango | Helia Jamshidi" />
      <meta
        property="og:description"
        content="Why kindly saying no in tango can deepen consent, trust, and the joy of dancing."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://heliajamshidi.me/writing/tango/say-no" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Say No in Tango | Helia Jamshidi" />
      <meta
        name="twitter:description"
        content="Why kindly saying no in tango can deepen consent, trust, and the joy of dancing."
      />
      <link rel="canonical" href="https://heliajamshidi.me/writing/tango/say-no" />
    </Helmet>
    <h1>Say No</h1>

    <p>
      I have a theory that comfortably/kindly saying No in Tango will eventually make you a better dancer.
    </p>

    <p>
      But do not judge me yet, it's probably not for the reason you are thinking.
    </p>

    <p>
      Although I dance both roles, this feeling is from my experience as a follower and as a leader, observing other followers. To be honest, as a leader, I am still searching for a similar thing that would make me enjoy myself and the partners more, but it remains to be found.
    </p>

    <p>
      It was 2022, I was in Berlin, when Mahsa Amini died, and a wave of “Woman, Life, Freedom” chants took over Iran. This time, they were not only asking for freedom of mind, expression, and economy, but just as prominently, it was asking to free the BODY. I was deeply sad that this did not exist, that someone had to ask for it. But I also felt an immense power, gifted to me by them. And suddenly, in one day, I could not move my body into situations where it was not 100% its choice and wish.
    </p>

    <p>
      What followed was that my body started letting go of the instinct to protect itself regularly, because it was no longer a necessity, and our bodies do keep the score. This has nothing to do with the so-called “Level” of dancing, or being picky, yes, that word we know too well, PICKY.
    </p>

    <p>
      I find this, in its very essence, to be kind and accepting. And I have been on both sides of this many times, being kindly but truthfully accepted or rejected in dance. For this is a pain that lingers, to dance with someone who does not want to be there, or feels uncomfortable with you. I could just melt into the floor now.
    </p>

    <p>
      Now, when I dance, I enjoy a much higher trust in my partners, I can come closer, I can let go, because I am here 110% because I want to be, no questions asked. Of cours there is still risk every time you discover a new person, but this is MY CHOICE of risk, I own it.
    </p>

    <p>
      It would not work for me to say, okay, 80% of the time I am trusting, but 20% I am polite. I am being “Nice” too many times, and soon I cannot tell the difference anymore. The 100% opens the door for me to know myself, to be honest.
    </p>

    <p>
      There are beginners (two weeks, two months into tango) with whom I feel comfortable and I have much joy, and there are beginners with whom I feel something that makes me want to exit. Exactly the same with dancers dancing plus 20 years. I think we are people more than we are dancers, and expecting to match every single person is simply not honest.
    </p>

    <p>
      For me, the other side of never dancing out of being: polite, nice, or because people feel entitled, is constantly trying to expand the type of dancers I can enjoy dancing with, paying attention to the style of new people, by being curious, by giving them room to express, and by adapting my body and moves to them. I can best describe it as expanding the boundary but also respecting it.
    </p>

    <p>
      I do admit, the milonga would be much more chill, social, fun, and rewarding if everyone could, would dance with everyone; it is a beautiful thing to see, to wish, to feel. No doubt. But it is the ideal, and like most ideals, is too simple and not real enough. I do want it too, but I want more, is for more women to not feel obligated at all to be where they do not want to.
    </p>
  </section>
);

const Shame = () => (
  <section className="speaking-section">
    <Helmet>
      <title>Shame in Tango | Helia Jamshidi</title>
      <meta
        name="description"
        content="A list of the shame moments tango can surface, and how naming them softens their grip."
      />
      <meta
        name="keywords"
        content="tango shame, tango emotions, tango vulnerability, tango community"
      />
      <meta name="author" content="Helia Jamshidi" />
      <meta property="og:title" content="Shame in Tango | Helia Jamshidi" />
      <meta
        property="og:description"
        content="A list of the shame moments tango can surface, and how naming them softens their grip."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://heliajamshidi.me/writing/tango/shame" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Shame in Tango | Helia Jamshidi" />
      <meta
        name="twitter:description"
        content="A list of the shame moments tango can surface, and how naming them softens their grip."
      />
      <link rel="canonical" href="https://heliajamshidi.me/writing/tango/shame" />
    </Helmet>
    <h1>Shame</h1>

    <p>
      Dancing tango, coming to a milonga, it can and is a true freeing experience. You are the one responsible for how you want to dance, what you wanna listen to, in a way that it's not accessible to most of us in our jobs or in our education, when there are goals and rules and other people. But I don't remember it to always be this room of freedom. I can also remember it being a room with many, many puddles of shame. Some, so deep that when you fall in, you'll still be wet by the end of the event and maybe a day after. Some of these memories are fresh, some seem from such a long time ago in another life, but they were once really heavy.
    </p>

    <p>
      It was really a shame the first time I went to an event, and I danced with nobody.
    </p>

    <p>
      I was ashamed any time I didn't know what to do. I was ashamed any time I was too quick and too hasty, moving too much. I was ashamed any time I thought I misunderstood.
    </p>

    <p>
      I was definitely ashamed when I had not really properly planned the embrace. Is it here? Is it there? Is it up? Is it low? I was ashamed every time I awkwardly changed the embrace.
    </p>

    <p>
      I was ashamed to dance with dancers who seemed much better than me. I was ashamed to take up their time, and I was ashamed to take up any space and be in anyone's way.
    </p>

    <p>
      I was ashamed when I had slightly dressed up to have a better chance at having a dance.
    </p>

    <p>
      I was ashamed that if I'm not dancing too many tandas, this is an obvious signal that I'm not having a good night, and everybody can see it. And maybe even if nobody is dancing with her, it must not be good.
    </p>

    <p>
      I also feel shame about the quiet pleasure of being an insider in my regular milonga. About knowing the codes, being recognized, belonging, and noticing that instead of using that position to include others, I sometimes enjoyed it for myself. I doubt anyone felt excluded because of me, yet I can’t deny that being “from the inside” felt good, and that I let myself enjoy it without questioning it enough.
    </p>

    <p>
      And of course, the shame incomparable to all other shame is from the beginning, when I was starting to lead, every ask to every follower to undergo my unskilful steps, as if they got in a car with a driver without a driving license. I started and finished every Tanda for a year with shame.
    </p>

    <p>
      I feel shame to be not musical enough and not creative enough. I feel shame to repeat myself, and I feel shame to bore people.
    </p>

    <p>
      I felt shame for having a fake smile in the milongas.
    </p>

    <p>
      I felt ashamed not to be as conversational and as humorous, and sometimes not even understand the German talk between the songs, and stay there kind of dumb, hoping the next song would begin. And not being able to make fun and share humor as it happens in other places.
    </p>

    <p>
      I feel shame when I feel somebody's not comfortable in my embrace.
    </p>

    <p>
      I feel shame that I can dance, but some of us can no longer dance.
    </p>

    <p>
      I feel shame that I wasted or spent so much of my time entangled in this form of self-indulgence.
    </p>

    <p>
      I feel ashamed that during a Tanda, I talk a lot to myself, and a lot of it can be self-congratulatory.
    </p>

    <p>
      In the ending of most tandas, I still almost always feel quite a bit of shame because I'm never satisfied with what I have to say, what I said or didn't say, or how genuine it felt, the goodbye part of the Tanda. It always feels some amount of fake, no matter what I do. I've never felt comfortable in that moment in myself.
    </p>

    <p>
      But every now and then, there are dancers who take our shame away, and God bless them, they do not say, but they show us we are gonna be okay, and even if not, it won’t matter. I hope reading about my ongoing list of tango shames can erase some from your own list.
    </p>

    <p>
      Or, as Brené Brown would tell me if she were here (indirect quotes):
    </p>

    <p>
      Every single person experiences shame. And yet, shame is one of the most unspoken, hidden emotions we experience. We rarely talk about it, even though it can silently shape us so much.
    </p>

    <p>
      Shame derives its power from being unspeakable. The moment we name it, the moment we say ‘I’m feeling shame,’ it begins to lose its grip. Speaking shame doesn’t eliminate it, but it stops controlling us from the shadows. When someone listens to our story without judgment, without trying to fix us, without minimizing our experience, shame begins to dissolve. Shame is the fear of disconnection.
    </p>

    <p>
      We often think we can shame ourselves or others into being better, more disciplined, more productive, or more lovable. But shame corrodes the part of us that believes change is possible. It doesn’t motivate, it paralyzes. Rumbling with shame means staying present with the discomfort, curiosity, and vulnerability instead of shutting down or lashing out. It’s about choosing to respond with courage rather than self-protection.
    </p>

    <p>
      Cheers.
    </p>
  </section>
);

function ArticlePage({ title, seo }) {
  const pageTitle = seo?.title || `${title} | Helia Jamshidi`;
  const pageDescription =
    seo?.description ||
    `Read "${title}" by Helia Jamshidi. Reflections, notes, and ideas from writing on culture, relationships, and creativity.`;
  const pageKeywords = seo?.keywords || "writing, essays, reflections";
  const pageUrl = seo?.canonical;

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="Helia Jamshidi" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {pageUrl && <meta property="og:url" content={pageUrl} />}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {pageUrl && <link rel="canonical" href={pageUrl} />}
      </Helmet>
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
      <h1>Rules to Live by (in No Particular Order)</h1>
      <div style={{ maxWidth: "42rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>


        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", fontSize: "1.02rem" }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", paddingLeft: "1.4rem" }}>
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
            paddingLeft: "1.1rem",
            borderLeft: "2px solid #eee",
            fontSize: "0.99rem"
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
            <Route path="/tango/rituals" element={<MoreMilongaRituals />} />
            <Route
              path="/tango/music"
              element={
                <ArticlePage
                  title="Tango Music"
                  seo={{
                    title: "Tango Music | Helia Jamshidi",
                    description: "Notes on tango music, how it feels on the floor, and why it matters for connection.",
                    keywords: "tango music, tango orchestras, tango musicality",
                    canonical: "https://heliajamshidi.me/writing/tango/music"
                  }}
                />
              }
            />
            <Route
              path="/tango/woman-in-tango"
              element={
                <ArticlePage
                  title="A Woman in Tango"
                  seo={{
                    title: "A Woman in Tango | Helia Jamshidi",
                    description: "Reflections on gender, roles, and identity within the tango community.",
                    keywords: "women in tango, tango roles, tango community",
                    canonical: "https://heliajamshidi.me/writing/tango/woman-in-tango"
                  }}
                />
              }
            />
            <Route
              path="/tango/giving-getting"
              element={
                <ArticlePage
                  title="Giving and Getting"
                  seo={{
                    title: "Giving and Getting in Tango | Helia Jamshidi",
                    description: "Thoughts on reciprocity, generosity, and receiving in tango partnerships.",
                    keywords: "tango connection, tango partnership, tango reciprocity",
                    canonical: "https://heliajamshidi.me/writing/tango/giving-getting"
                  }}
                />
              }
            />
            <Route
              path="/tango/questions"
              element={
                <ArticlePage
                  title="Talking about Tango"
                  seo={{
                    title: "Talking About Tango | Helia Jamshidi",
                    description: "Questions, prompts, and observations for making tango conversations richer.",
                    keywords: "tango questions, tango conversation, tango culture",
                    canonical: "https://heliajamshidi.me/writing/tango/questions"
                  }}
                />
              }
            />
            <Route path="/tango/perfect-tanda" element={<PerfectTanda />} />
            <Route path="/tango/say-no" element={<SayNo />} />
            <Route path="/tango/shame" element={<Shame />} />

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
            <Route path="/personal/rulesToLiveBy" element={<RulesToLiveBy />} />

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
