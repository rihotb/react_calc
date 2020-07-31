import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import BaseButton from "./BaseButton";

const NegativeButton = () => {
  // const { handleToggleNegative } = useContext(NumberContext);
  return <BaseButton text="+/-" color="#A9A9A9" fontColor="black" onClick={() => console.log(`negative`)} />;
};

export default NegativeButton;
