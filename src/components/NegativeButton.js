import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const NegativeButton = () => {
  const { toggleNegative } = useContext(NumberContext);

  const handleChange = () => {
    toggleNegative();
  };

  return (
    <BaseButton
      text="+/-"
      color="#A9A9A9"
      fontColor="black"
      onClick={handleChange}
    />
  );
};

export default NegativeButton;
