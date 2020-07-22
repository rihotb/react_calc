import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");

  const handleSetDisplayValue = (num) => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      //0から始まる場合は空白
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  /**
   * 表示された文字列を取得し、別の数字を入力するために保存する。
   */
  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };

  /**
   * 全て0にする。
   */
  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  /**
   * 前回入力した値を削除する。
   */
  const handleBackButton = () => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  /**
   *演算子をセットする。
   * @param type 演算子
   */
  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  /**
   * +-を切り替える。
   */
  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  /**
   * 四則演算をする。
   */
  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) + parseFloat(number)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "*":
          setStoredNumber(
            `${
              Math.round(
                `${parseFloat(storedNumber) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "/":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        default:
          break;
      }
      setNumber("");
    }
  };

  return (
    <NumberContext.Provider
      value={{
        //管理したい関数や値
        number,
        storedNumber,
        functionType,
        setNumber,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleClearValue,
        handleBackButton,
        handleSetCalcFunction,
        handleToggleNegative,
        doMath,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
