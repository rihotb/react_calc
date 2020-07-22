import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <BaseButton
      text={buttonValue}
      color={"orange"}
      onClick={() => handleSetCalcFunction(buttonValue)}
    />
  );
};

export default FunctionButton;
