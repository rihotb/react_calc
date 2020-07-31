import React, { useEffect } from "react";
import { useNumber } from "../hooks/useNumber";
import { useOperator } from "../hooks/useOperator";

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
      console.log(`計算処理実行`);
      useNumberGroup.calc(useOperatorGroup.beforeOperator);
      useOperatorGroup.setClickFinishedFlg();
    }
  }, [useOperatorGroup.isOperatorClicked, useOperatorGroup.beforeOperator]);

  return (
    <NumberContext.Provider
      value={{
        useNumberGroup,
        useOperatorGroup,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
