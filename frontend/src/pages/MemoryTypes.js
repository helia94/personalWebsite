import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./MemoryTypes.css";
import MemorySimilarityHeatmap from "./MemoryTypesHeatmap";

const rowDescriptions = {
  "Indexing": "Shortcut structures (like an address book) that let the system jump straight to the right spot instead of scanning everything. The more explicit and engineered the index, the less the system relies on “learning it dynamically from data.”",
  "Retrieval (Source)": "Can the system point back to the exact place the info came from (like a footnote)? This shows whether it’s true memory (retrieval) or just prediction/imagination (hallucination/creativity).",
  "Iterative Query": "Any multi-step process where each step uses the previous step’s to move closer to the target result. Not just reformulating a string: includes filtering, traversal, multi-hop reasoning, re-ranking, re-embedding, tool loops, and trial-and-error.",
  "Query Enhancement": "The system rewrites/augments your query to better match relevant data: e.g., add synonyms, fix spelling, disambiguate intent, split into sub-queries, or re-embed with extra context. Goal: retrieve what you *meant*, not just what you typed.",
  "PageRank / TextRank": "Both are graph-based ranking tricks. PageRank (Google) = “a page is important if many important pages link to it.” TextRank = same idea for text: “a word/sentence is important if many other important ones connect to it.” Said otherwise: popularity by association.",
  "No Right Answer": "The system often produces multiple valid results instead of one truth. Like Google giving you 10 relevant links, or an LLM giving different plausible answers to an open-ended question.",
  "Gets Better By Use": "The more *you* use it, the more it adapts to you (like Spotify or Google remembering your habits).",
  "Gets Better By Network": "The more *you* use it, the better it gets for all users (like Waze traffic maps, or Google ranking improving with global click data).",
  "Clear Feedback Loops": "The system learns directly from signals like clicks, corrections, or votes. Strong feedback loops = quick self-improvement. More of an application criteria not so applicable just considering the tech framework.",
  "Always On": "Works continuously even if you don’t ask. Example: Google crawling the web, your brain processing in sleep. Not just sitting idle until queried.",
  "Time Dependent": "Freshness matters: “today’s weather” is different than yesterday’s, or “top news” shifts hourly.",
  "Strategic Forgetting": "The system deliberately removes or de-prioritizes old info to stay useful. Like your brain forgetting irrelevant details, or Google de-indexing spam.",
  "Real Time Update": "New info shows up instantly. Example: stock tickers update within seconds.",
  "Daily Update": "Info is refreshed in batch cycles, not instantly. Example: a news site that rebuilds its index every night.",
  "Guaranteed Long-Term Storage": "Ensures data persists reliably over long periods.",
  "Contextualization": "Ability to leverage surrounding context or history.",
  "Multimodality": "Supports multiple types of data such as text, images, or audio.",
  "Structural Bias": "The system’s architecture itself favors some info over others. Examples: Web search favors popular, linked sites. Vector DBs favor cluster centers (majority patterns). LLMs favor smooth, common phrasing over rare facts.",
  "Year / Decade (Introduced)": "Approximate origin time for each memory type."
};


const columnDescriptions = {
  "DNA": "Life’s memory chip. A molecular information that stores instructions for building organisms, highly stable across generations, but not adaptive in real-time.",
  "Human Brain": "It uses forgetting as a form of optimization, and integrates memories into broader narratives that support future-oriented behavior. Rather than serving as a fidelity, based recorder of the past, memory is constructed at recall, filtered through attention, goals, and current context.",
  "Verbal Language / Culture": "A form of distributed shared memory in tribes that is hard to transfer or copy across tribe boundaries where context and shared experiences matter. Keeps stories, rules, and knowledge alive beyond individuals, but evolves with retelling.",
  "Text-based DB": "Structured tables with exact lookups. Precise but rigid, retrieval only works if it fits the schema.",
  "File Systems": "Folders and files organize data on a computer, and easy for humans to navigate.",
  "Knowledge Graph": "Memory as a web of entities and relationships. Works like a giant mind map, enabling traversal through connected facts.",
  "Web Search": "Fast access to the entire internet at its current state. Lets us find match for simple queries across billions of pages, fast, but ranking favors what’s popular and linked. I considered a separate entry for document search (e.g. Elastic Search) as used widely for application data, but for simplicity I only kept full scale web search as it has everything in document search and more.",
  "Ad Personalization": "Builds a profile of preferences and behaviors, predicting what you’ll want next.",
  "Blockchain": "Shared, permanent, and transparent memory, but biased toward early data and costly to rewrite.",
  "Vector DB": "Memory by similarity. Retrieves “things like this” based on embeddings, not exact matches. Great for fuzzier search.",
  "LLM": "Memory compressed into statistical patterns of language. Predicts what word/idea should come next, but can hallucinate.",
  "Hierarchical Memory Networks": "Neural memory with layers. Mimics abstraction levels (summary vs detail), but risks losing edge-case facts.",
  "Memory-Augmented Neural Networks": "AI with an attached scratchpad. Learns tasks better by writing and reading from external memory slots.",
  "Agent As Memory Manager (e.g. Letta)": "A bot that organizes its own memory. Decides what to keep, forget, or fetch, mixing structured blocks with LLM context."
};

