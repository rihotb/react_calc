import { useState, useEffect, useCallback } from "react";

/**
 * 数値を扱うフック
 * : 数値に対しての責任を負う
 *
 * - number: 今の数値を扱う
 * - storedNumber: これまでに押してきた数値の合算を扱う。
 * - sumNumber: 合算値を扱う
 * - isNumberActived: 数値系ボタンがクリックされたかどうか
 * - isCalculated: 計算したかどうか
 * - calc: 計算処理
 */
export const useNumber = () => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [sumNumber, setSumNumber] = useState("");
  const [isNumberActived, setIsNumberActived] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  /**
   * 数値データを保存する処理
   */
  const set = useCallback(
    (value) => {
      setNumber(value);
      setIsNumberActived(true);
      // 演算子が押された後の最初の保存はnumberをそのまま保存する
      if (isCalculated) {
        setStoredNumber(value);
        setIsCalculated(false);
      } else {
        setStoredNumber(`${storedNumber}${value}`);
      }
    },
    [storedNumber, isCalculated]
  );

  /**
   * 計算処理
   * - 演算子がある場合は計算を行う
   * - ない場合は一時データをそのまま保存する
   */
  const calc = useCallback(
    (operator) => {
      if (!storedNumber) return;
      operator ? setSumNumber((value) => eval(`${value} ${operator} ${storedNumber}`)) : setSumNumber(storedNumber);
      setStoredNumber("");
    },
    [storedNumber]
  );

  const setUnNumberFlg = useCallback(() => setIsNumberActived(false), []);
  const setCalculatedFlg = useCallback(() => setIsCalculated(true), []);

  return {
    number,
    storedNumber,
    sumNumber,
    isNumberActived,
    isCalculated,
    set,
    calc,
    setUnNumberFlg,
    setCalculatedFlg,
  };
};
