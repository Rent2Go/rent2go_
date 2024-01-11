import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./search.css";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 className="title">Which vehicle you are looking for ? </h3>

        <div className="searchDiv grid">
          <input type="text" placeholder="Type" />
          <input type="number" placeholder="Year" />
          <input type="text" placeholder="Model" />
          <input type="number" placeholder="Price" />
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
