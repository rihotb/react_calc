import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const FunctionButton = ({ buttonValue }) => {
  const {
    operator,
    isOperatorClicked,
    setOperator,
    setIsOperatorClicked,
  } = useContext(NumberContext);

  //演算子ボタンが押されたら実行される
  const handleChange = () => {
    //演算子ボタンが押されている
    setIsOperatorClicked(true);
    //operatorにbuttonValueが入る。（+ボタンが押されたらoperatorに+が入る）
    setOperator(buttonValue);
  };

  return (
    <BaseButton
      text={buttonValue}
      //演算子ボタンが押されている　＆＆　buttonValueとoperatorの値が同じ
      color={isOperatorClicked && buttonValue === operator ? "white" : "orange"}
      fontColor={
        isOperatorClicked && buttonValue === operator ? "orange" : "white"
      }
      onClick={handleChange}
    />
  );
};

export default FunctionButton;
