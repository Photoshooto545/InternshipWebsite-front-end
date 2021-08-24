import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/img/Rectangle 422.png";
import heart from "../../assets/images/img/heart (1) 1.png"
import comment from "../../assets/images/img/comment (2) 1.png"
import view from "../../assets/images/img/view 1.png"
import styles from "./BlogCard.module.css";

const BlogCard = () => {
   return (
   < div className={styles.cardContainer}>   
   <div className={styles.card}>
      <div className={styles.image}><img src={img} alt="" /></div>
      <div className={styles.status}>
         <li className={styles.type}>PHOTOGRAPHY</li>
         <li className={styles.date}>Nov-17-2020</li>
         <li className={styles.readtime}>12 min read</li>
      </div>
      <div className={styles.totalcontent}>
         <h1 className={styles.heading}>LoremIpsum</h1>
         <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and lorem typesetting industry.' <Link to="/">Read More</Link></p>
      </div>
      <div className={styles.data}>
         <div className={styles.like}>
            <img src={heart} alt="" />
            <p className={styles.text}>100</p>
         </div>
         <div className={styles.comment}>
            <img src={comment} alt="" />
            <p className={styles.text}>5</p>
         </div>
         <div className={styles.view}>
            <img src={view} alt="" />
            <p className={styles.text}>1000</p>
         </div>
      </div>
   </div>
   </div>
   );
};

export default BlogCard;