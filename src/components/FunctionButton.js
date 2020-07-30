import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

/**
 * 演算子ボタン
 */
const FunctionButton = ({ buttonValue }) => {
  const { useOperatorGroup } = useContext(NumberContext);
  const { isOperatorActived, operator } = useOperatorGroup;

  //演算子ボタンが押されたら実行される
  const handleChange = () => {
    useOperatorGroup.set(buttonValue);
  };

  return (
    <BaseButton
      text={buttonValue}
      //演算子ボタンが押されている　＆＆　buttonValueとoperatorの値が同じ
      color={isOperatorActived && buttonValue === operator ? "white" : "orange"}
      fontColor={isOperatorActived && buttonValue === operator ? "orange" : "white"}
      onClick={handleChange}
    />
  );
};

export default FunctionButton;
