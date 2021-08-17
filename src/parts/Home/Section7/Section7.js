import React from "react";

import "./Section7.css";
import image from "./img/image.png"
const Section7 = () => {
  return (
    <>
    <div className="doyoulikeinternship">
      <div className="leftdoyoulikeinternship">
        <div className="doyoulikeinternshipheading">
          Do you like the Internship
        </div>
        <div className="doyoulikeinternshipinfo">
          <input className="doyoulikeinternshipdetails" type="text" name="name" placeholder="Name"/>
          <input className="doyoulikeinternshipdetails" type="email" name="email" placeholder="E-mail"/>
          <input className="doyoulikeinternshipdetails" type="phone" name="phone" placeholder="Phone no."/>
          <select className="doyoulikeinternshipdetails doyouinternship" name="cars" id="cars">
            <option selected className="doyoulikeinternshipdetails doyouinternship" value="Program Name">Program Name</option>
            <option className="doyoulikeinternshipdetails doyouinternship" value="volvo">Volvo</option>
            <option className="doyoulikeinternshipdetails doyouinternship" value="saab">Saab</option>
            <option className="doyoulikeinternshipdetails doyouinternship" value="opel">Opel</option>
            <option className="doyoulikeinternshipdetails doyouinternship" value="audi">Audi</option>
          </select>
          <input className="doyoulikeinternshipdetails" type="text" name="from" placeholder="From"/>
          <input className="doyoulikeinternshipdetails" type="text" name="to" placeholder="To"/>
        </div>
        <div className="reservebutton">
          <button className="reserveseatbutton">Reserve Seat</button>
        </div>
      </div>
      <div className="rightdoyoulikeinternship">
        <img  className="rightdoyoulikeinternshipimage" src={image} alt="" />
      </div>
    </div>
    <div className="subscribetonewsletter">
      <div className="subscribetonewsletterheading"> Subscribe to Newsletter</div>
      <div className="subscribetonewsletterdetailscontainer">
      <div className="subscribetonewsletteremail"><input className="subscribetonewsletterdetails" type="email" name="email" placeholder="E-mail"/></div>
      <div className="termsandpolicy">
        <label className="main">Accept all Terms and Conditions<input type="checkbox"/><span className="geekmark"></span></label>
        <label className="main">Accept all Privacy and Policy<input type="checkbox"/><span className="geekmark"></span></label>
      </div>
      <div className="subscribetonewsletterjoin"><button className="joinbutton">Join</button></div>
      </div>
    </div>
    </>
  );
};

export default Section7;
