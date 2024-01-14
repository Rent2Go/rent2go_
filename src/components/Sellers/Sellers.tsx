import React from "react";
import "./seller.css";

import sellerAudi from "../../assets/img/brandLogos/audi.png";
import sellerToyota from "../../assets/img/brandLogos/toyota.png";
import sellerRenault from "../../assets/img/brandLogos/renault.png";
import sellerVolkswagen from "../../assets/img/brandLogos/volkswagen.png";
import sellerMercedes from "../../assets/img/brandLogos/mercedes.png";

type Props = {};

const Sellers = (props: Props) => {
  return (
    <div className="sellers section">
        <div className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>

          <p>
            Joseph Samuel Girard holds the Guiness World Record for being the
            greatest salesman int the world
          </p>
        </div>
      <div className="secContainer container">
      
        <div className="sellersContainer  grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerToyota} alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer grid ">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerAudi} alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Audi</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer  grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerRenault} alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Renault</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
        <div className="sellersContainer  grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerMercedes} alt="sellerImg" className="img" />
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
