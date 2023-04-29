import React from "react";

const Currying = () => {
  const sum = (b) => {
    return function (c) {
      var etc = "abc";
      return function (d) {
        alert(etc);
        return b + c + d;
      };
    };
  };

  const s = sum(1)(1)(5);
  console.log(s);

  const sum1 = (x) => (y) => y !== undefined ? sum1(x + y) : x;
  const sm = sum1(1)(1)(5)(13)();
  console.log(sm);
  return <div></div>;
};

export default Currying;
