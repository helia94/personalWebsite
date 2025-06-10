// File: src/pages/interactive/BookCalendar.js
import React from "react";
import { Helmet } from "react-helmet";
import "./BookCalendar.css";

export default function BookCalendar() {
  return (
    <div className="book-calendar-container">
      <Helmet>
        <title>Book My Calendar | Helia Jamshidi</title>
        <meta
          name="description"
          content="Schedule a meeting with Helia Jamshidi using the embedded Calendly widget."
        />
        <meta property="og:title" content="Book My Calendar | Helia Jamshidi" />
        <meta
          property="og:description"
          content="Choose a suitable time slot for a call or meeting."
        />
        <meta property="og:url" content="https://heliajamshidi.me/interactive/book" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://heliajamshidi.me/interactive/book" />
      </Helmet>
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
