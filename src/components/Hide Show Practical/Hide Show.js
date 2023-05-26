import React, { useState } from "react";
import classes from "../Card.module.css";
import { useForm } from "react-hook-form";
// import Blogs from "./Blogs";

const HideShow = () => {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([
    { id: 1, name: "Educational blogs", desc: "Education", like: 0 },
    { id: 2, name: "Marketing blogs", desc: "Marketing", like: 0 },
    { id: 3, name: "Technology blogs", desc: "Technology", like: 0 },
  ]);

  const { register, handleSubmit } = useForm();

  const onClickButton = () => {
    console.log(show);
    setShow(!show);
  };

  // manually
  const clickOnObj = () => {
    let id = blogs.length + 1;
    let newObj = [
      { id: id, name: "Socialogical blogs ", desc: "Social", like: 0 },
      { id: id, name: "Scientific blogs ", desc: "Science", like: 0 },
    ];
    setBlogs([...blogs, newObj[1]]);
  };

  // dynamic
  const onSubmit = (data) => {
    let id = blogs.length + 1;
    let blog = { id: id, name: data.name, desc: data.desc };
    setBlogs([...blogs, blog]);
    console.log(data.name);
  };

  const onClickLike = (pos, id) => {
    blogs[pos].like = blogs[pos].like + 1;
    console.log(blogs);
    setBlogs([...blogs]);

    // const blogList = blogs.map((blog) => {
    //   if (id === blog.id) {
    //     blog.like = blog.like + 1;
    //     return blog;
    //   }
    //   return blog;
    // });
    // setBlogs(blogList);

    // const blogList = [...blogs];
    // let blog = blogList.find((blog) => id === blog.id);
    // blog.like = blog.like + 1;
    // blogList[pos] = blog;
    // console.log(blog);
    // console.log(blogList);
    // setBlogs(blogList);
  };

  return (
    <>
      <div className={classes.btn}>
        <button onClick={onClickButton}> {show ? "Hide" : "Show"}</button>
      </div>
      <button onClick={clickOnObj}>Add</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input {...register("desc")} />

        <input type="submit" />
      </form>
      {/*  using props <Blogs blogs={blogs} show={show} onClickLike={onClickLike} /> */}
      <div className={classes.card}>
        {show &&
          blogs.map((blog, pos) => (
            <ul className={classes.card} key={blog.id}>
              <ul>{blog.name}</ul>
              <ul>{blog.desc}</ul>
              <ul>{blog.like}</ul>
              <button onClick={() => onClickLike(pos, blog.id)}>Like</button>
            </ul>
          ))}
      </div>
    </>
  );
};

export default HideShow;
