import React, { useState } from "react";
import HideShow from "./Hide Show";
import { useForm } from "react-hook-form";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setShow(!show);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {!show && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="username" {...register("username")} />
          <input type="password" {...register("password")} />

          <input type="submit" {...register("onSubmit")} />
          {/* <button onClick={onSubmit}> {show ? "Hide" : "Show"}</button> */}
        </form>
      )}
      {show && <HideShow />}
    </div>
  );
};

export default HomePage;
