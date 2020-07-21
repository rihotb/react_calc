import React from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const number = "0";
  return (
    <NumberContext.Provider value={{ number }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
