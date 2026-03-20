import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Comments.css";

export default function Comments() {
  const { pathname } = useLocation();
  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setComments([]);
    axios
      .get("/api/comments", { params: { url: pathname } })
      .then((res) => setComments(Array.isArray(res.data) ? res.data : []))
      .catch(() => {});
  }, [pathname]);

  const submit = async (e) => {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await axios.post("/api/comments", {
        page_url: pathname,
        body,
        author_name: authorName || null,
      });
      setComments((prev) => [...prev, res.data]);
      setBody("");
      setAuthorName("");
    } catch {
      setError("Failed to post comment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="comments">
      <h4 className="comments__heading">Comments</h4>
      {comments.length > 0 && (
        <ul className="comments__list">
          {comments.map((c) => (
            <li key={c.id} className="comments__item">
              <span className="comments__author">{c.author_name}</span>
              <p className="comments__body">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
      <form className="comments__form" onSubmit={submit}>
        <input
          className="comments__input"
          type="text"
          placeholder="Name (optional)"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <textarea
          className="comments__textarea"
          placeholder="Leave a comment…"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
        />
        {error && <p className="comments__error">{error}</p>}
        <button
          className="comments__submit"
          type="submit"
          disabled={submitting || !body.trim()}
        >
          {submitting ? "Posting…" : "Post"}
        </button>
      </form>
    </div>
  );
}
