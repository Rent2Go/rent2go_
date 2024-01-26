import React from "react";
import "./seller.css";


type Props = {};

const Sellers = (props: Props) => {
  return (
    <div className="sellers section">
        <div className="secHeading grid">
          <h3 className="secTitle" data-aos="fade-up" data-aos-duration="1000">Explore top sellers in town</h3>

          <p data-aos="fade-up" data-aos-duration="1000">
            Joseph Samuel Girard holds the Guiness World Record for being the
            greatest salesman int the world
          </p>
        </div>
      <div className="secContainer container">
      
        <div className="sellersContainer  grid">
          <div className="singleSeller flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="imgDiv flex">
              <img src="assets/img/brandLogos/toyota.png" alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer grid ">
          <div className="singleSeller flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="imgDiv flex">
              <img src="assets/img/brandLogos/audi.png" alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Audi</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer  grid">
          <div className="singleSeller flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="imgDiv flex">
              <img src="assets/img/brandLogos/renault.png" alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Renault</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer  grid">
          <div className="singleSeller flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="imgDiv flex">
              <img src="assets/img/brandLogos/mercedes.png" alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Mercedes Benz</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
