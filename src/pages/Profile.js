// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../components/assets/css/profile.css';

// export default function Profile() {
//     return (
//         <body>

//     <header class="p-3 mb-3 border-bottom">
//         <div class="container">
//           <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//             <a href="index.html" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
//               <img src="assets/css/images/main-logo.png" alt="main logo" height="32px"/>
//             </a>
    
//             <div class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//               <h1 class="nav-link px-2 link-secondary"><a href="index.html">PresenceLink</a></h1>
//             </div>
            
//             <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//                 <a href="events.html" class="nav-link px-2 link-secondary">Find Events</a>
//             </div>
    
//             <div class="dropdown text-end">
//               <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src="assets/css/images/default-image.jpg" alt="mdo" width="32" height="32" class="rounded-circle" id="profile-pic-small"/>
//               </a>
//               <ul class="dropdown-menu text-small" style="">
//                 <li><a class="dropdown-item" href="login-revised.html"> <i class="fa-solid fa-right-from-bracket"></i> Sign out</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </header>
//     <div id="wrapper-div">
    
//     {/* Profile Title */}
//      <div id="nav-profile-title">
//         <h1 id="profile-title"> Profile</h1>
//      </div>
    
//     {/* Profile Details */}
//      <div id="parent-div" class="clearfix">
//         <div id="div-profile-picture">
//             <div id="div-picture-container" >
//                 <div id="picture-frame">
//                     <img src="assets/css/images/default-image.jpg" title="Profile picture" id="profile-pic"/> 
                    
//                 </div>
//                 <label for="input-file"> 
//                     <i class="fa-solid fa-arrow-up-from-bracket" title="Edit profile picture"></i> </label>
//                   <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file"/>
                
//             </div>
//             <div id="div-name-container">
//                 <h1 id="usernameOrig">Username</h1>
//             </div>
//         </div>

//         <div id="div-profile-details">
//                 <nav>
//                     <ul>
//                         <li>
//                             <div class="name-container">
//                                 <h1 id="firstname"> <i class="fa-solid fa-file-signature"></i> Name</h1>    
//                                 <h1 id="lastname"> LastName</h1>    
//                             </div>
//                             <h1 id="emailOrig"> <i class="fa-solid fa-envelope"></i> Email</h1>
//                             <h1 id="chapterOrig">  <i class="fa-solid fa-location-dot"></i> Chapter</h1>
//                             {/* <button type="button" title="Edit profile" id="edit-button"> <i class="fa-solid fa-gear"></i> Edit</button> */}
//                             <button type="button" title="Edit profile" id="edit-button" class="btn btn-primary"> <i class="fa-solid fa-gear"></i> Edit Details</button>
//                         </li>
//                     </ul>
//                 </nav>           
//         </div>
//      </div>
// {/* Edit Profile */}
//      <div class="popup">
//         <div class="close-button">&times;</div>
//         <div class="form">
//             <h2>Edit Profile</h2>
//             <div class="name-container">
//                 <div class="firstname-container">
//                     <label for="first-name">First Name</label>
//                     <input type="text" id="fname" placeholder="Enter First Name"/>
//                 </div>
//                 <div class="lastname-container">
//                     <label for="last-name">Last Name</label>
//                     <input type="text" id="lname" placeholder="Enter Last Name"/>
//                 </div>
//             </div>
//             <div class="form-element">
//                 <label for="username">Username</label>
//                 <input type="text" id="username" placeholder="Enter Username"/>
//             </div>
//             <div class="form-element">
//                 <label for="email">Email</label>
//                 <input type="email" id="email" placeholder="Enter Email"/>
//             </div>
//             <div class="form-element">
//                 <label for="chapter">Chapter</label>
//                 <select id="chapter" name="chapter">
//                     <option value="" disabled selected hidden>Edit Chapter</option>
//                     <option>Antipolo</option>
//                     <option>Arayat</option>
//                     <option>Biñan</option>
//                     <option>Carmona</option>
//                     <option>Castillejos</option>
//                 </select>
//             </div>
//             <div class="main-container-button clearfix">
//                 <div class="form-element" id="button-cancel">
//                     <button type="button" class="btn btn-danger">Cancel</button>

//                 </div>
//                 <div class="form-element" id="button-confirm">
//                     <button type="button" class="btn btn-danger" id="confirm">Confirm</button>
//                 </div>
//             </div>
//         </div>
//      </div>
//      {/* Profile footer */}
//      <div id="div-footer" class="clearfix">
//         <div id="details-container">
//             <a href="index.html" >PresenceLink</a>
//             <h2>About us</h2>
//         </div>

//         <div id="contacts-container">
//             <h1>Contact us</h1>
//             <nav>
//                 <li>
//                     <a href="https://www.facebook.com/lotnmaininc" title="Facebook" target="_blank">
//                         <i class="fa-brands fa-facebook"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.youtube.com/@lotnchurchweb/videos" title="Youtube" target="_blank">
//                         <i class="fa-brands fa-youtube"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="https://www.instagram.com/lotnnamerica/?hl=en" title="Instagram" target="_blank">
//                         <i class="fa-brands fa-square-instagram"></i>
//                     </a>
//                 </li>
//             </nav>
//         </div>

//         <div id="legal-information"> All rights reserved <i class="fa-regular fa-copyright"></i></div>
//      </div>
//     </div>

//     <script src="assets/js/profile.js"> </script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// </body>
//     )

// }