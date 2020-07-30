import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const NumberButton = ({ buttonValue }) => {
  const { useNumberGroup } = useContext(NumberContext);

  //数値ボタンが押されたら実行される
  const handleChange = () => {
    //numberにbuttonValueが入る
    useNumberGroup.set(buttonValue);
  };

  return <BaseButton text={buttonValue} onClick={handleChange} />;
};

export default NumberButton;
