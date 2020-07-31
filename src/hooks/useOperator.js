import React, { useState, useEffect, useCallback } from "react";

/**
 * 演算子を扱うフック
 * - operator: 今の演算子を扱う
 * - isOperatorActived: 演算子がアクティブか
 * - isOperatorClicked: クリックされたかどうか（クリックイベントはすぐにfalseになる仕様）
 * - set: 演算子をセットする
 * - clear: 演算子をリセットする
 */
export const useOperator = () => {
  const [operator, setOperator] = useState("");
  const [beforeOperator, setBeforeOperator] = useState("");
  const [isOperatorActived, setIsOperatorActived] = useState(false);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  /**
   * 演算子が選択されなくなったら値をリセット
   * - 演算子以外が押されたら「１つ前の演算子」情報を保存
   */
  useEffect(() => {
    if (!isOperatorActived && operator) {
      setBeforeOperator(operator);
    }
  }, [isOperatorActived, operator]);

  /**
   * 演算子を保存する
   */
  const set = useCallback(
    (value) => {
      setOperator(value);
      setIsOperatorActived(true);
      if (!isOperatorActived) {
        setIsOperatorClicked(true);
      }
    },
    [isOperatorActived]
  );

  // 直近の選択が演算子でないことを示す
  const setUnOperatorFlg = useCallback(() => setIsOperatorActived(false), []);
  const setClickFinishedFlg = useCallback(() => setIsOperatorClicked(false), []);

  return {
    operator,
    beforeOperator,
    isOperatorActived,
    isOperatorClicked,
    set,
    setUnOperatorFlg,
    setClickFinishedFlg,
  };
};
