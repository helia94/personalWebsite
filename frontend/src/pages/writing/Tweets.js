import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./Tweets.css";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/tweets").then((res) => setTweets(res.data)).catch(() => {});
  }, []);

  const login = () => {
    if (!password) return;
    setIsAdmin(true);
    setShowLogin(false);
    setError(null);
  };

  const post = async (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setPosting(true);
    setError(null);
    try {
      const res = await axios.post("/api/tweets", { body: draft, password });
      setTweets((prev) => [res.data, ...prev]);
      setDraft("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to post.");
    } finally {
      setPosting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tweets | Helia Jamshidi</title>
        <meta name="description" content="Short thoughts and commentary by Helia Jamshidi." />
        <link rel="canonical" href="https://heliajamshidi.me/writing/tweets" />
      </Helmet>

      <div className="tweets-page">
        <h1 className="tweets-title">Tweets</h1>
        <p className="tweets-subtitle">Short thoughts, half-formed opinions.</p>

        <ul className="tweets-list">
          {tweets.length === 0 && (
            <li className="tweets-empty">Nothing yet.</li>
          )}
          {tweets.map((t) => (
            <li key={t.id} className="tweet">
              <p className="tweet__body">{t.body}</p>
              <time className="tweet__date">{formatDate(t.created_at)}</time>
            </li>
          ))}
        </ul>

        {isAdmin && (
          <form className="tweets-compose" onSubmit={post}>
            <textarea
              className="tweets-compose__input"
              placeholder="What's on your mind?"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={3}
            />
            {error && <p className="tweets-error">{error}</p>}
            <button
              className="tweets-compose__submit"
              type="submit"
              disabled={posting || !draft.trim()}
            >
              {posting ? "Posting…" : "Post"}
            </button>
          </form>
        )}

        <button className="tweets-admin-trigger" onClick={() => setShowLogin(true)}>
          ···
        </button>

        {showLogin && !isAdmin && (
          <div className="tweets-modal-backdrop" onClick={() => setShowLogin(false)}>
            <div className="tweets-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Admin</h3>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                className="tweets-modal__input"
                autoFocus
              />
              <div className="tweets-modal__actions">
                <button onClick={login}>Login</button>
                <button onClick={() => setShowLogin(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
