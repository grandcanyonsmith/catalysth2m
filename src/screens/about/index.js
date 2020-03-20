import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class About extends Component { 
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
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <img src="../assets/images/about.jpg" alt="about" className="aboutImg"/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default About