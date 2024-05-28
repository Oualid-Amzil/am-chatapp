import React from "react";
import detailsimg from "../images/DetailsImg.png";
import { FaStar } from "react-icons/fa6";
import "./DetailsSection.css";

const DetailsSection = () => {
  return (
    <div className="detailssection">
      <div className="detailssection__left">
        <img src={detailsimg} alt="details img" />
      </div>
      <div className="detailssection__right">
        <h1>Perfect Solution For Small Businesses</h1>
        <p>Fast, easy & unlimited conference call services.</p>
        <div className="detailssection__buttons">
          <button className="button__left">Try it Free</button>
          <button className="button__right">Get a Demo</button>
        </div>
        <div className="detailssection__right--bottom">
          <div className="detailssection__right--line" />
          <div className="detailssection__bottom--content">
            <div className="star__icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              <span>3.6 million calls</span> completed with a 96.8% 5 star
              rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
