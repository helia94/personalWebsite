// File: src/pages/interactive/ShareMessage.js
import React, { useState } from 'react';
import axios from 'axios';

export default function ShareMessage() {
  const [message, setMessage] = useState('');
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');

  const submitMessage = async () => {
    try {
      await axios.post('/api/messages', {
        message,
        name: yourName,
        email: yourEmail
      });
      setMessage('');
      setYourName('');
      setYourEmail('');
      alert('Message sent!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="section-card">
      <h2>Share Anything With Me</h2>
      <input
        placeholder="Name (optional)"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
      <input
        placeholder="Email (optional)"
        value={yourEmail}
        onChange={(e) => setYourEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={submitMessage}>Submit</button>
    </div>
  );
}
