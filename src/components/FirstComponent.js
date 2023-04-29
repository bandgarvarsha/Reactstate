import React, { useState } from "react";
import classes from "./Card.module.css";

const BLOGS = [
  { id: 1, name: "Educational blogs", desc: "Blog 1" },
  { id: 2, name: "Marketing blogs", desc: "Blog 2" },
  { id: 3, name: "Technology blogs", desc: "Blog 3" },
];

const FirstComponent = () => {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState(BLOGS);
  const [names, setNames] = useState(["varsha", "vijay", "shlok"]);

  const onClickButton = () => {
    setShow(!show);
  };

  console.log("state:", names);
  const clickOnName = (name) => {
    let Filteredata = [];
    Filteredata = names.map((nm) => {
      if (nm === name) {
        let name = nm.toUpperCase();
        return name;
      } else {
        return nm;
      }
    });
    setNames(Filteredata);
  };

  return (
    <>
      <button onClick={onClickButton}> {show ? "Hide" : "Show"}</button>
      {/* <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button> */}

      <div className={classes.card}>
        {show &&
          blogs.map((blog) => (
            <ul className={classes.card} key={blog.id}>
              {blog.name}
              {blog.desc}
            </ul>
          ))}
      </div>
      <h1></h1>
      <div className={classes.card}>
        {}
        {names.map((name) => (
          <ul
            key={name}
            className={classes.card}
            onClick={() => clickOnName(name)}
          >
            {name}
          </ul>
        ))}
      </div>
    </>
  );
};

export default FirstComponent;
