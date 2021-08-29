import React from "react";
import styles from "./BlogSection3.module.css";
import BlogCard from "../../../components/BlogCard/BlogCard"
// import "./ContactPage.css";

const BlogSection3 = () => {
  return (<div className={styles.BlogBlogContainer}>
      <div className={styles.blogbox1}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={styles.blogbox2}></div>
      <div></div>
  </div>);
};

export default BlogSection3;