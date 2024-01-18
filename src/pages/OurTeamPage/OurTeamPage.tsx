import React from "react";
import { Navbar, Footer } from "../../components";
import sonerImg from "../../assets/img/userImages/sonerteampic.png";
import feyzaImg from "../../assets/img/userImages/feyza.jpeg";
import yagmurImg from "../../assets/img/userImages/yagmur.jpg";
import seyhmusImg from "../../assets/img/userImages/seyhmus.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const OurTeamPage = (props: Props) => {
    return (
        <>
            <Navbar />

            <div className="team">
                <div className="container">

                    <div className="section-title">
                        <h2>Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, provident?</p>
                    </div>

                    <div className="row">
                        
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src={sonerImg}className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Soner Şeylan</h4>
                                    <span>Full Stack Developer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, asperiores!</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/sonersyln" className="github">
                                    <FaGithub/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/sonerseylan/" className="linkedin">
                                    <FaLinkedin/>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src={feyzaImg}className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Feyza Karanfil Erat</h4>
                                    <span>Full Stack Developer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, asperiores!</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/feyzaerat" className="github">
                                    <FaGithub/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/feyzakaranfilerat/" className="linkedin">
                                    <FaLinkedin/>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src={seyhmusImg}className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Şeyhmus Erol</h4>
                                    <span>Full Stack Developer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, asperiores!</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/ShmsErl" className="github">
                                    <FaGithub/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/seyhmus-erol/" className="linkedin">
                                    <FaLinkedin/>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src={yagmurImg}className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Yağmur Çurku</h4>
                                    <span>Full Stack Developer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, asperiores!</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/yagmurcurku" className="github">
                                    <FaGithub/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/yagmurcurku/" className="linkedin">
                                    <FaLinkedin/>
                                </Link>
                                </div>
                            </div>
                        </div>
 

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default OurTeamPage;
