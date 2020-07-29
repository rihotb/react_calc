import React, { useState } from "react";
export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");
  const [clearType, setClearType] = useState("AC");
  const [operatorColor, setOperatorColor] = useState("orange");
  const [operatorFontColor, setOperatorFontColor] = useState("white");

  /**
   * 入力された数値を表示する。
   * @param num　数値
   */
  const handleSetDisplayValue = (num) => {
    resetOperatorColor();
    const clearType = "C";
    setClearType(clearType);
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
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
    resetOperatorColor();
    const clearType = "AC";
    setClearType(clearType);
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  /**
   * 入力した数値に0.01をかける。
   */
  const handlePercentButton = () => {
    resetOperatorColor();
    if (number === "") {
      setNumber(`${storedNumber * 0.01}`);
    } else {
      setNumber(`${number * 0.01}`);
    }
  };

  /**
   * 四則演算をする。
   */
  const calculation = () => {
    switch (functionType) {
      case "+":
        setStoredNumber(
          `${
            Math.round(
              `${(parseFloat(storedNumber) + parseFloat(number)) * 1000}`
            ) / 1000
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
      case "×":
        setStoredNumber(
          `${
            Math.round(
              `${parseFloat(storedNumber) * parseFloat(number) * 1000}`
            ) / 1000
          }`
        );
        break;
      case "÷":
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
  };

  /**
   * 演算子をセットする。
   * @param type 演算子
   */
  const handleSetCalcFunction = (type) => {
    //演算子ボタンの色を逆にする(背景：白、文字：オレンジ)
    setOperatorColor("white");
    setOperatorFontColor("orange");
    //functionTypeがすでに存在する場合は、計算してその結果をstoredNumberにいれる
    if (functionType) {
      if (!number) {
        setFunctionType(type);
        return;
      }
      calculation();
      setNumber("");
      setFunctionType(type);
    } else {
      if (number) {
        setFunctionType(type);
        handleSetStoredValue();
      }
      if (storedNumber) {
        setFunctionType(type);
      }
    }
  };

  /**
   * +-を切り替える。
   */
  const handleToggleNegative = () => {
    resetOperatorColor();
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
   * 演算子ボタンの色をリセットする
   */
  const resetOperatorColor = () => {
    if (operatorColor !== "orange") {
      setOperatorColor("orange");
      setOperatorFontColor("white");
    }
  };

  /**
   * 四則演算をしてfunctionTypeをリセットする
   */
  const doMath = () => {
    resetOperatorColor();
    if (number && storedNumber) {
      calculation();
      setNumber("");
      setFunctionType("");
    }
  };

  return (
    <NumberContext.Provider
      value={{
        //管理したい関数や値
        number,
        storedNumber,
        functionType,
        clearType,
        operatorColor,
        operatorFontColor,
        setNumber,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleClearValue,
        handlePercentButton,
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
