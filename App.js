// src/App.js
import React, { useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import EventModal from "./components/EventModal";
import events from "./data";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <EventList events={filteredEvents} onEventClick={handleEventClick} />
      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
