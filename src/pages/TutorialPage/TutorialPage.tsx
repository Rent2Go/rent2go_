import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import "./tutorial.css";
type Props = {};

const TutorialPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="tutorial container">
        <div className="secContainer">
          <div className="backGround">
            <div className="videoContainer">
              <div className="row">
                <div className="col-5 offset-1">
                  <div className="row infoContainer">
                    <div className="col-12">
                      <h2>Sitemizi gezmeden önce, videomuzu izlemeye ne dersin ?
                        
                      </h2>
                    </div>
                    <div className="col-12">
                      <Link to="/cars" type="button" className="btn">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 offset-1 iFrameContainer">
                <video className="video"
                 src='https://res.cloudinary.com/dmusx2nmy/video/upload/v1708719991/2024-02-23_23-17-31_s2xrnw.mp4' />
                 
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

export default TutorialPage;
