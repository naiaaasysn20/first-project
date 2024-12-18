
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/login-revised.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const usernameSample = "admin";
    const passwordSample = "admin";

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill out all fields");
            return;
        }
        if (username === usernameSample && password === passwordSample) {
            alert("Login Successful");
            navigate("/home"); // Redirect to the Home page
        } else {
            alert("Incorrect username or password");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin(e);
        }
    };

    return (
        <div>
            <div id="wrapper-div" className="clearfix">
                <div className="login-pane">
                    <div className="login-container">
                        <div className="top-nav">
                            <nav id="top-buttons">
                                <a className="button-logo">
                                    <img src="assets/css/images/main-logo.png" alt="Eventlink logo" className="logo-image" />
                                    <h1 className="logo-name">PresenceLink</h1>
                                </a>
                            </nav>
                        </div>
                        <div className="login-input-box">
                            <div className="login-title">
                                <h1>Login</h1>
                                <h2>Enter an account</h2>
                            </div>
                            {/* Login Form */}
                            <div className="login-details">
                                <form id="login-form" onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="fa-solid fa-user"></i>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                id="username"
                                                name="username"
                                                required
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                onKeyUp={handleKeyPress}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="fa-solid fa-lock"></i>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                name="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onKeyUp={handleKeyPress}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary login-button"
                                            title="Enter Account"
                                            id="enter"
                                        >
                                            Enter
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/register" id="dont-have-account">Don't have an account?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="picture-pane">
                    <img src="assets/css/images/main-picture.png" alt="Main-picture" />
                </div>
            </div>
        </div>
    );
}
