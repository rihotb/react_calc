import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const FunctionButton = ({ buttonValue }) => {
  const {
    handleSetCalcFunction,
    operatorColor,
    operatorFontColor,
  } = useContext(NumberContext);

  return (
    <BaseButton
      text={buttonValue}
      color={operatorColor}
      fontColor={operatorFontColor}
      onClick={() => handleSetCalcFunction(buttonValue)}
    />
  );
};

export default FunctionButton;
