import React, { useState, useEffect, useCallback } from "react";

/**
 * 配列を扱うフック
 * - inputArray: 配列を扱う
 * - push: 配列に数値や演算子を追加する
 * - clear: 配列をリセットする（空にする）
 */
export const useInputArray = () => {
  const [inputArray, setInputArray] = useState([]);

  const push = (resultNumber, operator) => {
    //resultNumber, operatorをinputArrayに追加する
    setInputArray((value) => [...value, resultNumber, operator]);
  };

  /**
   * inputArray配列の一部を削除する
   * 最新の結果数字と演算子のセット(後ろから2つの要素)を削除する
   */
  const splice = () => {
    if (inputArray.length) {
      setInputArray(inputArray.splice(inputArray.length - 2, 2));
    }
  };

  //ClearButtonかEqualButtonが押されたら配列を空にする
  const clear = () => {
    setInputArray("");
  };

  return {
    clear,
    inputArray,
    push,
    splice,
  };
};
