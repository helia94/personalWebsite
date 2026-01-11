// File: src/pages/Bookmarks.js
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
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
        label: "Crucial Conversations",
        route: "/bookmarks/crucial-conversations"
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
        label: "Conversations with Tyler",
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
        label: "Epicllama",
        route: "/bookmarks/epicllama"
      }
    ],
  }, ,
  {
    title: "Goodies",
    items: [
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
      <Helmet>
        <title>Bookmarks | Helia Jamshidi</title>
        <meta
          name="description"
          content="Curated list of books, podcasts and other recommendations from Helia Jamshidi."
        />
        <meta
          name="keywords"
          content="bookmarks, book recommendations, podcasts, web links, Helia Jamshidi"
        />
        <meta property="og:title" content="Bookmarks | Helia Jamshidi" />
        <meta
          property="og:description"
          content="A collection of useful references including books and podcasts."
        />
        <meta
          property="og:url"
          content="https://heliajamshidi.me/bookmarks"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/bookmarks" />
      </Helmet>
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
              <ul style={{ listStyle: "none" }}>
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
            If you feel that your sexuality is a stranger to yourself; if you feel you should have sex more or less than you want; if you’ve changed and want to reclaim something from your past; if you can’t fully let go during intimacy, or if you think you’ve lost the desire for sex entirely, this book is worth reading.
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
              If you’re looking for a straightforward, science-heavy, fact-driven guide to sexuality, you will be disappointed. <i>Come As You Are</i> is more like talking to a therapist or a good friend, it’s conversational, and filled with metaphors and repetition. The overly chatty tone can come off as condescending, or even infantilizing, especially to those who prefer a more serious tone. For me, the repetition was a feature, not a bug. I didn’t go into this book looking for facts and information; I wanted understanding and a change of mindset, which I believe is only possible through repetition. I plan to read it more times. But I can see how it might feel redundant or unnecessary to others.
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
            style={{ width: "30rem", maxWidth: "90%" }}
          />
          <p>
            There’s a lot about how we classify and label emotions.
            You see something, your body reacts, and then you guess or construct which 'emotion' you’re feeling based on your assumptions and past experiences.
            She then provides ideas for building a healthier body budget, getting good sleep, better nutrition, exercise, physical touch, and gratitude.
            It redefines how I see emotions and the line between <b>'body' and 'mind’</b>.
          </p>
          <LisaYouTubeEmbed />
          <Collage />
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
            style={{ width: "40rem", maxWidth: "90%" }}
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
            the book is an effective way to shift your mindset about sleep and take it seriously, not as wasted time, but as a critical part of life.
          </p>
          <p>I for example had no idea that we and many other animal have four sleep cycles of sleep with dearm and without.
            Here is how it looks if like me, you did not know about it either.</p>
          <img
            src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739120164/Screenshot_2025-02-09_175458_vx4tki.png"
            alt="sleep cycles"
            style={{ width: "40rem", maxWidth: "90%" }}
          />
          <div style={{ margin: "3rem" }}>
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
    "crucial-conversations": {
      name: "Crucial Conversations",
      url: "https://www.amazon.de/Crucial-Conversations-Tools-Talking-Stakes/dp/0071771328",
      description: () => (
        <div>
          <section className="speaking-section">
            <h2>What are Crucial Conversations?</h2>
            <p>Crucial conversations show up with these three badges:</p>
            <div className="list-section">
              <ul>
                <li>Someone disagrees with you</li>
                <li>Stakes are high</li>
                <li>Emotions are sitting in the corner, sharpening knives</li>
              </ul>
            </div>
            <p>When conversations matter most, we tend to handle them the worst. Failing at a crucial conversation can affect every part of life: your health, your work, your relationships. </p>
          </section>
          <section className="speaking-section">
            <h2>Why it surprised me?</h2>
            <p>Yes, the book is a how-to book, but the biggest moment for me was in the intro, not the actual body. Specifically, two messages delivered rather confidently by the writers.</p>
            <blockquote className="quote">
              First one: “Most people think you have to choose between being completely honest and keeping a relationship.”And then they absolutely refuse to accept this. Not even a hint of “well, maybe sometimes…”—just a total, bulletproof “NOPE.” The book’s been around for 20 years, and somehow no one told me this was even an option. Like, what the hell? The second notion they equally refused to entertain was that “You can avoid a conversation”, rather, your realistic options are to “Talk it out” or “Act it out”.
            </blockquote>
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1751466818/TalkItOut-ActItOut_vtcaqq.png"
              alt="Talk it out vs act it out"
              style={{ width: "40rem", maxWidth: "90%" }}
            />
            <p>I was so overwhelmed by this newfound fact that I went and had two long-due conversations right away: one postponed for 7 years, one for 3 years, the second of which I thought I would certainly take to my grave. The bad news for me was that I was so spontaneous and rash, I did this before reading the chapters “Before Opening Your Mouth” or “How to Open Your Mouth.”</p>
            <p>So for what it’s worth, I have now read the book, and I know now much more how I was part of the problem in the conversations I was having at work and at home in the past years. So if you are frustrated by conversations that do not have a good resolution (or any resolution at all), or if you are choosing between being honest and keeping someone in your life….. by reading this far, you have just been robbed of whatever excuse you had.</p>
            <p>I am sharing what I took most from this book, but frankly, the whole book is the key. I am even keeping it by my side and referring to it again when new situations come up.</p>
          </section>
          <hr />
          <section className="speaking-section">
            <h2>Why have Critical Conversations?</h2>
            <p>‘The single biggest problem in communication is the illusion that it has taken place’ said surely someone. Have you ever left a conversation feeling like you did your job, only to find out three months later that the other person thinks you’re an actual goblin? Turns out, words don’t equal understanding. Huh.</p>
            <p>What do most of us do when something bothers us, but mentioning it is awkward or seems impossible? We avoid. We become Olympic-level avoiders. You’d think the stakes were “if you talk, you get eaten by wolves.” (Which, to be fair, is probably how our brains evolved: “Don’t make anyone mad or you get booted from the tribe.”) So, instead, we become slightly dysfunctional humans, all because nobody wants to say the thing that needs saying.</p>
            <p>In healthy relationships, people actually address problems pretty much as soon as they spot them. They have built environments where trust is high, they keep their intimacy at home, and productivity at work. But if you wait months or years to bring something up? The relationship kind of rots from the inside, like an old banana in a gym bag. If you want a shortcut to how healthy your work or love life is, just measure the time between “I notice a problem” and “I actually talk about it.” That’s your diagnosis for now.</p>
            <p>Silence seems like a safe bet at first. You don’t bring up the thing that’s bugging you. Instead, you start letting out tiny sighs when they talk. You notice how your replies get shorter. You skip the little inside jokes. You say you’re tired. Even if you’re still polite, something feels off, like everyone’s performing a version of normal and hoping the other doesn’t notice the tension. You start treating each other like you’re both slightly annoying roommates. It’s not just awkward, it’s exhausting. And the longer it goes, the more normal it starts to feel.</p>
            <p>There’s this booby trap: Pick honesty and lose the relationship, or fake it and keep the peace. I bought this for way too long.  Not talking builds resentment, and you end up living in a fake reality with people you’re supposed to care about. The only thing that really connects us is telling the truth. Not dancing around it, actually saying it.</p>
            <p>The conversations that matter most are the ones where we’re the worst at communicating. Stakes go up, skills go down. It’s almost slapstick. These conversations affect everything: your sleep, your job, your friendships, whether your family group chat is a warzone or a safe haven. The longer you wait, the more your brain invents stories and the more your actions get weird. But nobody’s born with the right words. These are just skills, or so I hope.</p>
            <p>At the core of all this, it’s about letting meaning flow freely. Not just information, but the real stuff, what you actually think, what you’re scared of, what you wish would change. The old Fool’s Choice is thinking you have to pick: honest or kind. The people who are good at this somehow pull off both. 100% honest, 100% respectful. </p>
          </section>
          <hr />
          <section className="speaking-section">
            <h2>How to prepare for Critical Conversations?</h2>
            <p>More often than we realize, we start talking about topic A, maybe something as dull as “the current project” at work, or “last night’s dishes” at home. And at first, we really believe that’s what we’re arguing about. But then, out of nowhere, emotions shoot up, and suddenly everyone’s reaction is way out of proportion to whatever “topic A” is. At that point, nobody actually cares about topic A anymore. Now, the argument is about something way bigger and much more symbolic. Usually, it’s the stuff we’ve stayed silent about for way too long. That’s how a fight about the dishes morphs into, “You always do this!” or, “I don’t know if you even respect my role as X when ...” Suddenly, we’re pretending to care about topic A, but what’s actually happening is a wrestling match for safety, dignity, respect, whatever’s been sitting quietly in the background.</p>
            <p>When a topic feels overwhelming or impossible, it’s probably because I’ve bundled a bunch of issues together. Maybe I’m annoyed about the immediate thing (content), or maybe it’s the fact that this happens every week (pattern), or maybe I’m just quietly panicking about what this means for our whole relationship. I have to actually unpack this mess, pick one, and try to state it in a single sentence. When you are trying to figure out “what do you most want to talk about?” try to separate it from “How on earth can I bring that up?”. The burden of the second step can muddy the water, and make us choose the wrong topic.</p>
            <p>When emotions are high and the stakes feel big, we grab for the closest topic, usually something we think we can win, or something vague enough to hide in. And every time, right as the conversation starts to spiral, I catch myself wanting to either win, save face, or punish. Apparently, the book wants me to ignore all of that and start with my heart. As in:</p>
            <blockquote className="quote">What do I really want here, for me, for them, for us? If my answer is, “I want to prove them wrong and never do dishes again,” it’s probably time to hit pause.</blockquote>
            <p>And then there’s the uphill bit: mastering my stories. When I’m upset, my brain starts making up these little movies where I’m either the victim (“it’s all their fault”), the hero fighting a villain (“they’re just evil”), or the helpless bystander (“there’s nothing I can do”). I have to rewind, look at my own behavior, name what I’m actually feeling, and ask:</p>
            <div className="list-section">
              <ul>
                <li>What’s the story I’m telling myself that’s making this emotion explode?</li>
                <li>Is there actual evidence, or am I just writing dramatic fiction again?</li>
              </ul>
            </div>
            <p>And, the final embarrassing step: “What am I pretending not to notice about my own part in this?” Not fun.</p>
          </section>
          <hr />
          <section className="speaking-section">
            <h2>Without Trust, Forget Having Critical Conversations</h2>
            <p>If you want to shut down a conversation instantly, just add fear. Nothing sucks the life out of dialogue faster. People don’t really debate when they’re afraid; they just… shrink or turn defensive. The last time someone gave me feedback and I actually listened, it was probably because I trusted that they weren’t out to get me. If I think you’re judging me or don’t actually care, my brain just quietly checks out and starts doodling, hoping to exit soon. If I want a real conversation, it has to be obvious that I care about them and about what they care about; people can smell it any other way.</p>
            <p>Respect is the unspoken currency of every conversation. If people feel even a whiff of disrespect, it doesn’t matter what the actual topic is, they’re going to spend the rest of the time protecting their dignity. It’s not about whether I think I respect them; it’s about whether they think I do.</p>
            <p>So, how do you actually say hard things without making someone feel attacked? The book’s recipe is you need confidence (believe your view is worth saying), humility (know you might not have it all figured out), and skill (don’t just blurt it out and hope for the best). You can be honest and kind at the same time. It’s not a contradiction, just a harder thing to do.</p>
            <p>The assignment before the conversation is to separate facts from the stories we tell ourselves. Don’t pretend you’re bringing “the truth”, just share what you’ve seen and how it looks from where you’re standing. If you tell the story as a story, not as the facts, people are way more likely to hear you out. And the more certain you sound, the more you have to actually invite disagreement, otherwise you just become a dictator. </p>
            <p>In the end, the only way to speak strongly is to be just as open to being challenged. The second I stop wanting to be challenged, I’m probably just protecting my own ego, not actually trying to solve anything. And that’s the thing: you can say hard things without being a jerk, but it takes practice and some actual guts. And sometimes, a little more silence than you’d like.</p>
          </section>
          <hr />
          <section className="speaking-section">
            <h2>How To Prepare For Receiving Feedback?</h2>
            <p>Sometimes it feels like everyone’s walking around with a giant invisible pen, and at any moment, someone might reach over and grab yours. It’s not a fancy moment, nobody says, “May I write your self-worth today?” They just do it. You ace a project, and suddenly you’re awesome. Somebody frowns at your joke, now you’re back to “try harder.”</p>
            <p>And then comes feedback. If it pokes right into the self-worth spot, it burns. Suddenly, it’s not about the work or the thing you did, it’s about you, like someone’s scribbling “not good enough” in your margins. People don’t get angry about feedback when they’re fine; it’s only when there’s fear underneath. That’s when you snap back or shrink or try to disappear. It’s like the pen is always at risk of getting stolen.</p>
            <p>Losing the pen is basically handing over your power to whoever’s closest. Now you’re not making your own worth, you’re borrowing it. You end up insecure, always checking the room, always adjusting, always looking for proof that you’re still enough.</p>
            <p>When feedback comes, remind yourself you’re safe. This isn’t an emergency, even if your body says it is. Separate the feedback from your identity. You can mess up without being a mess. It’s okay to ask for examples, to listen all the way through, to say “let me think about that” instead of reacting right away. You get to pick when and how you answer. That’s holding the pen.</p>
            <p>And, somehow, the less you let others write your worth, the less their feedback can hurt you. You still listen, but you don’t lose yourself every time someone picks up a pen.</p>
          </section>
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
        <EconTalk />
      )
    },
    "conversations-with-tyler": {
      name: "Conversations with Tyler",
      url: "https://conversationswithtyler.com",
      seoTitle: "Conversations with Tyler | Bookmarks | Helia Jamshidi",
      seoDescription: "Why Helia Jamshidi keeps returning to Conversations with Tyler: a fly-on-the-wall podcast that rewards curiosity, niche guests, and intellectual range.",
      seoKeywords: "Conversations with Tyler, Tyler Cowen podcast, podcast recommendations, 1843 Economist profile, Helia Jamshidi bookmarks",
      canonicalUrl: "https://heliajamshidi.me/bookmarks/conversations-with-tyler",
      description: () => (
        <div>
          <p>
            “Conversations with Tyler” — or, more accurately, <i>Interrogations by Tyler</i> — is the most entertaining media I consume.
            It might be my best guarantee against boredom. It’s high-dopamine, high-serotonin, like the perfect amount of sugar, fat, and salt,
            but surprisingly it is also good for you.
          </p>
          <p>
            I doubt this was my feeling in the beginning. Around 2015–2017, I do not remember exactly when, I started listening. Tyler had appeared
            on <i>EconTalk</i> as a guest. Having enjoyed that episode, I jumped to see what his own podcast is like. I remember thinking, what a
            maniac, who would ever listen to this jungle of context switching, with no overarching goal to be seen.
          </p>
          <p>
            As Tyler will repeat, this is a conversation he wants to have with the guest, not the one you wish. This is not a conversation flow
            optimized for the viewer count, or even for taking the viewer with, so she is not utterly lost. You are a fly-on-the-wall.
            This comes with pros and cons. For me, the pros strongly outweigh the cost, and I have become increasingly uncomfortable with podcasts
            made for the audience and not in fly-on-the-wall setting.
          </p>
          <p>
            Unlike the most popular podcast recipe — being a male host in their 20s–30s, British accent, all sharing at least 80% of the same famous
            guests, host in awe of the guest and agreeing 110% of the times, work actually done by a research team, always some relation to self-help
            and life hacking, always something scientific proven wrong and debunked — Tyler tends to bring on guests that you have never heard of and
            are underrepresented in media and pop culture. If you are only testing a couple of episodes, avoid the temptation of going for big names
            like Sam Altman and Peter Thiel, who you would get everywhere, and go to a niche topic and person.
          </p>
          <p>
            Now, a bit more about Tyler that might intrigue or deter you. Either way, it will help you make up your mind. If we ever had to let one
            of our humans compete with an AI on total knowledge collection, Tyler would be our best chance. He reads at an unbelievable speed,
            diversity, and quantity, and as a result of this repetition, a deep web of connected concepts emerges. But the written word is not the
            only man made culture he overconsumes. There are only a handful of regions in the world that he has not repeatedly visited, and whose
            cuisine he would not understand deeply. He might also have a more diverse music taste than anyone I know, including Rick Ruben.
            A fun fact for me is, while he is very pro-big-business, AI, tech, and weekly (my guess) in touch with the creme de la creme of the tech
            industry, he finds it hard to adapt most gadgets and apps for personal use, and mostly does not use them.
          </p>
          <p>
            One of Tyler's other superpowers, in my view, is his inability to romanticize matters, to always go for the face value, be it in music,
            books, people, and theories. I sometimes wonder how this works out in family life; a face value of what family members are cannot be an
            easy journey. One thing I find not so diverse and, until now, kind of personally uncomfortable is a kind of mono focus on Talent and
            Production-Function, be it on a personal, group, or historical level, as the main or sole Values that are interesting. Fully possible
            that my reading is not accurate, but I doubt I am the only one reading it that way.
          </p>
          <section className="speaking-section">
            <div className="list-section">
              <p>
                The podcast website offers a curated list of episodes to start with. Here is the <a href="https://conversationswithtyler.com/start-here" target="_blank" rel="noreferrer">CWT start here page</a>,
                and the Spotify playlist I created based on it:
              </p>
              <iframe
                title="Spotify playlist: Conversations with Tyler start here"
                style={{ borderRadius: "12px", width: "100%", height: "352px", border: 0 }}
                src="https://open.spotify.com/embed/playlist/4bmJMcu3yejGD6xRDWoaCN?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <section className="speaking-section">
            <div className="list-section">
              <p>
                This is what I would start with: episodes with David Brooks, first because he is one of the funniest people I know, second because
                they talk off the show regularly, and it makes the show better. I would claim Tyler never laughs more than with David Brooks, and
                their styles are most complementary for my taste, a balance of romanticization.
              </p>
              <iframe
                title="Spotify playlist: Conversations with Tyler David Brooks episodes"
                style={{ borderRadius: "12px", width: "100%", height: "352px", border: 0 }}
                src="https://open.spotify.com/embed/playlist/6z0WCLoYgAZuvuZGLMw0Ht?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <section className="speaking-section">
            <div className="list-section">
              <ul>
                <li>Listen to <b>Cass Sunstein</b>, the most cited legal author of all time, for a master class on respecting your opponents' views and taking them seriously.</li>
                <li>Listen to <b>Seth Godin</b>, for his beautiful voice and being.</li>
                <li>Listen to <b>Richard Prum</b>, to rediscover what curiosity and research out of pure interest and not for prestige could mean. He also argues that the beauty of birds arises partly because many species lost their penises. Expect evolutionary gossip you didn’t know you needed.</li>
                <li>Listen to <b>Audrey Tang</b>, for the power of imagination, ambition, and traveling into the future with the example of Taiwan. Taiwan’s digital minister talks about building “radical transparency” into democracy, so if you’re curious how an open API government works in practice, this is it.</li>
                <li>Listen to <b>Fuchsia Dunlop</b>, for delicate stories of food in China. Dunlop and Tyler share a banquet at Mama Chang, comparing hand-crafted soy sauce to mass-produced bottles and discussing how Chinese chefs use Amish chickens.</li>
                <li>Listen to <b>Brian Winter</b>, for Brazil, Argentina, and Tango.</li>
                <li><b>Kevin Kelly</b> and Tyler is another duo I really like; there is more synergy and overlap than usual.</li>
                <li><b>Rick Rubin</b> and Tyler may be the biggest contrast between the guest and host in terms of mindset, but it works perfectly.</li>
                <li><b>Ian Leslie</b>, if you have any connection to the Beatles.</li>
                <li><b>David Robertson</b>, also for a beautiful voice, and getting into the head of a conductor.</li>
                <li><b>Sebastian Mallaby</b>, if you know what venture capital is but don't really get it like me.</li>
                <li><b>Masha Gessen</b>, for Tyler's excellent questions on Russia and Russians, I believe these are all questions he could not get answers to yet from his Russian spouse and books.</li>
                <li><b>Dave Rubin</b> for a truth deep dive on the podcast as a medium.</li>
                <li><b>Michele Gelfand</b> has studied many cultures, and Tyler has traveled to many; this is a very delicious and curious attempt at looking at the gap between numbers and casual observation that challenges more formal statements.</li>
                <li>The former CIA director reveals he considered becoming a priest before joining the agency and explains that spies recruit by exploiting vulnerabilities, ambitions, and aspirations. It’s a candid look at patriotism, Catholic upbringing, and the human side of espionage.</li>
                <li><b>Kirchhoff</b> describes how Ukrainian garage workshops modify drones overnight while Western defense contractors move at glacial pace. He predicts the end of manned mechanized warfare and discusses the Pentagon’s Replicator program. If you’re fascinated by wartime tech innovations, this episode has it.</li>
                <li><b>Stephenson</b> shifts from science fiction to historical fiction and examines why today’s best spies are unremarkable people who can disappear into the background.</li>
              </ul>
            </div>
          </section>
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
            They organize F*ck the Small Talk which is an out-of-the-box social experience where strangers come together and are not allowed to ask, "what do you do?", "what brought you to here?, "Got any plans for the weekend?". I joined in Lisbon and was really inspired by the host and the format. Here is the founder telling the story of why he started it.</p>
            <div style={{ display: "flex", maxWidth: "80%", alignItems: "center", justifyContent: "center" , margin: "4rem"}}>

            <InstagramEmbed url="https://www.instagram.com/p/DF2kKdlsylx/" width={400} />
            </div>
        </div>
      )
    },
    "perfect-socks": {
      name: "Perfect Socks",
      url: "https://www.amazon.de/dp/B07JVSMYN5?ref=ppx_yo2ov_dt_b_fed_asin_title",
      description: () => (
        <div>
          <p>
            Here are a pair of perfect home socks. (I dare you to find better).
          </p>

          <div style={{ display: "flex", maxWidth: "80%" }}>
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1740263398/91cAQkOOBKL._AC_SX569__mza2sd.jpg"
              alt="Winter Warm Thick Cute House Socks with Full Plush and Wool"
              className="image-style"
              style={{ width: "45%", objectFit: "cover" }}
            />
          </div>
        </div>
      )
    },
    "perfect-chair": {
      name: "Perfect Chair",
      url: "https://www.freifrau.com/de/produkte/leya-lounge-chair?variant=1320",
      description: () => (
        <div>
          <p>
            This chair is perfection. (I dare you to find better). And no I do not have it, I just sat on it.
          </p>

          <div style={{ display: "flex", gap: "3%", maxWidth: "80%" }}>
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1740263398/photo_2025-02-22_23-27-55_kzlcxf.jpg"
              alt="Leya Lounge Chair aus der Familie Leya von Freifrau"
              className="image-style"
              style={{ width: "45%", objectFit: "cover" }}
            />
          </div>
        </div>
      )
    }
  };

  const info = bookmarksInfo[bookmarkId] || {};
  const pageTitle = info.seoTitle || `${info.name || "Bookmark"} | Bookmarks | Helia Jamshidi`;
  const pageDescription = info.seoDescription || `Details and links for ${info.name || "this bookmark"} curated by Helia Jamshidi.`;
  const pageKeywords = info.seoKeywords || "bookmarks, recommendations, Helia Jamshidi";
  const canonicalUrl = info.canonicalUrl || `https://heliajamshidi.me/bookmarks/${bookmarkId || ""}`.replace(/\/$/, "");

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={pageDescription}
        />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={pageDescription}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
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
