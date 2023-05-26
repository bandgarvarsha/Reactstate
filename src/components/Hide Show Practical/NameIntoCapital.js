import React, { useState } from "react";
import classes from "../Card.module.css";

const NameIntoCapital = () => {
  const [names, setNames] = useState(["varsha", "vijay", "shlok", "onkar"]);

  const clickOnName = (name) => {
    let Filteredata = [];

    Filteredata = names.map((nm) => {
      // var newName =
      //   nm.toLowerCase() === name ? nm.toUpperCase() : nm.toLowerCase();
      // return newName;
      if (nm.toLowerCase() === name) {
        let newName = nm.toUpperCase();
        return newName;
      } else if (nm.toUpperCase() === name) {
        let newName = nm.toLowerCase();
        return newName;
      }
      return nm;
    });

    setNames(Filteredata);
  };

  return (
    <div>
      <div className={classes.card}>
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
    </div>
  );
};

export default NameIntoCapital;
