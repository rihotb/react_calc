import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue, setNumber, setIsNumberClicked } = useContext(
    NumberContext
  );

  //数値ボタンが押されたら実行される
  const handleChange = () => {
    //数値ボタンが押されている
    setIsNumberClicked(true);
    //numberにbuttonValueが入る
    setNumber(buttonValue);
    handleSetDisplayValue(buttonValue);
  };

  return <BaseButton text={buttonValue} onClick={handleChange} />;
};

export default NumberButton;
