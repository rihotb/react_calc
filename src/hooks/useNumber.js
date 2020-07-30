import React, { useState, useEffect, useCallback } from "react";

/**
 * 数値を扱うフック
 * - number: 今の数値を扱う
 * - storedNumber: これまでに押してきた数値の合算
 * - resultNumber: 結果の数値を扱う
 * - isNumberActived:
 */
export const useNumber = () => {
  // 「いま」押した数値
  const [number, setNumber] = useState("");
  // 「これまで」に押してきた数値の合算
  const [storedNumber, setStoredNumber] = useState("");
  // 結果の数値を扱う
  const [resultNumber, setResultNumber] = useState("");
  // 数値判別として扱う
  const [isNumberActived, setIsNumberActived] = useState(false);

  useEffect(() => {
    if (!isNumberActived && storedNumber) {
      setResultNumber(storedNumber);
      // リセット処理
      clear();
    }
  }, [isNumberActived]);

  // 数値を保存する
  const set = useCallback(
    (value) => {
      setNumber(value);
      setStoredNumber(`${storedNumber}${value}`);
      // 値をセットするという意味は、数値がアクティブなのでここでセット
      setNumberFlg();
    },
    [storedNumber]
  );

  const clear = () => {
    setNumber("");
    setStoredNumber("");
  };

  // 数値のときにつかう。true
  const setNumberFlg = () => setIsNumberActived(true);

  // 数値以外のときにつかう。false
  const setUnNumberFlg = () => setIsNumberActived(false);

  return {
    number,
    storedNumber,
    resultNumber,
    isNumberActived,
    set,
    setUnNumberFlg,
  };
};
