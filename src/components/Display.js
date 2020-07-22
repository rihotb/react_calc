import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <h2>{!number.length && !storedNumber ? "0" : number || storedNumber}</h2>
  );
};

export default Display;
