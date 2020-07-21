import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  //numberは状態が変わる変数
  const [number, setNumber] = useState("");

  const handleSetDisplayValue = (num) => {
    if (!number.includes(".") || num !== ".") {
      //0から始まる場合は空白
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };
  return (
    <NumberContext.Provider
      value={{
        //以下二つが管理したい関数と値
        handleSetDisplayValue,
        number,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
