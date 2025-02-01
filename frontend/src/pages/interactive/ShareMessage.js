import React, { useState } from "react";
import axios from "axios";

export default function ShareMessage() {
  const [message, setMessage] = useState("");
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");

  const submitMessage = async () => {
    try {
      await axios.post("/api/messages", {
        message,
        name: yourName,
        email: yourEmail
      });
      setMessage("");
      setYourName("");
      setYourEmail("");
      alert("Message sent!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ama-container">
      <h2>Share Anything With Me</h2>
      <input
        placeholder="Name (optional)"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
        className="form-input"
      />
      <input
        placeholder="Email (optional)"
        value={yourEmail}
        onChange={(e) => setYourEmail(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-textarea"
      />
      <button onClick={submitMessage} className="submit-button">
        Submit Message
      </button>
    </div>
  );
}