const cellExtras = {
  "Indexing": {
    "Verbal Language / Culture": "Verses are written in meter and rhyme not just for beauty but to help bards remember thousands of lines. The meter is an indexing system. Songs and chants (nursery rhymes, prayers) stick because rhythm gives you a recall structure.",
    "Ad Personalization": "Example of using profile indices could be “give me people in profile X (recently looked at running shoes, age 25–40, in Germany).”",
    "Hierarchical Memory Networks": "Tree of memories: high-level summaries indexing down to low-level facts, navigated with embeddings via trained attention (not embedding similarity!)",
    "Agent As Memory Manager (e.g. Letta)": "Memory as a layered system: short-term conversation sits in a buffer, long-term facts live in recall storage, and the most important knowledge is pinned into editable core blocks inside the LLM’s context. Retrieval does happen (so RAG is part of the picture), but not as a blind “dump top-k similar chunks”, rather, the agent searches, summarizes, rewrites, and selectively injects what matters."
  },
  "Retrieval (Source)": {
    "Human Brain": "Episodic memory sometimes recalls exact detail (where, when, who), but semantic/general knowledge is reconstructed, not retrieved. For people without highly superior autobiographical memory even the episodic memory is faulty and subjective more often than not.",
    "Verbal Language / Culture": "Cultural knowledge survives because many people repeat it. Errors in one telling are corrected by others, stabilizing the memory across the group.",
    "Ad Personalization": "Profiles predict what you might want, but don’t cite sources. You see the outcome, not the trail of data that produced it.",
    "Memory-Augmented Neural Networks": "They can reference recently stored slots, but older info is quickly overwritten.",
    "Agent As Memory Manager (e.g. Letta)": "Each memory block can carry tags (where it came from, when it was added) but cannot retrieve the full source like the full past conversation. This helps track provenance but depends on the agent’s design."
  },
  "Iterative Query": {
    "Vector DB": "Not embedded in Vector DB. But it is common practice in RAG to search in steps. First grab a broad set of results (e.g. top 100), then narrow them by re-embedding, filtering, or re-ranking that smaller group until you converge on the best matches.",
    "LLM": "Iteration here means multi-turn reasoning: the system tries, evaluates, and reformulates internally. Not just text rewrite, but chains of re-queries or tool calls.",
    "Hierarchical Memory Networks": "Iteration here means multi-turn reasoning: the system tries, evaluates, and reformulates internally. Not just text rewrite, but chains of re-queries or tool calls.",
    "Memory-Augmented Neural Networks": "Iteration here means multi-turn reasoning: the system tries, evaluates, and reformulates internally. Not just text rewrite, but chains of re-queries or tool calls.",
    "Agent As Memory Manager (e.g. Letta)": "Iteration here means multi-turn reasoning: the system tries, evaluates, and reformulates internally. Not just text rewrite, but chains of re-queries or tool calls."
  },
  "Query Enhancement": {
    "Web Search": "Adds synonyms, fixes spelling, and disambiguates intent.",
    "Vector DB": "Common practice to refine and re-embed queries.",
    "LLM": "Expands or rewrites questions with extra context.",
    "Hierarchical Memory Networks": "Enhances queries through learned embeddings.",
    "Memory-Augmented Neural Networks": "Augments queries via memory reads.",
    "Agent As Memory Manager (e.g. Letta)": "Rewrites questions to retrieve what you meant."
  },
  "No Right Answer": {
    "Vector DB": "Depending on embeddings and task, many “similar” results can be equally valid. There isn’t one ground-truth match.",
    "Agent As Memory Manager (e.g. Letta)": "Agents can decide what “enough” means for an answer. Sometimes multiple perspectives are surfaced, sometimes one is chosen."
  },
  "Gets Better By Use": {
    "Hierarchical Memory Networks": "They don’t adapt automatically. Only when the larger application loop gives reinforcement (e.g., human corrections) does performance improve.",
    "Memory-Augmented Neural Networks": "They don’t adapt automatically. Only when the larger application loop gives reinforcement (e.g., human corrections) does performance improve.",
    "Agent As Memory Manager (e.g. Letta)": "Users can edit or delete stored facts, directly shaping the memory over time. This is closer to human note-taking than automatic adaptation."
  },
  "Gets Better By Network": {
    "Blockchain": "More users strengthen the network’s trust and security, but search within the chain doesn’t get easier by scale, only consensus does."
  },
  "Clear Feedback Loops": {
    "Hierarchical Memory Networks": "The loop is only as strong as the application: an LLM agent with thumbs-up feedback learns, but without signals it stagnates.",
    "Agent As Memory Manager (e.g. Letta)": "The loop is only as strong as the application: an LLM agent with thumbs-up feedback learns, but without signals it stagnates."
  },
  "Always On": {
    "Agent As Memory Manager (e.g. Letta)": "Not just idle until queried. Could theoretically continuously maintain and improve its memory: consolidates notes, deduplicates facts, updates state (e.g. if “sold car,” it now knows “no car”)."
  },
  "Strategic Forgetting": {
    "Verbal Language / Culture": "Details drop and change across retellings; only core motifs persist.",
    "Text-based DB": "Explicit DELETE, retention policies, GDPR erasure.",
    "File Systems": "Files removed manually or by retention settings (e.g., auto-delete after 30 days).",
    "Knowledge Graph": "KGs are routinely pruned/trimmed to drop noisy or low-value nodes/edges; temporal KGs use decay and subgraph pruning to keep the graph useful and tractable. At web scale, updates and re-ranking are batched, not “forget on touch,” because recomputing embeddings/centrality is expensive.",
    "Web Search": "Results removed from index for policy/legal reasons; content may still exist elsewhere.",
    "Ad Personalization": "Old interests decay; recent behavior dominates targeting.",
    "Blockchain": "Append-only; once written, data is permanent unless forked.",
    "Vector DB": "Many vector stores support TTL/expiry and explicit delete/compaction—practical strategic forgetting.",
    "LLM": "Frozen weights; corrections don’t erase knowledge globally.",
    "Hierarchical Memory Networks": "Once trained/frozen, an HMN won’t rewrite memory on its own at runtime; “forgetting” is mostly a training-time effect (what summaries keep vs drop) or a session reset, not true online, strategic deletion.",
    "Memory-Augmented Neural Networks": "Can erase/overwrite slots within a task, but resets between sessions.",
    "Agent As Memory Manager (e.g. Letta)": "Letta keeps editable memory blocks; agents can rewrite/delete blocks, summarize/condense (“sleep-time compute”), and set read-only vs writable areas. That’s genuine, inference-time strategic forgetting by policy."
  },
  "Real Time Update": {
    "Knowledge Graph": "Some KGs update nightly (like Wikidata), others stream updates in real-time (financial graphs).",
    "Web Search": "Search engines crawl and update fast, but “real-time” often means minutes to hours, not seconds.",
    "Vector DB": "Similarity search is instant, but new data only appears after ingestion + re-embedding.",
    "Agent As Memory Manager (e.g. Letta)": "Updates memory immediately when new information arrives."
  },
  "Daily Update": {
    "Knowledge Graph": "Some KGs update nightly (like Wikidata), others stream updates in real-time (financial graphs).",
    "Web Search": "Search engines crawl and update fast, but “real-time” often means minutes to hours, not seconds.",
    "Ad Personalization": "User models are commonly refreshed daily.",
    "Vector DB": "Similarity search is instant, but new data only appears after ingestion + re-embedding.",
    "Agent As Memory Manager (e.g. Letta)": "Likely performs periodic consolidation."
  },
  "Guaranteed Long-Term Storage": {
    "Verbal Language / Culture": "Stories can last millennia (epics, myths), but only if communities actively retell them. Without transmission, they vanish.",
    "Agent As Memory Manager (e.g. Letta)": "Reformulated version of information is preserved as key-value or chunks with embeddings, but not in the raw format and in full, depend on agent implementation."
  },
  "Contextualization": {
    "Web Search": "Tailors results by session, device, location, and history, but not deep context.",
    "Vector DB": "Context comes only from the embedding of your query, not memory of past interactions.",
    "LLM": "Maintains context within the current session.",
    "Hierarchical Memory Networks": "They adapt within a session (e.g., focus shifts), but reset once training or session ends.",
    "Memory-Augmented Neural Networks": "Retains context within the active session.",
    "Agent As Memory Manager (e.g. Letta)": "Before enough interactions, personalization is weak. Needs accumulated data to contextualize well."
  },
  "Multimodality": {
    "File Systems": "Can store any file type, but each is siloed (.txt, .jpg, .mp3). No unified search or reasoning across them.",
    "Web Search": "Results are blended, but not deeply integrated, mostly parallel lists (websites, images, videos).",
    "Vector DB": "Embeddings let text and images live in the same space, enabling “find images matching this sentence.”",
    "LLM": "Recent models (GPT-4o, Gemini) process multiple inputs together (text, vision, audio), but still experimental.",
    "Hierarchical Memory Networks": "Early research suggests combining modalities in structured memory, but practical systems remain rare.",
    "Memory-Augmented Neural Networks": "Early research suggests combining modalities in structured memory, but practical systems remain rare.",
    "Agent As Memory Manager (e.g. Letta)": "Early research suggests combining modalities in structured memory, but practical systems remain rare."
  }
};

