// File: src/pages/Work.js
import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { MobileViewContext } from "../context/MobileViewContext";
import SecondarySidebarBasic from "../components/SecondarySidebarBasic";
import TechStack from "./TechStack"
import DatingApp from "./DatingApp"
import "./Work.css"



export const workItems = [
  { label: "Freelance", route: "/work/freelance" },
  { label: "Experience", route: "/work/experience" },
  { label: "Collaborate", route: "/work/collaborate" },
  { label: "A New Dating App", route: "/work/datingapp" },
];

function WorkHome() {
  return (
    <div>
      <h2>Work Overview</h2>
      <p>Explore my professional background and approach.</p>
    </div>
  );
}

function Collaborate() {
  return (
    <div >
      <Helmet>
        <title>Collaborate | Helia Jamshidi</title>
        <meta
          name="description"
          content="Explore Helia's collaboration values, skills, and ideas, local events, unique dating concepts, and a location-based social platform."
        />
        <meta
          name="keywords"
          content="Helia Jamshidi, collaboration, local events, dating app, social platform, community building"
        />
        <meta name="author" content="Helia Jamshidi" />

        {/* Open Graph */}
        <meta property="og:title" content="Collaborate | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Discover Helia's approach to collaboration, her innovative dating app idea, and a location-based social platform vision."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/EconTalk_viuikc.png"
        />
        <meta property="og:url" content="https://heliajamshidi.me/work/collaborate" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://heliajamshidi.me/work/collaborate" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Collaborate | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="A space for radical directness, curiosity, and new ideas, from event formats to future dating and social platforms."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/EconTalk_viuikc.png"
        />
      </Helmet>
      {/* Main Title */}
      <h1 style={{ textAlign: "left" }}>
        Collaborate:
      </h1>

      {/* Intro Section */}
      <section >
        <p >
          This is a space where I share my values and interests. If we have
          something in common, let’s chat! I enjoy all kinds of exchanges, 
          whether it’s about past experiences or brainstorming
          future ideas.
        </p>
      </section>

      {/* Values & Interests Section */}
      <section className="speaking-section-colored higher-margin">
        <h2>
          Here’s what I value (and avoid) when it comes to collaboration:
        </h2>
        <div className="list-section">
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <li >
              <strong>Radical Directness + Respect + Kindness:</strong> These three
              need to go hand in hand. I’ve appreciated when others are direct
              with me, but I’m still working on being more direct myself.
            </li>

            <li >
              <strong>Yes-People:</strong> I admire those who say “yes” unless
              there’s a good reason to say “no.” I love trying new things, facing
              fears head-on, and staying optimistic about change.
            </li>

            <li >
              <strong>Generalists Over Specialists:</strong> My career heroes are
              generalists, people with broad knowledge who’ve worked across
              different fields. I’m drawn to projects that are nuanced, uncertain,
              or even seemingly impossible. Clear-cut projects where only
              execution matters? Not so much.
            </li>

            <li >
              <strong>Curiosity-Driven:</strong> Curiosity comes naturally to me.
              I’m drawn to the unknown and the complex. If a project feels too
              predictable, it doesn’t excite me as much.
            </li>

            <li >
              <strong>Problem-Making Over Problem-Solving:</strong> I used to be
              all about solving problems, fixing traffic, teaching kids about
              systems, optimizing everything. But then I discovered Tango. It
              didn’t solve any of my problems; in fact, it added more. Yet, I
              wouldn’t trade it for anything. Now, I enjoy introducing people to
              problems they didn’t know they had, in a way that makes them grateful
              for the discovery.
            </li>

            <li >
              <strong>LLMs (Loyal to GPT):</strong> I use it for everything, 
              technical tasks, outsourcing, even book recommendations. It’s
              changed how I learn, giving me more freedom to explore topics deeply
              or broadly. Surprisingly, though, I’ve never found a product built
              on LLMs that I liked as much as the raw text interface.
            </li>

            <li >
              <strong>No False Proxies:</strong> I can’t stand metrics or
              standards that pretend to measure something important but actually
              measure something trivial. When we focus on proxies, we lose sight
              of our real goals.
            </li>

            <li >
              <strong>Balanced Information Flow:</strong> I thrive in environments
              with low-to-medium information flow, where experience actually
              deepens understanding. On one end of the spectrum, you have fields
              like opera singing or brain surgery, where extreme low-info flow
              reigns. In these areas, experience is everything, and the frameworks
              don’t change much over time. On the other end, you have fields like
              AI or software engineering, where high-info flow dominates. In these
              areas, frameworks evolve so quickly that someone with 30 years of
              experience is only marginally better than a newcomer. My sweet spot
              is somewhere in the middle, where experience matters, but there’s
              still room for growth and adaptation without being overwhelmed by
              constant change.
            </li>
          </ul>
        </div>
      </section>

      <br></br>
      <section className="speaking-section-colored higher-margin">
        <h2 >
          Skills and Values I Aspire To:
        </h2>

        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li >
            <strong>Experimental Thinking:</strong> I tend to overthink problems
            in isolation, coming up with logical solutions that “should” work. I
            admire people who just go out and test things, gather data, and see
            what actually works.
          </li>

          <li >
            <strong>Deeper Empathy:</strong> I know people don’t
            love what I love (and vice versa), but I still fail to act on that.
          </li>

          <li >
            <strong>Collaborating with New People:</strong> As a software
            engineer, I thrive with a fixed team that knows each other well. I
            want to get better at working with new people or customers, even in
            one-time projects.
          </li>

          <li >
            <strong>Overcoming Social Media Fear:</strong> I want to stop
            judging social media and get over my fear of using it.
          </li>
        </ul>
      </section>

      {/* How We Can Collaborate */}
      <h2 >
        How We Can Collaborate:
      </h2>
      <p >
        The first step is simple: let’s talk. If we click, we can exchange
        ideas. If those ideas grow into something bigger, great! But I’m also
        happy with small, one-time conversations with people from diverse
        backgrounds. Here are some starting points we can explore, but I’m
        open to your ideas too:
      </p>


      <section className="speaking-section higher-margin">

        <ul >
          <li >
            <strong>Local Collaborations in Karlsruhe:</strong> I want to
            experiment with new event formats that foster deeper connections
            without pressure. Think reading quietly together, conversation
            groups using prompts from apps like <a href="https://jous.app" target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc' }}>Jous App</a>, or even exploring physical contact. I’ll
            organize these through Meetup.com, and you can be as involved as
            you’d like.
          </li>

          <li >
            <strong>Strategy Group:</strong> I’m looking for a small group
            (4-5 people) to meet weekly-ish. We’d hold each other accountable,
            discuss progress, challenge each other, and refine our strategies.
            My current focus is freelancing and developing three product ideas,
            but your goals can be anything, work-related or not. If we click,
            let’s make it happen. For more context, check out this <a href="https://open.spotify.com/episode/1lW81z1q7Mepvs2oFd6erH?si=d8Vkj3MISc2_VjHB9q0J5g"
              target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc' }}>Seth Godin episode on Spotify</a>.
          </li>
        </ul>
      </section>

      {/* Dating App Idea */}
      <section className="speaking-section higher-margin">
        <h2>
          I am thinking about making a radically different dating app.
        </h2>
        <p >
          Read fully about it under <Link to="/writing/dating/online-dating" style={{ color: '#0077cc' }}>my Writings</Link>.
          But for now, I am only taking small steps to see if there is any real
          audience for my ideas of how dating apps should be.
        </p>

        <h3>
          The Premise:
        </h3>
        <p >
          From a user’s perspective, dating today feels like an investment, a
          form of work that might pay off if you find a partner, but often
          leaves you frustrated if you don’t. It’s like a slot machine: you keep
          putting coins in until you hit the jackpot or walk away disappointed.
          I want to change this dynamic. My hope is to create a dating
          experience that is enjoyable on its own, where finding a partner is
          the cherry on top. Even if you don’t find "the one," you shouldn’t feel like you’ve wasted your time.
        </p>

        <p >
          This app would move away from overwhelming users with countless
          options and instead focus on the enjoyment of dating. It
          would support users with many diverse ideas of what to try on the
          first date by content curated by us, ideas from other users in
          the platform, and third-party offers on the app. Additionally, it
          would explicitly address dating culture, quantifying aspects of it
          where possible and fostering transparent discussions. Dating would be
          treated as both an evolving skill and an evolving culture, helping
          users to get better at both.
        </p>
        <section className="speaking-section-colored higher-margin">
          <h3 >
            The First Steps:
          </h3>
          <p >
            To test this idea, I’m starting small by building a community on
            Reddit and Instagram focused on curating better first-date ideas. This
            collaborative approach will help gauge whether there’s an audience for
            this concept. If it gains traction, the next step would be to develop
            a dating app that acts as a companion for better dates, not just for
            finding dates. Over time, the app could expand into a comprehensive
            platform offering everything from mental health support to date
            planning tools. The ultimate goal is to create a one-stop solution for
            all things dating-related, whether it’s meeting new people, improving
            dating skills, or simply enjoying the process.
          </p>

          <p >
            Does this scratch your itch? Let’s connect and explore ways to
            collaborate.
          </p>
        </section>
      </section>

      {/* Another Idea */}
      <section className="speaking-section">
        <h2 >
          Another idea I am working on is a social platform...
        </h2>
        <p >
          ...that seamlessly integrates the speed of Twitter with the locational
          specificity of Google Maps. Every post on this network is tied to a
          distinct physical point and can include an optional time range, it’s
          about turning every piece of content into a location-based narrative
          of urban life. The platform would allow users to share everything from
          festival experiences and market finds to critical updates on city
          infrastructure and emergency alerts.
        </p>

        <h3>
          Who would post on it?
        </h3>
        <ul style={{ color: "#242424" }}>
          <li >
            People attending festivals, concerts, or public events can share
            real-time impressions.
          </li>
          <li >
            Shoppers at Saturday markets or local pop-up sales could post about
            unique finds.
          </li>
          <li >
            Locals might use it to highlight spontaneous backyard sales, new
            store openings, or street performances.
          </li>
          <li >
            Citizens might use it to call attention to everyday urban
            concerns, from broken streetlights to noisy construction, ensuring
            their voices are amplified.
          </li>
          <li >
            Activists and protest organizers would coordinate their efforts by
            posting details of demonstrations or urgent civic actions.
          </li>
          <li >
            Anyone can share updates during emergencies, disasters, or crime
            incidents, making the platform a hub for real-time response.
          </li>
        </ul>

        <h3 style={{ marginTop: "2rem" }}>
          Who would browse it, and what for?
        </h3>
        <p >
          Users explore this platform through an interactive, zoomable map.
          Different colors and icons indicate various types of activity, from
          cultural events and foodie hotspots to political rallies and
          neighborhood gatherings. Tourists can explore the city to find areas
          with “good vibes” or discover where locals hangout. Locals can use the app to stay informed about what’s
          happening in their vicinity, ensuring they never miss a spontaneous
          event or a critical update. This dual functionality serves both those
          looking for entertainment and those needing timely, practical
          information about their surroundings.
        </p>

        <h3 >
          What kind of information can it gather?
        </h3>
        <p>
          The system would capture real-time social updates alongside historical
          data, providing an in-depth look at urban trends. Long-term data
          aggregation could aid real estate evaluations, help businesses decide
          on new locations, or assist city administrations in understanding
          recurring infrastructure issues. By combining immediate social
          interactions with trend analysis, the platform offers a tool
          for both daily life and strategic urban planning.
        </p>
      </section>
      <section className="speaking-section-colored higher-margin">
        <h3>First step:</h3>
        <p >
          I would start by developing a data aggregation service that pulls
          location tagged posts from platforms like Twitter, Instagram, Google Maps’ Places via
          APIs to showcase how the app migh look like. I
          would focus on posts from the last week and the upcoming week. Additional
          features would include using AI for content categorization, sentiment
          analysis, and personalized user filter.
        </p>
      </section>
    </div>
  );
}




