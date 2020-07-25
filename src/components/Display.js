import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const Display = () => {
  let { number, storedNumber } = useContext(NumberContext);
  number = number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  storedNumber = storedNumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  if (storedNumber === "Infinity") {
    return <h2>エラー</h2>;
  }
  return (
    <h2>{!number.length && !storedNumber ? "0" : number || storedNumber}</h2>
  );
};

export default Display;
