import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const AllClearButton = () => {
  const { allClear } = useContext(NumberContext);

  const handleClear = () => {
    allClear();
  };

  return (
    <BaseButton
      text={`AC`}
      color="#A9A9A9"
      fontColor="black"
      onClick={handleClear}
    />
  );
};

export default AllClearButton;
