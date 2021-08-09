import React from "react";

import "./Section6.css";
import mobImg from "./img/pho.png";
import gpImg from "./img/gp.png";

const Section6 = () => {
  return (
    <section class="homeSection6">
      <div class="homeSection6Container">
        <div class="homeSection6Row">
          <div class="homeSection6Col">
            <div class="mobile-view">
              <img data-tilt src={mobImg} alt="mobile" />
            </div>
          </div>
          <div class="col download-link-box">
            <div class="detail-view">
              <h3>Download Our App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div class="download-app">
                <img data-tilt src={gpImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
