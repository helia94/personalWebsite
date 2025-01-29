import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AMA.css";

export default function AMA() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Admin modal and password states
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // track whether user is logged in as admin

  // For submitting an answer
  const [answerText, setAnswerText] = useState("");
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/questions");
      setQuestions(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load questions.");
      setLoading(false);
    }
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    if (!questionText.trim()) {
      setError("Question cannot be empty.");
      return;
    }
    try {
      setLoading(true);
      await axios.post("/api/questions", {
        question: questionText,
        name: questionName,
      });
      setQuestionText("");
      setQuestionName("");
      setError(null);
      fetchQuestions();
    } catch (err) {
      console.error(err);
      setError("Failed to submit question.");
      setLoading(false);
    }
  };

  // Admin login
  const handleAdminLogin = () => {
    // You can do a quick test request or check password locally
    // but typically you'd do something secure (session-based, etc.)
    // For simplicity, let's just set isAdmin to true if there's any password:
    if (!adminPassword) {
      alert("Please enter admin password!");
      return;
    }

    // If you want to verify using backend,
    // you could do an API call with the password and set isAdmin if 200:
    // But for this example, we'll set isAdmin to true immediately:
    setIsAdmin(true);
    setShowAdminModal(false);
  };

  // Submit an answer as admin
  const submitAnswer = async (qId) => {
    if (!answerText.trim()) {
      setError("Answer cannot be empty.");
      return;
    }
    try {
      setLoading(true);
      // calls your Flask endpoint
      await axios.post("/api/questions/answer", {
        id: qId,
        answer: answerText,
        password: adminPassword, 
      });
      setAnswerText("");
      setActiveQuestionId(null);
      setError(null);
      fetchQuestions();
    } catch (err) {
      console.error(err);
      setError("Failed to submit answer (check your admin password).");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="ama-container">
        <h2>Ask Me Anything</h2>
        <form className="question-form" onSubmit={submitQuestion}>
          <input
            type="text"
            placeholder="Your name (optional)"
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
            className="form-input"
          />
          <textarea
            placeholder="Your question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="form-textarea"
          ></textarea>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit Question"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="questions-section">
          <h3>All Questions</h3>
          {loading && <p>Loading questions...</p>}
          {!loading && questions.length === 0 && <p>No questions yet. Be the first!</p>}
          <div className="questions-list">
            {questions.map((q) => (
              <div key={q.id} className="question-card">
                <div className="question-header">
                  <span className="question-name">{q.name || "Anonymous"} asks:</span>
                  <span className="question-text">{q.question}</span>
                </div>

                {q.answer ? (
                  <div className="answer-section">
                    <span className="answer-label">Answer:</span>
                    <span className="answer-text">{q.answer}</span>
                    {/* Re-answer if admin */}
                    {isAdmin && (
                      <button
                        className="admin-button"
                        onClick={() => {
                          setActiveQuestionId(q.id);
                          setAnswerText(q.answer);
                        }}
                      >
                        Edit / Re-Answer
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="answer-section">
                    <p className="unanswered">No answer yet.</p>
                    {isAdmin && (
                      <button
                        className="admin-button"
                        onClick={() => {
                          setActiveQuestionId(q.id);
                          setAnswerText("");
                        }}
                      >
                        Add Answer
                      </button>
                    )}
                  </div>
                )}

                {/* Show answer form if this question is selected for answering */}
                {isAdmin && activeQuestionId === q.id && (
                  <div className="answer-form">
                    <textarea
                      placeholder="Type your answer here..."
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      className="form-textarea"
                    />
                    <button
                      className="admin-button"
                      onClick={() => submitAnswer(q.id)}
                      disabled={loading}
                    >
                      Submit Answer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        Invisible / small link at bottom:
        Clicking this triggers the admin modal 
      */}
      <div
        className="impressum-footer"
        onClick={() => setShowAdminModal(true)}
      >
        Admin Login
      </div>

      {/* Admin Modal */}
      {showAdminModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>Admin Login</h3>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="form-input"
            />
            <div className="modal-buttons">
              <button onClick={handleAdminLogin} className="admin-button">
                Login
              </button>
              <button
                onClick={() => setShowAdminModal(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
