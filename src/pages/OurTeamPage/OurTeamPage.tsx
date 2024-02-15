import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Footer } from "../../components";

import { useTranslation } from "react-i18next";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./ourteampage.css";

import OurTeam from "../../models/responses/ourTeams/GetOurTeams";

import OurTeamService from "../../services/OurTeamService";

type Props = {}

const OurTeamPage = (props: Props) => {
    const { t } = useTranslation();
    
    const [teamMembers, setTeamMembers] = useState<OurTeam[]>([]);

    const getOurTeam = async () => {
        const response = await OurTeamService.getAll();
        setTeamMembers(response.data.data);
      };
    
    useEffect(() => {
      
      getOurTeam();
    }, []);
    
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
          {teamMembers.map((member, index) => (
            <div className="col-lg-6 mt-4" key={index}>
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img src={member.imageUrl} className="img-fluid" alt="team" />
                </div>
                <div className="member-info">
                  <h4>{member.name} {member.surname}</h4>
                  <span>{member.position}</span>
                  <p>{t(member.description)}</p>
                </div>
                <div className="social">
                  <Link to={member.github} className="github" target="_blank">
                    <i><FaGithub/></i>
                  </Link>
                  <Link to={member.linkedin} className="linkedin" target="_blank">
                    <i><FaLinkedin/></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

                </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default OurTeamPage;
