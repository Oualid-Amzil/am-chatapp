import React from "react";
import infoimg from "../images/InfoImg.png";
import androidic from "../images/android.png";
import calenderic from "../images/thirty-one.png";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="infosection">
      <div className="infosection__top">
        <div className="infosection__line" />
        <h2>Instant Conference Calls</h2>
        <p>
          Sollicitudin integer ornare ullamcorper vulputate facilisis nisi.
          Vestibulum commodo vestibulum erat enim. Adipiscing duis id risus
          egestas molestie pellentesque blandit tortor. Fermentum volutpat purus
          vitae ut volutpat bibendum vulputate ut. Dictum integer morbi sit orci
          proin.
        </p>
        <button>Learn more</button>
      </div>
      <div className="infosection__middle">
        <img src={infoimg} alt="info img" />
      </div>
      <div className="infosection__bottom">
        <div className="icon__container">
          <img src={calenderic} alt="androi icon" />
          <p>Conference any time - instantly or schedule in advance </p>
        </div>
        <div className="icon__container">
          <img src={androidic} alt="androi icon" />
          <p>Fully cross - device experience from anywhere in the world</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
