import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <BaseButton
      text="C"
      color="#A9A9A9"
      fontColor="black"
      onClick={() => handleClearValue()}
    />
  );
};

export default ClearButton;
