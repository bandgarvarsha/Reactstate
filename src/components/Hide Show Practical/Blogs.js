import React from "react";
import classes from "../Card.module.css";

const Blogs = (props) => {
  const { blogs, show } = props;
  return (
    <div>
      <div className={classes.card}>
        {show &&
          blogs.map((blog) => (
            <ul className={classes.card} key={blog.id}>
              <ul>{blog.name}</ul>
              <ul>{blog.desc}</ul>
              <ul>{blog.like}</ul>
              <button onClick={props.onClickLike(blog.id)}>Like</button>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