export default function MemoryTypes() {
  const [colorOnly, setColorOnly] = useState(false);
  useEffect(() => {
    const table = document.getElementById("memory-table");
    if (!table) return;
    const rows = Array.from(table.rows);
    const headerCells = Array.from(rows[0].cells).slice(1);
    const colNames = headerCells.map((c) => c.textContent.trim());
    headerCells.forEach((cell) => {
      const label = cell.textContent.trim();
      const desc = columnDescriptions[label];
      if (desc) cell.dataset.tooltip = desc;
      cell.tabIndex = 0;
    });
    rows.slice(1).forEach((row) => {
      const rowName = row.cells[0].textContent.trim();
      const rowDesc = rowDescriptions[rowName];
      if (rowDesc) row.cells[0].dataset.tooltip = rowDesc;
      row.cells[0].tabIndex = 0;
      Array.from(row.cells).slice(1).forEach((cell, idx) => {
        const colName = colNames[idx];
        const extra = cellExtras[rowName]?.[colName];
        const base = `${rowName} – ${colName}`;
        cell.dataset.tooltip = extra ? `${base}: ${extra}` : base;
        cell.tabIndex = 0;
      });
    });

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    const allCells = table.querySelectorAll("[data-tooltip]");

    const position = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      if (e.touches && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }
      if (!x && !y) {
        const rect = e.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
      const rect = tooltip.getBoundingClientRect();
      let left = x + 12;
      let top = y + 12;
      if (left + rect.width > window.innerWidth) {
        left = window.innerWidth - rect.width - 12;
      }
      if (top + rect.height > window.innerHeight) {
        top = window.innerHeight - rect.height - 12;
      }
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    };

    const show = (e) => {
      tooltip.textContent = e.currentTarget.dataset.tooltip;
      tooltip.style.opacity = 1;
      position(e);
    };

    const move = (e) => position(e);
    const hide = () => {
      tooltip.style.opacity = 0;
    };

    allCells.forEach((cell) => {
      cell.addEventListener("pointerenter", show);
      cell.addEventListener("pointermove", move);
      cell.addEventListener("pointerleave", hide);
      cell.addEventListener("focus", show);
      cell.addEventListener("blur", hide);
    });

    return () => {
      allCells.forEach((cell) => {
        cell.removeEventListener("pointerenter", show);
        cell.removeEventListener("pointermove", move);
        cell.removeEventListener("pointerleave", hide);
        cell.removeEventListener("focus", show);
        cell.removeEventListener("blur", hide);
      });
      document.body.removeChild(tooltip);
    };
  }, []);

  return (
    <div className="memory-types-page">
      <Helmet>
        <title>Memory Types Comparison | Helia Jamshidi</title>
        <meta
          name="description"
          content="Interactive comparison of natural, digital, and AI memory systems."
        />
      </Helmet>
      <h1>Memory Types</h1>
      <p>
        Back in April, I needed to solve my internal confusion about existing and
        emerging types of memory and retrieval. Now I decided to clean it up so it could
        be shared. The result is a table, a bit too wide for my own taste, that helps to
        answer what features memory systems like Human Brain, Oral Culture, Web Search, LLMs
        and other widely used systems have in common, and where they differ.
      </p>
      <p>
        As much as I tried to research, I am not an expert on these memory types. If you
        disagree with the conclusions in the table, help me correct it.
      </p>
      <p>
        Some of these memory types are natural (DNA, brain, language), some are
        tools (databases, file systems), and some are applications that use many tools (web search). 
        They can’t be cleanly separated, but they are widely used and each serves
        as an anchor point to compare and understand emerging systems.
      </p>
      <p>
        <strong>Symbols:</strong> 
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>?</strong>: I could not find information or make up my mind.</li>
          <li><strong>✦</strong>: Clarification available on tooltip and as text below the table.</li>
        </ul>
      </p>
      <div className="table-controls">
        <label>
          <input
            type="checkbox"
            checked={colorOnly}
            onChange={(e) => setColorOnly(e.target.checked)}
          />
          Colors only
        </label>
      </div>
      <div className="table-container">
        <table
          id="memory-table"
          className={`memory-table ${colorOnly ? "hide-text" : ""}`}
        >
          <thead>
            <tr>
              <th>Criteria</th>
              <th>DNA</th>
              <th>Human Brain</th>
              <th>Verbal Language / Culture</th>
              <th>Text-based DB</th>
              <th>File Systems</th>
              <th>Knowledge Graph</th>
              <th>Web Search</th>
              <th>Ad Personalization</th>
              <th>Blockchain</th>
              <th>Vector DB</th>
              <th>LLM</th>
              <th>Hierarchical Memory Networks</th>
              <th>Memory-Augmented Neural Networks</th>
              <th>Agent As Memory Manager (e.g. Letta)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Indexing</th>
              <td><span className="no"></span></td>
              <td><span className="might">Association</span></td>
              <td><span className="might">Rhyme, Rhythm, Story Formulas, And Memory Palaces✦</span></td>
              <td><span className="yes">Explicit Index</span></td>
              <td><span className="might">Directory Tree</span></td>
              <td><span className="yes">Graph Index</span></td>
              <td><span className="yes">Inverted Index + Embeddings</span></td>
              <td><span className="yes">Profiles✦</span></td>
              <td><span className="yes">Add-On Indexes</span></td>
              <td><span className="yes">Embeddings</span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">High And Low Level Embedding + Attention✦</span></td>
              <td><span className="no">Network Learns Reading+Writing Memory</span></td>
              <td><span className="might">Partially Uses Index Via RAG✦</span></td>
            </tr>
            <tr>
              <th>Retrieval (Source)</th>
              <td><span className="yes"></span></td>
              <td><span className="might">Partially: Exact Memorization And Episodic Memory✦</span></td>
              <td><span className="might">Redundancy Across People Stabilizes Cultural Memory✦</span></td>
              <td><span className="yes">Exact Record</span></td>
              <td><span className="yes">Files</span></td>
              <td><span className="yes">Entities/Links</span></td>
              <td><span className="yes">Links/Pages</span></td>
              <td><span className="no">✦</span></td>
              <td><span className="yes">Full History Immutable</span></td>
              <td><span className="yes">Source Chunks</span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Source Chunks</span></td>
              <td><span className="no">Limited For Short Term✦</span></td>
              <td><span className="might">Memory Block Has Metadata (Source, Time)✦</span></td>
            </tr>
            <tr>
              <th>Iterative Query</th>
              <td><span className="no"></span></td>
              <td><span className="yes">Recall Attempts</span></td>
              <td><span className="might">?</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Traversal</span></td>
              <td><span className="yes">Reformulating Query, Clicking Deeper</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Refinement Supported And Common✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
            </tr>
            <tr>
              <th>Query Enhancement</th>
              <td><span className="no"></span></td>
              <td><span className="yes">Associations</span></td>
              <td><span className="might">?</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">Adjacent Interest Clusters</span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Refinement Supported And Common✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">✦</span></td>
            </tr>
            <tr>
              <th>PageRank / TextRank</th>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Social Prestige Of Speakers</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Centrality</span></td>
              <td><span className="yes">PageRank</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
            </tr>
            <tr>
              <th>No Right Answer</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Use Cases Range✦</span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="might">Flexible✦</span></td>
            </tr>
            <tr>
              <th>Gets Better By Use</th>
              <td><span className="no"></span></td>
              <td><span className="yes">Experience</span></td>
              <td><span className="yes">Oral Tradition Adapts</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Personalization</span></td>
              <td><span className="yes">Adapts To Clicks</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">If Trained On Application Level Feedback✦</span></td>
              <td><span className="might">If Trained On Application Level Feedback✦</span></td>
              <td><span className="might">User Can Correct Memory✦</span></td>
            </tr>
            <tr>
              <th>Gets Better By Network</th>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Collective Growth</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Grows With Community</span></td>
              <td><span className="yes">Global Ranking</span></td>
              <td><span className="yes">Network Effects</span></td>
              <td><span className="no">Trust Gets Better But Not Retrieval✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
            </tr>
            <tr>
              <th>Clear Feedback Loops</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Curation</span></td>
              <td><span className="yes">Clicks/Dwell</span></td>
              <td><span className="yes">Click-Through Rate</span></td>
              <td><span className="no">Not In Retrieval</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Application Dependent✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Application Dependent✦</span></td>
            </tr>
            <tr>
              <th>Always On</th>
              <td><span className="no"></span></td>
              <td><span className="yes">Brain</span></td>
              <td><span className="yes">Oral Community</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Crawl/Index</span></td>
              <td><span className="yes">Data Collection</span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Proactive✦</span></td>
            </tr>
            <tr>
              <th>Time Dependent</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Freshness</span></td>
              <td><span className="yes">Recent Behavior</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Time-Aware</span></td>
            </tr>
            <tr>
              <th>Strategic Forgetting</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes">✦</span></td>
              <td><span className="yes">Delete/Expire✦</span></td>
              <td><span className="yes">Delete/TTL✦</span></td>
              <td><span className="might">Pruning/Decay (Batch)✦</span></td>
              <td><span className="yes">De-index on Policy✦</span></td>
              <td><span className="yes">Drops Old Signals✦</span></td>
              <td><span className="no">Immutable✦</span></td>
              <td><span className="yes">TTL/Deletes (if set)✦</span></td>
              <td><span className="no">✦</span></td>
              <td><span className="might">Trained Gating; No Online Delete✦</span></td>
              <td><span className="yes">Erase/Free Slots (Session)✦</span></td>
              <td><span className="yes">Policy-Controlled (blocks)✦</span></td>
            </tr>
            <tr>
              <th>Real Time Update</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="might">Possible, domain based✦</span></td>
              <td><span className="might">Near Real-Time for domains like news✦</span></td>
              <td><span className="yes"></span></td>
              <td><span className="no">Block Times (Minutes)??</span></td>
              <td><span className="might">challenging to reindex✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
            </tr>
            <tr>
              <th>Daily Update</th>
              <td><span className="no"></span></td>
              <td><span className="yes">Sleep</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes">Common practice✦</span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Common daily reindexing✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Likely✦</span></td>
            </tr>
            <tr>
              <th>Guaranteed Long-Term Storage</th>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Fragile But Persistent Orally✦</span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Depends✦</span></td>
            </tr>
            <tr>
              <th>Contextualization</th>
              <td><span className="no"></span></td>
              <td><span className="yes">High</span></td>
              <td><span className="yes">Context-Rich</span></td>
              <td><span className="no">Agnostic</span></td>
              <td><span className="no">Agnostic</span></td>
              <td><span className="yes">By Graph</span></td>
              <td><span className="no">Some Context Awareness (Session, Location, History)✦</span></td>
              <td><span className="yes">Context-Specific Targeting</span></td>
              <td><span className="no"></span></td>
              <td><span className="might">By Query Vector✦</span></td>
              <td><span className="might">Mid Session✦</span></td>
              <td><span className="might">By Query Vector✦</span></td>
              <td><span className="might">Mid Session✦</span></td>
              <td><span className="yes">With Limitation On Cold Start✦</span></td>
            </tr>
            <tr>
              <th>Multimodality</th>
              <td><span className="no"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="yes"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Mixed But Segregated✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Text+Images+Video✦</span></td>
              <td><span className="no"></span></td>
              <td><span className="no"></span></td>
              <td><span className="might">Text/Images Embeddings✦</span></td>
              <td><span className="might">Emerging Multimodal✦</span></td>
              <td><span className="might">Emerging✦</span></td>
              <td><span className="might">✦</span></td>
              <td><span className="might">✦</span></td>
            </tr>
            <tr>
              <th>Structural Bias</th>
              <td><span className="yes">Repeats Motifs</span></td>
              <td><span className="yes">Favors Emotional/Salient</span></td>
              <td><span className="yes">Favors Dominant Storytellers</span></td>
              <td><span className="yes">Schema Bias</span></td>
              <td><span className="yes">Hierarchy Of Folders</span></td>
              <td><span className="yes">Hubs</span></td>
              <td><span className="yes">Favors Linked/Popular</span></td>
              <td><span className="yes">Favors Profitable/Engaged</span></td>
              <td><span className="yes">?</span></td>
              <td><span className="yes">Toward Majority Patterns</span></td>
              <td><span className="yes">Plausible Phrasing Over Truth/Rarity</span></td>
              <td><span className="yes">Toward Majority Patterns Captured In Summaries</span></td>
              <td><span className="yes">?</span></td>
              <td><span className="yes">Toward What The Memory Schema Encodes</span></td>
            </tr>
            <tr>
              <th>Year / Decade (Introduced)</th>
              <td>≈3.5 Billion Years</td>
              <td>≈300,000 Years Ago</td>
              <td>≥50,000 Years Ago (Upper Paleolithic)</td>
              <td>1963–1964</td>
              <td>1961 (CTSS), 1965 (Multics)</td>
              <td>1972</td>
              <td>1993</td>
              <td>1996</td>
              <td>2008 (Whitepaper), 2009 (Genesis Block)</td>
              <td>2017 (FAISS), 2019 (Milvus)</td>
              <td>2018</td>
              <td>2016</td>
              <td>2016</td>
              <td>2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="more-about">

    <MemorySimilarityHeatmap />
    <h2>More About The Table Cells</h2>
    <p>
      All the explanations below also show up as tooltips when you hover on the
      table. You can either explore them inline here, or use hover for quicker
      reference.
    </p>

    {/* Row descriptions */}
    <h3>Criteria Descriptions</h3>
    <ul>
      {Object.entries(rowDescriptions).map(([row, desc]) => (
        <li key={row}>
          <strong>{row}:</strong> {desc}
        </li>
      ))}
    </ul>

    {/* Column descriptions */}
    <h3>Memory Types</h3>
    <ul>
      {Object.entries(columnDescriptions).map(([col, desc]) => (
        <li key={col}>
          <strong>{col}:</strong> {desc}
        </li>
      ))}
    </ul>

    {/* Cell extras */}
    <h3>Extra Notes (Row × Column)</h3>
    {Object.entries(cellExtras).map(([row, cols]) => (
      <div key={row}>
        <h4>{row}</h4>
        <ul>
          {Object.entries(cols).map(([col, text]) => (
            <li key={col}>
              <strong>{col}:</strong> {text}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

    </div>
  );
}

