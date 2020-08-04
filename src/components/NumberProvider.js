import React, { useEffect } from "react";
import { useNumber } from "../hooks/useNumber";
import { useOperator } from "../hooks/useOperator";
import calcOperator from "../consts/calcOperator";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const useNumberGroup = useNumber();
  const useOperatorGroup = useOperator();

  // 数値が選択されたときに動く
  useEffect(() => {
    if (useNumberGroup.isNumberActived) {
      // 演算子フラグをfalseにしてあげる処理をする
      useOperatorGroup.setUnOperatorFlg();
    }
  }, [useNumberGroup.isNumberActived]);

  /**
   * 演算子ボタン押下時に動作する
   * - 連続した演算子のクリックは禁止とする
   */
  useEffect(() => {
    if (useOperatorGroup.isOperatorClicked) {
      useNumberGroup.setUnNumberFlg();
      useNumberGroup.setCalculatedFlg();
      // 計算処理を実行
      useNumberGroup.calc(calcOperator[useOperatorGroup.beforeOperator]);
      useOperatorGroup.setClickFinishedFlg();
    }
  }, [useOperatorGroup.isOperatorClicked, useOperatorGroup.beforeOperator]);

  /**
   * Cボタン押したら動く
   */
  const clear = () => {
    if (useOperatorGroup.operator === "=") {
      allClear();
    } else if (useNumberGroup.isNumberActived) {
      numberClear();
    } else {
      operatorClear();
    }
  };

  /**
   * ACボタン押したら動く
   */
  const allClear = () => {
    useNumberGroup.allClear();
    useOperatorGroup.allClear();
  };

  /**
   * 数値を押してからCボタンが押されたら動く
   */
  const numberClear = () => {
    useNumberGroup.numberClear();
    useNumberGroup.setUnNumberFlg();
    //２回目以降のときの処理 1+1などの時
    if (useOperatorGroup.operator) {
      useOperatorGroup.setOperatorFlg();
    }
  };

  /**
   * 演算子を押してからCボタンが押されたら動く
   */
  const operatorClear = () => {
    useNumberGroup.numberClear();
  };

  /**
   * Equalボタン押したら動く
   */
  const equalClear = () => {
    useOperatorGroup.allClear();
  };

  /**
   * Percentボタン押したら動く
   */
  const percentNumber = () => {
    useNumberGroup.percent();
  };

  /**
   *  +/-ボタンを押したら動く
   */
  const toggleNegative = () => {
    useNumberGroup.toggleNegative();
  };

  return (
    <NumberContext.Provider
      value={{
        useNumberGroup,
        useOperatorGroup,
        allClear,
        equalClear,
        clear,
        percentNumber,
        toggleNegative,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
