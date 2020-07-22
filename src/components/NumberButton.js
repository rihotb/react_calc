import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <BaseButton
      text={buttonValue}
      onClick={() => handleSetDisplayValue(buttonValue)}
    />
  );
};

export default NumberButton;
