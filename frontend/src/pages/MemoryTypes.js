import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./MemoryTypes.css";

const rowDescriptions = {
  "Indexing": "Shortcut structures that let the system jump straight to the right spot instead of scanning everything.",
  "Retrieval (Source)": "Ability to point back to the exact place information came from, distinguishing memory from hallucination.",
  "Iterative Query": "Multi-step process where each step uses the previous result to move closer to the target.",
  "Query Enhancement": "System rewrites or augments your query to better match relevant data.",
  "PageRank / TextRank": "Graph-based ranking tricks where popularity flows through links.",
  "No Right Answer": "Often produces multiple valid results instead of one truth.",
  "Gets Better By Use": "Adapts to the individual user with continued use.",
  "Gets Better By Network": "Improves for everyone as more people use it.",
  "Clear Feedback Loops": "Learns directly from signals like clicks or corrections.",
  "Always On": "Works continuously even when not explicitly queried.",
  "Time Dependent": "Freshness of information matters for usefulness.",
  "Strategic Forgetting": "Deliberately removes or de-prioritizes old information.",
  "Real Time Update": "New information appears immediately.",
  "Daily Update": "Information refreshed in regular daily batches.",
  "Guaranteed Long-Term Storage": "Ensures data persists reliably over long periods.",
  "Contextualization": "Ability to leverage surrounding context or history.",
  "Multimodality": "Supports multiple types of data such as text, images, or audio.",
  "Structural Bias": "Architecture favors certain information over others.",
  "Year / Decade (Introduced)": "Approximate origin time for each memory type."
};

const columnDescriptions = {
  "DNA": "Life’s molecular memory storing instructions for building organisms.",
  "Human Brain": "Neural system with plasticity that reconstructs memories at recall.",
  "Verbal Language / Culture": "Shared oral memory evolving with each retelling.",
  "Text-based DB": "Structured tables with exact lookups; precise but rigid.",
  "File Systems": "Folders and files organizing data for everyday computing.",
  "Knowledge Graph": "Web of entities and relationships enabling traversal through connected facts.",
  "Web Search": "Internet-scale memory allowing retrieval across billions of pages.",
  "Ad Personalization": "Profiles that predict individual preferences and behavior.",
  "Blockchain": "Shared, append-only ledger providing transparent and tamper-resistant history.",
  "Vector DB": "Similarity-based memory retrieving items by embedding proximity.",
  "LLM": "Large language model compressing patterns of language into predictive weights.",
  "Hierarchical Memory Networks": "Neural memory with layered abstractions linking summaries to details.",
  "Memory-Augmented Neural Networks": "Neural models with an external scratchpad for reading and writing.",
  "Agent As Memory Manager (e.g. Letta)": "Digital agent that organizes, retrieves, and prunes its own memory."
};

