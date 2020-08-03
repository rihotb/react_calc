import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const EqualButton = () => {
  const {
    useNumberGroup,
    useOperatorGroup,
    equalClear,
    fix,
    fixedOperator,
  } = useContext(NumberContext);

  const handleChange = () => {
    fix();
    //fixedOperatorがなぜかundefined
    console.log(fixedOperator);
    useNumberGroup.calc(fixedOperator);
    equalClear();
  };

  return <BaseButton text="=" color={"orange"} onClick={handleChange} />;
};

export default EqualButton;
