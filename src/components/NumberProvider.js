import React, { useState, useEffect } from "react";
import { useNumber } from "../hooks/useNumber";
import { useOperator } from "../hooks/useOperator";
import { useInputArray } from "../hooks/useInputArray";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");
  const [clearType, setClearType] = useState("AC");
  const [operatorColor, setOperatorColor] = useState("orange");
  const [operatorFontColor, setOperatorFontColor] = useState("white");
  //演算子ボタンが押されているかどうか
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  //演算子（+-*/)の値
  const [operator, setOperator] = useState("");

  const useNumberGroup = useNumber();
  const useOperatorGroup = useOperator();
  const useInputArrayGroup = useInputArray();

  //初回の描画と第二引数（operator）が更新された時に実行される
  useEffect(() => {
    if (number && operator) {
      calculation();
    }
  }, [operator]);

  // 数値が選択されたときに動く
  useEffect(() => {
    if (useNumberGroup.isNumberActived) {
      // 演算子フラグをfalseにしてあげる処理をする
      useOperatorGroup.setUnOperatorFlg();
    }
  }, [useNumberGroup.isNumberActived]);

  // 演算子が選択されたときに動く
  useEffect(() => {
    if (useOperatorGroup.isOperatorActived) {
      // 数値フラグをfalseにしてあげる処理をする
      useNumberGroup.setUnNumberFlg();
    }
  }, [useOperatorGroup.isOperatorActived]);

  useEffect(() => {
    if (useNumberGroup.resultNumber && useOperatorGroup.isOperatorActived) {
      useInputArrayGroup.push(
        useNumberGroup.resultNumber,
        useOperatorGroup.operator
      );
    }
  }, [useNumberGroup.resultNumber, useOperatorGroup.operator]);

  /**
   * 入力された数値を表示する。
   * @param num　数値
   */
  const handleSetDisplayValue = (num) => {
    resetOperatorColor();
    const clearType = "C";
    setClearType(clearType);
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      //numberと入力された数値numを文字列結合する。頭が0から始まれば空白にする。
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
   * @param type 今回クリックされた演算子
   */
  const handleSetCalcFunction = (type) => {
    //演算子がすでにセットされているとき
    if (functionType) {
      //連続して演算子ボタンを押したときは、functionTypeに今回クリックされた演算子を入れてリターン（計算しない）
      //数値ボタンを押してから演算子ボタンを押したなら、numberは入っているはず
      if (!number) {
        setFunctionType(type);
        return;
      }
      //storedNumberとnumberを前回セットした演算子(functionType)で計算する→その結果をstoredNumberにいれる
      calculation();
      //ここでnumberを空文字にしないと、numberの値と次にクリックした数値ボタンの値がくっついてしまう
      //1+2+3なら23, 1+4+7なら47になる
      setNumber("");
      //今回クリックされた演算子(type)をFunctionTypeにセットする
      setFunctionType(type);
    } else {
      //演算子がまだセットされていない（初めて演算子ボタンをクリックした）とき
      if (number) {
        //今回クリックされた演算子をfunctionTypeとしてセット
        setFunctionType(type);
        //numberの値をstoredNumberに入れて、numberを空文字にリセット
        handleSetStoredValue();
      }
      if (storedNumber) {
        //今回クリックされた演算子をfunctionTypeとしてセット
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
        useNumberGroup,
        useOperatorGroup,
        useInputArrayGroup,
        functionType,
        clearType,
        operatorColor,
        operatorFontColor,
        isOperatorClicked,
        operator,
        setIsOperatorClicked,
        setOperator,
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
