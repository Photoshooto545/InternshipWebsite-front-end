import React from "react";

import camGalImg from "../../../assets/images/camGal.jpeg";

import "./Section5.css";

const Section5 = () => {
  return (
    <section className="homeSection5">
      <h1 className="homeSection5Title">
        Few More Words About Photoshooto..!!
      </h1>
      <div className="homeSection5CardsContainer">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="testimonial_section">
              <div class="testimonial_img">
                <img src={camGalImg} />
              </div>
              <div class="testimonial_content">
                <h4>Neha Agrawal</h4>
                <h3>Web designer</h3>
              </div>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="testimonial_section">
              <div class="testimonial_img">
                <img src={camGalImg} />
              </div>
              <div class="testimonial_content">
                <h4>Neha Agrawal</h4>
                <h3>Web designer</h3>
              </div>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="testimonial_section">
              <div class="testimonial_img">
                <img src={camGalImg} />
              </div>
              <div class="testimonial_content">
                <h4>Neha Agrawal</h4>
                <h3>Web designer</h3>
              </div>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="homeSection5button">
        <i class="fa fa-chevron-circle-left"></i>
        <label for="two" class="active two"></label>
        <label for="three" class="three"></label>
        <label for="four" class="four"></label>
        <label for="five" class="five"></label>
        <i class="fa fa-chevron-circle-right"></i>
      </div>
    </section>
  );
};

export default Section5;
