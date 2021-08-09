import React from "react";
import { Link } from "react-router-dom";

import "./Section4.css";

import img1 from "./img/1st.jpeg";

const Section4 = () => {
  return (
    <section className="homeSection4">
      <h1 className="homeSection4Title">Blogs</h1>
      <p className="homeSection4Desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem
        doloribus tenetur distinctio quaerat quam dolores fuga, provident alias
        autem?
      </p>

      <div className="homeBlogsCardContainer ">
        <div className="homeBlogsCard">
          <div className="homeBlogCardImg ">
            <img src={img1} alt="blogImg" className="homeBlogImg" />
            <div className="homeBlogImgDots top"></div>
            <div className="homeBlogImgDots right"></div>
            <div className="homeBlogImgDots bottom"></div>
            <div className="homeBlogImgDots left"></div>
          </div>
          <div className="homeBlogCardInfo">
            <p className="homeBlogCardInfoPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              voluptas minima, veritatis assumenda harum aperiam?
            </p>
            <Link to="#" className="homeBlogCardLink">
              Read More
            </Link>
          </div>
        </div>

        <div className="homeBlogsCard">
          <div className="homeBlogCardImg ">
            <img src={img1} alt="blogImg" className="homeBlogImg" />
            <div className="homeBlogImgDots top"></div>
            <div className="homeBlogImgDots right"></div>
            <div className="homeBlogImgDots bottom"></div>
            <div className="homeBlogImgDots left"></div>
          </div>
          <div className="homeBlogCardInfo">
            <p className="homeBlogCardInfoPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              voluptas minima, veritatis assumenda harum aperiam?
            </p>
            <Link to="#" className="homeBlogCardLink">
              Read More
            </Link>
          </div>
        </div>

        <div className="homeBlogsCard">
          <div className="homeBlogCardImg ">
            <img src={img1} alt="blogImg" className="homeBlogImg" />
            <div className="homeBlogImgDots top"></div>
            <div className="homeBlogImgDots right"></div>
            <div className="homeBlogImgDots bottom"></div>
            <div className="homeBlogImgDots left"></div>
          </div>
          <div className="homeBlogCardInfo">
            <p className="homeBlogCardInfoPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              voluptas minima, veritatis assumenda harum aperiam?
            </p>
            <Link to="#" className="homeBlogCardLink">
              Read More
            </Link>
          </div>
        </div>
        <input type="radio" name="dot" id="two" />
        <input type="radio" name="dot" id="three" />
        <input type="radio" name="dot" id="four" />
        <input type="radio" name="dot" id="five" />
      </div>

      <div class="Button">
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

export default Section4;
