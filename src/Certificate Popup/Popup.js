import React from "react";
import './Popup.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from './Carousel';

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                {/* <div> */}
                <span className="close-icon" onClick={props.handleClose}><FontAwesomeIcon icon={faTimes} size="lg" /></span>
                {/* <img src={Certificate} alt="" /> */}
                <ImageSlider />
            </div>
        </div>
    );
};

export default Popup;
