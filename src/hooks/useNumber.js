import React, { useState, useEffect, useCallback } from "react";

export const useNumber = () => {
  // 「いま」押した数値
  const [number, setNumber] = useState("");
  // 「これまで」に押してきた数値の合算
  const [storedNumber, setStoredNumber] = useState("");
  // 結果の数値を扱う
  const [resultNumber, setResultNumber] = useState("");
  // 数値判別として扱う
  const [isNumber, setIsNumber] = useState(false);

  useEffect(() => {
    if (!isNumber && storedNumber) {
      setResultNumber(storedNumber);
      // リセット処理
      clear();
    }
  }, [isNumber]);

  // 数値を保存する
  const set = useCallback(
    (value) => {
      setNumber(value);
      setStoredNumber(`${storedNumber}${value}`);
    },
    [storedNumber]
  );

  const clear = () => {
    setNumber("");
    setStoredNumber("");
  };

  //「これまで」に押してきた数値の合算
  // const sum = (value) => {
  //   setStoredNumber(`${storedNumber}${value}`);
  // };

  // 数値のときにつかう。true
  const setNumberFlg = () => setIsNumber(true);

  // 数値以外のときにつかう。false
  const setUnNumberFlg = () => setIsNumber(false);

  return {
    number,
    storedNumber,
    resultNumber,
    isNumber,
    set,
    setNumberFlg,
    setUnNumberFlg,
  };
};