const PortfolioShowcase = () => {

  return (
    <div>
      <Helmet>
        <title>Portfolio Highlights | Helia Jamshidi</title>
        <meta
          name="description"
          content="Explore Helia's portfolio highlights at PTV: Geocoding API, Model2Go, Route Optimization, and Optiflow."
        />
        <meta
          name="keywords"
          content="Helia Jamshidi, PTV, Geocoding, Model2Go, Route Optimization, Optiflow, logistics solutions"
        />
        <meta name="author" content="Helia Jamshidi" />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio Highlights | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Helia's work on geocoding, route optimization, and SaaS solutions leveraging Java, Python, AWS, and more."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/geocoding_rbcpgs.png"
        />
        <meta property="og:url" content="https://heliajamshidi.me/work/portfolio" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio Highlights | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="Showcasing Helia's top projects: Geocoding API, Model2Go, Route Optimization, and Optiflow."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/geocoding_rbcpgs.png"
        />

        <link rel="canonical" href="https://heliajamshidi.me/work/portfolio" />
      </Helmet>

      <section className="portfolio-showcase">
        <h1>Portfolio Highlights</h1>
        <div className="portfolio-section" id="geocoding">
          <div className="portfolio-content">
            <h2>Geocoding Developer API</h2>
            <p>
              At PTV Logistics, I worked on the <strong>Geocoding Developer API</strong>, a powerful tool that transforms free-form text into precise geographic coordinates. This API is the backbone of location-based services, enabling businesses to optimize logistics, improve delivery accuracy, and enhance customer experiences.
            </p>
            <p>
              I optimized the geocoding logic using <strong>Quarkus</strong> and <strong>Java</strong>, ensuring high performance and scalability. Additionally, I integrated <strong>Azure ML pipelines</strong> to train and evaluate large language models (LLMs), significantly improving the API's accuracy and efficiency.
            </p>
            <a href="https://developer.myptv.com/en/documentation/geocoding-places-api" target="_blank" rel="noopener noreferrer">
              Discover more
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/geocoding_rbcpgs.png"
              alt="Geocoding API Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="model2go">
          <div className="portfolio-content">
            <h2>PTV Model2Go</h2>
            <p>
              <strong>PTV Model2Go</strong> is a cutting-edge solution for automated transport model generation. I played a key role in developing and maintaining Python modules that power this product, enabling seamless integration with APIs and serverless jobs.
            </p>
            <p>
              I also established a robust testing framework, increasing test coverage from <strong>0% to 80%</strong>, ensuring a high-quality codebase. This product is a game-changer for logistics companies, allowing them to create accurate transport models in minutes.
            </p>
            <a href="https://www.ptvgroup.com/en/products/ptv-model2go" target="_blank" rel="noopener noreferrer">
              Explore Model2Go
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045147/model2go_wa1iz8.jpg"
              alt="PTV Model2Go Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="route-optimisation">
          <div className="portfolio-content">
            <h2>Route Optimisation API & Route-Optimiser</h2>
            <p>
              The <strong>Route Optimization API</strong> is a strategic product for PTV, solving complex vehicle routing problems (VRP). I contributed to the development of a meta-heuristic solver, restructuring the existing <strong>C++</strong> codebase to integrate state-of-the-art academic algorithms.
            </p>
            <p>
              This API helps logistics companies reduce costs, minimize delivery times, and improve resource utilization. My work ensured that the solver could handle real-world constraints, such as time windows and vehicle capacities, with exceptional efficiency.
            </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-api/quick-start-route-optimisation-api" target="_blank" rel="noopener noreferrer">
              See the solution in action
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/routeoptimizer_i3i1r5.webp"
              alt="Route Optimisation Demo"
            />
          </div>
        </div>
        <div className="portfolio-section" id="optiflow">
          <div className="portfolio-content">
            <h2>PTV Optiflow</h2>
            <p>
              <strong>PTV Optiflow</strong> is a SaaS product designed to optimize large-scale logistics operations. I worked on a new microservice for this product, leveraging <strong>AWS</strong> and <strong>Spring Boot</strong> to build a scalable and reliable solution.
            </p>
            <p>
              My contributions included implementing <strong>Domain-Driven Design (DDD)</strong> principles and collaborating with a team using <strong>Mob Programming</strong>. This ensured that the microservice met the highest standards of quality and performance.
            </p>
            <a href="https://developer.myptv.com/en/documentation/route-optimization-optiflow-api/quick-start-route-optimization-optiflow" target="_blank" rel="noopener noreferrer">
              Learn about Optiflow
            </a>
          </div>
          <div className="portfolio-visual">
            <img
              src="https://res.cloudinary.com/dl9xg597r/image/upload/v1739045146/optiflow_cnxtrr.jpg"
              alt="PTV Optiflow Demo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


function Freelance() {

  const navigate = useNavigate();

  const handleBookTime = () => {
    navigate('/interactive/book');
  };

  return (
    <div>
      <Helmet>
        <title>Freelance Services | Helia Jamshidi</title>
        <meta
          name="description"
          content="Offering freelance services in operations research, ML/AI, data science, and microservice development until my own products become profitable."
        />
        <meta
          name="keywords"
          content="Helia Jamshidi, freelance, operations research, ML, AI, data science, microservices, SaaS, API"
        />
        <meta name="author" content="Helia Jamshidi" />

        {/* Open Graph */}
        <meta property="og:title" content="Freelance Services | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Helia helps solve discrete optimization problems, build ML pipelines, and develop microservices. Book an introductory session today."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/EconTalk_viuikc.png"
        />
        <meta property="og:url" content="https://heliajamshidi.me/work/freelance" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Freelance Services | Helia Jamshidi" />
        <meta
          name="twitter:description"
          content="Specialized freelance services: operations research, ML/AI, data science, and microservice development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738793047/EconTalk_viuikc.png"
        />

        <link rel="canonical" href="https://heliajamshidi.me/work/freelance" />
      </Helmet>

      <h1>Freelance</h1>
      <section className="freelance-intro" style={{ marginBottom: "3rem" }}>
        <p>
          I decided to focus on <em>building my own products</em>, but until they become profitable, I support myself by offering specialized services. Until December 2024, I was a senior software engineer at <em>PTV</em>, a cloud software company with highly competitive optimization solutions for the logistics and delivery business, serving leading supermarkets and delivery services in Germany and the Benelux region.
        </p>
      </section>
      <section className="speaking-section-colored">
        <h2>You can <em>trust</em> me with:</h2>
        <div className="list-section">
          <h3>Operations Research</h3>
          <ul>
            <li>Solving your discrete (integer) optimization problems with linear programming and modern metaheuristics.</li>
            <li>Consulting to speed up your current discrete optimization solver.</li>
            <li>Combining ML/AI with traditional metaheuristics.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>ML / AI</h3>
          <ul>
            <li>Setting up your ML pipelines, from data gathering to evaluation, monitoring, and impact (Azure ML).</li>
            <li>Fine-tuning open-source <em>foundation models</em> for your needs and deploying them on your local cloud.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Data Science</h3>
          <ul>
            <li>Statistical analysis, data storytelling, and data visualization.</li>
            <li>Delivering the most insightful and comprehensive interpretation of your data.</li>
          </ul>
        </div>
        <div className="list-section">
          <h3>Microservices / SaaS / APIs</h3>
          <ul>
            <li>Building back-end services in Quarkus, Spring Boot, .NET, or Flask.</li>
            <li>Providing minimal front-end demos to test and showcase the project (not intended for final users).</li>
          </ul>
        </div>
      </section>
      <section className="call-to-action"
        style={{ marginTop: "4rem", textAlign: "center", padding: "3rem", borderRadius: "8px" }}>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", marginBottom: "2rem" }}>
          If you need expert help in optimization or ML, let's talk!
          I’m also happy to be recommended to anyone who could benefit from my skills.
        </p>
        <button type="submit" className="submit-button" onClick={handleBookTime}>
          Book an Introductory Session
        </button>
      </section>
    </div>
  );
}



export default function Work({ isMobile }) {
  const { contentIsVisibleMobile, toc2IsVisibleMobile } = useContext(MobileViewContext);
  return (
    <div className="content-with-sub">
      {(!isMobile || toc2IsVisibleMobile) &&
        <SecondarySidebarBasic heading="Work" items={workItems} />}
      {(!isMobile || contentIsVisibleMobile) &&
        <div className="content-area">
          <Routes>
            <Route path="/" element={<WorkHome />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="/experience" element={
              <div style={{ padding: "0px", margin: "0px" }}>
                <PortfolioShowcase />
                <TechStack />
              </div>
            }></Route>
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/datingapp" element={<DatingApp />} />
          </Routes>
        </div>}
    </div>
  );
}
