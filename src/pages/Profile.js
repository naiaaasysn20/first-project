import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/profile.css';

import React, { useState } from 'react';

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    // State to manage form data
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        chapter: "",
        picture: ""
    });

    // State to store previous form data (backup)
    const [previousFormData, setPreviousFormData] = useState({});

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "picture") {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData({ ...formData, picture: reader.result });
                };
                reader.readAsDataURL(file);
            }
        } else if (name === "chapter") {
            setSelectedOption(value);
            setFormData({ ...formData, chapter: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Edit button handler: open modal and save current form data as backup
    const buttonClicked = () => {
        setPreviousFormData(formData); // Backup current data
        setIsEditing(true);
        document.querySelector(".popup").classList.add("active");
    };

    // Cancel button handler: close modal and restore previous form data
    const buttonCancel = () => {
        setFormData(previousFormData); // Restore backup
        setSelectedOption(previousFormData.chapter || ""); // Restore chapter
        setIsEditing(false);
        document.querySelector(".popup").classList.remove("active");
    };

    // Confirm button handler: update profile
    const buttonConfirmed = () => {
        const { fname, lname, username, email, chapter } = formData;

        // Check for empty fields
        if (!fname || !lname || !username || !email || !chapter) {
            alert("Please fill out all fields before confirming.");
            return;
        }

        // Close modal and show success alert
        setIsEditing(false);
        document.querySelector(".popup").classList.remove("active");
        alert("Profile updated successfully!");
    };

    return (
        <div>
            <div id="wrapper-div">
                {/* Profile Title */}
                <div id="nav-profile-title">
                    <h1 id="profile-title">Profile</h1>
                </div>

                {/* Profile Details */}
                <div id="parent-div" className="clearfix">
                    <div id="div-profile-picture">
                        <div id="div-picture-container">
                            <div id="picture-frame">
                                <img 
                                    src={formData.picture || "/assets/css/images/default-image.jpg"} 
                                    title="Profile picture" 
                                    id="profile-pic" 
                                    alt="Profile" 
                                />
                            </div>
                            <label htmlFor="input-file">
                                <i className="fa-solid fa-arrow-up-from-bracket" title="Edit profile picture"></i>
                            </label>
                            <input 
                                type="file" 
                                accept="image/jpeg, image/png, image/jpg" 
                                id="input-file" 
                                onChange={handleInputChange} 
                                name='picture'
                            />
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
                                        <h1 id="firstname">
                                            <i className="fa-solid fa-file-signature"></i>
                                            {formData.fname || "Name"}
                                        </h1>
                                        <h1 id="lastname">{formData.lname || "Last Name"}</h1>
                                    </div>
                                    <h1 id="emailOrig">
                                        <i className="fa-solid fa-envelope"></i>
                                        {formData.email || "Email"}
                                    </h1>
                                    <h1 id="chapterOrig">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {formData.chapter || "Chapter"}
                                    </h1>

                                    <button 
                                        type="button" 
                                        title="Edit profile" 
                                        id="edit-button" 
                                        className="btn btn-primary" 
                                        onClick={buttonClicked}
                                    >
                                        <i className="fa-solid fa-gear"></i> Edit Details
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Edit Profile Modal */}
                <div className="popup">
                    <div className="close-button" onClick={buttonCancel}>&times;</div>
                    <div className="form">
                        <h2>Edit Profile</h2>
                        <div className="name-container">
                            <div className="firstname-container">
                                <label htmlFor="first-name">First Name</label>
                                <input 
                                    type="text" 
                                    id="fname" 
                                    placeholder="Enter First Name" 
                                    name='fname'
                                    value={formData.fname} 
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="lastname-container">
                                <label htmlFor="last-name">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lname" 
                                    placeholder="Enter Last Name" 
                                    name='lname'
                                    value={formData.lname} 
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                placeholder="Enter Username" 
                                name='username'
                                value={formData.username} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Enter Email" 
                                name='email'
                                value={formData.email} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="chapter">Chapter</label>
                            <select 
                                id="chapter" 
                                name="chapter" 
                                value={selectedOption} 
                                onChange={handleInputChange}
                            >
                                <option value="" disabled hidden>Edit Chapter</option>
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
                                <button 
                                    type="button" 
                                    className="btn btn-danger" 
                                    id="confirm" 
                                    onClick={buttonConfirmed}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
