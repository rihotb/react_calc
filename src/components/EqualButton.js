import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const EqualButton = () => {
  const { useNumberGroup, useOperatorGroup } = useContext(NumberContext);

  const handleChange = () => {
    useNumberGroup.calc(useOperatorGroup.beforeOperator);
  };

  return <BaseButton text="=" color={"orange"} onClick={handleChange} />;
};

export default EqualButton;
