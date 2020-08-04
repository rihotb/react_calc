import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const ClearButton = () => {
  const { clear } = useContext(NumberContext);

  const handleClear = () => {
    clear();
  };

  return (
    <BaseButton
      text={`C`}
      color="#A9A9A9"
      fontColor="black"
      onClick={handleClear}
    />
  );
};

export default ClearButton;
