import React from 'react'
import Image1 from "./image/img1.png";
import Image2 from "./image/img2.png";
import "./AboutSection4.css";
// import styles from "./AboutSection4.module.css";
// import Card from "react-bootstrap/Card";
const AboutSection4 = () => {
   
    return (
        <div>
    <section className="container">
      <h1 className={`text-center my-3 meetaurleaders`}>Meet Our Leaders</h1>
      <div className="info">
        <div className="row meetouter">
          <div className="col-4 ceofounderpara">
            <p className="wwd-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi amet beatae fugit totam mollitia! Nulla, esse eaque
              excepturi repellat qui maiores voluptate aliquam doloribus dolores
              ratione, odit repudiandae blanditiis.
            </p>
          </div>
          <div className="col ceofounderpart">
            <img
              className="pic rounded-circle"
              src={Image1}
              alt=""
              width="150px"
              height="150px"
            />
            <div className="row text-center ">
              <div className="col-12  ceoname">Siddaya</div>
              <div className="col-12 directorouterhead directorheading">CEO & Founder</div>
            </div>
          </div>
          <div className="col directorpart">
            <img
              className="pic rounded-circle"
              src={Image2}
              alt=""
              width="150px"
              height="150px"
            />
            <div className="row text-center ">
              <div className="col-12 ceoname">B.S.Ramamurty</div>
              <div className="col-12 "><h1 className="directorheading">Director</h1></div>
            </div>
          </div>
          <div className="col-4 directorpara">
            <p className="wwd-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus iusto, ab veritatis distinctio nostrum consequuntur
              nulla suscipit! Quibusdam perspiciatis obcaecati, sequi dicta
              impedit accusantium! Eaque veniam nobis laboriosam tempore ut.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="container">
      <h1 className="frequentlyasked">Frequently Asked Question</h1>

      <div className="accordion accordianbox">
        <div className="accordion-item" id="q1">
          <a className="accordion-link" href="#q1">
            What is Internship?
            <i className="icon ion-md-add"></i>
            <i className="icon ion-md-remove"></i>
          </a>
          <div className="faqanswer">
            <p className="faqanswerpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </p>
          </div>
        </div>
        {/* <hr className="hrtagstyle"></hr> */}

        <div className="hrtagstyle"></div>
        <div className="accordion-item" id="q2">
          <a className="accordion-link" href="#q2">
            What is ui/ux?
            <i className="icon ion-md-add"></i>
            <i className="icon ion-md-remove"></i>
          </a>
          <div className="faqanswer">
            <p className="faqanswerpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </p>
          </div>
        </div>
        <div className="hrtagstyle"></div>

        <div className="accordion-item" id="q3">
          <a className="accordion-link" href="#q3">
            Is this internship is unpaid
            <i className="icon ion-md-add"></i>
            <i className="icon ion-md-remove"></i>
          </a>
          <div className="faqanswer">
            <p className="faqanswerpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </p>
          </div>
        </div>
        <div className="hrtagstyle"></div>


        <div className="accordion-item" id="q4">
          <a className="accordion-link" href="#q4">
            Differnert Internship fields?
            <i className="icon ion-md-add"></i>
            <i className="icon ion-md-remove"></i>
          </a>
          <div className="faqanswer">
            <p className="faqanswerpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </p>
          </div>
        </div>
        <div className="hrtagstyle"></div>


        <div className="accordion-item" id="q5">
          <a className="accordion-link" href="#q5">
            What is Internship?
            <i className="icon ion-md-add"></i>
            <i className="icon ion-md-remove"></i>
          </a>
          <div className="faqanswer">
            <p className="faqanswerpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default AboutSection4
