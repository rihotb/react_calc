import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";
import calcOperator from "../consts/calcOperator";

const EqualButton = () => {
  const { useNumberGroup, useOperatorGroup } = useContext(NumberContext);

  const handleChange = () => {
    useNumberGroup.calc(calcOperator[useOperatorGroup.beforeOperator]);
    useOperatorGroup.setEqual("=");
    useNumberGroup.setUnNumberFlg();
  };

  return <BaseButton text="=" color={"orange"} onClick={handleChange} />;
};

export default EqualButton;
