import React, { useEffect } from "react";
import { useNumber } from "../hooks/useNumber";
import { useOperator } from "../hooks/useOperator";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const useNumberGroup = useNumber();
  const useOperatorGroup = useOperator();
  let fixedOperator;

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
      console.log(`計算処理実行`);
      //=を使わず連続で計算するなら割り算掛け算はOK
      fix();
      useNumberGroup.calc(fixedOperator);
      useOperatorGroup.setClickFinishedFlg();
    }
  }, [useOperatorGroup.isOperatorClicked, useOperatorGroup.beforeOperator]);

  /**
   * beforeOperatorの割り算・引き算の記号を修正します。
   */
  const fix = () => {
    if (useOperatorGroup.beforeOperator === "÷") {
      fixedOperator = "/";
    } else if (useOperatorGroup.beforeOperator === "×") {
      fixedOperator = "*";
    } else {
      fixedOperator = useOperatorGroup.beforeOperator;
    }
  };

  //電卓全体に関わる処理をする。具体的な処理が入る
  const equalClear = () => {
    useOperatorGroup.clear();
  };

  const AC = () => {
    useNumberGroup.clear();
    useOperatorGroup.clear();
  };

  return (
    <NumberContext.Provider
      value={{
        useNumberGroup,
        useOperatorGroup,
        AC,
        equalClear,
        fix,
        fixedOperator,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