const cellExtras = {
  "Indexing": {
    "Verbal Language / Culture": "Verses in meter and rhyme help bards remember thousands of lines; rhythm provides recall structure.",
    "Ad Personalization": "Profiles enable queries like \"people in profile X (e.g., age 25–40 in Germany)\".",
    "Hierarchical Memory Networks": "Tree of memories with high-level summaries indexing down to low-level facts.",
    "Agent As Memory Manager (e.g. Letta)": "Layered memory: the agent searches, summarizes and selectively injects context instead of dumping top-k matches."
  },
  "Retrieval (Source)": {
    "Human Brain": "Episodic memory recalls detail but semantic knowledge is reconstructed.",
    "Verbal Language / Culture": "Redundancy across people stabilizes cultural memory.",
    "Ad Personalization": "Profiles don’t reveal the data trail that produced predictions.",
    "Memory-Augmented Neural Networks": "Reference recent slots but older information is quickly overwritten.",
    "Agent As Memory Manager (e.g. Letta)": "Each memory block can carry metadata such as source and time."
  },
  "Iterative Query": {
    "Vector DB": "Typical RAG pipelines refine search in multiple steps.",
    "LLM": "Uses multi-turn reasoning and tool loops.",
    "Hierarchical Memory Networks": "Attention navigates the hierarchy of memories.",
    "Memory-Augmented Neural Networks": "Read/write cycles converge on results.",
    "Agent As Memory Manager (e.g. Letta)": "Chains searches, summarizes, rewrites, and re-queries."
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
    "Vector DB": "Similarity search often yields many equally valid results.",
    "Agent As Memory Manager (e.g. Letta)": "Decides whether to surface multiple perspectives."
  },
  "Gets Better By Use": {
    "Hierarchical Memory Networks": "Improve only when trained on application-level feedback.",
    "Memory-Augmented Neural Networks": "Improve only when trained on application-level feedback.",
    "Agent As Memory Manager (e.g. Letta)": "Users can correct or delete stored facts."
  },
  "Gets Better By Network": {
    "Blockchain": "More participants increase trust but not retrieval quality."
  },
  "Clear Feedback Loops": {
    "Hierarchical Memory Networks": "Learning depends on application-level signals.",
    "Agent As Memory Manager (e.g. Letta)": "Requires explicit user feedback to adapt."
  },
  "Always On": {
    "Agent As Memory Manager (e.g. Letta)": "Can proactively maintain and consolidate its memory."
  },
  "Strategic Forgetting": {
    "Verbal Language / Culture": "Details drop and change across retellings; only core motifs persist.",
    "Text-based DB": "Supports explicit DELETE operations and retention policies.",
    "File Systems": "Lifecycle rules or TTL remove files automatically.",
    "Knowledge Graph": "Pruning or decay routines trim noisy nodes and edges.",
    "Web Search": "De-indexes results for policy or legal reasons.",
    "Ad Personalization": "Old signals fade; recent behavior dominates targeting.",
    "Blockchain": "Append-only design means nothing can be forgotten.",
    "Vector DB": "Supports TTL/expiry and explicit deletion/compaction.",
    "LLM": "Frozen weights; corrections don’t erase knowledge globally.",
    "Hierarchical Memory Networks": "Forgetting happens at training time or session reset.",
    "Memory-Augmented Neural Networks": "Slots can be erased during a task but reset between sessions.",
    "Agent As Memory Manager (e.g. Letta)": "Policies allow rewriting or deleting memory blocks and summarizing over time."
  },
  "Real Time Update": {
    "Knowledge Graph": "Some domains stream updates in real time.",
    "Web Search": "News and similar domains update near real time.",
    "Vector DB": "Rapid re-indexing is challenging.",
    "Agent As Memory Manager (e.g. Letta)": "Updates memory immediately when new information arrives."
  },
  "Daily Update": {
    "Knowledge Graph": "Often refreshed in daily batches.",
    "Web Search": "Large-scale batch updates run each day.",
    "Ad Personalization": "User models are commonly refreshed daily.",
    "Vector DB": "Re-indexing frequently scheduled daily.",
    "Agent As Memory Manager (e.g. Letta)": "Likely performs periodic consolidation."
  },
  "Guaranteed Long-Term Storage": {
    "Verbal Language / Culture": "Persists through community retelling though fragile.",
    "Agent As Memory Manager (e.g. Letta)": "Depends on implementation; stores reformulated knowledge."
  },
  "Contextualization": {
    "Web Search": "Tailors results by session, location, and history.",
    "Vector DB": "Relies solely on the query vector for context.",
    "LLM": "Maintains context within the current session.",
    "Hierarchical Memory Networks": "Context comes from the query vector and current focus.",
    "Memory-Augmented Neural Networks": "Retains context within the active session.",
    "Agent As Memory Manager (e.g. Letta)": "Contextualizes well after enough interactions but limited on cold start."
  },
  "Multimodality": {
    "File Systems": "Store any file type but without cross-modal reasoning.",
    "Web Search": "Mixes text, image, and video results.",
    "Vector DB": "Supports joint text and image embeddings.",
    "LLM": "Newer models process text, vision, and audio together.",
    "Hierarchical Memory Networks": "Research explores multimodal memory structures.",
    "Memory-Augmented Neural Networks": "Multimodal use is still emerging.",
    "Agent As Memory Manager (e.g. Letta)": "Early agents begin to handle mixed modalities."
  }
};

export default function MemoryTypes() {
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
        Back in April, I made a table to solve my internal confusion about existing and
        emerging types of memory and retrieval. Now I decided to clean it up so it could
        be shared with people like me, who apparently have too much time.
      </p>
      <p>
        I am not sure if it is useful, at least it has not helped me make decisions yet,
        but I found it very interesting, so that's something.
      </p>
      <p>
        As much as I tried to research, I am not an expert on these memory types. If you
        disagree with the conclusions in the table, help me correct it.
      </p>
      <p>
        Some of these memory types are natural (DNA, brain, language), some are
        tools/tech (databases, file systems, search engines), and some are AI research
        ideas (memory networks, agents). They can’t be cleanly separated, but each serves
        as an anchor point to compare and understand emerging systems.
      </p>
      <p>
        <strong>Symbols:</strong> <strong>?</strong> means unknown.
      </p>
      <div className="table-container">
        <table id="memory-table" className="memory-table">
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
              <td><span className="yes">✦</span></td>
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
    </div>
  );
}

