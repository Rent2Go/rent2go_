import React from "react";
import { Navbar, Footer } from "../../components";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ourteampage.css"

type Props = {};

const OurTeamPage = (props: Props) => {
    const {t} = useTranslation();
    return (
        <>
            <Navbar />

            <div className="ourteam">
            <div className="team">
                <div className="container">

                    <div className="section-title">
                        <h2>{t("ourTeam")}</h2>
                        <div className="underline"></div>
                        <p>{t("hereAreTheLuckiestTeam")}</p>
                    </div>

                    <div className="row">
                        
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src="assets/img/userImages/sonerteampic.png"className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Soner Şeylan</h4>
                                    <span>Full Stack Developer</span>
                                    <p>{t("aboutSoner")}</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/sonersyln" className="github" target="_blank">
                                    <i><FaGithub/></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/sonerseylan/" className="linkedin" target="_blank">
                                    <i><FaLinkedin/></i>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src="assets/img/userImages/feyza.jpg"className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Feyza Karanfil Erat</h4>
                                    <span>Full Stack Developer</span>
                                    <p>{t("aboutFeyza")}</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/feyzaerat" className="github" target="_blank">
                                    <i><FaGithub/></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/feyzakaranfilerat/" className="linkedin" target="_blank">
                                    <i><FaLinkedin/></i>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src="assets/img/userImages/seyhmusımg.png"className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Şeyhmus Erol</h4>
                                    <span>Full Stack Developer</span>
                                    <p>{t("aboutSeyhmus")}</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/ShmsErl" className="github" target="_blank">
                                    <i><FaGithub/></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/seyhmus-erol/" className="linkedin" target="_blank">
                                    <i><FaLinkedin/></i>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="teampic">
                                    <img src="assets/img/userImages/yagmur.jpg"className="img-fluid" alt ="team1"/>
                                </div>
                                <div className="member-info">
                                    <h4>Yağmur Çurku</h4>
                                    <span>Full Stack Developer</span>
                                    <p>{t("aboutYagmur")}</p>
                                </div>
                                <div className="social">
                                <Link to="https://github.com/yagmurcurku" className="github" target="_blank">
                                    <i><FaGithub/></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/yagmurcurku/" className="linkedin" target="_blank">
                                    <i><FaLinkedin/></i>
                                </Link>
                                </div>
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
