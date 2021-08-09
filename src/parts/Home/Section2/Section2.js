import React from "react";
import { Link } from "react-router-dom";

import "./Section2.css";
import lappyImg from "../../../assets/images/lappy.png";

const Section2 = () => {
  return (
    <section className="homeSection2">
      <div className="section2Row">
        <div className="section2Col">
          <img src={lappyImg} alt="img" />
        </div>
        <div className="section2Col">
          <h1>What is the internship program?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            architecto nulla dignissimos distinctio eligendi blanditiis cum
            similique quis esse! Iure pariatur quisquam sit culpa, voluptas id.
            Sunt quas dolorem mollitia.
          </p>
          <Link to="#">Read more</Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
