import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap

# ---------------- Data ----------------
headers = [
    "DNA","Human Brain","Verbal Language / Culture","Text-based DB","File Systems",
    "Knowledge Graph","Web Search","Ad Personalization","Blockchain","Vector DB",
    "LLM","Hierarchical Memory Networks","Memory-Augmented Neural Networks",
    "Agent As Memory Manager (e.g. Letta)"
]

rows = [
    "Indexing","Retrieval (Source)","Iterative Query","Query Enhancement",
    "PageRank / TextRank","No Right Answer","Gets Better By Use","Gets Better By Network",
    "Clear Feedback Loops","Always On","Time Dependent","Strategic Forgetting",
    "Real Time Update","Daily Update","Guaranteed Long-Term Storage",
    "Contextualization","Multimodality","Structural Bias"
]

# yes=1, maybe=0, no=-1
matrix = [
    [-1, 0, 0,  1, 0,  1,  1,  1,  1,  1, -1,  1, -1, 0],
    [ 1, 0, 0,  1, 1,  1,  1, -1,  1,  1, -1,  1, -1, 0],
    [-1, 1, 0, -1,-1,  1,  1, -1, -1,  0,  1,  1,  1, 1],
    [-1, 1, 0, -1,-1, -1,  1,  1, -1,  0,  1,  1,  1, 1],
    [-1,-1, 1, -1,-1,  1,  1, -1, -1, -1, -1, -1, -1,-1],
    [-1, 1, 1, -1,-1, -1,  1,  1, -1,  0,  1,  1,  1, 0],
    [-1, 1, 1, -1,-1, -1,  1,  1, -1, -1, -1,  0,  0, 0],
    [-1,-1, 1, -1,-1,  1,  1,  1, -1, -1, -1, -1, -1,-1],
    [-1, 1, 1, -1,-1,  1,  1,  1, -1, -1, -1,  0, -1, 0],
    [-1, 1, 1, -1,-1, -1,  1,  1,  1, -1, -1, -1, -1, 0],
    [-1, 1, 1, -1,-1, -1,  1,  1, -1, -1, -1, -1, -1, 1],
    [-1, 1, 1,  1, 1,  0,  1,  1, -1,  1, -1,  0,  1, 1],
    [-1, 1,-1,  1, 1,  0,  0,  1, -1,  0, -1, -1, -1, 1],
    [-1, 1,-1, -1,-1,  1,  1,  1, -1,  0, -1, -1, -1, 0],
    [ 1,-1, 0,  1, 1,  1, -1, -1,  1,  1, -1, -1, -1, 0],
    [-1, 1, 1, -1,-1,  1, -1,  1, -1,  0,  0,  0,  0, 1],
    [-1, 1, 1, -1, 0, -1,  0, -1, -1,  0,  0,  0,  0, 0],
    [ 1, 1, 1,  1, 1,  1,  1,  1,  1,  1,  1,  1,  1, 1],
]

# ---------------- Compute similarity ----------------
M = np.array(matrix)
cols = M.T                                   # column-based
n_cols, n_rows = cols.shape[0], cols.shape[1]

# identical-value count per column pair
same_count = np.zeros((n_cols, n_cols), dtype=int)
for i in range(n_cols):
    for j in range(n_cols):
        same_count[i, j] = np.sum(cols[i] == cols[j])

# normalize to 0..1 ratio
same_ratio = same_count / n_rows

# ---------------- Reorder by similarity (greedy) ----------------
tot_sim = same_ratio.sum(axis=1)
start = int(np.argmax(tot_sim))
order = [start]
remaining = set(range(n_cols)) - {start}
while remaining:
    last = order[-1]
    # tie-break by global similarity to keep clusters stable
    nxt = max(remaining, key=lambda j: (same_ratio[last, j], tot_sim[j]))
    order.append(nxt)
    remaining.remove(nxt)

S = same_ratio[np.ix_(order, order)]

# ---------------- Medium-length headers ----------------
medium_headers = [
    "DNA",
    "Human Brain",
    "Language/Culture",
    "Text DB",
    "File Sys",
    "Knowledge Graph",
    "Web Search",
    "Ads/Personalization",
    "Blockchain",
    "Vector DB",
    "LLM",
    "Hier. Mem Net",
    "Memory-Aug NN",
    "Agent Mem-Manager"
]
ordered_headers = [medium_headers[i] for i in order]

# ---------------- Plot ----------------
# Palette: terracotta -> muted gold -> dark cyan
colors = [
    (183/255, 82/255, 71/255),   # low
    (191/255, 138/255, 53/255),  # mid
    (0/255, 102/255, 94/255)     # high
]
cmap = LinearSegmentedColormap.from_list("custom_memory_palette", colors)

plt.figure(figsize=(10, 8))
im = plt.imshow(S, vmin=0, vmax=1, cmap=cmap)

plt.xticks(range(n_cols), ordered_headers, rotation=90)
plt.yticks(range(n_cols), ordered_headers)
cbar = plt.colorbar(im, fraction=0.046, pad=0.04)
cbar.set_label("Similarity ratio (0–1)")

plt.title("Similarity Heatmap of Memory Systems (Reordered)")
plt.tight_layout()
plt.show()

# Optionally, save:
# plt.savefig("memory_similarity_heatmap.png", dpi=300, bbox_inches="tight")
