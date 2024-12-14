import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        
        <div className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="index.html" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              <img src={`${process.env.PUBLIC_URL}/assets/css/images/main-logo.png`} alt="main logo" height="32px"/>
            </a>
    
            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <h1 className="nav-link px-2 link-secondary"><Link to="/home">PresenceLink</Link></h1>
            </div>
            
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <a href="events.html" className="nav-link px-2 link-secondary">Find Events</a>
            </div>
    
            <div className="dropdown text-end">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={`${process.env.PUBLIC_URL}/assets/css/images/default-image.jpg`} alt="mdo" width="32" height="32" className="rounded-circle" id="profile-pic-small"/>
              </a>
              <ul className="dropdown-menu text-small" style={{}}>
                <li><Link to="/profile" className="dropdown-item" href="profile.html">Profile</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to="/Login" className="dropdown-item"> <i className="fa-solid fa-right-from-bracket"></i> Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Header;