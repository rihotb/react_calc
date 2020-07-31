import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import styled from "styled-components";

const Root = styled.div`
  font-size: 46px;
  height: 60px;
`;

const Display = () => {
  const { useNumberGroup } = useContext(NumberContext);
  const { storedNumber, sumNumber } = useNumberGroup;
  // let { number, storedNumber } = useContext(NumberContext);
  // number = number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  // storedNumber = storedNumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  // return <h2>{!number.length && !storedNumber ? "0" : number || storedNumber}</h2>;
  return <Root>{storedNumber || sumNumber || 0}</Root>;
};

export default Display;
