import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const PercentButton = () => {
  const { percentNumber } = useContext(NumberContext);

  const handleChange = () => {
    percentNumber();
  };

  return (
    <BaseButton
      text="%"
      color="#A9A9A9"
      fontColor="black"
      onClick={handleChange}
    />
  );
};

export default PercentButton;
