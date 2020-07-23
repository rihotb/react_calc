import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const ClearButton = () => {
  const { handleClearValue, clearType } = useContext(NumberContext);
  return (
    <BaseButton
      text={clearType}
      color="#A9A9A9"
      fontColor="black"
      onClick={() => handleClearValue()}
    />
  );
};

export default ClearButton;
