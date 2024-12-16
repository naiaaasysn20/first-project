import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/events.css";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: null,
  });
  const [editingEventId, setEditingEventId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCreateEvent = () => {
    const { name, description, date, time, location, image } = formData;

    if (!name || !description || !date || !time || !location) {
      alert("Please fill out all fields.");
      return;
    }
    if (description.length > 250) {
      alert("Description must be less than 250 characters.");
      return;
    }

    if (editingEventId) {
      // Update existing event
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEventId
            ? {
                ...event,
                name,
                description,
                date,
                time,
                location,
                image: image ? URL.createObjectURL(image) : event.image,
              }
            : event
        )
      );
      setEditingEventId(null); // Clear editing state
    } else {
      // Create new event
      const newEvent = {
        id: Date.now(),
        name,
        description,
        date,
        time,
        location,
        image: image ? URL.createObjectURL(image) : null,
      };
      setEvents([...events, newEvent]);
    }

    // Reset the form
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      image: null,
    });
  };

  const handleJoinEvent = (eventName) => {
    alert(`You have successfully joined the event: ${eventName}`);
  };

  const handleEditEvent = (event) => {
    setFormData({
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      image: null, // Image input resets since it cannot be pre-filled
    });
    setEditingEventId(event.id);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
  <div className="body-container">
    <div className="container">
      {/* Header Section */}
      <div id="header-container">
        <h1 className="main-text">Upcoming Events</h1>
        <p className="description-text">
          Below are the upcoming events for the Lord of The Nations Church.
        </p>
      </div>

      {/* Create Event Section */}
      <div id="event-search">
        <div className="row">
          <div className="col-lg-8 col-sm-12">

          </div>
          <div className="col-lg-4 col-sm-12 text-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#create-modal"
            >
              Create an Event
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Creating or Editing Events */}
      <div
        className="modal fade"
        id="create-modal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editingEventId ? "Edit Event" : "Create an Event"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Event Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <textarea
                  className="form-control mb-3"
                  placeholder="Event Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
                <input
                  type="time"
                  className="form-control mb-3"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  className="form-control mb-3"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={handleCreateEvent}
                data-bs-dismiss="modal"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div id="events-container" style={{ marginTop: "30px" }}>
        {events.length > 0 ? (
          events.map((event) => (
            <div className="card mb-3 position-relative" key={event.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="image-container">
                    <img
                      src={event.image}
                      className="img-fluid"
                      alt="Event"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description}</p>
                    <p className="card-text">
                      <small>{event.date} @ {event.time}</small>
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <div className="event-buttons">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleJoinEvent(event.name)}
                      >
                        Join Event
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleEditEvent(event)}
                        data-bs-toggle="modal"
                        data-bs-target="#create-modal"
                      >
                        Edit Event
                      </button>
                    </div>
                    <button
                      className="close-button"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available. Create a new one!</p>
        )}
      </div>
      </div>
    </div>
  );
}
