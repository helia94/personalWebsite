// File: src/pages/interactive/BookCalendar.js
import React from "react";
import "./BookCalendar.css";

export default function BookCalendar() {
  return (
    <div className="book-calendar-container">
      <h2>Book My Calendar</h2>
      <p>Select a suitable time for our meeting.</p>
      <div className="calendly-embed">
        <iframe
          src="https://calendly.com/helia-jm/30min" // Replace with your actual Calendly link
          width="100%"
          height="600"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
          title="Calendly Scheduler"
        ></iframe>
      </div>
    </div>
  );
}
