import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return <BaseButton text="=" color={"orange"} onClick={() => doMath()} />;
};

export default EqualButton;
