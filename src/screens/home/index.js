import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Home extends Component { 
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
                        <div className="col-md-12 bg">
                            <h1 className="text-center head">H2M Catalyst</h1>
                            <p className="para">
                                H2M Catalyst is a Rollup, skillset-improvement fund that transforms well established service companies into dynamic, digital enterprises with proprietary integrated automated platforms (IAP).
                            </p>
                            <button className="but">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center head1"> Transforming Enterprises</h2>
                            <h5 className="head2">
                                <span className="spTxt">
                                    By transforming employee skillset.
                                </span>
                            </h5>
                        </div>
                        <div className="row mar">
                            <div className="col-md-3">
                                <img src="../assets/images/icon/diamond.png" width="20%" className="icon" alt="diamond"/>
                                <h5 className="text-center"> Increase Value</h5>
                                <p className="text-center">
                                    BPO companies providing lower level services can greatly increase enterprise value by creating internal software engineers enabling company to offer higher level of services.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/compas.png" width="20%" className="icon" alt="compas" />
                                <h5 className="text-center"> Proven Formula </h5>
                                <p className="text-center">
                                    Two of the largest global BPO companies have proven this premise. 
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/scale.png" width="20%" className="icon" alt="scale"/>
                                <h5 className="text-center"> Scalability</h5>
                                <p className="text-center">
                                    We can replicate within the fragmented BPO Industry.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/ship.png" width="20%" className="icon" alt="ship" />
                                <h5 className="text-center"> Increase Value</h5>
                                <p className="text-center">
                                    Our mission is to acquire targeted BPO companies, increase revenue and profit by enabling staff to offer higher level services, and lower costs by sharing services among the acquired companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row grBg">
                        <div className="container">
                            <h5>
                            “Every company is a software company…[computing] is getting embedded in our world… is a core part of every industry. A car is now a computer. Software skills are a valuable resource… in ten years we… won’t have the tech industry and other industries,”
                            </h5>
                            <br/>
                            <p className="greyText">
                                -Satya Nadella, CEO, Microsoft <br /> <br />
                                2019 Mobile World Congress
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-12 bg1"> </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-6 con">
                            <h3 className="black-text">ABOUT US</h3>
                            <p>
                            “The biggest problem with enterprise operations today is the simple fact that most firms still run most of their processes exactly the same way as they did 20/30/40 years ago, with the only “innovation” being models like offshore outsourcing and shared service centers, cloud and digital technologies enabling those same processes to be conducted steadily faster and cheaper.  However, fundamental changes have not been made to intrinsic business processes – most companies still operate with their major functions such as customer service, marketing, finance, HR and supply chain operating in individual silos, with IT operating as a non-strategic vehicle to maintain the status quo and keep the lights on.”
                            </p>
                            <span className="blue-text">
                                –Phil Fersht, CEO and Chief Analyst, Horses for Sources
                            </span>
                        </div>
                        <div className="col-md-6 row">
                            <div className="col-md-3">
                                <img src="../assets/images/icon.png" className="icon1"/>
                            </div>
                            <div className="col-md-9">
                                <div className="atDiv">
                                    <h4 className="blue-text">
                                        ACQUIRE TRACTION
                                    </h4>
                                    <p>
                                        The seed landscape has changed dramatically over the past several years. Companies are being created and raising small amounts of capital to de-risk and validate, or disprove, many of their original assumptions.
                                    </p>
                                </div>
                                <div className="oueDiv">
                                    <h4 className="blue-text">
                                        OPTIMIZE UNIT ECONOMICS
                                    </h4>
                                    <p>
                                    We have an upgraded strategy of not just “getting in the good deals,” but rather participating with larger investments and solid follow-ons.
                                    </p>
                                </div>
                                <div className="gvDiv">
                                    <h4 className="blue-text">
                                        GAIN VELOCITY
                                    </h4>
                                    <p>
                                    We don’t think experience or data alone are basis enough for a decision. We work very closely with the management teams to provide as much value as possible. We combine years of operational experience with extensive data analysis to evaluate the best options, and then act upon them.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="../assets/images/logo.png" alt="logo" className="img"/>
                        </div>
                        <div className="col-md-4">
                            <h4>CONTACT</h4>
                            <p>
                                <strong>H2M Capital</strong>
                                <br />
                                7659 S. Main Street
                                <br />
                                Midvale UT 84047
                            </p>
                            <p>
                                801.808.2332
                                <br />
                                info@h2-m.com
                            </p>
                        </div>
                        <div className="col-md-4">
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1412097599127!2d-111.89826568445254!3d40.427871979363715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752802ed15066bf%3A0x297af19778ecbd86!2s2912%20Executive%20Pkwy%20%23220%2C%20Lehi%2C%20UT%2084043%2C%20USA!5e0!3m2!1sen!2s!4v1584700624695!5m2!1sen!2s"  frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
export default Home