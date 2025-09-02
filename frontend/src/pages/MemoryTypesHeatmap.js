import React, { useMemo, useState } from "react";

/** ===== Final data (reordered) =====
 * Order (indices from original): [Text DB, File Sys, DNA, Blockchain, LLM,
 * Memory-Aug NN, Hier. Mem Net, Vector DB, Knowledge Graph, Web Search,
 * Ads/Personalization, Human Brain, Agent Mem-Manager, Language/Culture]
 */
const HEADERS = [
  "Text DB",
  "File Sys",
  "DNA",
  "Blockchain",
  "LLM",
  "Memory-Aug NN",
  "Hier. Mem Net",
  "Vector DB",
  "Knowledge Graph",
  "Web Search",
  "Ads/Personalization",
  "Human Brain",
  "Agent Mem-Manager",
  "Language/Culture",
];

// 14x14 similarity matrix (ratio 0–1), rounded from Python output
const S = [
  [1.0, 0.889, 0.833, 0.833, 0.444, 0.444, 0.444, 0.611, 0.556, 0.278, 0.389, 0.278, 0.278, 0.167],
  [0.889, 1.0, 0.778, 0.722, 0.5, 0.5, 0.444, 0.611, 0.444, 0.278, 0.278, 0.333, 0.389, 0.222],
  [0.833, 0.778, 1.0, 0.889, 0.611, 0.5, 0.444, 0.5, 0.5, 0.167, 0.222, 0.167, 0.167, 0.167],
  [0.833, 0.722, 0.889, 1.0, 0.5, 0.389, 0.444, 0.5, 0.5, 0.278, 0.333, 0.222, 0.167, 0.222],
  [0.444, 0.5, 0.611, 0.5, 1.0, 0.889, 0.722, 0.5, 0.278, 0.333, 0.333, 0.389, 0.333, 0.222],
  [0.444, 0.5, 0.5, 0.389, 0.889, 1.0, 0.778, 0.5, 0.222, 0.389, 0.389, 0.444, 0.444, 0.278],
  [0.444, 0.444, 0.444, 0.444, 0.722, 0.778, 1.0, 0.5, 0.389, 0.444, 0.333, 0.389, 0.444, 0.222],
  [0.611, 0.611, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 0.444, 0.333, 0.222, 0.222, 0.389, 0.222],
  [0.556, 0.444, 0.5, 0.5, 0.278, 0.222, 0.389, 0.444, 1.0, 0.5, 0.389, 0.278, 0.167, 0.278],
  [0.278, 0.278, 0.167, 0.278, 0.333, 0.389, 0.444, 0.333, 0.5, 1.0, 0.667, 0.611, 0.333, 0.5],
  [0.389, 0.278, 0.222, 0.333, 0.333, 0.389, 0.333, 0.222, 0.389, 0.667, 1.0, 0.722, 0.389, 0.5],
  [0.278, 0.333, 0.167, 0.222, 0.389, 0.444, 0.389, 0.222, 0.278, 0.611, 0.722, 1.0, 0.611, 0.611],
  [0.278, 0.389, 0.167, 0.167, 0.333, 0.444, 0.444, 0.389, 0.167, 0.333, 0.389, 0.611, 1.0, 0.389],
  [0.167, 0.222, 0.167, 0.222, 0.222, 0.278, 0.222, 0.222, 0.278, 0.5, 0.5, 0.611, 0.389, 1.0],
];

/** ===== Color palette (terracotta -> gold -> dark cyan) ===== */
const TERRACOTTA = [183, 82, 71];
const GOLD = [191, 138, 53];
const DARK_CYAN = [0, 102, 94];

// piecewise linear interpolation across 0..1 (0=terracotta, .5=gold, 1=dark cyan)
function colorFor(t) {
  const clamp = (x) => Math.min(1, Math.max(0, x));
  t = clamp(t);
  const lerp = (a, b, u) => Math.round(a + (b - a) * u);

  if (t <= 0.5) {
    const u = t / 0.5;
    const [r, g, b] = [
      lerp(TERRACOTTA[0], GOLD[0], u),
      lerp(TERRACOTTA[1], GOLD[1], u),
      lerp(TERRACOTTA[2], GOLD[2], u),
    ];
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    const u = (t - 0.5) / 0.5;
    const [r, g, b] = [
      lerp(GOLD[0], DARK_CYAN[0], u),
      lerp(GOLD[1], DARK_CYAN[1], u),
      lerp(GOLD[2], DARK_CYAN[2], u),
    ];
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export default function MemorySimilarityHeatmap() {
  const [showNumbers, setShowNumbers] = useState(false);

  const n = HEADERS.length;

  // Pre-render cell styles to avoid re-allocating on hover
  const cells = useMemo(() => {
    return S.map((row) =>
      row.map((v) => ({
        value: v,
        bg: colorFor(v),
        label: v.toFixed(2),
      }))
    );
  }, []);

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 16 }}>
      <h2 style={{ margin: 0, marginBottom: 8 }}>
        Similarity Heatmap (0–1) — Columns Reordered by Closeness
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={showNumbers}
            onChange={(e) => setShowNumbers(e.target.checked)}
          />
          Show values
        </label>

        {/* Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "#555" }}>0</span>
          <div
            style={{
              width: 160,
              height: 12,
              background:
                `linear-gradient(90deg, rgb(${TERRACOTTA.join(",")}) 0%, ` +
                `rgb(${GOLD.join(",")}) 50%, rgb(${DARK_CYAN.join(",")}) 100%)`,
              borderRadius: 6,
            }}
          />
          <span style={{ fontSize: 12, color: "#555" }}>1</span>
        </div>
      </div>

      {/* Grid wrapper with headers (top + left) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `220px repeat(${n}, 44px)`,
          gridAutoRows: "44px",
          border: "1px solid #ddd",
          borderRadius: 10,
          overflow: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,.05)",
        }}
      >
        {/* Empty top-left corner cell */}
        <div style={{ position: "sticky", top: 0, left: 0, background: "#fff", zIndex: 2 }} />

        {/* Column headers */}
        {HEADERS.map((h, j) => (
          <div
            key={`col-h-${j}`}
            title={h}
            style={{
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 1,
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              padding: "6px 4px",
              fontSize: 12,
              fontWeight: 600,
              borderLeft: "1px solid #eee",
              borderBottom: "1px solid #eee",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              height: "100%", 
            }}
          >
            {h}
          </div>
        ))}

        {/* Rows: header + cells */}
        {HEADERS.map((rowName, i) => (
          <React.Fragment key={`row-${i}`}>
            {/* Row header (sticky left) */}
            <div
              title={rowName}
              style={{
                position: "sticky",
                left: 0,
                background: "#fff",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
                fontSize: 12,
                fontWeight: 600,
                borderTop: "1px solid #eee",
                borderRight: "1px solid #eee",
                whiteSpace: "nowrap",
              }}
            >
              {rowName}
            </div>

            {/* Row cells */}
            {cells[i].map((cell, j) => (
              <div
                key={`c-${i}-${j}`}
                title={`${rowName} × ${HEADERS[j]} = ${cell.label}`}
                style={{
                  background: cell.bg,
                  borderTop: "1px solid rgba(255,255,255,0.25)",
                  borderLeft: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.95)",
                  fontWeight: 600,
                  fontSize: 12,
                  userSelect: "none",
                }}
              >
                {showNumbers ? cell.label : ""}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <p style={{ color: "#666", fontSize: 12, marginTop: 10 }}>
        Tip: Toggle “Show values” to print ratios. Diagonal is 1.00 by definition.
      </p>
    </div>
  );
}
