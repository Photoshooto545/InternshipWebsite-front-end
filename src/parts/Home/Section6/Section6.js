import React from "react";
import "./Section6.css";
import mobImg from "./img/phoneimg.png";
import gpImg from "./img/logo.png";
import playstore from "./img/playstore.png";

const Section6 = () => {
  return (
      <div className="homeSection6Container">
          <div className="homeSection6Col">
              <img className="mobileimage" data-tilt src={mobImg} alt="mobile" />
              <img className="logoimageinsidethephone" data-tilt src={gpImg} alt="mobile" />
          </div>
          <div className="col download-link-box">
            <div className="detail-view">
              <h3 className="downloadappheading">Download Our App</h3>
              <p className="downloadapplines">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className="download-app">
                <img className="googleplayestoreimage" data-tilt src={playstore} alt="" />
                <h4 className="googleplay">Google Play</h4>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Section6;
