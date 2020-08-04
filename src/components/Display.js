import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import styled from "styled-components";

const Root = styled.div`
  font-size: 60px;
  font-weight: 300;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Display = () => {
  const { useNumberGroup } = useContext(NumberContext);

  //3桁カンマ区切りにする
  let stored = Number(useNumberGroup.storedNumber).toLocaleString(undefined, {
    //小数点以下が丸められるのを防ぐ
    maximumFractionDigits: 20,
  });
  let sum = Number(useNumberGroup.sumNumber).toLocaleString(undefined, {
    maximumFractionDigits: 20,
  });

  return <Root>{!useNumberGroup.isNumberActived ? sum : stored}</Root>;
};

export default Display;
