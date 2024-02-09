import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../../Language/language";
import "./search.css";

type Props = {};

const Search = (props: Props) => {
  const {t} = useTranslation();
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 className="title"  data-aos="fade-up-right" >{t("whichVehicleYouAreLookingFor")} </h3>

        <div className="searchDiv grid">
          <input type="text" placeholder="Type"  data-aos="fade-right" />
          <input type="number" placeholder="Year"  data-aos="fade-left" />
          <input type="text" placeholder="Model"  data-aos="fade-right" />
          <input type="number" placeholder="Price"  data-aos="fade-left" />
          <button className="btn primaryBtn flex"  data-aos="fade-up">
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
