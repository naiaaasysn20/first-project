import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/profile.css';
// import '../components/assets/js/profile.js';

import React, { useState } from 'react';

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        chapter: "",
    });

    const [editingProfileId, setEditingProfileId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
          } else if (name === "chapter") {
            setSelectedOption(value);
            setFormData({ ...formData, chapter: value });
        }else {
            setFormData({ ...formData, [name]: value });
          }
    };

    const handleUpdateProfile = () => {
        const { fname, lname, username, email, chapter } = formData;

        if (!fname || !lname || !username || !email || !chapter) {
            alert("Please fill out all fields.");
            return;
        }

        if (editingProfileId) {
            // Update existing profile
            setSelectedOption((prevProfiles) =>
                prevProfiles.map((profile) =>
                    profile.id === editingProfileId
                        ? {
                            ...profile,
                            fname,
                            lname,
                            username,
                            email,
                            chapter,
                        }
                        : profile
                )
            );
            setEditingProfileId(null); // Clear editing state
        } else {
            // Create new profile
            const newProfile = {
                id: Date.now(),
                fname,
                lname,
                username,
                email,
                chapter,
            };

        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const buttonClicked = () => {
        document.querySelector(".popup").classList.add("active");
    };

    const buttonConfirmed = () => {
        document.querySelector(".popup").classList.remove("active");
    };

    const buttonCancel = () => {
        document.querySelector(".popup").classList.remove("active");
    };

    const handleButtonClick = () => {
        buttonConfirmed();
        handleUpdateProfile();
    };

    return (
  <div>
    <div id="wrapper-div">
    
    {/* Profile Title */}
     <div id="nav-profile-title">
        <h1 id="profile-title"> Profile</h1>
     </div>
    
    {/* Profile Details */}
     <div id="parent-div" className="clearfix">
        <div id="div-profile-picture">
            <div id="div-picture-container" >
                <div id="picture-frame">
                    <img src="assets/css/images/default-image.jpg" title="Profile picture" id="profile-pic" alt='Main-picture'/> 
                    
                </div>
                <label htmlFor="input-file"> 
                    <i className="fa-solid fa-arrow-up-from-bracket" title="Edit profile picture"></i> </label>
                  <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file"/>
                
            </div>
            <div id="div-name-container">
                <h1 id="usernameOrig">{formData.username || "Username"}</h1>
            </div>
        </div>

        <div id="div-profile-details">
                <nav>
                    <ul>
                        <li>
                            <div className="name-container">
                                <h1 id="firstname"> <i className="fa-solid fa-file-signature"></i> {formData.fname || "Name"}</h1>    
                                <h1 id="lastname"> {formData.lname || "Last Name"}</h1>    
                            </div>
                            <h1 id="emailOrig"> <i className="fa-solid fa-envelope"></i> {formData.email || "Email"}</h1>
                            <h1 id="chapterOrig">  <i className="fa-solid fa-location-dot"></i> {formData.chapter || "Chapter"}</h1>
                           
                            <button type="button" title="Edit profile" id="edit-button" className="btn btn-primary" onClick={buttonClicked}> <i className="fa-solid fa-gear"></i> Edit Details</button>
                            
                        </li>
                    </ul>
                </nav>           
        </div>
     </div>
{/* Edit Profile */}
     <div className="popup">
        <div className="close-button"  onClick={buttonCancel}>&times;</div>
        <div className="form">
            <h2>Edit Profile</h2>

            <div className="name-container">
                <div className="firstname-container">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="fname" placeholder="Enter First Name" name='fname'
                    onChange={handleInputChange}/>
                </div>


                <div className="lastname-container">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="lname" placeholder="Enter Last Name" name='lname'
                    onChange={handleInputChange}/>
                </div>
            </div>
            <div className="form-element">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter Username" name='username'
                onChange={handleInputChange}/>
            </div>
            <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Email" name='email'
                onChange={handleInputChange}/>
            </div>
            <div className="form-element">
                <label htmlFor="chapter">Chapter</label>
                <select id="chapter" name="chapter" value={selectedOption} onChange={handleInputChange} >
                    <option value="" disabled selected hidden>Edit Chapter</option>
                    <option>Antipolo</option>
                    <option>Arayat</option>
                    <option>Biñan</option>
                    <option>Carmona</option>
                    <option>Castillejos</option>
                </select>
            </div>
            <div className="main-container-button clearfix">
                <div className="form-element" id="button-cancel">
                    <button type="button" className="btn btn-danger" onClick={buttonCancel}>Cancel</button>

                </div>
                <div className="form-element" id="button-confirm">
                    <button type="button" className="btn btn-danger" id="confirm" onClick={ handleButtonClick }>Confirm</button>

                </div>
            </div>
        </div>
     </div>
    </div>

   
</div>
    )

}
