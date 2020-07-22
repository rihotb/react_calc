import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const PercentButton = () => {
  const { handlePercentButton } = useContext(NumberContext);
  return (
    <BaseButton
      text="%"
      color="#A9A9A9"
      fontColor="black"
      onClick={() => handlePercentButton()}
    />
  );
};

export default PercentButton;
