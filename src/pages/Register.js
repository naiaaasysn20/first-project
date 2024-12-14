
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/register-revised.css';


export default function Register() {
    return (
<div>
    <div id="wrapper-div" className="clearfix">
        <div className="register-pane">
            <div className="register-container">
                <div className="top-nav">
                    <nav id="top-buttons">
                        <a className="button-logo">
                            <img src="assets/css/images/main-logo.png" alt="Eventlink logo" className="logo-image"/>
                            <h1 className="logo-name">PresenceLink</h1>
                        </a>
                    </nav>     
                </div>
                <div className="register-input-box">
                    <div className="register-title">
                        <h1>Register</h1>
                        <h2>Register an account</h2>
                    </div>

    {/* Register Form */}
            <div className="register-details">
                <form id="register-form" action="/post" method="post">
                    <div className="name-container clearfix">
                    {/* First Name */}
                        <div className="firstname-container">
                            <div className="input-icon">
                                    <input type="text" placeholder="First Name" id="fname" name="fname" required/>
                                </div>
                            </div>
                    {/* Last Name */}
                        <div className="lastname-container">
                            <div className="input-icon">
                                    <input type="text" placeholder="Last Name" id="lname" name="lname" required/>
                                </div>
                            </div>
                        </div>
                    {/* Email */}
                            <div className="form-group">
                                <div className="input-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                        <input type="text" placeholder="E-mail" id="email" name="email" required/>
                                    </div>
                            </div>
                    {/* Username */}
                            <div className="form-group">
                                <div className="input-icon">
                                    <i className="fa-solid fa-user"></i>
                                        <input type="text" placeholder="Username" id="username" name="username" required/>
                                    </div>
                            </div>
                    {/* Password */}
                            <div className="form-group">
                                <div className="input-icon">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Password" id="password" name="password" required/>
                                </div>   
                            </div>
                    {/* Confirm Password */}
                    <div className="form-group">
                        <div className="input-icon">
                            <i className="fa-solid fa-unlock"></i>
                            <input type="password" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" required/>
                        </div>   
                    </div>
                    {/* Chapter */}
                            <div className="form-group">
                                <div className="input-icon">
                                    <select id="chapter" name="chapter" required>
                                        <option value=" "  disabled selected hidden id="display-name">Select Chapter</option>
                                        <option>Antipolo</option>
                                        <option>Arayat</option>
                                        <option>Biñan</option>
                                        <option>Carmona</option>
                                        <option>Castillejos</option>
                                    </select>
                                </div>   
                            </div>

                             <div className="form-group">
                                <button type="submit" className="btn btn-primary" title="Enter Account" id="enter">Register</button>
                             </div>
                             <div className="form-group">
                                <a href="login-revised.html" id="dont-have-account">Already have an account?</a>
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
<script src="assets/js/register.js"> </script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</div>
    )

}
