import React from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="index.html" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              <img src={`${process.env.PUBLIC_URL}/assets/css/images/main-logo.png`} alt="main logo" height="32px"/>
            </a>
    
            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <h1 className="nav-link px-2 link-secondary"><a href="index.html">PresenceLink</a></h1>
            </div>
            
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <a href="events.html" className="nav-link px-2 link-secondary">Find Events</a>
            </div>
    
            <div className="dropdown text-end">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={`${process.env.PUBLIC_URL}/assets/css/images/default-image.jpg`} alt="mdo" width="32" height="32" className="rounded-circle" id="profile-pic-small"/>
              </a>
              <ul className="dropdown-menu text-small" style={{}}>
                <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to="/Login" className="dropdown-item"> <i className="fa-solid fa-right-from-bracket"></i> Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={`${process.env.PUBLIC_URL}/assets/css/images/preacher-image.jpg`} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">We are a church organization</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Our Achievements</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3 className="fs-2 text-body-emphasis">The Magaling Awards</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3 className="fs-2 text-body-emphasis">Secured Partnership</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="fs-2 text-body-emphasis">Nationwide Chapters</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="upper-border">
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src={`${process.env.PUBLIC_URL}/assets/css/images/main-logo.png`} alt="" height="57"/>
          <h1 className="display-5 fw-bold text-body-emphasis">Join Us</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => window.location.href='events.html'}>Browse Events</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="details-container">
          <a href="index.html">PresenceLink</a>
          <h2>About us</h2>
        </div>
    
        <div id="contacts-container">
          <h1>Contact us</h1>
          <nav>
            <li>
              <a href="https://www.facebook.com/lotnmaininc" title="Facebook" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@lotnchurchweb/videos" title="Youtube" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lotnnamerica/?hl=en" title="Instagram" target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
          </nav>
        </div>
    
        <div id="legal-information"> All rights reserved <i className="fa-regular fa-copyright"></i></div>
      </div>

          </div>
  );
}

export default App;