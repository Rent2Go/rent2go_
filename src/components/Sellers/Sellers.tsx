import React from "react";
import "./seller.css";
import { useTranslation } from "react-i18next";


type Props = {};

const Sellers = (props: Props) => {
  const {t} = useTranslation();

  return (
    <div className="sellers section">
        <div className="secHeading grid">
          <h3 className="secTitle" data-aos="fade-up" data-aos-duration="1000">{t("exploreTopSellersInTown")}</h3>

          <p data-aos="fade-up" data-aos-duration="1000">{t("josephSamuelGirard")}</p>
        </div>
      <div className="secContainer container">
      
        <div className="sellersContainer  grid">
          <div className="singleSeller flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="imgDiv flex">
              <img src="assets/img/brandLogos/toyota.png" alt="sellerImg" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              
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
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
