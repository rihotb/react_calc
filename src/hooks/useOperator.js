import React, { useState, useEffect, useCallback } from "react";

/**
 * 演算子を扱うフック
 * - operator: 今の演算子を扱う
 * - isOperatorActived: 演算子がアクティブか
 * - set: 演算子をセットする
 * - clear: 演算子をリセットする
 */
export const useOperator = () => {
  const [operator, setOperator] = useState("");
  const [isOperatorActived, setIsOperatorActived] = useState(false);

  /**
   * 演算子が選択されなくなったら値をリセット
   */
  useEffect(() => {
    if (!isOperatorActived) {
      clear();
    }
  }, [isOperatorActived]);

  /**
   * 演算子を保存する
   */
  const set = useCallback((value) => {
    setOperator(value);
    setOperatorFlg();
  }, []);

  const clear = () => {
    setOperator("");
  };

  // 直近の選択が演算子であることを示す
  const setOperatorFlg = () => setIsOperatorActived(true);

  // 直近の選択が演算子でないことを示す
  const setUnOperatorFlg = () => setIsOperatorActived(false);

  return {
    operator,
    isOperatorActived,
    set,
    setUnOperatorFlg,
  };
};
