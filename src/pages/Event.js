import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/events.css';


export default function Event() {
    return (
    <div>
        <div class="container" id="header-container">
        <h1 class="main-text">Upcoming events</h1>
        <div class="col-md-8 ">
          <h2 class="description-text">Below are the upcoming events for the Lord of The Nations Church. We are excited to have you with us! </h2>
        </div>
      </div>

      <div class="container" id="event-search">
        <div class="row" >
          <div class="col-lg-8 col-sm-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Find an event" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg> </button>
            </div>
          </div>
  
          <div class="col-lg-4 col-sm-12" id="make-event">
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#create-modal">Create an Event</button>

            {/* <!-- Start modal --> */}

          <div class="modal fade"  id="create-modal" aria-hidden="true" tabindex="-1 " aria-labelledby="modal-title">

          
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="scrollableModalLabel">Create an Event</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="event-name" class="col-form-label">Event Name:</label>
                      <input type="text" class="form-control" id="event-name"/>
                    </div>
                    <div class="mb-3">
                      <label for="event-description" class="col-form-label">Event Description:</label>
                      <textarea class="form-control" id="event-description"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="event-date" class="col-form-label">Event Date:</label>
                      <input type="date" class="form-control" id="event-date"/>
                    </div>
                    <div class="mb-3">
                      <label for="event-time" class="col-form-label">Event Time:</label>
                      <input type="time" class="form-control" id="event-time"/>
                    </div>
                    <div class="mb-3">
                      <label for="event-location" class="col-form-label">Event Location:</label>
                      <input type="text" class="form-control" id="event-location"/>
                    </div>
                    <div class="mb-3">
                      <label for="event-image" class="col-form-label">Event Image:</label>
                      <input type="file" class="form-control" id="event-image" accept="image/*" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" id="create-event" data-bs-dismiss="modal">Create Event</button>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      {/* <!-- end of modal --> */}
      

      {/* <!-- Events will be displayed here --> */}
      <div class="container">
        <div class="card mb-3" style={{maxWidth: '100%'}} id="event-card">
          <div class="row g-0">
            <div class="col-md-4" id="image-container" >
              <img src="assets/css/images/default-background.png" class="img-fluid rounded-start" alt="Event Background" id="image-origin"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" id="name-origin">Card title <span class="badge text-bg-secondary" id="location-origin"> <i class="fa-solid fa-location-dot"></i> Antipolo</span></h5>
                <p class="card-text" id="description-origin">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <ul id="time-date-container">
                    <li class="list-group"> <p class="card-text" id="date-origin"><small class="text-body-secondary">11/12/2024</small></p></li> 
                    <li class="list-group"> <p class="card-text" id="time-origin"><small class="text-body-secondary">@7:00PM</small></p> </li>
                  </ul>
                

                <button type="button" class="btn btn-primary" id="join-event">Join Event</button>
                <a href="#" class="card-link" id="delete-event">Delete Event</a>
              </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style={{maxWidth: '100%'}} id="event-card">
          <div class="row g-0">
            <div class="col-md-4" id="image-container" >
              <img src="assets/css/images/default-background.png" class="img-fluid rounded-start" alt="Event Background" id="image-origin"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" id="name-origin">Card title <span class="badge text-bg-secondary" id="location-origin"> <i class="fa-solid fa-location-dot"></i> Antipolo</span></h5>
                <p class="card-text" id="description-origin">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <ul id="time-date-container">
                    <li class="list-group"> <p class="card-text" id="date-origin"><small class="text-body-secondary">11/12/2024</small></p></li> 
                    <li class="list-group"> <p class="card-text" id="time-origin"><small class="text-body-secondary">@7:00PM</small></p> </li>
                  </ul>
                

                <button type="button" class="btn btn-primary" id="join-event">Join Event</button>
                <a href="#" class="card-link" id="delete-event">Delete Event</a>
              </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style={{maxWidth: '100%'}} id="event-card">
          <div class="row g-0">
            <div class="col-md-4" id="image-container" >
              <img src="assets/css/images/default-background.png" class="img-fluid rounded-start" alt="Event Background" id="image-origin"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" id="name-origin">Card title <span class="badge text-bg-secondary" id="location-origin"> <i class="fa-solid fa-location-dot"></i> Antipolo</span></h5>
                <p class="card-text" id="description-origin">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <ul id="time-date-container">
                    <li class="list-group"> <p class="card-text" id="date-origin"><small class="text-body-secondary">11/12/2024</small></p></li> 
                    <li class="list-group"> <p class="card-text" id="time-origin"><small class="text-body-secondary">@7:00PM</small></p> </li>
                  </ul>
                

                <button type="button" class="btn btn-primary" id="join-event">Join Event</button>
                <a href="#" class="card-link" id="delete-event">Delete Event</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
);

}