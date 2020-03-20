import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Login extends Component { 
    render () {
        return(
            <>
                <section>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to="/" className="navbar-brand">
                                <img src="../assets/images/logo.png" alt="logo" className="img"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link"> ABOUT US </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://twitter.com/h2mcatalyst" target="_blank" className="nav-item">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.linkedin.com/company/h2mcatalyst/about/" target="_blank" className="nav-item">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.instagram.com/h2mcatalyst/" target="_blank" className="nav-item">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            LOGIN
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                </section>
                <section className="loginForm">
                    <h2 className="text-center"> Login </h2>
                    <div class="container">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username or email address <span className="required">*</span></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password <span className="required">*</span></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <Link to="/info" class="btn btn-primary">Login</Link>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}
export default Login