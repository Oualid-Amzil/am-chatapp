import React from "react";
import heroimg from "../images/HeroImg-min.png";
import dotsimg from "../images/dotsimg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection__left">
        <div className="herosection__title">
          <h1>Have your best call</h1>
          <p>Fast, easy & unlimited conference call services.</p>
        </div>
        <div className="herosection__buttons">
          <button className="herosection__firstbutton ">Try it Free</button>
          <button className="herosection__secondbutton">Get a Demo</button>
        </div>
      </div>
      <div className="herosection__right">
        <img src={heroimg} alt="hero img" />
      </div>
      <div className="herosection__label">
        <div className="dots__container">
          <img src={dotsimg} alt="dots" />
          <p>Read how we helped Asana with their remote meetings</p>
        </div>
        <div className="arrow">
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
