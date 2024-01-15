import React, {useEffect} from "react";
import Aos from "aos"
import 'aos/dist/aos.css';
import "./homepage.css";
import homeImage from "../../assets/img/carModels/toyota-corolla-beyaz.png"

type Props = {};



const Homepage = (props: Props) => {
  useEffect(() => {
    Aos.init({ duration: 3000,offset:20 }); 
  }, []);
  return (
    <div className="home">
      <div className="secContainer">
        <div  data-aos="fade-up" className="homeText">
          <span className="homeSpan">Meet your new Car</span>
          <h1 className="homeTitle" >Honda Civic Type R</h1>
          <div className="btns flex">
            <button type="button"  data-aos="fade-right" className="btn">More Details</button>
            <button type="button"  data-aos="fade-left"className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
        <div className="homeImage"  data-aos="fade-down-right">
          <img src={homeImage} alt="homeImage"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
