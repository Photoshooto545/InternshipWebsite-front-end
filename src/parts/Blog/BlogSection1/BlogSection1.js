import React from "react";
import styles from "./BlogSection1.module.css";
import img from "./image/Rectangle 1.png";
import right from "./image/right-arrow (1) 1.png";
import left from "./image/right-arrow (1) 2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel'


const BlogSection1=()=>{
    const nextIcon= <span className="glyphicon glyphicon-glass"><img src={right} /></span>;
    const prevIcon= <span className="glyphicon glyphicon-glass"><img src={left} /></span>;
    return(
        <div className={styles.BlogSliderContainer}>
            
            <Carousel nextIcon ={nextIcon} prevIcon={prevIcon} indicatorLabels={[1,2,3]}>
            
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:"84vh"}}
      src={img}
      alt="First slide"
    />
    <Carousel.Caption style={{top:"16.25rem"}}>
      <h3>LoremIpsum</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <div className={styles.searchbar}>
      <input type="search" placeholder="Search Category " />
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:"84vh"}}
      src={img}
      alt="Second slide"
    />

    <Carousel.Caption style={{top:"16.25rem"}}>
      <h3>LoremIpsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.searchbar}>
      <input type="search" placeholder="Search Category " />
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:"84vh"}}
      src={img}
      alt="Third slide"
    />

    <Carousel.Caption style={{top:"16.25rem"}}>
      <h3>LoremIpsum</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <div className={styles.searchbar}>
      <input type="search" placeholder="Search Category " />
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );

};

export default BlogSection1;