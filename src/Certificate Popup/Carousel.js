import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./SliderData";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ImageSlider() {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="carousel">
            <div className="carouselInner">
                <div
                    className="left"
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} size="3x" />
                </div>
                <div className="mybox">
                    <img src={images[currImg].img} />
                </div>
                <div
                    className="right"
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} size="3x" />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
