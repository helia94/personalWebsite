import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './TOC.css'

const DatingApp = () => {
  const navigate = useNavigate();

  const handleBookTime = () => {
    navigate('/interactive/book');
  };

  return (
    <div>  <Helmet>
      {/* Basic SEO */}
      <title>Innovative Dating App Startup - Disrupting the Dating Industry</title>
      <meta name="description" content="A groundbreaking dating app startup redefining matchmaking with an offline-first, experience-focused approach. Join the future of dating innovation." />
      <meta name="keywords" content="dating app startup, dating innovation, matchmaking platform, relationship tech, dating disruption, social networking startup, love tech, startup growth, tech entrepreneurship, dating business model" />
      <meta name="author" content="Helia Jamshidi" />

      {/* Open Graph for Social Media */}
      <meta property="og:title" content="Innovative Dating App Startup - Disrupting the Dating Industry" />
      <meta property="og:description" content="Revolutionizing dating with a fresh, experience-driven approach. Explore a new vision for modern relationships." />
      <meta property="og:image" content="https://heliajamshidi.me/images/datingapp-social.jpg" />
      <meta property="og:url" content="https://heliajamshidi.me/work/datingapp" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Innovative Dating App Startup - Disrupting the Dating Industry" />
      <meta name="twitter:description" content="From swiping fatigue to real-world connections. A startup changing the dating landscape." />
      <meta name="twitter:image" content="https://heliajamshidi.me/images/datingapp-twitter.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://heliajamshidi.me/work/datingapp" />

      {/* Favicon */}
      <link rel="icon" href="https://heliajamshidi.me/favicon.ico" />

      {/* Schema Markup for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Innovative Dating App Startup",
          "url": "https://heliajamshidi.me/work/datingapp",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://heliajamshidi.me/work/datingapp?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
      <h1>Like we need another Dating App!</h1>

      {/* Table of Contents */}
      <nav className="toc">
        <ul className="toc-list">
          <li><a href="#problem">What is the Problem?</a></li>
          <li><a href="#vision">What is the Vision?</a></li>
          <li><a href="#why-potential">Why This Vision Has Potential</a></li>
          <li><a href="#risks-challenges">Risks and Challenges</a></li>
          <li><a href="#feature-details">Feature-Set Details</a></li>
          <li><a href="#next-steps">Where I’m At and Next Steps</a></li>
          <li><a href="#how-to-help">How You Can Help</a></li>
        </ul>
      </nav>
      <section id="problem" className="speaking-section-colored higher-margin narrow-container " style={{ margin: "4rem" }}>
        <h3>The Actual Problem</h3>
        <ul>
          <li>
            <p>Many people find it hard to find and build relationships that matter to them. Many people I have met have given up trying.</p>
          </li>
        </ul>

        <section className="list-section">
          <h3>The Problem with Current Online Solutions</h3>
          <h4>The percentages are my subjective opinion of which problems are most to blame</h4>
          <ul>
            <li>
              <p>
                <strong>(60%) First Dates Can Be Draining: </strong>
                 Two people meet each other for coffee (face to face), or walking (side to side). They have to talk for one to three hours, having no initial context between them, or another environmental context to interact with. This sets a high pressure on both people to perform and come across as interesting, non-stop. If they do not get lucky and quickly find something they can talk about, they both go home not wanting to repeat this ever again.
              </p>
              <p>
                The just-talk dating script can get too repetitive, often feeling like a job interview. The harder the first date, the less anyone wants to do it. The longer you wait to go on a date, your expectations arise on “this time it must work out”. Having high expectations is the enemy of desire and attraction. And there you have an escalating feedback loop. Combine that with the new “intentional dating” wave and you have a recipe for even less pleasure and more dissatisfaction on dates. “Do not waste my time” is the new dating motto of the year.               </p>
            </li>
            <li>
              <strong>(20%) Imbalance in Attention and Comparison Mindset:</strong> Daters typically contact the most objectively desirable individuals at massively higher rates than others, look at the graph below. In the real world, attendees at a party would not all mob one attractive individual, but this effectively happens online because daters cannot see how much attention a person is already receiving.
            </li>
          <img
            src="https://res.cloudinary.com/dl9xg597r/image/upload/v1740998397/1_C94oqo_0Xi9q7j97__dUXQ_qykvth.webp"
            alt="OkCupid: Number of Weekly Messages by Attractiveness Quantile
"
            style={{ width: "30rem", maxWidth: "70%" }}
          />
            <li>
              <strong>(10%) High Online Investment Before Meeting:</strong> Most apps require significant time online before meeting in real life. While this could be fine if the time spent was enjoyable and valuable, swiping and chatting are often draining instead. This is somewhat solved by a few smaller dating apps.
            </li>
            <li>
              <strong>(5%) Matching Intentions:</strong> Although it sounds easy to handle with LLM capabilities, top apps lack a clear and flexible way of stating and matching compatible intentions.
            </li>
            <li>
              <strong>(5%) Profiles cannot predict real-life connections:</strong> We are bad at predicting what we will find attractive in real life. This problem is relatively less important but the hardest to solve among the six. Many people do not look at more than the first picture, not because it is superficial, but because it simply does not change their decision. Creating expressive digital expressions that improve the guess “Will I enjoy meeting this person” is intrinsically challenging.
            </li>
          </ul>
        </section>
      </section>
      {/* Vision Section */}
      <section id="vision" className="speaking-section">
        <h2>What is the Vision?</h2>

        <section className="list-section">
          <h3>From Problem-Solving to Nurturing and Mood-Setting</h3>
          <p>From a user’s perspective, dating today feels like an investment, a form of work that might pay off if you find a partner, but often leaves you frustrated if you don’t. <strong> It’s like a slot machine: you keep putting coins in until you hit the jackpot or walk away disappointed. </strong>I hope to create a dating experience that is enjoyable on its own, where finding a partner is the cherry on top. </p>
          <p>I have listened to more than thirty stories from dating app founders, they often come from a business background, they are problem solvers and they see dating as one as well. <strong>“What is the most efficient way to know if we match?”</strong> they ask. A 5-minute phone call, a personality test, .. . </p>
          <p>But listen to world-class dating coaches Matthew Hussey, Logan Ury, Helen Fisher, or my favorite by far Esther Perel, and they will all tell you <strong>the more you are focused on monotone interactions based on set rules and maximizing your chances, the less likely you are to let attraction grow. </strong></p>
          <p>Instead dating should be a place of pleasure on its own even if the person you met did not turn out to be the one. Make dates worth your time by <strong>giving room to joy and curiosity, instead of pressure and expectation.</strong></p>
        </section>

        <section className="list-section">
          <h3>Offline Philosophy</h3>
          <p>Although new founders have high hopes for AI match-making in 2025, there is no data submitted yet to prove they work. <strong>The brain (given an in-person meeting) is the best algorithm science has found, until today.</strong> So the only way is to be more comfortable meeting more people in person. Reduce addictive online features like swiping, likes, and endless messaging. Encourage users to move offline faster with tools like <strong>video calls</strong>, <strong>"open to call" badges</strong>, and <strong>simplified first-date planning</strong>. Focus on date quality over match quantity, making the transition from matching to meeting in person seamless and less intimidating.</p>
        </section>

        <section className="list-section">
          <h3>From "Best Match" to "Best Date"</h3>
          <p>Instead of obsessing over finding the perfect partner online, focus on creating a pleasurable date experience. Build an easy-to-use <strong>library of date activities</strong> that work well and create a <strong>marketplace for vendors</strong> that offer moderated, and context-rich experiences. Then extend the support to navigate what happens after the date itself; go over <strong>red and green flags</strong> with people who are in doubt. Provide <strong>mental health support</strong> to help users navigate dating challenges.</p>
          <p>A central key to better dates is “Mass Innovation”, curated events or content alone cannot keep up with the innovation needed in dating space. Instead, the platform should support and <strong>unleash innovation</strong> of different communities, <strong>do for dating what Hugging Face did for AI</strong>, and let people think outside the box and share formats that work better. </p>
        </section>

        <section className="list-section">
          <h3>Cultural Transformation Through Transparency</h3>
          <p>Users often mix the quality of the dating app with the quality of the users and their culture. They just switch to a different app if they are not happy with the culture. <strong>We see the combination of the app and the people on it as a service we are consuming and paying for</strong>, not just the app. </p>
          <p>Present the culture as fluid rather than fixed. And to show users that they are not only observers of this culture but also have a role in shaping it. Providing ways for users to give feedback specific to the culture rather than the app itself can foster a feeling of <strong>validation and agency</strong>. Imagine seeing a live daily graph of the percentage of <strong>women who started chatting</strong> in Berlin today, or the same but with a self-reported number of people being <strong>ghosted</strong>.</p>
        </section>

        <section className="list-section">
          <h3>Ease of Use</h3>
          <p>The interaction of the user with other users should be <strong>human first</strong>, not hiding behind AI. The interaction of the user with the app should be <strong>AI-first</strong>. Use AI as the main medium with which users interact with the app, they have one button that can express preferences and share feedback on what bothers them, tell why this profile is not their type, or say how they are feeling today, all via voice or freeform text. They do not have to navigate menus to adapt the app to their need making the process more natural and less rigid. <strong>Preferences and filters can be soft and fluid</strong>, not black and white for example: I am mostly into X, but I might be open to Y.</p>
        </section>
      </section>

      {/* Why This Vision Has Potential Section */}
      <section id="why-potential" className="speaking-section-colored higher-margin">
        <h2>Why This Vision Has Potential</h2>
        <ul>
          <li><strong>Female-Centric Approach:</strong> The last app I made was widely better received by females. I believe this vision too, is one to appeal more to women. Thus it has the potential to achieve better gender balance than existing apps. Male user acquisition would follow naturally through an improved gender ratio. A more balanced gender ratio could lead to a healthier dating culture, where women feel less pressured to be overly selective.</li>
          <li><strong>Backed by Psychology and Experts:</strong> Influential dating coaches like Esther Perel and Helen Fisher advocate for a more relaxed, enjoyable approach to dating. This aligns with the app’s vision.</li>
          <li><strong>Innovation & Partnership Opportunities:</strong> Partnering with vendors and event organizers creates diverse date ideas and at the same time functions as a built-in marketing vehicle.</li>
          <li><strong>Media-Friendly and Marketable:</strong> Dating is a hot topic, making it easier to gain media exposure.</li>
          <li><strong>Meaningful Feedback to Learn and Iterate:</strong> Feedback should focus on how the date went, understand if the user feels validated or rejected after using the app, check in to see how they feel about the state of dating, and improve on real metrics that affect people's wellbeing not time on the app, and number of matches.</li>
        </ul>
      </section>

      {/* Risks and Challenges Section */}
      <section className="speaking-section higher-margin">
        <section id="risks-challenges" className="list-section">
          <h2>Risks and Challenges</h2>
          <ul>
            <li><strong>User Adoption Challenges:</strong> Many users may not want to invest more time or energy into dating.
              The app’s focus on thoughtful dating might feel overwhelming to those used to swiping and quick matches.
              Potential resistance to a guided dating approach.</li>
            <li><strong>Risk of Being Too Prescriptive:</strong> The app might come across as telling users how to date, which could feel infantilizing.
              Users may resist being told not to ghost or to approach dating in a specific way.</li>
            <li><strong>Technical & Design Challenges:</strong> Balancing multiple features (e.g., activities, mental health support, AI preferences) could make the app too complex or clunky.
              Creating a pleasant and realistic digital self-representation remains an unsolved challenge.</li>
            <li><strong>Revenue Model Uncertainty:</strong> Relying on third-party vendors for revenue might not generate enough income to sustain and grow the app.</li>
            <li><strong>Human Behavior Challenges:</strong> Issues like ghosting and messaging imbalances might persist.</li>
            <li><strong>Competition with Meetup and Others:</strong> Overlap with activity-based apps could create competition.</li>
            <li><strong>Network Effect Challenges:</strong> Launching in a new city with no users could make it hard to attract the critical mass needed for the app to succeed.</li>
            <li><strong>Content Creation:</strong> High-quality content (e.g., dating advice, how-to guides) is essential but challenging to produce without a dedicated content team.</li>
            <li><strong>Activity-Based Dating Might Feel Awkward:</strong> Users might find planned activities too structured or awkward for a first date.
              There may not be enough diverse or appealing activity ideas to keep users engaged.</li>
            <li><strong>Risk of Losing User Interest:</strong> Without addictive features like "see who likes you," users might lose interest or stop engaging with the app.</li>
          </ul>
        </section>
      </section>
      {/* Feature-Set Details Section */}
      <section id="feature-details" className="speaking-section-colored higher-margin">
        <h2>If you want to go get deeper into the feature-set details, read here:</h2>

        <section className="list-section">
          <h3>Date Activities</h3>
          <ul>
            <li>
              <strong>User-Generated Date Proposals:</strong> Users can publish pre-defined date ideas, visible to all or only to their matches.
              <ul>
                <li>Examples: <em>"Walk my dog together," "Go to this event together,"</em> or <em>"Try this new café."</em></li>
              </ul>
            </li>
            <li>
              <strong>Marketplace for Dating Activities:</strong> Partner with local vendors (cafés, restaurants, sports clubs, escape rooms) to offer unique dating experiences.
              <ul>
                <li>Allow individual organizers to create events for singles or couples.</li>
              </ul>
            </li>
            <li>
              <strong>Marketplace for Event Formats and Tools:</strong> Creators can sell tested and proven event formats (e.g., agendas for singles’ gatherings).
              <ul>
                <li>Offer tools like conversation starter decks or apps to enhance dating experiences.</li>
              </ul>
            </li>
            <li>
              <strong>Library of Dating Ideas:</strong> Curated and community-maintained library of date activities.
              <ul>
                <li>Includes both local-specific ideas and generic activities that work anywhere.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="list-section">
          <h3>Matchmaking</h3>
          <ul>
            <li>
              <strong>Improved and Flexible Digital Representation:</strong> Profiles adapt to viewer preferences.
              <ul>
                <li>If someone doesn’t care about height, it won’t be shown.</li>
                <li>Integrate with platforms like LinkedIn, Instagram, or creative portfolios to create a fluid, unfolding profile.</li>
                <li>Remove traditional constraints: users can express themselves in any order, with or without photos, or even delay showing their picture until later.</li>
              </ul>
            </li>
            <li>
              <strong>Big Distinction Between Private and Public Information:</strong> Collect detailed information for better matchmaking (e.g., life stage, preferences, character traits) using AI or engaging games.
              <ul>
                <li>Keep most of this information private; only show what users choose to share publicly.</li>
                <li>Focus profiles on self-expression rather than listing red lines or expectations.</li>
              </ul>
            </li>
            <li>
              <strong>Diverse Dating Options:</strong> Go on dates with matches or attend singles’ events (4–30 people) without seeing profiles beforehand.
              <ul>
                <li>Blend traditional one-on-one dates with group experiences for variety.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="list-section">
          <h3>Culture</h3>
          <ul>
            <li>
              <strong>Open Dialogue About Dating Issues:</strong> Encourage users to discuss dating challenges openly instead of hiding them or complaining privately.
              <ul>
                <li>Create spaces for users to share how certain behaviors make them feel and suggest improvements.</li>
              </ul>
            </li>
            <li>
              <strong>Radical Transparency:</strong> Show live data on dating behaviors (e.g., ghosting rates, messaging patterns).
              <ul>
                <li>Celebrate small cultural improvements and give users agency to shape the dating environment.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="list-section">
          <h3>Community and Innovation</h3>
          <ul>
            <li>
              <strong>Foster Creativity and Experimentation:</strong> Trial, error, and innovation by as many people as possible is the only way to make dating better.
              <ul>
                <li>This app aims to unleash creativity in dating, much like how open innovation has transformed AI.</li>
                <li>Users who come up with great ideas should gain status on the app and be rewarded financially and socially.</li>
              </ul>
            </li>
            <li>
              <strong>Build a Respectful Community:</strong> The community aspect of the app helps users see each other not as numbers or "matches" but as people with feelings who deserve respect.
              <ul>
                <li>An old-school forum format fosters this mindset, encouraging empathy and connection beyond the dating context.</li>
              </ul>
            </li>
          </ul>
        </section>
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" className="speaking-section-colored">
        <h2>Where I’m At and Next Steps</h2>
        <ul>
          <li><strong>Need Partners in Crime:</strong>My top priority right now is finding partners to talk with who can challenge this vision. If you’re optimistic but love to critique, and you feel the same itch I do, reach out. Skillwise, I need someone who understands beauty, the app has to be a work of art, and I want someone with a vision because that’s not something I can learn. Other skills that would complement mine are UX, understanding the customer journey, and knowing how to sell.</li>
          <li><strong>Defining the Product and Customer Segment:</strong> Narrow down the target demographic and how to reach them.</li>
          <li><strong>Choosing a Starting Point:</strong> Decide on the first feature and initial market to target.</li>
          <li><strong>Crafting the Story:</strong> Develop a compelling narrative for users to share with others. Figure out how to encourage organic sharing (e.g., through social media, word of mouth).</li>
          <li><strong>Bootstrapping the App:</strong> Explore no-investment or low-cost models to launch the app.</li>
          <li><strong>Validating the Vision:</strong> Talk to potential users to test assumptions and refine the concept. Experiment with small-scale pilots to gather feedback and iterate.</li>
        </ul>
      </section>

      {/* How You Can Help Section */}
      <section className="speaking-section">
        <section id="how-to-help" className="call-to-action">
          <h2>How You Can Help</h2>
          <ul>
            <li><strong>Refine the Product and Customer Segment:</strong> Help narrow down the target audience and core features.</li>
            <li><strong>Craft the Story:</strong> Assist in developing a compelling narrative.</li>
            <li><strong>Bootstrapping Strategies:</strong> Suggest creative, low-cost ways to launch and grow the app.</li>
            <li><strong>Challenge Assumptions:</strong> Critique the vision to identify blind spots.</li>
            <li><strong>Brainstorm Solutions:</strong> Help address risks like user engagement and competition.</li>
          </ul>
          <p>This vision is ambitious, but with the right focus and execution, it has the potential to redefine how people approach dating.</p>
          <button className="submit-button" onClick={handleBookTime}>Let’s Talk</button>
        </section>
      </section>
    </div>
  );
};

export default DatingApp;