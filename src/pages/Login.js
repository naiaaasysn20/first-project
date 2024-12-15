
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/login-revised.css';
import { Link } from 'react-router-dom';

export default function login() {
    return (
<div>
    <div id="wrapper-div" className="clearfix">
        <div className="login-pane">
            <div className="login-container">
                <div className="top-nav">
                    <nav id="top-buttons">
                        <a className="button-logo">
                            <img src="assets/css/images/main-logo.png" alt="Eventlink logo" className="logo-image"/>
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
                        <form id="login-form" action="/post" method="post">
                            <div className="form-group">
                                <div className="input-icon">
                                    <i className="fa-solid fa-user"></i>
                                        <input type="text" placeholder="Username" id="username" name="username" required/>
                                    </div>
                                </div>
                            <div className="form-group">
                                <div className="input-icon">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Password" id="password" name="password" required/>
                                </div>
                            </div>
                             <div className="form-group">
                                <button type="submit" className="btn btn-primary login-button" title="Enter Account" id="enter">Enter</button>
                             </div>
                             <div className="form-group">
                                <Link to="/register"  id="dont-have-account">Don't have an account?</Link>
                             </div>
                       
                        </form>
                        
                    </div>
                </div>          
            </div>     
        </div>
        <div className="picture-pane">
            <img src="assets/css/images/main-picture.png" alt="Main-picture"/>
        </div>
    </div>
    <script src="assets/js/login.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</div>
    )
}

