import React from "react";

import styles from "./Section7.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

// import "./Section7.css";

const Section7 = () => {
  return (
    <>
      <section class="my-5">
        <div class="container">
          <div class="row">
            <h1 class="my-3">
              <b>Do you like the Internship?</b>
            </h1>
            <div class="col">
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="Name" />
                </div>
              </div>
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="Phone no." />
                </div>
              </div>
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="From" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="E-mail" />
                </div>
              </div>
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="Program" />
                </div>
              </div>
              <div class="row">
                <div class="name">
                  <input type="text" placeholder="To" />
                </div>
              </div>
            </div>
            <div class="col">
              <img data-tilt src="image.png" alt="Loading" width="100%" />
            </div>
            <div class="row">
              <div class="col-8 text-center">
                <button type="button" class="revert-btn">
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="row">
          <div class="col">
            <h1>Subscribe to Newsletter</h1>
            <div class="name mx-auto">
              <input type="text" placeholder="E-mail" />
            </div>
          </div>
          <div class="col text-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Accept all Terms and Conditions
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Accept all Privacy and Policy
              </label>
            </div>
            <button class="revert-btn">Join</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section7;
