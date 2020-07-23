import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const Display = () => {
  const { number, storedNumber } = useContext(NumberContext);
  if (storedNumber === "Infinity") {
    return <h2>エラー</h2>;
  }
  return (
    <h2>{!number.length && !storedNumber ? "0" : number || storedNumber}</h2>
  );
};

export default Display;
